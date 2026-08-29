// 思维导图验收：访问分类页，截 .mindmap 元素（前置：build + preview 4173）
import { chromium } from 'playwright'

const BASE = process.argv[2] || 'http://localhost:4173'
const targets = [
  ['math', '/#/node/math'],
  ['physics', '/#/node/physics'],
  ['chemistry', '/#/node/chemistry'],
  ['biology', '/#/node/biology'],
  ['deep', '/#/node/math/geometry/triangle'],
]
const browser = await chromium.launch()
for (const [name, path] of targets) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } })
  try {
    await page.goto(BASE + path, { waitUntil: 'networkidle' })
    await page.waitForSelector('.mindmap', { timeout: 10000 })
    const mm = page.locator('.mindmap')
    await mm.scrollIntoViewIfNeeded()
    await page.waitForTimeout(600)
    await mm.screenshot({ path: `tmp-mindmap-${name}.png` })
    // 顺便检查节点数量与画布尺寸
    const info = await page.evaluate(() => {
      const c = document.querySelector('.mm-canvas')
      const n = document.querySelectorAll('.mm-node').length
      return { nodes: n, w: c?.clientWidth, h: c?.clientHeight }
    })
    console.log(`OK ${name} nodes=${info.nodes} canvas=${info.w}x${info.h} -> tmp-mindmap-${name}.png`)
  } catch (e) {
    console.log(`FAIL ${name}: ${e.message}`)
  }
  await page.close()
}
await browser.close()
