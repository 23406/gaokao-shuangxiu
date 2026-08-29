---
title: 双缝干涉条纹间距
type: example
status: draft
source: 自编（经典考法）
difficulty: 容易
applicability: 选填通用
risk: Δx=Lλ/d 中 L 是"双缝到屏的距离"、d 是"双缝间距"，分子分母像"L/d"容易对调，单位必须统一成米。
fit:
  - 双缝干涉条纹间距计算
  - 干涉条纹的疏密判断
  - 选填题
updated: 2025-03-03
---

## 题目

在双缝干涉实验中，双缝间距 $d=0.6\ \mathrm{mm}$，双缝到光屏的距离 $L=1.2\ \mathrm{m}$，用波长为 $\lambda=450\ \mathrm{nm}$ 的单色光照射双缝，则相邻两条亮条纹的间距 $\Delta x$ 为（ ）

A. $0.9\ \mathrm{mm}$

B. $0.45\ \mathrm{mm}$

C. $1.8\ \mathrm{mm}$

D. $0.9\ \mathrm{cm}$

![](img/physics/interference-fringes.svg)

## 标准解法

**公式**：相邻亮（暗）条纹间距

$$\Delta x=\frac{L}{d}\lambda$$

**代入**（统一为米）：$d=6\times10^{-4}\ \mathrm{m}$，$L=1.2\ \mathrm{m}$，$\lambda=4.5\times10^{-7}\ \mathrm{m}$：

$$\Delta x=\frac{1.2}{6\times10^{-4}}\times4.5\times10^{-7}=0.9\times10^{-3}\ \mathrm{m}=0.9\ \mathrm{mm}$$

选 **A**。

## 邪修解法

**"前除后乘"法**：$\Delta x=\dfrac{L}{d}\lambda$ 读作"**间距=屏距÷缝距×波长**"：

- 先算 $\dfrac{L}{d}=\dfrac{1.2}{0.6\times10^{-3}}=2000$（量纲是无量纲倍数）；
- 再乘 $\lambda$：$2000\times450\ \mathrm{nm}=9\times10^5\ \mathrm{nm}=0.9\ \mathrm{mm}$。

**nm→mm 快记**：$10^6\ \mathrm{nm}=1\ \mathrm{mm}$，所以 $450\ \mathrm{nm}$ 乘 $2000$ 只要把小数点……直接口算 $9\times10^5\ \mathrm{nm}=0.9\ \mathrm{mm}$。30 秒出 A。

## 点评

- 结论扩展：条纹间距 $\Delta x$ 与 $\dfrac{\lambda}{d}$ 成正比，所以——**波长越长（红光）、缝距越小，条纹越疏**；$\Delta x$ 与双缝到屏距离 $L$ 成正比；
- 实验细节：把双缝换成更宽的缝（$d$ 增大）⇒ 条纹变密；把屏移远（$L$ 增大）⇒ 条纹变疏；
- 白光干涉：中央为白色亮纹，两侧彩色（红光在外侧——$\lambda$ 越大 $\Delta x$ 越大）；
- 易错点：$d$ 用 $\mathrm{mm}$、$\lambda$ 用 $\mathrm{nm}$、$L$ 用 $\mathrm{m}$ 三个单位混用——第一步先统一单位，再代公式；
- 变式：若问"相邻暗条纹间距"，数值与亮条纹完全一样（暗纹夹在亮纹之间等距分布）。
