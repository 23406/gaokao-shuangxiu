---
title: 构造法
type: knowledge
status: draft
keywords: [构造法, 导函数构造, 放缩, 比值换元, 导数压轴]
updated: 2025-02-15
---

# 构造法

> **适用场景**：条件是一个**导数不等式**（$f'(x)+f(x)>0$、$xf'(x)-f(x)>0$ 等），要比较函数值/证明单调性——把它"拼"成某个函数的导数。

## 构造速查表（必须背到条件反射）

| 条件式 | 构造的函数 | 为什么 |
| --- | --- | --- |
| $f'(x)+f(x)>0$ | $F(x)=\mathrm e^x f(x)$ | $(F)'=\mathrm e^x(f'+f)$ |
| $f'(x)-f(x)>0$ | $F(x)=\dfrac{f(x)}{\mathrm e^x}$ | $(F)'=\dfrac{f'-f}{\mathrm e^x}$ |
| $f'(x)+\lambda f(x)>0$ | $F(x)=\mathrm e^{\lambda x}f(x)$ | 同上 |
| $xf'(x)+f(x)>0$ | $F(x)=xf(x)$ | $(F)'=f+xf'$ |
| $xf'(x)-f(x)>0$ | $F(x)=\dfrac{f(x)}{x}$ | $(F)'=\dfrac{xf'-f}{x^2}$ |
| $f'(x)\ln x+\dfrac{f(x)}{x}>0$ | $F(x)=f(x)\ln x$ | $(F)'=f'\ln x+\dfrac fx$ |
| $f'(x)+\dfrac{f(x)}{x}>0$ | $F(x)=xf(x)$（乘 $x$ 后即第 4 行型） | 先乘 $x$ 再构造 |

**记忆锚点**："$f'+f$ 乘 $\mathrm e^x$；$f'-f$ 除 $\mathrm e^x$；$xf'+f$ 乘 $x$；$xf'-f$ 除 $x$"。

## 不等式证明的"公理级放缩"

- $\mathrm e^x\ge x+1$（$x\in\mathbb R$，取等 $x=0$）；
- $\ln x\le x-1$（$x>0$，取等 $x=1$）；
- $\ln x\ge 1-\dfrac1x$（$x>0$；对数版对偶）；
- $\mathrm e^x\ge\mathrm e\cdot x$（在 $(1,1)$ 点切线）。

**注意**：放缩证明"严格 >"时，必须说明取等条件不可同时满足。

## 双变量构造（两大流派）

1. **对称构造**（极值点偏移）：$g(x)=f(x)-f(2x_0-x)$（见[极值点偏移](/node/math/functions/derivatives/extreme-point-shift)）；
2. **比值换元**：由 $f(x_1)=f(x_2)$ 令 $t=\dfrac{x_2}{x_1}$，把两个变量换成一个 $t$——所有双变量问题的默认思路。

## 邪修提示

- 选填"构造比较大小"：**直接代入特殊函数**（满足条件的简单函数，如 $f(x)=\mathrm e^{2x}$）算具体值比较——比构造快 10 倍（见例题）；
- 大题丢分原因 90% 是"构造出来但忘了写 $F(x)$ 的定义"，构造后第一行写"令 $F(x)=…$"；
- 风险：构造的函数定义域（$\mathrm e^x$ 型 $x\in\mathbb R$，除以 $x$ 型 $x\neq0$）别忘区间。
