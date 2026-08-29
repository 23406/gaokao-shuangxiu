import type { NodeType, TreeMeta } from './types'

export const TYPE_LABEL: Record<NodeType, string> = {
  category: '分类',
  knowledge: '知识点',
  example: '例题',
  mnemonic: '口诀卡',
}

export function typeLabel(t: NodeType): string {
  return TYPE_LABEL[t] || t
}

export const STATUS_LABEL: Record<string, string> = {
  draft: '草稿',
  reviewed: '已复核',
}

export function nodeUrl(p: string): string {
  return '/node/' + p
}

/** 在根树中按 path 查找节点（返回含完整 children 的子树） */
export function findInTree(tree: TreeMeta[], path: string): TreeMeta | null {
  for (const n of tree) {
    if (n.path === path) return n
    if (n.children.length && path.startsWith(n.path + '/')) {
      const f = findInTree(n.children, path)
      if (f) return f
    }
  }
  return null
}
