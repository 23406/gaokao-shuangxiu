---
title: 两对基因概率（拆分法）
type: example
status: draft
source: 自编（经典考法）
difficulty: 较难
applicability: 选填通用
risk: 拆分法要求两对基因独立遗传（非同源染色体）；先转换成单对比例再相乘；注意区分"配子比例"与"后代比例"。
fit:
  - 两对（多对）基因独立遗传
  - 求某表现型/基因型概率
  - 选填题
updated: 2025-02-16
---

## 题目

某植物花色由两对独立遗传的基因 A/a、B/b 控制：A 和 B 同时显性（A_B_）即开红花，其余基因型开白花。基因型为 AaBb 的植株与 aaBb 的植株杂交，子代开红花的概率为（ ）

A. $\dfrac38$

B. $\dfrac{9}{16}$

C. $\dfrac12$

D. $\dfrac14$

## 标准解法

**拆分成两组独立事件**：

- Aa × aa：子代 A 显性（Aa）的概率 $=\dfrac12$；
- Bb × Bb：子代 B 显性（B_）的概率 $=\dfrac34$。

**相乘**：

$$
P(\text{红花})=P(\text{A显性})\times P(\text{B显性})=\dfrac12\times\dfrac34=\dfrac38
$$

选 **A**。

## 邪修解法

**适用特征**：多对基因 + 求概率 → **"一对一对拆，算完再乘"**：

1. Aa × aa → 显性占 $\dfrac12$；
2. Bb × Bb → 显性占 $\dfrac34$；
3. 相乘 $\dfrac38$。

**20 秒出答案：A**——永远不会错的方法：**能拆就拆**。

## 点评

- 同套路变式 1：AaBb × aaBb 子代 Aabb 的概率 $=\dfrac12\times\dfrac14=\dfrac18$（Aa×aa 出 Aa 是 $\dfrac12$，Bb×Bb 出 bb 是 $\dfrac14$）；
- 同套路变式 2（自交求"红花中纯合"）：AaBb × AaBb 时双显性（红花）占 $\dfrac{9}{16}$，其中 AABB 占 $\dfrac{1}{16}$ ⇒ $\dfrac{1/16}{9/16}=\dfrac19$；AAB_ 占 $\dfrac{3}{16}$ ⇒ $\dfrac{3/16}{9/16}=\dfrac13$——**先算分母再算分子**；
- **注意**：本题 Aa × aa 的后代中"A 显性"只能是 Aa（不可能出现 AA），所以没有纯合个体——换交配方式结论完全不同，**先看亲本再套模板**；
- 9331 来源：$(3:1)\times(3:1)=9:3:3:1$——拆分法正是它的逆运算；
- 测交变式：AaBb × aabb → 4 种表型 $1:1:1:1$（只用"配子比例"乘）；
- 风险：aaBb 产生的配子 $\dfrac12$aB + $\dfrac12$ab——写配子比例时别漏各半。
