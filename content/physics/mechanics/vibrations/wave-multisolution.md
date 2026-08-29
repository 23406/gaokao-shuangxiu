---
title: 简谐横波多解（同相点定波长）
type: example
status: draft
source: 自编（经典考法）
difficulty: 中等
applicability: 选填通用
risk: 多解问题"可能是"与"一定是"是考查核心：同相点相距 nλ 只能给出波长族 λ=2/n，绝不能写成"唯一值"。
fit:
  - 机械波的多解性（同相/反相）
  - 波长/周期/波速关系
  - 选填题
updated: 2025-03-03
---

## 题目

一列简谐横波沿 $x$ 轴正方向传播。$t=0$ 时刻，质点 $a$、$b$ 的位移都达到正向最大值（均在波峰），$a$、$b$ 沿传播方向相距 $\Delta x=2\ \mathrm{m}$，已知波速 $v=0.4\ \mathrm{m/s}$。下列说法正确的是（ ）

A. 该波的波长可能为 $2\ \mathrm{m}$

B. 该波的波长一定为 $2\ \mathrm{m}$

C. 该波的周期一定为 $5\ \mathrm{s}$

D. 该波的频率一定为 $0.2\ \mathrm{Hz}$

## 标准解法

$a$、$b$ 都在波峰，说明两质点**同相**，沿传播方向相距的应是波长整数倍：

$$\Delta x = n\lambda\qquad(n=1,2,3,\dots)$$

- 波长：$\lambda=\dfrac{2}{n}\ \mathrm{m}$——**不是一个值，而是一族**；
- 周期：$T=\dfrac{\lambda}{v}=\dfrac{5}{n}\ \mathrm{s}$；
- 频率：$f=\dfrac{1}{T}=0.2n\ \mathrm{Hz}$。

逐项判断：

- A：取 $n=1$ 得 $\lambda=2\ \mathrm{m}$，**可能**成立 ✓；
- B：$n=2$ 时 $\lambda=1\ \mathrm{m}$，"一定为 2 m" 错；
- C：$n=2$ 时 $T=2.5\ \mathrm{s}$，"一定为 5 s" 错；
- D：$n=2$ 时 $f=0.4\ \mathrm{Hz}$，"一定为 0.2 Hz" 错。

选 **A**。

## 邪修解法

**同相距离秒杀**：两质点同相位（同在波峰/同在波谷/同过平衡位置同向）⇒ 相距 $\Delta x=n\lambda$，直接列出家族公式，再看选项能不能凑出正整数 $n$：

- "可能是"选项：把数值代入 $\lambda=\dfrac{\Delta x}{n}$，$n$ 为正整数就 **✓**；
- "一定是"选项：看到就 **✗**——同相点间距根本不唯一。

口诀："**同相 $n\lambda$，反相 $\left(n+\frac12\right)\lambda$**"。本题 $a$、$b$ 同在波峰 ⇒ 同相 ⇒ 套第一条公式，30 秒出 A。

## 点评

- 多解问题两大来源：①**传播方向未定**（向左/向右各一套解）；②**同相/反相未定**（$n\lambda$ 或 $\left(n+\frac12\right)\lambda$）。本题是第②类，且已给同相，只解整数倍；
- 变式：若改为"$a$ 在波峰、$b$ 在波谷"，则 $\Delta x=\left(n+\frac12\right)\lambda$，即 $\lambda=\dfrac{4}{2n+1}\ \mathrm{m}$（$n=0,1,2,\dots$），选项对应数值同样用"凑正整数 $n$"判断；
- 常见误区：写出 $\lambda=2/n$ 后直接选"一定 2 m"——忘了 $n$ 是可以取 2、3 的；
- 若再给出周期 $T<1\ \mathrm{s}$ 之类的限条件，就是"先求族、再用不等式筛"的两步题。
