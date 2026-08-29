---
title: 导数不等式构造比较（特殊函数代入）
type: example
status: draft
source: 自编（经典考法）
difficulty: 中档
applicability: 选填通用
risk: 特殊函数必须满足题干全部条件（f' 与 f 的关系），否则代入无效；大题必须用构造法证明。
fit:
  - 条件为 f'(x)+f(x)>0 型不等式
  - 比较 f(2) 与 e·f(1) 这类"函数值"
  - 选填题
updated: 2025-02-15
---

## 题目

已知定义在 $\mathbb R$ 上的可导函数 $f(x)$ 满足 $f'(x)>f(x)$ 恒成立，则（ ）

A. $f(2)>\mathrm e\cdot f(1)$

B. $f(2)<\mathrm e\cdot f(1)$

C. $\mathrm e f(2)>f(1)$

D. $\mathrm e f(2)<f(1)$

## 标准解法

**方法：构造法**。条件 $f'(x)-f(x)>0$ ⇒ 构造

$$
F(x)=\dfrac{f(x)}{\mathrm e^x},\quad F'(x)=\dfrac{f'(x)-f(x)}{\mathrm e^x}>0
$$

$F(x)$ 在 $\mathbb R$ 上单调递增，于是

$$
F(2)>F(1)\Rightarrow\dfrac{f(2)}{\mathrm e^2}>\dfrac{f(1)}{\mathrm e}\Rightarrow f(2)>\mathrm e\cdot f(1)
$$

选 **A**。

## 邪修解法

**方法：特殊函数代入**。**适用特征**：满足条件的函数很多 → **挑一个最简单的**：

取 $f(x)=\mathrm e^{2x}$，则 $f'(x)=2\mathrm e^{2x}>\mathrm e^{2x}=f(x)$ ✓ 满足条件。

代入：

$$
f(2)=\mathrm e^4,\qquad \mathrm e\cdot f(1)=\mathrm e\cdot\mathrm e^2=\mathrm e^3
$$

$\mathrm e^4>\mathrm e^3$ ⇒ $f(2)>\mathrm e\cdot f(1)$，选 **A**。**30 秒收工**。

## 点评

- 选填"抽象函数满足导数不等式"：**特殊函数代入是万能枪**——$f(x)=\mathrm e^{kx}$ 调 $k$ 满足条件即可（如 $f'-f>0$ 需 $k>1$），再不行试 $f(x)=a\cdot\mathrm e^{kx}$（注意系数条件：此时需 $a(k-1)>0$）；
- 标准解法是构造速查表的直接应用：看到 $f'-f$ → 除 $\mathrm e^x$；
- 变式 1：条件改 $f'(x)+f(x)>0$ ⇒ 构造 $\mathrm e^x f(x)$ 递增 ⇒ 比较 $\mathrm e^2f(2)$ 与 $\mathrm e f(1)$ 乘除关系；
- 变式 2：条件改 $xf'(x)-f(x)>0$ ⇒ 构造 $\dfrac{f(x)}{x}$，注意定义域为 $x\neq0$，分段比较。
