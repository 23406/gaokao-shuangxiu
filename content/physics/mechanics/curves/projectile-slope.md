---
title: 平抛落斜面（特殊角心算）
type: example
status: draft
source: 自编（经典考法）
difficulty: 中档
applicability: 选填通用
risk: 特殊角代入只适合验证选项；注意区分"落回斜面"（位移角）与"垂直打到斜面"（速度角）两种情形，套错公式全盘皆输。
fit:
  - 从斜面顶端水平抛出，落在斜面上
  - 求飞行时间/位移/末速度
  - 选填题
updated: 2025-02-03
---

## 题目

如图所示，倾角为 $\theta$ 的斜面顶端以初速度 $v_0$ 水平抛出一个小球，小球落在斜面上（不计空气阻力），则小球飞行时间为（ ）

A. $\dfrac{v_0\tan\theta}{g}$

B. $\dfrac{2v_0\tan\theta}{g}$

C. $\dfrac{2v_0}{g\tan\theta}$

D. $\dfrac{v_0}{g\tan\theta}$

## 标准解法

小球落在斜面上 → 位移方向沿斜面，**位移偏转角 $\varphi=\theta$**：

$$
\tan\theta=\tan\varphi=\dfrac{y}{x}=\dfrac{\dfrac12gt^2}{v_0t}=\dfrac{gt}{2v_0}
$$

解得

$$
t=\dfrac{2v_0\tan\theta}{g}
$$

选 **B**。

## 邪修解法

**适用特征**：平抛落斜面 → 记住两个"定角公式"，再用**特殊角心算**验证选项：

- 落回斜面：$t=\dfrac{2v_0\tan\theta}{g}$（位移角，本题用这个）；
- 垂直打到斜面：$t=\dfrac{v_0}{g\tan\theta}$（速度角）。

**验证操作**：先取 $\theta=45°$，$\tan45°=1$，四个选项变为：A=$v_0/g$，B=$2v_0/g$，C=$2v_0/g$，D=$v_0/g$——可排除 A、D，但 B、C 重合，需要再换角度区分。

再取 $\theta=30°$：由 $\tan30°=\dfrac{y}{x}=\dfrac{gt}{2v_0}$ 心算 $t=\dfrac{2v_0\tan30°}{g}\approx\dfrac{1.15v_0}{g}$：B ✓，C $=\dfrac{2v_0}{g\tan30°}\approx\dfrac{3.46v_0}{g}$ ✘。

一次心算锁定 **B**。

## 点评

- 公式记忆锚点：**落回斜面时间与 $\tan\theta$ 成正比**（斜面越陡，竖直下落占比越大，但水平位移越短，综合后时间越长）；
- 两个公式的区别本质：位移角公式有系数 2（$y=\frac12gt^2$ 是二次增长），速度角公式没有；
- 大题标准流程：写 $\tan\theta=\dfrac{gt}{2v_0}$ 一步到位，别从 $x,y$ 慢慢推。
