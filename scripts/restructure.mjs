// 一次性重构：按专题子分类归档内容文件（examples → 专题目录）
// 用法：node scripts/restructure.mjs
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const CONTENT = path.join(ROOT, 'content')

const MAP = {
  // 数学·函数
  'math/functions/function-properties.md': 'math/functions/concepts-properties/function-properties.md',
  'math/functions/examples/parity-check.md': 'math/functions/concepts-properties/parity-check.md',
  'math/functions/examples/periodic-odd.md': 'math/functions/concepts-properties/periodic-odd.md',
  'math/functions/examples/compare-size.md': 'math/functions/concepts-properties/compare-size.md',
  'math/functions/examples/monotonic-param.md': 'math/functions/concepts-properties/monotonic-param.md',
  'math/functions/exponential-logarithm.md': 'math/functions/exponential-log/exponential-logarithm.md',
  'math/functions/derivatives.md': 'math/functions/derivatives/derivatives.md',
  'math/functions/examples/derivative-inequality.md': 'math/functions/derivatives/derivative-inequality.md',
  'math/functions/examples/construct-compare.md': 'math/functions/derivatives/construct-compare.md',
  'math/functions/examples/extreme-shift-prove.md': 'math/functions/derivatives/extreme-shift-prove.md',
  'math/functions/examples/hidden-zero-proof.md': 'math/functions/derivatives/hidden-zero-proof.md',
  'math/functions/examples/zero-count.md': 'math/functions/derivatives/zero-count.md',
  'math/functions/extreme-point-shift.md': 'math/functions/derivatives/extreme-point-shift.md',
  'math/functions/hidden-zero.md': 'math/functions/derivatives/hidden-zero.md',
  'math/functions/construction-method.md': 'math/functions/derivatives/construction-method.md',
  'math/functions/examples/abstract-fx.md': 'math/functions/abstract-functions/abstract-fx.md',
  // 数学·三角函数
  'math/functions/trigonometry/induction-formulas.md': 'math/functions/trigonometry/induction-formulas/induction-formulas.md',
  'math/functions/trigonometry/trig-mnemonics.md': 'math/functions/trigonometry/induction-formulas/trig-mnemonics.md',
  'math/functions/trigonometry/examples/induction-special-value.md': 'math/functions/trigonometry/induction-formulas/induction-special-value.md',
  'math/functions/trigonometry/examples/induction-simplify.md': 'math/functions/trigonometry/induction-formulas/induction-simplify.md',
  'math/functions/trigonometry/sine-cosine-law.md': 'math/functions/trigonometry/solve-triangle/sine-cosine-law.md',
  'math/functions/trigonometry/examples/sine-law-two-solutions.md': 'math/functions/trigonometry/solve-triangle/sine-law-two-solutions.md',
  'math/functions/trigonometry/examples/auxiliary-angle.md': 'math/functions/trigonometry/identities/auxiliary-angle.md',
  // 数学·代数
  'math/algebra/inequalities.md': 'math/algebra/inequalities/inequalities.md',
  'math/algebra/examples/inequality-min.md': 'math/algebra/inequalities/inequality-min.md',
  'math/algebra/sequences.md': 'math/algebra/sequences/sequences.md',
  'math/algebra/examples/sequence-sn.md': 'math/algebra/sequences/sequence-sn.md',
  'math/algebra/examples/sequence-shift.md': 'math/algebra/sequences/sequence-shift.md',
  'math/algebra/examples/sequence-recurrence.md': 'math/algebra/sequences/sequence-recurrence.md',
  'math/algebra/examples/sequence-divide-power.md': 'math/algebra/sequences/sequence-divide-power.md',
  'math/algebra/examples/scale-inequality.md': 'math/algebra/sequences/scale-inequality.md',
  // 数学·几何
  'math/geometry/circle-tangent.md': 'math/geometry/circle/circle-tangent.md',
  'math/geometry/examples/tangent-liao1dai1.md': 'math/geometry/circle/tangent-liao1dai1.md',
  'math/geometry/conic.md': 'math/geometry/conic/conic.md',
  'math/geometry/examples/midpoint-chord.md': 'math/geometry/conic/midpoint-chord.md',
  'math/geometry/examples/conic-area-max.md': 'math/geometry/conic/conic-area-max.md',
  'math/geometry/examples/focal-chord.md': 'math/geometry/conic/focal-chord.md',
  'math/geometry/examples/focal-chord-circle.md': 'math/geometry/conic/focal-chord-circle.md',
  'math/geometry/examples/chord-length.md': 'math/geometry/conic/chord-length.md',
  'math/geometry/space-geometry.md': 'math/geometry/solid/space-geometry.md',
  'math/geometry/examples/circumsphere.md': 'math/geometry/solid/circumsphere.md',
  'math/geometry/examples/dihedral-vector.md': 'math/geometry/solid/dihedral-vector.md',
  'math/geometry/examples/inscribed-sphere.md': 'math/geometry/solid/inscribed-sphere.md',
  // 数学·统计
  'math/statistics/counting.md': 'math/statistics/counting/counting.md',
  'math/statistics/examples/binomial-coefficient.md': 'math/statistics/counting/binomial-coefficient.md',
  'math/statistics/probability.md': 'math/statistics/probability/probability.md',
  'math/statistics/examples/binomial.md': 'math/statistics/probability/binomial.md',
  'math/statistics/examples/expectation-hypergeo.md': 'math/statistics/probability/expectation-hypergeo.md',
  'math/statistics/examples/normal-3sigma.md': 'math/statistics/probability/normal-3sigma.md',
  // 物理·力学
  'physics/mechanics/force-analysis.md': 'physics/mechanics/forces/force-analysis.md',
  'physics/mechanics/equilibrium.md': 'physics/mechanics/forces/equilibrium.md',
  'physics/mechanics/dynamic-balance.md': 'physics/mechanics/forces/dynamic-balance.md',
  'physics/mechanics/examples/right-triangle-balance.md': 'physics/mechanics/forces/right-triangle-balance.md',
  'physics/mechanics/examples/whole-isolate.md': 'physics/mechanics/forces/whole-isolate.md',
  'physics/mechanics/examples/clothesline.md': 'physics/mechanics/forces/clothesline.md',
  'physics/mechanics/kinematics.md': 'physics/mechanics/kinematics/kinematics.md',
  'physics/mechanics/newton-laws.md': 'physics/mechanics/newton/newton-laws.md',
  'physics/mechanics/examples/tension-special-value.md': 'physics/mechanics/newton/tension-special-value.md',
  'physics/mechanics/curved-motion.md': 'physics/mechanics/curves/curved-motion.md',
  'physics/mechanics/examples/projectile-slope.md': 'physics/mechanics/curves/projectile-slope.md',
  'physics/mechanics/gravity.md': 'physics/mechanics/gravity/gravity.md',
  'physics/mechanics/energy.md': 'physics/mechanics/energy/energy.md',
  'physics/mechanics/momentum.md': 'physics/mechanics/momentum/momentum.md',
  'physics/mechanics/examples/bullet-block.md': 'physics/mechanics/momentum/bullet-block.md',
  'physics/mechanics/examples/momentum-impulse.md': 'physics/mechanics/momentum/momentum-impulse.md',
  'physics/mechanics/vibration-wave.md': 'physics/mechanics/vibrations/vibration-wave.md',
  'physics/mechanics/examples/wave-image.md': 'physics/mechanics/vibrations/wave-image.md',
  // 物理·电磁
  'physics/electromagnetism/electric-field.md': 'physics/electromagnetism/electrostatics/electric-field.md',
  'physics/electromagnetism/examples/projectile-field.md': 'physics/electromagnetism/electrostatics/projectile-field.md',
  'physics/electromagnetism/examples/effective-angle-balance.md': 'physics/electromagnetism/electrostatics/effective-angle-balance.md',
  'physics/electromagnetism/magnetic-field.md': 'physics/electromagnetism/magnetic/magnetic-field.md',
  'physics/electromagnetism/examples/particle-circle.md': 'physics/electromagnetism/magnetic/particle-circle.md',
  'physics/electromagnetism/speed-decomposition.md': 'physics/electromagnetism/magnetic/speed-decomposition.md',
  'physics/electromagnetism/examples/speed-decomp-max.md': 'physics/electromagnetism/magnetic/speed-decomp-max.md',
  'physics/electromagnetism/induction.md': 'physics/electromagnetism/induction/induction.md',
  'physics/electromagnetism/rod-models.md': 'physics/electromagnetism/induction/rod-models.md',
  'physics/electromagnetism/examples/induction-image.md': 'physics/electromagnetism/induction/induction-image.md',
  'physics/electromagnetism/examples/induction-comprehensive.md': 'physics/electromagnetism/induction/induction-comprehensive.md',
  'physics/electromagnetism/examples/sliding-rod.md': 'physics/electromagnetism/induction/sliding-rod.md',
  'physics/electromagnetism/examples/double-rod.md': 'physics/electromagnetism/induction/double-rod.md',
  'physics/electromagnetism/examples/rod-rail-fall.md': 'physics/electromagnetism/induction/rod-rail-fall.md',
  'physics/electromagnetism/circuit.md': 'physics/electromagnetism/circuits/circuit.md',
  'physics/electromagnetism/examples/max-power.md': 'physics/electromagnetism/circuits/max-power.md',
  'physics/electromagnetism/ac-current.md': 'physics/electromagnetism/ac/ac-current.md',
  'physics/electromagnetism/examples/ac-effective.md': 'physics/electromagnetism/ac/ac-effective.md',
  'physics/electromagnetism/examples/transformer.md': 'physics/electromagnetism/ac/transformer.md',
  // 物理·模型
  'physics/models/iso-circular-time.md': 'physics/models/iso-circular/iso-circular-time.md',
  'physics/models/examples/iso-circle.md': 'physics/models/iso-circular/iso-circle.md',
  'physics/models/board-model.md': 'physics/models/board/board-model.md',
  'physics/models/examples/board-calc.md': 'physics/models/board/board-calc.md',
  'physics/models/conveyor-belt.md': 'physics/models/conveyor/conveyor-belt.md',
  'physics/models/examples/conveyor-time.md': 'physics/models/conveyor/conveyor-time.md',
  'physics/models/equivalent-field.md': 'physics/models/composite-field/equivalent-field.md',
  'physics/models/double-star.md': 'physics/models/double-star/double-star.md',
  // 物理·热学/光学/实验
  'physics/thermodynamics/thermo.md': 'physics/thermodynamics/thermo/thermo.md',
  'physics/thermodynamics/examples/gas-state.md': 'physics/thermodynamics/thermo/gas-state.md',
  'physics/thermodynamics/examples/water-molecules.md': 'physics/thermodynamics/thermo/water-molecules.md',
  'physics/optics-modern/optics-modern.md': 'physics/optics-modern/optics/optics-modern.md',
  'physics/optics-modern/examples/refraction.md': 'physics/optics-modern/optics/refraction.md',
  'physics/optics-modern/examples/total-reflection.md': 'physics/optics-modern/optics/total-reflection.md',
  'physics/optics-modern/examples/doppler.md': 'physics/optics-modern/optics/doppler.md',
  'physics/experiments/examples/paper-tape.md': 'physics/experiments/mechanics-lab/paper-tape.md',
  'physics/experiments/examples/ammeter-connection.md': 'physics/experiments/electricity-lab/ammeter-connection.md',
  // 化学
  'chemistry/basics/amount-of-substance.md': 'chemistry/basics/amount/amount-of-substance.md',
  'chemistry/basics/ion-reaction.md': 'chemistry/basics/ions/ion-reaction.md',
  'chemistry/basics/examples/ion-coexist.md': 'chemistry/basics/ions/ion-coexist.md',
  'chemistry/basics/examples/so4-test.md': 'chemistry/basics/ions/so4-test.md',
  'chemistry/basics/examples/ion-equation-check.md': 'chemistry/basics/ions/ion-equation-check.md',
  'chemistry/basics/redox.md': 'chemistry/basics/redox/redox.md',
  'chemistry/quick-calc/examples/redox-h2o2.md': 'chemistry/basics/redox/redox-h2o2.md',
  'chemistry/basics/periodic-law.md': 'chemistry/basics/periodic/periodic-law.md',
  'chemistry/elements/metals.md': 'chemistry/elements/metals/metals.md',
  'chemistry/elements/examples/al-h2.md': 'chemistry/elements/metals/al-h2.md',
  'chemistry/elements/examples/al-triangle.md': 'chemistry/elements/metals/al-triangle.md',
  'chemistry/elements/nonmetals.md': 'chemistry/elements/nonmetals/nonmetals.md',
  'chemistry/principles/rate-balance.md': 'chemistry/principles/rate-balance/rate-balance.md',
  'chemistry/principles/examples/equilibrium-k.md': 'chemistry/principles/rate-balance/equilibrium-k.md',
  'chemistry/principles/electrochemistry.md': 'chemistry/principles/electrochemistry/electrochemistry.md',
  'chemistry/principles/examples/fuel-cell.md': 'chemistry/principles/electrochemistry/fuel-cell.md',
  'chemistry/principles/examples/electrolysis-calc.md': 'chemistry/principles/electrochemistry/electrolysis-calc.md',
  'chemistry/principles/water-ion.md': 'chemistry/principles/water-solution/water-ion.md',
  'chemistry/principles/examples/ion-order.md': 'chemistry/principles/water-solution/ion-order.md',
  'chemistry/principles/examples/titration-endpoint.md': 'chemistry/principles/water-solution/titration-endpoint.md',
  'chemistry/organic/hydrocarbons.md': 'chemistry/organic/hydrocarbons/hydrocarbons.md',
  'chemistry/organic/derivatives.md': 'chemistry/organic/derivatives/derivatives.md',
  'chemistry/organic/organic-inference.md': 'chemistry/organic/inference/organic-inference.md',
  'chemistry/organic/examples/organic-inference-demo.md': 'chemistry/organic/inference/organic-inference-demo.md',
  'chemistry/organic/examples/organic-flow-inference.md': 'chemistry/organic/inference/organic-flow-inference.md',
  'chemistry/organic/examples/isomer-count.md': 'chemistry/organic/inference/isomer-count.md',
  'chemistry/organic/examples/synthesis-route.md': 'chemistry/organic/inference/synthesis-route.md',
  'chemistry/quick-calc/conservation.md': 'chemistry/quick-calc/conservation/conservation.md',
  'chemistry/quick-calc/examples/electron-transfer.md': 'chemistry/quick-calc/conservation/electron-transfer.md',
  'chemistry/quick-calc/examples/redox-balance.md': 'chemistry/quick-calc/conservation/redox-balance.md',
  'chemistry/quick-calc/difference-method.md': 'chemistry/quick-calc/difference/difference-method.md',
  'chemistry/quick-calc/examples/cross-method.md': 'chemistry/quick-calc/difference/cross-method.md',
  'chemistry/quick-calc/relationship.md': 'chemistry/quick-calc/relation/relationship.md',
  'chemistry/quick-calc/examples/na2o2-increase.md': 'chemistry/quick-calc/relation/na2o2-increase.md',
  'chemistry/experiments/experiments.md': 'chemistry/experiments/lab/experiments.md',
  'chemistry/experiments/examples/gas-prep.md': 'chemistry/experiments/lab/gas-prep.md',
  // 生物
  'biology/cells/molecules.md': 'biology/cells/molecules/molecules.md',
  'biology/cells/examples/protein-peptide.md': 'biology/cells/molecules/protein-peptide.md',
  'biology/cells/cell-structure.md': 'biology/cells/structure/cell-structure.md',
  'biology/cells/transport-energy.md': 'biology/cells/metabolism/transport-energy.md',
  'biology/cells/examples/photosynthesis-rate.md': 'biology/cells/metabolism/photosynthesis-rate.md',
  'biology/cells/examples/compensation-point.md': 'biology/cells/metabolism/compensation-point.md',
  'biology/cells/cell-life.md': 'biology/cells/lifecycle/cell-life.md',
  'biology/genetics/meiosis.md': 'biology/genetics/meiosis/meiosis.md',
  'biology/genetics/mendel.md': 'biology/genetics/mendel/mendel.md',
  'biology/genetics/examples/genetic-9331.md': 'biology/genetics/mendel/genetic-9331.md',
  'biology/genetics/examples/two-gene-ratio.md': 'biology/genetics/mendel/two-gene-ratio.md',
  'biology/genetics/examples/lethal-ratio.md': 'biology/genetics/mendel/lethal-ratio.md',
  'biology/genetics/examples/gene-location.md': 'biology/genetics/mendel/gene-location.md',
  'biology/genetics/examples/experiment-design-multiple.md': 'biology/genetics/mendel/experiment-design-multiple.md',
  'biology/genetics/examples/pedigree.md': 'biology/genetics/pedigree/pedigree-example.md',
  'biology/genetics/examples/probability-calc.md': 'biology/genetics/pedigree/probability-calc.md',
  'biology/genetics/examples/pedigree-advanced.md': 'biology/genetics/pedigree/pedigree-advanced.md',
  'biology/genetics/gene-expression.md': 'biology/genetics/gene-expression/gene-expression.md',
  'biology/genetics/variation.md': 'biology/genetics/variation/variation.md',
  'biology/genetics/evolution.md': 'biology/genetics/evolution/evolution.md',
  'biology/homeostasis/internal-environment.md': 'biology/homeostasis/internal-env/internal-environment.md',
  'biology/homeostasis/nerve-regulation.md': 'biology/homeostasis/nerve/nerve-regulation.md',
  'biology/homeostasis/examples/nerve-potential.md': 'biology/homeostasis/nerve/nerve-potential.md',
  'biology/homeostasis/immune-regulation.md': 'biology/homeostasis/immune/immune-regulation.md',
  'biology/homeostasis/examples/secondary-immune.md': 'biology/homeostasis/immune/secondary-immune.md',
  'biology/homeostasis/plant-hormone.md': 'biology/homeostasis/hormones/plant-hormone.md',
  'biology/ecology/population.md': 'biology/ecology/population/population.md',
  'biology/ecology/examples/population-calc.md': 'biology/ecology/population/population-calc.md',
  'biology/ecology/examples/k-half.md': 'biology/ecology/population/k-half.md',
  'biology/ecology/ecosystem.md': 'biology/ecology/ecosystem/ecosystem.md',
  'biology/ecology/examples/energy-flow.md': 'biology/ecology/ecosystem/energy-flow.md',
  'biology/biotech/biotech.md': 'biology/biotech/bioengineering/biotech.md',
  'biology/experiments/experiments.md': 'biology/experiments/lab/experiments.md',
  'biology/experiments/examples/alcohol-test.md': 'biology/experiments/lab/alcohol-test.md',
  'biology/experiments/examples/experiment-design-full.md': 'biology/experiments/lab/experiment-design-full.md',
  'biology/experiments/examples/plasmolysis.md': 'biology/experiments/lab/plasmolysis.md',
}

const INDEX_TITLES = {
  'math/functions/concepts-properties': ['函数概念与性质', '定义域/单调性/奇偶性/周期性——函数题的装甲层'],
  'math/functions/exponential-log': ['指数与对数', '运算规则与比较大小'],
  'math/functions/derivatives': ['导数', '求导/单调/极值与压轴三件套（隐零点/构造/偏移）'],
  'math/functions/abstract-functions': ['抽象函数', '赋值法/构造特例/递推不等式'],
  'math/functions/trigonometry/induction-formulas': ['诱导公式', '奇变偶不变，符号看象限'],
  'math/functions/trigonometry/solve-triangle': ['解三角形', '正弦/余弦定理与边角互化'],
  'math/functions/trigonometry/identities': ['三角恒等变换', '辅助角/降幂/和差倍角'],
  'math/algebra/inequalities': ['不等式', '基本不等式与最值'],
  'math/algebra/sequences': ['数列', '通项/求和/放缩与压轴'],
  'math/geometry/circle': ['直线与圆', '切线/弦长/位置关系（留一代一）'],
  'math/geometry/conic': ['圆锥曲线', '椭圆/双曲线/抛物线二级结论与综合题'],
  'math/geometry/solid': ['立体几何', '线面关系/空间向量/外接球'],
  'math/statistics/counting': ['计数原理与二项式', '排列组合/二项式定理'],
  'math/statistics/probability': ['概率与分布', '古典概型/二项/超几何/正态'],
  'physics/mechanics/forces': ['受力与平衡', '受力分析/共点力平衡/动态平衡'],
  'physics/mechanics/kinematics': ['运动学', '匀变速/图像/追及相遇'],
  'physics/mechanics/newton': ['牛顿定律', '连接体/临界/超重失重'],
  'physics/mechanics/curves': ['曲线运动与圆周', '平抛/圆周/临界'],
  'physics/mechanics/gravity': ['万有引力', '卫星/变轨/双星'],
  'physics/mechanics/energy': ['功与能', '动能定理/机械能守恒/功能关系'],
  'physics/mechanics/momentum': ['动量', '动量定理/守恒/碰撞'],
  'physics/mechanics/vibrations': ['振动与波', '简谐/机械波/图像'],
  'physics/electromagnetism/electrostatics': ['静电场', '场强电势/电容器/带电粒子'],
  'physics/electromagnetism/magnetic': ['磁场与带电粒子', '洛伦兹力/圆周运动/配速法'],
  'physics/electromagnetism/induction': ['电磁感应', '楞次/法拉第/导轨五模型'],
  'physics/electromagnetism/circuits': ['恒定电流', '闭合电路/最大功率/动态分析'],
  'physics/electromagnetism/ac': ['交变电流', '有效值/变压器/输电'],
  'physics/models/iso-circular': ['等时圆', '光滑弦时间相等'],
  'physics/models/board': ['板块模型', '共速/相对位移/生热'],
  'physics/models/conveyor': ['传送带模型', '摩擦/痕迹/时间'],
  'physics/models/composite-field': ['等效重力场', '复合场等效法'],
  'physics/models/double-star': ['双星模型', '角速度相同/周期'],
  'physics/thermodynamics/thermo': ['热学', '分子动理论/气体定律/热力学第一定律'],
  'physics/optics-modern/optics': ['光学与近代物理', '折射/全反射/干涉/光电效应'],
  'physics/experiments/mechanics-lab': ['力学实验', '打点计时器/逐差法'],
  'physics/experiments/electricity-lab': ['电学实验', '伏安法/电表改装'],
  'chemistry/basics/amount': ['物质的量', 'N_A 陷阱/气体摩尔体积'],
  'chemistry/basics/ions': ['离子反应', '共存/方程式正误/检验'],
  'chemistry/basics/redox': ['氧化还原', '双线桥/配平/守恒'],
  'chemistry/basics/periodic': ['元素周期律', '位构性/半径比较'],
  'chemistry/elements/metals': ['金属及其化合物', '钠铝铁铜/铝三角'],
  'chemistry/elements/nonmetals': ['非金属及其化合物', '氯硫氮硅'],
  'chemistry/principles/rate-balance': ['速率与平衡', '勒夏特列/平衡常数'],
  'chemistry/principles/electrochemistry': ['电化学', '原电池/电解池/燃料电池'],
  'chemistry/principles/water-solution': ['水溶液离子平衡', '水解/三大守恒/滴定'],
  'chemistry/organic/hydrocarbons': ['烃', '烷烯炔苯'],
  'chemistry/organic/derivatives': ['烃的衍生物', '醇酚醛酸酯'],
  'chemistry/organic/inference': ['有机推断与合成', '连续氧化链/基元法/路线设计'],
  'chemistry/quick-calc/conservation': ['守恒法', '电子/原子/电荷守恒'],
  'chemistry/quick-calc/difference': ['差量法', '十字交叉/体积差'],
  'chemistry/quick-calc/relation': ['关系式法', '多步反应/增重规律'],
  'chemistry/experiments/lab': ['化学实验', '制备/净化/定量实验'],
  'biology/cells/molecules': ['组成细胞的分子', '糖脂蛋白核酸'],
  'biology/cells/structure': ['细胞结构', '原核真核/细胞器'],
  'biology/cells/metabolism': ['细胞代谢', '跨膜运输/呼吸/光合'],
  'biology/cells/lifecycle': ['细胞生命历程', '分裂/分化/凋亡'],
  'biology/genetics/meiosis': ['减数分裂', '图像识别/受精作用'],
  'biology/genetics/mendel': ['遗传规律', '分离/自由组合/9331 变式'],
  'biology/genetics/pedigree': ['系谱与伴性遗传', '判断口诀/概率计算'],
  'biology/genetics/gene-expression': ['基因表达', '复制/转录/翻译/中心法则'],
  'biology/genetics/variation': ['变异与育种', '突变/重组/染色体变异/育种'],
  'biology/genetics/evolution': ['进化', '基因频率/隔离'],
  'biology/homeostasis/internal-env': ['内环境', '成分/稳态/组织水肿'],
  'biology/homeostasis/nerve': ['神经调节', '反射弧/电位/突触'],
  'biology/homeostasis/immune': ['免疫调节', '三道防线/体液细胞免疫'],
  'biology/homeostasis/hormones': ['植物激素', '生长素/两重性/其他激素'],
  'biology/ecology/population': ['种群', '标志重捕/S 型增长/K 值'],
  'biology/ecology/ecosystem': ['群落与生态系统', '能量流动/碳循环/稳定性'],
  'biology/biotech/bioengineering': ['生物技术与工程', '发酵/基因/细胞工程'],
  'biology/experiments/lab': ['实验与探究', '实验设计/观察类实验'],
}

// 1) 移动文件（已迁移的跳过，容错重跑）
let moved = 0
for (const [from, to] of Object.entries(MAP)) {
  const src = path.join(CONTENT, from)
  const dst = path.join(CONTENT, to)
  if (!fs.existsSync(src)) {
    if (fs.existsSync(dst)) continue // 已迁移
    throw new Error(`源文件不存在: ${from}`)
  }
  fs.mkdirSync(path.dirname(dst), { recursive: true })
  fs.renameSync(src, dst)
  moved++
}

// 2) 为新分类目录生成 _index.md
for (const [dir, [title, desc]] of Object.entries(INDEX_TITLES)) {
  const f = path.join(CONTENT, dir, '_index.md')
  if (!fs.existsSync(f)) {
    fs.writeFileSync(f, `---\ntitle: ${title}\ndesc: ${desc}\n---\n\n> ${desc}。\n`)
  }
}

// 3) 全局重写内部链接（content + 测试脚本）
const rewriteFor = []
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full)
    else if (e.name.endsWith('.md') || e.name.endsWith('.mjs')) rewriteFor.push(full)
  }
}
walk(CONTENT)
rewriteFor.push(path.join(ROOT, 'scripts/e2e.mjs'), path.join(ROOT, 'scripts/smoke.mjs'))
for (const file of rewriteFor) {
  if (!fs.existsSync(file)) continue
  let text = fs.readFileSync(file, 'utf8')
  let changed = 0
  for (const [from, to] of Object.entries(MAP)) {
    const fromP = from.replace(/\.md$/, '')
    const toP = to.replace(/\.md$/, '')
    const before = text
    text = text.split(`/node/${fromP}`).join(`/node/${toP}`)
    text = text.split(`content/nodes/${fromP}.json`).join(`content/nodes/${toP}.json`)
    text = text.split(`/examples/${fromP}`).join(`/${toP}`)
    if (text !== before) changed++
  }
  if (changed) {
    fs.writeFileSync(file, text)
    console.log(`链接更新: ${path.relative(ROOT, file)} (${changed} 处)`)
  }
}

// 4) 清理空目录（旧的 examples/ 等）
function pruneDirs(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      pruneDirs(full)
      try {
        if (fs.readdirSync(full).length === 0) fs.rmdirSync(full)
      } catch {}
    }
  }
}
pruneDirs(CONTENT)

console.log(`✔ 重构完成：移动 ${moved} 个文件，生成 ${Object.keys(INDEX_TITLES).length} 个分类页`)
