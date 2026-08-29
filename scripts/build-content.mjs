// ============================================================
// 内容管线：content/*.md → public/content/
//   - index.json   知识树 + 节点索引 + 各科统计
//   - search.json  全文搜索索引
//   - nodes/**/*.json  每个节点的渲染结果（HTML）
// 运行：npm run content（dev/build 会自动先跑）
// ============================================================
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import { katex } from '@mdit/plugin-katex'
import 'katex/contrib/mhchem' // 化学式 \ce{H2O} 支持

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT = path.join(ROOT, 'content')
const OUT = path.join(ROOT, 'public', 'content')
const NODES_OUT = path.join(OUT, 'nodes')

// 先清空输出目录，防止旧构建的过期文件残留（如早期误生成的 nodes/_schema.json）
fs.rmSync(OUT, { recursive: true, force: true })

const md = new MarkdownIt({ html: true, linkify: true })
md.use(katex, { throwOnError: false, strict: false })

const TYPES = ['knowledge', 'example', 'mnemonic']
const EXAMPLE_HEADINGS = ['题目', '问题', '标准解法', '标准解', '邪修解法', '邪修', '速解']

// ---------- 工具 ----------
function stripHtml(s) {
  return s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}
// 解析 frontmatter；失败时带文件名报错，方便定位
function parseMatter(file, raw) {
  try {
    return matter(raw)
  } catch (e) {
    console.error(`\n[YAML 错误] ${file}\n  提示：值若以 ASCII 双引号开头会导致解析失败，请改用全角引号 “ ” 或加引号包裹。\n`)
    throw e
  }
}
// hash 路由下，站内链接 /node/xxx 改写为 #/node/xxx
function fixLinks(html) {
  return html.replace(/href="\/node\//g, 'href="#/node/')
}
function readIndex(dir) {
  const f = path.join(dir, '_index.md')
  if (!fs.existsSync(f)) return null
  const { data, content } = parseMatter(f, fs.readFileSync(f, 'utf8'))
  return { title: data.title, desc: (data.desc || stripHtml(content)).slice(0, 300), content }
}
function splitSections(content) {
  const sections = { __top: [] }
  let cur = '__top'
  for (const line of content.split('\n')) {
    const m = line.match(/^##\s+(.+)$/)
    if (m) {
      cur = m[1].trim()
      sections[cur] = []
    } else {
      sections[cur].push(line)
    }
  }
  return sections
}
function pick(sections, names) {
  for (const n of names) {
    const body = sections[n] ? sections[n].join('\n').trim() : ''
    if (body) return body
  }
  return ''
}

// ---------- 解析单个内容文件 ----------
function parseLeaf(file, segments) {
  const { data, content } = parseMatter(file, fs.readFileSync(file, 'utf8'))
  const type = TYPES.includes(data.type) ? data.type : 'knowledge'
  const title = data.title || path.basename(file, '.md')
  const nodePath = segments.join('/')

  const meta = {
    status: data.status === 'reviewed' ? 'reviewed' : 'draft',
    keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : [],
    summary: data.summary ? String(data.summary) : '',
    source: data.source ? String(data.source) : undefined,
    difficulty: data.difficulty ? String(data.difficulty) : undefined,
    applicability: data.applicability ? String(data.applicability) : undefined,
    risk: data.risk ? String(data.risk) : undefined,
    fit: Array.isArray(data.fit) ? data.fit.map(String) : [],
    updated: data.updated ? String(data.updated) : undefined,
  }

  const node = {
    slug: segments[segments.length - 1],
    title,
    type,
    path: nodePath,
    parent: segments.length > 1 ? segments.slice(0, -1).join('/') : null,
    children: [],
    hasContent: true,
    status: meta.status,
    html: '',
    standardHtml: null,
    evilHtml: null,
    meta,
  }

  if (type === 'example') {
    const sections = splitSections(content)
    const titleSec = pick(sections, ['题目', '问题'])
    const stdSec = pick(sections, ['标准解法', '标准解'])
    const evilSec = pick(sections, ['邪修解法', '邪修', '速解'])
    node.html = titleSec ? fixLinks(md.render(titleSec)) : ''
    node.standardHtml = stdSec ? fixLinks(md.render(stdSec)) : null
    node.evilHtml = evilSec ? fixLinks(md.render(evilSec)) : null
    // 其余小段（点评/总结等）追加到题目后
    const extra = []
    for (const [k, v] of Object.entries(sections)) {
      if (!EXAMPLE_HEADINGS.includes(k) && k !== '__top') extra.push(fixLinks(md.render(v.join('\n'))))
    }
    node.html += extra.join('\n')
    if (!stdSec) console.warn(`[warn] ${file}: 例题缺少 "## 标准解法"（标题必须精确为 "## 标准解法"，不能带括号说明）`)
    if ((meta.risk || meta.applicability || meta.fit.length) && !evilSec)
      console.warn(`[warn] ${file}: 有 risk/applicability/fit 元数据但缺少 "## 邪修解法" 标题（标题必须精确为 "## 邪修解法"）`)
  } else {
    node.html = fixLinks(md.render(content))
  }

  if (!node.html.trim()) console.warn(`[warn] ${file}: 内容为空`)
  meta.summary = meta.summary || stripHtml(node.html).slice(0, 120)
  return node
}

// ---------- 遍历 content 目录 ----------
const allNodes = new Map()
const roots = []

function walk(dir, segments) {
  // 虚拟根：不生成节点，直接把四个科目作为根
  if (!segments.length) {
    const entries = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((e) => !e.name.startsWith('.') && !e.name.startsWith('_') && e.name !== 'LICENSE')
      .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'))
    for (const e of entries) {
      const full = path.join(dir, e.name)
      if (e.isDirectory()) {
        roots.push(walk(full, [e.name]))
      } else if (e.isFile() && e.name.endsWith('.md')) {
        const leaf = parseLeaf(full, [e.name.replace(/\.md$/, '')])
        if (allNodes.has(leaf.path)) throw new Error(`重复路径: ${leaf.path}`)
        roots.push(leaf)
        allNodes.set(leaf.path, leaf)
      }
    }
    return null
  }
  const idx = readIndex(dir)
  const node = {
    slug: segments[segments.length - 1],
    title: idx?.title || segments[segments.length - 1],
    type: 'category',
    path: segments.join('/'),
    parent: segments.length > 1 ? segments.slice(0, -1).join('/') : null,
    children: [],
    hasContent: !!idx,
    status: 'ok',
    // 分类节点也必须有 meta（NodeView 模板会读取），status 用 'ok' 且模板对分类隐藏状态标签
    meta: {
      status: 'ok',
      keywords: [],
      summary: idx?.desc || '',
      fit: [],
    },
  }
  if (allNodes.has(node.path)) throw new Error(`重复路径: ${node.path}`)
  allNodes.set(node.path, node)
  if (idx) node.html = fixLinks(md.render(idx.content))

  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => !e.name.startsWith('.') && e.name !== 'LICENSE')
    .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'))
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      node.children.push(walk(full, [...segments, e.name]))
    } else if (e.isFile() && e.name.endsWith('.md') && e.name !== '_index.md') {
      const leaf = parseLeaf(full, [...segments, e.name.replace(/\.md$/, '')])
      if (allNodes.has(leaf.path)) throw new Error(`重复路径: ${leaf.path}`)
      node.children.push(leaf)
      allNodes.set(leaf.path, leaf)
    }
  }
  return node
}

// ---------- 统计 ----------
walk(CONTENT, [])
function countSub(n, acc) {
  if (n.type !== 'category') {
    if (n.type === 'knowledge') acc.knowledge++
    else if (n.type === 'example') acc.example++
    else if (n.type === 'mnemonic') acc.mnemonic++
    return
  }
  for (const c of n.children) countSub(c, acc)
}
const stats = roots.map((r) => {
  const acc = { slug: r.slug, title: r.title, knowledge: 0, example: 0, mnemonic: 0, total: 0 }
  countSub(r, acc)
  acc.total = acc.knowledge + acc.example + acc.mnemonic
  return acc
})

// ---------- 输出 ----------
function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, JSON.stringify(data))
}
// ---------- 构建期质量闸门 ----------
let brokenLinks = 0
let katexErrors = 0
for (const n of allNodes.values()) {
  if (!n.hasContent) continue
  const html = [n.html, n.standardHtml, n.evilHtml].filter(Boolean).join('')
  // 内部链接完整性
  const links = [...html.matchAll(/href="#\/node\/([^"#]+)"/g)].map((m) => m[1])
  for (const target of links) {
    if (!allNodes.has(target)) {
      brokenLinks++
      console.error(`[broken-link] ${n.path} → /node/${target}（目标节点不存在）`)
    }
  }
  // 公式渲染错误
  if (html.includes('katex-error')) {
    katexErrors++
    console.error(`[katex-error] ${n.path}：存在公式渲染失败`)
  }
}
if (brokenLinks || katexErrors) {
  console.error(`✘ 质量闸门未通过：断链 ${brokenLinks} 处，公式错误 ${katexErrors} 处`)
  process.exit(1)
}
function siblingsOf(n) {
  if (!n.parent) return []
  const p = allNodes.get(n.parent)
  return p ? p.children.filter((c) => c.path !== n.path) : []
}
function breadcrumbsOf(p) {
  const parts = p.split('/').filter(Boolean)
  return parts.map((_, i) => {
    const seg = parts.slice(0, i + 1)
    const key = seg.join('/')
    return { slug: parts[i], title: allNodes.get(key)?.title || parts[i] }
  })
}

let examples = 0
for (const n of allNodes.values()) {
  if (!n.hasContent) continue
  if (n.type === 'example') examples++
  const payload = {
    path: n.path,
    title: n.title,
    type: n.type,
    html: n.html,
    standardHtml: n.standardHtml,
    evilHtml: n.evilHtml,
    meta: n.meta,
    breadcrumbs: breadcrumbsOf(n.path),
    children: n.children.map((c) => ({ slug: c.slug, title: c.title, type: c.type })),
    siblings: siblingsOf(n).map((s) => ({ slug: s.slug, title: s.title, type: s.type })),
  }
  writeJson(path.join(NODES_OUT, n.path + '.json'), payload)
}

const map = {}
for (const n of allNodes.values()) map[n.path] = { title: n.title, type: n.type, hasContent: n.hasContent, status: n.status }

const search = []
for (const n of allNodes.values()) {
  if (n.type === 'category' || !n.hasContent) continue
  const item = {
    path: n.path,
    title: n.title,
    type: n.type,
    summary: n.meta.summary,
    keywords: n.meta.keywords,
    subject: n.path.split('/')[0],
  }
  if (n.type === 'example') {
    item.fit = n.meta.fit
    item.applicability = n.meta.applicability
    item.risk = n.meta.risk
    item.source = n.meta.source
  }
  search.push(item)
}

writeJson(path.join(OUT, 'index.json'), { tree: roots.map(lighten), map, stats })
writeJson(path.join(OUT, 'search.json'), search)
console.log(`✔ 内容管线完成：${allNodes.size} 个节点 / ${examples} 道例题 / 搜索索引 ${search.length} 条`)

// index.json 只保留导航字段（去掉 html/meta 等正文，控制体积）
function lighten(n) {
  return {
    slug: n.slug,
    title: n.title,
    type: n.type,
    path: n.path,
    parent: n.parent,
    hasContent: n.hasContent,
    status: n.status,
    children: n.children.map(lighten),
  }
}
