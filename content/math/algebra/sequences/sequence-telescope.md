---
title: 裂项相消求和
type: example
status: draft
source: 自编（经典考法）
difficulty: 中等
applicability: 选填通用
risk: 裂项时"分母两个因子的差 d"必须写成 1/d 提到前面；若相邻两项错开后要看清首尾各剩几项，别多留、别少留。
fit:
  - 分式型通项的裂项相消
  - 数列前 n 项和
  - 选填题
updated: 2025-03-03
---

## 题目

已知数列 $\{a_n\}$ 的通项公式为 $a_n=\dfrac{1}{n(n+1)}$，则数列前 $100$ 项的和 $S_{100}$ 为（ ）

A. $\dfrac{100}{101}$

B. $\dfrac{99}{100}$

C. $\dfrac{101}{100}$

D. $\dfrac{100}{99}$

## 标准解法

**裂项**：

$$\frac{1}{n(n+1)}=\frac{1}{n}-\frac{1}{n+1}$$

**相加抵消（相邻项正负相消）**：

$$S_{100}=\sum_{n=1}^{100}\left(\frac1n-\frac1{n+1}\right)=\left(1-\frac12\right)+\left(\frac12-\frac13\right)+\cdots+\left(\frac1{100}-\frac1{101}\right)$$

只剩下第一项 $1$ 与最后一项 $\dfrac1{101}$：

$$S_{100}=1-\frac{1}{101}=\frac{100}{101}$$

选 **A**。

## 邪修解法

**"首尾只剩两件"速算法**：裂项相消（因子差 $d=1$）时，答案是

$$S_n=\frac{1}{d}\left(\frac{1}{\text{首因}}-\frac{1}{\text{末因}}\right)$$

本题：$d=$ 两因子差 $=1$，$\dfrac{1}{1}-\dfrac{1}{101}=\dfrac{100}{101}$。

> ⚠️ 此式**仅当 $d=1$ 成立**。一般地（如 $\dfrac1{n(n+2)}$，$d=2$）：裂项后首尾各剩 $d$ 项，正确速算式为 $S_n=\dfrac1d\left(\dfrac11+\dfrac12+\cdots+\dfrac1d-\dfrac1{n+1}-\cdots-\dfrac1{n+d}\right)$——因子差大于 1 时别只留住"首末两件"。

**一步到位公式**：

$$\sum_{k=1}^{n}\frac{1}{k(k+1)}=\frac{n}{n+1}$$

看见 $a_n=\dfrac{1}{n(n+1)}$ 类"连续因子"直接写 $\dfrac{n}{n+1}$，30 秒出 A。

## 点评

- 推广：$\dfrac{1}{n(n+2)}$ 的差为 $2$，要先提 $\dfrac12$：$\dfrac1{n(n+2)}=\dfrac12\left(\dfrac1n-\dfrac1{n+2}\right)$，求和后首尾剩 $1,\dfrac12$ 与 $\dfrac1{n+1},\dfrac1{n+2}$ 共四项——**因子差大于 1 时别忘提系数、也别漏掉尾部项**；
- 常见裂项公式：$\dfrac{1}{n(n+2)}$、$\dfrac{1}{(2n-1)(2n+1)}$（差 $2$）、$\dfrac{1}{\sqrt{n+1}+\sqrt{n}}=\sqrt{n+1}-\sqrt{n}$（有理化型，差直接消）;
- 判断"能不能裂项"：分母是两个相邻项因式乘积且分子为常数 ⇒ 通常能裂；
- 变式：$a_n=\dfrac{1}{n(n+1)(n+2)}$ 的裂项为 $\dfrac12\left[\dfrac{1}{n(n+1)}-\dfrac{1}{(n+1)(n+2)}\right]$——把"三连乘"看成两个"两连乘"之差，原理相同。
