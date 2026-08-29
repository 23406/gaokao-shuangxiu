<template>
  <div class="mindmap panel">
    <div class="mm-head">
      <span class="mm-title">🧠 知识导图 · 索引</span>
      <span class="mm-hint">点击分类展开 / 收起 · 点击内容直达</span>
      <div class="mm-actions">
        <button class="btn" title="展开全部分支" @click="expandAll">全部展开</button>
        <button class="btn" title="只保留根与一级分支" @click="collapseAll">折叠</button>
      </div>
    </div>
    <div
      class="mm-canvas"
      :style="{ width: layout.width + 'px', height: layout.height + 'px' }"
    >
      <svg class="mm-svg" :width="layout.width" :height="layout.height">
        <path
          v-for="(l, i) in layout.links"
          :key="i"
          :d="l.d"
          class="mm-link"
          :class="l.type"
          :style="{ stroke: typeColor(l.type) }"
          fill="none"
        />
      </svg>
      <div
        v-for="(n, i) in layout.nodes"
        :key="n.path"
        class="mm-node"
        :class="[n.type, { active: n.path === currentPath }]"
        :style="{
          left: n.x + 'px',
          top: n.y + 'px',
          width: NODE_W + 'px',
          height: NODE_H + 'px',
          borderColor: typeColor(n.type),
          color: n.type === 'category' ? 'var(--green-bright)' : 'var(--text)',
        }"
        @click="onNode(n)"
      >
        <span v-if="n.isCat" class="mm-arrow" :style="{ color: typeColor(n.type) }">{{
          n.open ? '▾' : '▸'
        }}</span>
        <span class="mm-label" :title="n.title">{{ n.title }}</span>
        <span v-if="n.isCat" class="mm-count">{{ n.count }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import type { TreeMeta } from '../types'

const props = defineProps<{
  root: TreeMeta
  currentPath?: string
}>()

const router = useRouter()

const NODE_W = 176
const NODE_H = 34
const COL_W = 210
const ROW_H = 46
const PAD = 18

/** 展开的节点路径集合（仅分类节点有意义） */
const open = ref<Set<string>>(new Set())

/** 重建默认展开：仅根展开（根 + 一级分支全览，其余点击展开） */
watch(
  () => props.root,
  (r) => {
    const s = new Set<string>()
    if (r.children.length) s.add(r.path)
    open.value = s
  },
  { immediate: true },
)

/** 子树节点总数（含自身） */
const counts = computed(() => {
  const m = new Map<string, number>()
  function walk(n: TreeMeta): number {
    let c = 1
    for (const k of n.children) c += walk(k)
    m.set(n.path, c)
    return c
  }
  walk(props.root)
  return m
})

/** 全部分类路径（用于"全部展开"） */
function allCategoryPaths(n: TreeMeta, out: string[] = []): string[] {
  if (n.children.length) out.push(n.path)
  for (const c of n.children) allCategoryPaths(c, out)
  return out
}

interface VNode {
  node: TreeMeta
  kids: VNode[]
  depth: number
}
interface NPos {
  path: string
  title: string
  type: TreeMeta['type']
  x: number
  y: number
  isCat: boolean
  open: boolean
  count: number
  depth: number
}
interface LPos {
  d: string
  type: TreeMeta['type']
}

function visibleTree(n: TreeMeta, depth: number): VNode {
  const expanded = open.value.has(n.path)
  const kids =
    n.children.length && expanded ? n.children.map((c) => visibleTree(c, depth + 1)) : []
  return { node: n, kids, depth }
}

const layout = computed(() => {
  const root = visibleTree(props.root, 0)
  const nodes: NPos[] = []
  const links: LPos[] = []
  let cursor = 0
  let maxDepth = 0

  // 第一遍：后序分配行号（叶子逐行，父居中）
  const rows = new Map<VNode, number>()
  function assign(v: VNode): number {
    maxDepth = Math.max(maxDepth, v.depth)
    if (!v.kids.length) {
      const row = cursor++
      rows.set(v, row)
      return row
    }
    const rs = v.kids.map(assign)
    const row = (rs[0] + rs[rs.length - 1]) / 2
    rows.set(v, row)
    return row
  }
  assign(root)

  // 第二遍：坐标 + 连线（此时所有行号已知）
  function mkPos(v: VNode): NPos {
    return {
      path: v.node.path,
      title: v.node.title,
      type: v.node.type,
      x: PAD + v.depth * COL_W,
      y: PAD + (rows.get(v) ?? 0) * ROW_H,
      isCat: v.node.children.length > 0,
      open: open.value.has(v.node.path),
      count: counts.value.get(v.node.path) ?? 1,
      depth: v.depth,
    }
  }
  function emit(v: VNode) {
    const p = mkPos(v)
    nodes.push(p)
    for (const k of v.kids) {
      const c = mkPos(k)
      const x1 = p.x + NODE_W
      const y1 = p.y + NODE_H / 2
      const x2 = c.x
      const y2 = c.y + NODE_H / 2
      const mid = (x1 + x2) / 2
      links.push({ d: `M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`, type: k.node.type })
      emit(k)
    }
  }
  emit(root)

  const width = PAD * 2 + maxDepth * COL_W + NODE_W
  const height = PAD * 2 + cursor * ROW_H
  return { nodes, links, width, height }
})

function typeColor(t: TreeMeta['type']): string {
  switch (t) {
    case 'category':
      return 'var(--green-dim)'
    case 'knowledge':
      return 'var(--blue)'
    case 'example':
      return 'var(--amber)'
    default:
      return 'var(--red)'
  }
}

function onNode(n: NPos) {
  if (n.isCat) {
    const s = new Set(open.value)
    if (s.has(n.path)) s.delete(n.path)
    else s.add(n.path)
    open.value = s
  } else {
    router.push({ path: '/node/' + n.path })
  }
}

function expandAll() {
  open.value = new Set(allCategoryPaths(props.root))
}

function collapseAll() {
  // 根节点也算一层，收起后仍显示一级分支节点
  open.value = new Set([props.root.path])
}
</script>

<style scoped>
.mindmap {
  padding: 12px 14px;
  margin-bottom: 16px;
}
.mm-head {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.mm-title {
  font-family: var(--mono);
  font-size: 14px;
  color: var(--green);
}
.mm-hint {
  font-size: 12px;
  color: var(--text-faint);
  flex: 1;
}
.mm-actions {
  display: flex;
  gap: 8px;
}
.mm-actions .btn {
  padding: 3px 10px;
  font-size: 12px;
}
.mm-canvas {
  position: relative;
  border: 1px dashed var(--line);
  border-radius: var(--radius);
  background: var(--canvas-bg);
  overflow: auto;
}
.mm-svg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
.mm-node {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  border: 1px solid;
  border-radius: 17px;
  background: var(--bg-panel-solid);
  cursor: pointer;
  user-select: none;
  font-size: 13px;
  transition: box-shadow 0.12s, border-color 0.12s;
  white-space: nowrap;
  overflow: hidden;
}
.mm-node:hover {
  box-shadow: 0 0 12px rgba(0, 255, 65, 0.3);
}
.mm-node.active {
  box-shadow: 0 0 0 2px rgba(0, 255, 65, 0.35), 0 0 14px rgba(0, 255, 65, 0.3);
}
.mm-arrow {
  font-size: 11px;
  flex: none;
  font-family: var(--mono);
}
.mm-label {
  overflow: hidden;
  text-overflow: ellipsis;
}
.mm-count {
  margin-left: auto;
  font-family: var(--mono);
  font-size: 10px;
  color: var(--text-faint);
  flex: none;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0 5px;
}
</style>
