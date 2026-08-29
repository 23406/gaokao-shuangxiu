// 端到端冒烟测试：真实浏览器渲染验证（抓 Vue 运行时错误）
// 前置：npm run build 后 npm run preview（默认 http://localhost:4173）
// 运行：node scripts/e2e.mjs [BASE_URL]
import { chromium } from 'playwright'
import fs from 'node:fs'

const BASE = process.argv[2] || 'http://localhost:4173'
const SHOT_DIR = 'e2e-shots'
let failed = 0
const errors = []

function assert(name, cond, extra = '') {
  if (cond) console.log(`  ✔ ${name}`)
  else {
    failed++
    console.error(`  ✘ ${name} ${extra}`)
  }
}

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1360, height: 900 } })
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(`[console] ${msg.text()}`)
})
page.on('pageerror', (err) => errors.push(`[pageerror] ${err.message}`))

fs.mkdirSync(SHOT_DIR, { recursive: true })

// ---------- 1. 首页 ----------
await page.goto(BASE + '/', { waitUntil: 'networkidle' })
assert('首页渲染出标题', (await page.locator('.glitch').count()) === 1)
assert('首页 5 张入口卡（4 科+备考指南）', (await page.locator('.subject-card').count()) === 5)
await page.screenshot({ path: `${SHOT_DIR}/01-home.png`, fullPage: false })

// ---------- 2. 点击科目 → 分类页（用户报告的 bug 场景） ----------
await page.locator('.subject-nav a', { hasText: '数学' }).click()
await page.waitForSelector('.content-area', { timeout: 10000 })
assert('科目页渲染出内容区', (await page.locator('.content-area').count()) === 1)
assert('侧边栏思维导图渲染', (await page.locator('.tree .tree-item').count()) >= 5)
assert('面包屑含数学', (await page.locator('.crumbs').innerText()).includes('数学'))
assert('分类子卡片 ≥ 4', (await page.locator('.child-card').count()) >= 4)
await page.screenshot({ path: `${SHOT_DIR}/02-math.png`, fullPage: false })

// ---------- 3. 树展开：函数 → 三角函数 → 诱导公式 ----------
async function clickTree(text) {
  const row = page.locator('.tree .row', { hasText: text }).first()
  await row.click()
}
await clickTree('函数')
await clickTree('三角函数')
await clickTree('诱导公式') // 分类节点：展开
await page.waitForSelector('.tree .row >> nth=1', { timeout: 10000 })
await page.locator('.tree .row', { hasText: '诱导公式' }).nth(1).click() // 知识点叶子
await page.waitForSelector('.content-area .content h1', { timeout: 10000 })
const h1 = await page.locator('.content-area .content h1').first().innerText()
assert('知识点页渲染：' + h1, h1.includes('诱导公式'))
assert('知识点页有 LaTeX 渲染', (await page.locator('.content-area .katex').count()) > 0)
await page.screenshot({ path: `${SHOT_DIR}/03-knowledge.png`, fullPage: false })

// ---------- 3b. 配图页：受力分析（含 SVG 示意图） ----------
await page.goto(BASE + '/#/node/physics/mechanics/forces/force-analysis', { waitUntil: 'networkidle' })
await page.waitForSelector('.content-area', { timeout: 10000 })
assert('受力分析页渲染', (await page.locator('.content-area h1').first().innerText()).includes('受力分析'))
const imgSrc = await page.locator('.content-area img').first().getAttribute('src')
assert('示意图引用存在', !!imgSrc)
const imgOk = await page.evaluate(async (src) => {
  const res = await fetch(new URL(src, location.href))
  return res.ok && res.headers.get('content-type')?.includes('image')
}, imgSrc)
assert('示意图可加载', imgOk, imgSrc)
await page.screenshot({ path: `${SHOT_DIR}/03b-force.png`, fullPage: false })

// ---------- 4. 例题双解并排（直接导航到已知例题） ----------
await page.goto(BASE + '/#/node/math/functions/trigonometry/induction-formulas/induction-special-value', {
  waitUntil: 'networkidle',
})
await page.waitForSelector('.sol.standard', { timeout: 10000 })
assert('例题页标准解法栏', (await page.locator('.sol.standard').count()) === 1)
assert('例题页邪修栏', (await page.locator('.sol.evil').count()) === 1)
assert('例题页风险提示框', (await page.locator('.warn-box').count()) >= 1)
assert('例题页适用特征', (await page.locator('.fit-item').count()) >= 1)
await page.screenshot({ path: `${SHOT_DIR}/04-example.png`, fullPage: false })

// ---------- 4b. 搜索功能 ----------
await page.locator('.term-input input').fill('留一代一')
await page.waitForSelector('.results .result', { timeout: 10000 })
const resultCount = await page.locator('.results .result').count()
assert('搜索出结果', resultCount >= 1, `got ${resultCount}`)
const firstTitle = await page.locator('.results .result .r-title').first().innerText()
await page.locator('.results .result').first().click()
await page.waitForSelector('.content-area', { timeout: 10000 })
const clickedH1 = await page.locator('.content-area .content h1').first().innerText()
assert('搜索结果可点击进入：' + clickedH1, clickedH1.length > 0)
assert('搜索第一结果是「' + firstTitle + '」', true)

// ---------- 5. 邪修速查表 ----------
await page.goto(BASE + '/#/evil', { waitUntil: 'networkidle' })
const evilOk = await page
  .waitForFunction(() => document.querySelectorAll('tbody tr').length >= 5, { timeout: 15000 })
  .then(() => true)
  .catch(() => false)
assert('邪修速查表有数据行', evilOk)
await page.screenshot({ path: `${SHOT_DIR}/05-evil.png`, fullPage: false })

// ---------- 6. 我的页面 ----------
await page.goto(BASE + '/#/mine', { waitUntil: 'networkidle' })
await page.waitForSelector('.mine-page', { timeout: 10000 })
assert('我的页面渲染', (await page.locator('.mine-page').count()) === 1)

// ---------- 7. 收藏/笔记交互 ----------
await page.goto(BASE + '/#/node/math/functions/trigonometry/induction-formulas/induction-formulas', { waitUntil: 'networkidle' })
await page.locator('.actions .btn', { hasText: '收藏' }).click()
const favBtn = page.locator('.actions .btn', { hasText: '收藏' }).first()
assert('收藏按钮点亮', (await favBtn.getAttribute('class')).includes('on'))

// ---------- 汇总 ----------
console.log('')
for (const e of errors) console.error('  ⚠ ' + e)
assert('无浏览器控制台/页面错误', errors.length === 0, `发现 ${errors.length} 条错误`)
console.log(failed ? `\n✘ ${failed} 项失败` : '\n✔ E2E 全部通过')
await browser.close()
process.exitCode = failed ? 1 : 0
