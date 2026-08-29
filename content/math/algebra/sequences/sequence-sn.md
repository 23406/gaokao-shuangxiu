---
title: 已知前n项和求通项与裂项求和（n=1检验法）
type: example
status: draft
source: 自编（经典考法）
difficulty: 中档
applicability: 选填专用
risk: n=1 检验法只能验证选项正确性；求 a_n 时 S_1 与 S_n-S_{n-1} 可能不一致（a_1 不满足 n≥2 的通式），此时必须分段写。
fit:
  - 已知 S_n 求 a_n 或数列求和
  - 选项含 n 的表达式
  - 选填题
updated: 2025-02-02
---

## 题目

已知数列 $\{a_n\}$ 的前 $n$ 项和 $S_n=n^2+n$，数列 $\left\{\dfrac{1}{a_n a_{n+1}}\right\}$ 的前 $n$ 项和为（ ）

A. $\dfrac{n}{2(n+1)}$

B. $\dfrac{n}{4(n+1)}$

C. $\dfrac{n}{4(n+2)}$

D. $\dfrac{n+1}{4(n+2)}$

## 标准解法

**第一步（求 $a_n$）**：当 $n\ge2$ 时

$$
a_n=S_n-S_{n-1}=(n^2+n)-\big[(n-1)^2+(n-1)\big]=2n
$$

又 $a_1=S_1=2$ 满足 $2n$（$n=1$ 时 $2n=2$ ✓），所以 $a_n=2n$（$n\in\mathbb{N}^*$）。

**第二步（裂项）**：

$$
\dfrac{1}{a_n a_{n+1}}=\dfrac{1}{2n\cdot2(n+1)}=\dfrac14\left(\dfrac1n-\dfrac1{n+1}\right)
$$

**第三步（求和）**：

$$
T_n=\dfrac14\left[\left(1-\dfrac12\right)+\left(\dfrac12-\dfrac13\right)+\cdots+\left(\dfrac1n-\dfrac1{n+1}\right)\right]=\dfrac14\left(1-\dfrac1{n+1}\right)=\dfrac{n}{4(n+1)}
$$

选 **B**。

## 邪修解法

**适用特征**：选项是含 $n$ 的式子 → **代入 $n=1$ 检验**：$n=1$ 时一切求和都退化为第一项，心算即可。

**操作**：

- $T_1=\dfrac{1}{a_1 a_2}$：$a_1=S_1=2$，$a_2=S_2-S_1=6-2=4$，所以 $T_1=\dfrac1{2\times4}=\dfrac18$；
- 逐项代入选项 $n=1$：A：$\dfrac{1}{2\times2}=\dfrac14$ ✘；B：$\dfrac{1}{4\times2}=\dfrac18$ ✓；C：$\dfrac{1}{4\times3}=\dfrac1{12}$ ✘；D：$\dfrac{2}{4\times3}=\dfrac16$ ✘。

选 **B**，两个乘法心算搞定。若 $n=1$ 检验后还有多个幸存者，再代 $n=2$ 补一刀。

## 点评

- **$n=1$ 是数列选填的万能校验点**：通项、求和、递推公式全都能用首项验证；
- 此方法顺带帮你避坑：如果 $a_1$ 不满足 $n\ge2$ 的通式（分段数列），代入 $n=1$ 时选项立刻露馅；
- 大题仍需完整三步：求通项 → 裂项 → 相消，缺一不可。
