---
title: 基本不等式求最值（取等即答案）
type: example
status: draft
source: 自编（经典考法）
difficulty: 中档
applicability: 选填专用
risk: “取等即答案”要求取等条件确实可达（与约束相容）；若取等点与约束矛盾，此招失效，必须回归标准解法。
fit:
  - 两个正数满足线性约束（如 x+2y=1）
  - 求分式型表达式的最小值
  - 选填题
updated: 2025-02-02
---

## 题目

已知 $x>0$，$y>0$，$x+2y=1$，则 $\dfrac1x+\dfrac2y$ 的最小值为（ ）

A. 7

B. 8

C. 9

D. 10

## 标准解法

**"1"的代换**：把约束 $x+2y=1$ 乘进目标式：

$$
\left(\dfrac1x+\dfrac2y\right)(x+2y)=1+\dfrac{2y}{x}+\dfrac{2x}{y}+4=5+2\left(\dfrac{y}{x}+\dfrac{x}{y}\right)
$$

由基本不等式 $\dfrac{y}{x}+\dfrac{x}{y}\ge2$（当且仅当 $x=y$ 取等），得

$$
\dfrac1x+\dfrac2y\ge5+2\times2=9
$$

取等：$x=y$，代入 $x+2y=1$ 得 $x=y=\dfrac13$（可行 ✓）。最小值为 9，选 **C**。

## 邪修解法

**适用特征**：和积最值 + 线性约束 → **"取等即答案"**：由系数的对偶配凑找出取等条件（本题 $x=y$），代入约束反解，直接算值。

**操作（15 秒）**：

- 令 $x=y$，代入约束 $x+2y=1$ → $3x=1$ → $x=y=\dfrac13$；
- 代入目标式：$\dfrac1x+\dfrac2y=3+6=9$。

选 **C**，连不等式都不用展开。

## 点评

- 为什么敢直接令 $x=y$？因为 $\dfrac1x+\dfrac2y$ 与约束 $x+2y=1$ 的系数（$1,2$）恰构成**对偶配凑**：$\left(\dfrac1x+\dfrac2y\right)(x+2y)=5+2\left(\dfrac yx+\dfrac xy\right)\ge9$，取等在 $\dfrac yx=\dfrac xy$ 即 $x=y$（$\dfrac13$）时取得——不是"目标式本身交换对称"，而是系数对偶让 $x=y$ 成为取等特点；
- 若目标式不对称（如 $\dfrac1x+\dfrac3y$），取等点不再简单，老老实实"1 的代换"；
- 记住：**选填最值题，先试对称点，再试端点**，两个心算点覆盖九成题目。
