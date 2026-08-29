// 配图验收：访问 5 个新页面，截取正文第一张图（前置：build + preview 4173）
import { chromium } from 'playwright'

const BASE = process.argv[2] || 'http://localhost:4173'
const targets = [
  ['limit-divider', '/#/node/physics/experiments/electricity-lab/experiment-design', 'shot-limit-divider.png', 0],
  ['emf-ur', '/#/node/physics/experiments/electricity-lab/experiment-design',         'shot-emf-ur.png', 1],
]
const browser = await chromium.launch()
for (const [name, path, file, idx = 0] of targets) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } })
  try {
    await page.goto(BASE + path, { waitUntil: 'networkidle' })
    await page.waitForSelector('.content-area img', { timeout: 10000 })
    const img = page.locator('.content-area img').nth(idx)
    await img.scrollIntoViewIfNeeded()
    await page.waitForTimeout(800)
    await img.screenshot({ path: file })
    console.log(`OK ${name} -> ${file}`)
  } catch (e) {
    console.log(`FAIL ${name}: ${e.message}`)
  }
  await page.close()
}
await browser.close()
