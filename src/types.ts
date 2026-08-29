export type NodeType = 'category' | 'knowledge' | 'example' | 'mnemonic'

export interface TreeMeta {
  slug: string
  title: string
  type: NodeType
  path: string
  parent: string | null
  children: TreeMeta[]
  hasContent: boolean
  status: string
}

export interface SiteIndex {
  tree: TreeMeta[]
  map: Record<string, { title: string; type: NodeType; hasContent: boolean; status: string }>
  stats: SubjectStat[]
}

export interface SubjectStat {
  slug: string
  title: string
  knowledge: number
  example: number
  mnemonic: number
  total: number
}

export interface SearchItem {
  path: string
  title: string
  type: NodeType
  summary: string
  keywords: string[]
  subject: string
  fit?: string[]
  applicability?: string
  risk?: string
  source?: string
}

export interface NodeContent {
  path: string
  title: string
  type: NodeType
  html: string
  standardHtml: string | null
  evilHtml: string | null
  meta: {
    status: string
    keywords: string[]
    summary: string
    source?: string
    difficulty?: string
    applicability?: string
    risk?: string
    fit: string[]
    updated?: string
  }
  breadcrumbs: { slug: string; title: string }[]
  children: { slug: string; title: string; type: NodeType }[]
  siblings: { slug: string; title: string; type: NodeType }[]
}
