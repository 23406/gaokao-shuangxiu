---
title: 光电效应遏止电压（hν−W 心算）
type: example
status: draft
source: 自编（经典考法）
difficulty: 中档
applicability: 选填通用
risk: 遏止电压对应"最大初动能"（最外层电子）；eUc=E_k= hν−W；有时给"波长"要先换算成频率（ν=c/λ）。
fit:
  - 已知光子能量/波长与逸出功
  - 求遏止电压/最大初动能
  - 选填题
updated: 2025-02-27
---

## 题目

某金属的逸出功为 $W=3.0\,\text{eV}$，用光子能量 $h\nu=5.0\,\text{eV}$ 的光照射该金属（各光子能量相同），光电子的最大初动能为 $E_k$，则遏止电压 $U_c$ 为（ ）

A. $2.0\,\text{V}$

B. $5.0\,\text{V}$

C. $3.0\,\text{V}$

D. $1.0\,\text{V}$

## 标准解法

**爱因斯坦光电方程**：

$$
h\nu=W+E_{k\max}\Rightarrow E_{k\max}=5.0-3.0=2.0\,\text{eV}
$$

**遏止电压定义**：$eU_c=E_{k\max}$（电场力做功恰好抵消初动能）：

$$
U_c=\dfrac{2.0\,\text{eV}}{e}=2.0\,\text{V}
$$

选 **A**。

## 邪修解法

**适用特征**：给能量直接算 → **"光子能−逸出功=初动能"**：

$$
E_k=h\nu-W=5-3=2\,\text{eV}\Rightarrow U_c=2\,\text{V}
$$

**15 秒选 A**——eV 与 V 的换算恰好是 $1\,\text{eV}/e=1\,\text{V}$，数字不变。

## 点评

- 光电效应三问三答（背住）：
  - 能否发生：$h\nu\ge W$（$\nu\ge\nu_0=\dfrac Wh$）；
  - 最大初动能：$E_{k\max}=h\nu-W$（饱和电流由**光强**决定——光强增大只增光电子数）；
  - 遏止电压：$eU_c=E_{k\max}$（只与**频率**有关，与光强无关）；
- 变式（给波长）：$\nu=\dfrac c\lambda$，$h\nu=\dfrac{hc}{\lambda}\approx\dfrac{1240\,\text{eV·nm}}{\lambda}$，波长 $620\,\text{nm}$ ⇒ 光子能量 $2.0\,\text{eV}$——常量 $1240\,\text{eV·nm}$ 建议背；
- 图像题：$U_c$-$\nu$ 图为直线，斜率 $=\dfrac he$（普适），截距 $=-\dfrac{W}{e}$——两条"定直线"覆盖全国卷光电题；
- 风险：逸出功是金属材料属性（每种金属有自己的 $W$）；"刚好发生光电效应"时 $E_k=0$，$U_c=0$。
