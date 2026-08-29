---
title: 导数恒成立求参（分离参数心算）
type: example
status: draft
source: 自编（考法同近年新课标卷导数第一问）
difficulty: 较难
applicability: 选填专用
risk: 分离参数后求的是"最大值/最小值"，取等条件必须可达；大题必须写出求导、列表、说明单调性的完整过程。
fit:
  - f(x)≤0（或 ≥0）恒成立求参数范围
  - 参数可分离（a 与 x 可分开在不等式两侧）
  - 选填题或大题第一问的快速验证
updated: 2025-02-06
---

## 题目

已知 $f(x)=\ln x-ax$，若 $f(x)\le0$ 对 $x>0$ 恒成立，则实数 $a$ 的最小值为（ ）

A. $\dfrac1e$

B. $1$

C. $e$

D. $\dfrac{1}{e^2}$

## 标准解法

**第一步（分离参数）**：$f(x)=\ln x-ax\le0\Rightarrow a\ge\dfrac{\ln x}{x}$ 对 $x>0$ 恒成立。

所以 $a\ge\left(\dfrac{\ln x}{x}\right)_{\max}$。

**第二步（求最大值）**：设 $g(x)=\dfrac{\ln x}{x}$，则

$$
g'(x)=\dfrac{1-\ln x}{x^2}
$$

令 $g'(x)=0$ 得 $x=e$；当 $0<x<e$ 时 $g'(x)>0$（递增），$x>e$ 时 $g'(x)<0$（递减），故 $g(x)$ 在 $x=e$ 处取最大值：

$$
g(e)=\dfrac{\ln e}{e}=\dfrac1e
$$

**第三步**：$a\ge\dfrac1e$，最小值为 $\dfrac1e$，选 **A**。

## 邪修解法

**适用特征**：恒成立 + 可分离参数 → **"极值点心算"**：$\dfrac{\ln x}{x}$ 是最常见函数，最大值点 $x=e$、最大值 $\dfrac1e$——直接背！

- $a\ge\dfrac{\ln x}{x}$ 恒成立 ⟺ $a\ge$ 该函数最大值 $=\dfrac1e$；
- 心算 10 秒：**"ln x 除以 x，e 处取 1/e"**——看见 $\dfrac{\ln x}{x}$ 就是 $\dfrac1e$。

选 **A**。

## 点评

- $\dfrac{\ln x}{x}$ 的结论务必背熟：最大值 $\dfrac1e$（$x=e$ 时）；$\dfrac{\ln x}{x^2}$ 最大值 $\dfrac{1}{2e}$（$x=\sqrt e$ 时）——都是"对数除以幂"型，极值点在"$\ln x = 1/$幂指数"处（如 $x^2$ 对应 $\ln x=\dfrac12$，$x=\sqrt{\mathrm e}$）；
- 同类高频函数：$xe^{-x}$ 最大值 $\dfrac1e$（$x=1$）；$x\ln x$ 最小值 $-\dfrac1e$（$x=\dfrac1e$）；
- 变式：$f(x)=\ln x - ax + 1\le0$ 恒成立 → $a\ge1$（$g(x)=\dfrac{\ln x+1}{x}$ 最大值在 $x=1$ 处取 $1$）；
- 大题流程：分离 → 构造函数 → 求导列表 → 说明端点极限（$x\to0^+$ 时 $g\to-\infty$），别跳步骤。
