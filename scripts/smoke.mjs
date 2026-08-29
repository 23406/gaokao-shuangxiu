// 冒烟测试：验证构建产物在静态服务器下可正常工作（浏览器行为等价）
const BASE = process.env.SMOKE_BASE || 'http://localhost:4173'
let failed = 0

function assert(name, cond, extra = '') {
  if (cond) console.log(`  ✔ ${name}`)
  else {
    failed++
    console.error(`  ✘ ${name} ${extra}`)
  }
}

const html = await (await fetch(`${BASE}/`)).text()
assert('首页包含站点名', html.includes('高考双修'))

const index = await (await fetch(`${BASE}/content/index.json`)).json()
assert('知识树 5 个根（4 科+指南）', index.tree.length === 5, `got ${index.tree.length}`)
assert('统计信息 5 根', index.stats.length === 5)
const mathRoot = index.tree.find((t) => t.slug === 'math')
assert('数学根节点存在', !!mathRoot)
const trig = index.map['math/functions/trigonometry']
assert('三角函数节点在索引中', !!trig)
assert('数学统计有内容', index.stats.find((s) => s.slug === 'math').total > 0)

const search = await (await fetch(`${BASE}/content/search.json`)).json()
assert('搜索索引 ≥ 20 条', search.length >= 20, `got ${search.length}`)
assert('搜索条目含邪修字段', search.some((s) => s.fit && s.fit.length > 0))

const ev = await (await fetch(`${BASE}/content/nodes/math/functions/trigonometry/induction-formulas/induction-special-value.json`)).json()
assert('例题类型', ev.type === 'example')
assert('标准解法渲染非空', !!ev.standardHtml && ev.standardHtml.includes('<p>'))
assert('邪修解法渲染非空', !!ev.evilHtml && ev.evilHtml.includes('<p>'))
assert('邪修含风险提示', !!ev.meta.risk && /选填|选择题/.test(ev.meta.risk))
assert('邪修含适用特征', ev.meta.fit.length === 3, `got ${ev.meta.fit.length}`)
assert('面包屑完整', ev.breadcrumbs.length === 5, `got ${ev.breadcrumbs.length}`)
assert('同级导航存在', ev.siblings.length >= 1)

const std = await (await fetch(`${BASE}/content/nodes/math/functions/trigonometry/induction-formulas/induction-simplify.json`)).json()
assert('无邪修例题 evilHtml 为空', !std.evilHtml)
assert('无邪修例题有标准解', !!std.standardHtml)

const know = await (await fetch(`${BASE}/content/nodes/math/functions/trigonometry/induction-formulas/induction-formulas.json`)).json()
assert('知识点含 LaTeX 渲染', know.html.includes('katex'), know.html.slice(0, 60))

const cat = await (await fetch(`${BASE}/content/nodes/math/functions/trigonometry.json`)).json()
assert('分类节点有子项', cat.children.length >= 3, `got ${cat.children.length}`)
assert('分类节点渲染了 _index 正文', cat.html.trim().length > 0)

const mnem = await (await fetch(`${BASE}/content/nodes/math/functions/trigonometry/induction-formulas/trig-mnemonics.json`)).json()
assert('口诀卡类型', mnem.type === 'mnemonic')

const liao = await (await fetch(`${BASE}/content/nodes/math/geometry/circle/tangent-liao1dai1.json`)).json()
assert('留一代一例题有邪修', !!liao.evilHtml && liao.evilHtml.includes('x+2y=5'))
assert('留一代一例题有风险提示', !!liao.meta.risk)

const mid = await (await fetch(`${BASE}/content/nodes/math/geometry/conic/midpoint-chord.json`)).json()
assert('中点弦例题有邪修', !!mid.evilHtml)

const method = await (await fetch(`${BASE}/content/nodes/math/methods/leave-one.json`)).json()
assert('方法卡渲染站内链接为 hash', method.html.includes('href="#/node/'))

const stat = await (await fetch(`${BASE}/content/index.json`)).json()
const mathStat = stat.stats.find((s) => s.slug === 'math')
assert('数学统计 ≥ 15 条内容', mathStat.total >= 15, `got ${mathStat.total}`)
assert('数学例题 ≥ 8 道', mathStat.example >= 8, `got ${mathStat.example}`)

const physStat = stat.stats.find((s) => s.slug === 'physics')
assert('物理统计 ≥ 10 条内容', physStat.total >= 10, `got ${physStat.total}`)
assert('物理例题 ≥ 3 道', physStat.example >= 3, `got ${physStat.example}`)

const pCircle = await (await fetch(`${BASE}/content/nodes/physics/electromagnetism/magnetic/particle-circle.json`)).json()
assert('带电粒子例题有邪修', !!pCircle.evilHtml && pCircle.evilHtml.includes('katex') && pCircle.evilHtml.length > 200)

const pIso = await (await fetch(`${BASE}/content/nodes/physics/models/iso-circular/iso-circle.json`)).json()
assert('等时圆例题有邪修', !!pIso.evilHtml && pIso.evilHtml.includes('R'))

const pTen = await (await fetch(`${BASE}/content/nodes/physics/mechanics/newton/tension-special-value.json`)).json()
assert('连接体例题标准解正确', pTen.standardHtml.includes('mF'))

const chemStat = stat.stats.find((s) => s.slug === 'chemistry')
assert('化学统计 ≥ 10 条内容', chemStat.total >= 10, `got ${chemStat.total}`)
assert('化学例题 ≥ 3 道', chemStat.example >= 3, `got ${chemStat.example}`)

const cross = await (await fetch(`${BASE}/content/nodes/chemistry/quick-calc/difference/cross-method.json`)).json()
assert('十字交叉例题有邪修', !!cross.evilHtml && cross.evilHtml.includes('katex'))
const electron = await (await fetch(`${BASE}/content/nodes/chemistry/quick-calc/conservation/electron-transfer.json`)).json()
assert('电子转移例题标准解正确', electron.standardHtml.includes('C'))
const na2o2 = await (await fetch(`${BASE}/content/nodes/chemistry/quick-calc/relation/na2o2-increase.json`)).json()
assert('Na₂O₂ 增重例题结论一致', na2o2.evilHtml.includes('6.2') && na2o2.standardHtml.includes('6.2'))

const bioStat = stat.stats.find((s) => s.slug === 'biology')
assert('生物统计 ≥ 10 条内容', bioStat.total >= 10, `got ${bioStat.total}`)
assert('生物例题 ≥ 2 道', bioStat.example >= 2, `got ${bioStat.example}`)

const g9331 = await (await fetch(`${BASE}/content/nodes/biology/genetics/mendel/genetic-9331.json`)).json()
assert('9331 变式例题有邪修', !!g9331.evilHtml && g9331.evilHtml.includes('1/3'))
const nerve = await (await fetch(`${BASE}/content/nodes/biology/homeostasis/nerve/nerve-potential.json`)).json()
assert('神经电位例题标准解正确', nerve.standardHtml.includes('A'))
const bioMnem = await (await fetch(`${BASE}/content/nodes/biology/mnemonics.json`)).json()
assert('生物口诀卡类型', bioMnem.type === 'mnemonic')

// KaTeX 渲染错误检查（katex-error 类出现 = 公式语法有误）
const katexNodes = [
  'math/functions/trigonometry/induction-formulas',
  'math/algebra/sequences',
  'math/geometry/conic/chord-length',
  'physics/mechanics/curves/curved-motion',
  'physics/models/iso-circular/iso-circular-time',
  'chemistry/basics/redox',
  'chemistry/quick-calc/relation/na2o2-increase',
  'biology/genetics/gene-expression',
  'biology/genetics/pedigree/probability-calc',
]
let katexErrors = 0
for (const p of katexNodes) {
  const n = await (await fetch(`${BASE}/content/nodes/${p}.json`)).json()
  const all = [n.html, n.standardHtml, n.evilHtml].filter(Boolean).join('')
  if (all.includes('katex-error')) {
    katexErrors++
    console.error(`  ✘ KaTeX 渲染错误: ${p}`)
  }
}
assert('KaTeX 渲染无错误', katexErrors === 0, `got ${katexErrors} 处错误`)

console.log(failed ? `\n✘ ${failed} 项失败` : '\n✔ 全部通过')
process.exitCode = failed ? 1 : 0
