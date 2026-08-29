// 配图截图验收：打开每个含图节点页面，对文档内 <img> 元素逐个截图
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = 'http://localhost:4173';
// [节点路由, 图片文件名]
const pages = [
  ['physics/thermodynamics/thermo/variable-mass-gas', 'variable-mass-gas.svg'],
  ['biology/ecology/population/k-half', 's-curve.svg'],
  ['physics/mechanics/vibrations/wave-image', 'wave-image.svg'],
  ['biology/cells/metabolism/compensation-point', 'photosynthesis-co2.svg'],
  ['biology/biotech/bioengineering/fermentation-embryo-problems', 'nitrite-curve.svg'],
  ['biology/homeostasis/internal-env/temperature-water', 'temperature-regulation.svg'],
  ['math/statistics/probability/normal-3sigma', 'normal-curve.svg'],
  ['math/statistics/frequency/frequency-stats', 'frequency-stats.svg'],
  ['physics/optics-modern/optics/nuclear-decay', 'hydrogen-levels.svg'],
  ['physics/optics-modern/optics/interference-fringes', 'interference-fringes.svg'],
  ['physics/mechanics/momentum/boat-man', 'boat-man.svg'],
  ['biology/genetics/pedigree/pedigree-example', 'pedigree.svg'],
  ['biology/genetics/pedigree/pedigree-advanced', 'pedigree-2.svg'],
  ['math/geometry/triangle/triangle-centers', 'triangle-centers.svg'],
  ['biology/genetics/meiosis/meiosis-image', 'meiosis-panels.svg'],
  ['physics/mechanics/gravity/satellite-orbit', 'satellite-orbit.svg'],
  ['chemistry/elements/inference/inorganic-inference', 'al-triangle.svg'],
  ['chemistry/principles/water-solution/titration-endpoint', 'titration-curve.svg'],
  ['physics/mechanics/forces/force-analysis', 'incline-force.svg'],
  ['physics/mechanics/forces/equilibrium', 'incline-decompose.svg'],
  ['physics/mechanics/forces/equilibrium', 'three-force-triangle.svg'],
  ['physics/mechanics/forces/dynamic-balance', 'clothesline.svg'],
  ['physics/mechanics/curves/conical-pendulum', 'conical-pendulum.svg'],
  ['chemistry/organic/inference/toluene-chlorination', 'toluene-chlorination.svg'],
  ['math/geometry/solid/surface-unfold', 'surface-unfold.svg'],
  ['physics/electromagnetism/magnetic/instruments', 'mass-spectrometer.svg'],
  ['math/geometry/conic/locus', 'locus-ellipse.svg'],
  ['math/geometry/conic/focal-fixed-point', 'parabola-fixed-point.svg'],
  ['physics/experiments/electricity-lab/experiment-design', 'circuit-limit-divider.svg'],
  ['physics/experiments/electricity-lab/experiment-design', 'emf-ur-image.svg'],
  ['math/functions/concepts-properties/quadratic-roots-distribution', 'roots-distribution.svg'],
  ['math/functions/trigonometry/trig-graph', 'trig-shift.svg'],
];

mkdirSync('docs/shots', { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 1800 } });
let ok = 0, fail = 0;
for (const [route, img] of pages) {
  const out = `docs/shots/${route.replace(/\//g, '_')}__${img.replace('.svg', '')}.png`;
  try {
    await page.goto(`${BASE}/#/node/${route}`, { waitUntil: 'networkidle', timeout: 30000 });
    const el = page.locator(`article img[src*="${img}"], .content img[src*="${img}"], img[src*="${img}"]`);
    await el.first().waitFor({ state: 'visible', timeout: 10000 });
    // 确保加载完成
    await page.waitForFunction((src) => {
      const imgs = [...document.querySelectorAll('img')].filter(i => i.src.includes(src));
      return imgs.length > 0 && imgs[0].complete && imgs[0].naturalWidth > 0;
    }, img, { timeout: 15000 });
    await el.first().screenshot({ path: out });
    console.log('OK ', route, img);
    ok++;
  } catch (e) {
    console.log('FAIL', route, img, '::', e.message.split('\n')[0]);
    fail++;
  }
}
await browser.close();
console.log(`done ok=${ok} fail=${fail}`);
