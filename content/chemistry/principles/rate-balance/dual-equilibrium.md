---
title: 双平衡·串联反应综合三段式
type: example
status: draft
source: 自编（经典考法：双平衡串联为新高考选填压轴常客）
difficulty: 中等
applicability: 选填压轴/解答题第一问
risk: 两个平衡共用中间物质（B），三段式要设两个变量分别演算；K 表达式里的浓度必须用"平衡时"浓度；只有一个平衡时不要用"转化总量=平衡量"的简化（两个平衡会互相牵动）。
fit:
  - 串联双平衡（A⇌B⇌C）
  - 综合三段式（两个变量）
  - 选填题
updated: 2025-03-09
---

## 题目

恒温恒容密闭容器（体积 $1\,\mathrm L$）中充入 $1\,\mathrm{mol}$ 的 $\mathrm A$，发生如下平衡：$\mathrm A(g)\rightleftharpoons\mathrm B(g)$（平衡常数 $K_1=1$），$\mathrm B(g)\rightleftharpoons\mathrm C(g)$（平衡常数 $K_2=1$）。达到平衡时（ ）

A. $\mathrm A$ 的转化率为 $50\%$

B. $n(\mathrm B)=0.25\,\mathrm{mol}$

C. $n(\mathrm C)=\dfrac13\,\mathrm{mol}$

D. 体系中 $\mathrm A$ 与 $\mathrm C$ 的物质的量之比为 $2:1$

## 标准解法

**设两个变量**：设 $\mathrm A$ 转化了 $x\,\mathrm{mol}$，其中又有 $y\,\mathrm{mol}$ 的 $\mathrm B$ 转化为 $\mathrm C$：

| | $\mathrm A$ | $\mathrm B$ | $\mathrm C$ |
| --- | --- | --- | --- |
| 起始 (mol) | 1 | 0 | 0 |
| 转化 (mol) | $-x$ | $+x-y$ | $+y$ |
| 平衡 (mol) | $1-x$ | $x-y$ | $y$ |

**列两个平衡常数**（体积 $1\,\mathrm L$，浓度=物质的量）：

$$K_1=\frac{c(\mathrm B)}{c(\mathrm A)}=\frac{x-y}{1-x}=1$$

$$K_2=\frac{c(\mathrm C)}{c(\mathrm B)}=\frac{y}{x-y}=1$$

由 $K_2$：$x-y=y\Rightarrow x=2y$；代入 $K_1$：$\dfrac{y}{1-2y}=1\Rightarrow y=\dfrac13$，$x=\dfrac23$。

**验证与选项**：

- A 的转化率 $=\dfrac{x}{1}=\dfrac23\approx66.7\%$，A ✘；
- $n(\mathrm C)=y=\dfrac13\,\mathrm{mol}$，**C ✓**；
- $n(\mathrm B)=x-y=\dfrac13\,\mathrm{mol}$，B ✘；
- $n(\mathrm A):n(\mathrm C)=\dfrac13:\dfrac13=1:1$，D ✘。

选 **C**。

## 邪修解法

**"中间物质守恒递推"**：

> 串联平衡中，中间物质 $\mathrm B$ 是枢纽：$K_2=1$ 说明"C 与 B 等量"（$y=x-y$），$K_1=1$ 说明"B 与 A 等量"（$x-y=1-x$）⇒ $y=x-y=1-x$ ⇒ 直接得到 $1-x=\dfrac13$。

- 两个 $K$ 都等于 $1$ 时，三段式瞬间对称化：$\mathrm A:\mathrm B:\mathrm C=1:1:1$（总量守恒劈成三等份，$1\,\mathrm{mol}$ 分三份）——A 剩 $\dfrac13$，转化 $\dfrac23$；
- 如果 $K$ 不是 1（如 $K_1=2$），写成"比例递推"：$c(\mathrm B)=2c(\mathrm A)$、$c(\mathrm C)=c(\mathrm B)$，联合总量 $c(\mathrm A)+c(\mathrm B)+c(\mathrm C)=1$ 直接解。

30 秒出 C。

## 点评

- **总量守恒**是双平衡列式的"第三个方程"：$\sum n=1$（A+B+C 总量不变）——三段式自带，不要另加；
- 变式 1：体积换成 $2\,\mathrm L$ ⇒ 浓度全部减半，但两个 K 都仍是 1 ⇒ **结论不变**（分体积乘除约掉）——恒容双平衡若 $K$ 无量纲时结果与体积无关；
- 变式 2：问"B 的浓度"：$c(\mathrm B)=\dfrac13\,\mathrm{mol/L}$；问"C 的转化率"要分步：B→C 转化 $y/(x)=\dfrac{1/3}{2/3}=\dfrac12$；
- 常见错：把 $K_1$ 写成 $\dfrac{x}{1-x}$（漏掉 B 又被 C 抢走 $y$）——**中间物质必须"进-出"两笔都写**；
- 只给一个 K 的"单平衡"题是陷阱：本题若只给 $K_1$，不联动 $K_2$ 求不出 x——看到"双反应式"两个常数**必须都列**。
