---
title: 数列与导数交汇（对数放缩证和式）
type: example
status: draft
source: 自编（经典考法）
difficulty: 较难
applicability: 解答题为主（选填可用小值验证）
risk: 放缩链 $\ln(1+x)>\dfrac{x}{1+x}$（$x>0$）是最常见对数放缩：每项放缩成"可裂项的对数差"再相消；方向必须一致。
fit:
  - 证明 Σ1/k 与 ln n 的关系
  - 数列+导数交汇（放缩+裂项）
  - 选填验证/大题主证
updated: 2025-02-27
---

## 题目

已知 $x>0$ 时 $\ln(1+x)>\dfrac{x}{1+x}$ 恒成立。由该不等式可得（ ）

A. $\dfrac11+\dfrac12+\cdots+\dfrac1n<1+\ln n$

B. $\dfrac11+\dfrac12+\cdots+\dfrac1n<\ln n$

C. $\dfrac11+\dfrac12+\cdots+\dfrac1n<2$

D. 无法比较

## 标准解法

**放缩成对数差**：取 $x=\dfrac1k$（$k\ge1$）：

$$
\ln\left(1+\dfrac1k\right)=\ln\dfrac{k+1}{k}>\dfrac{1/k}{1+1/k}=\dfrac{1}{k+1}
$$

**从 $k=1$ 到 $n-1$ 累加**：

$$
\sum_{k=1}^{n-1}\dfrac1{k+1}<\sum_{k=1}^{n-1}\ln\dfrac{k+1}{k}=\ln n
$$

即 $\dfrac12+\dfrac13+\cdots+\dfrac1n<\ln n$。

**补上首项**：

$$
\dfrac11+\dfrac12+\cdots+\dfrac1n=1+\sum_{k=1}^{n-1}\dfrac1{k+1}<1+\ln n
$$

选 **A**。

## 邪修解法

**适用特征**：含"倒数求和"与"$\ln n$"的选项 → **小值验证三连**：

- $n=2$：左边 $=1+\dfrac12=1.5$，右边 $=1+\ln2\approx1.693$ ⇒ $1.5<1.693$ ✓；
- $n=3$：左边 $\approx1.833$，右边 $=1+\ln3\approx2.099$ ✓；
- 趋势：对数增长速度远慢于倒数求和？反了——$\ln n$ 增长**慢**，右边 $1+\ln n$ 比左边"多出约 1"——只需保证每步 $<1$ 放缩成立，大 $n$ 依然成立。

**30 秒锁定 A**（$n\ge2$ 时严格成立；$n=1$ 时左边 $=1$、右边 $=1$，取等——见点评的严谨性讨论）。

## 点评

- **本例题的教训**：放缩导出的是 **$<$（严格）**，但 $n=1$ 边界处首项 $1$ 与 $1+\ln1=1$ 相等——严谨表述应为 $\sum\limits_{k=1}^{n}\dfrac1k<1+\ln n$ 对 $n\ge2$ 成立（$n=1$ 时取等）。若题目给的选项无例外，按出题意图选 A；**答题时补充"当 $n\ge2$ 时"** 更严谨；
- 常用对数放缩链（背住）：
  - $\ln(1+x)>\dfrac{x}{1+x}$（$x>0$，本题）；
  - $\ln(1+x)<x$（$x>0$，"对数比真数小"）；
  - $\ln x\le x-1$（$x>0$）；
- 套路总结：**见到 $\sum\dfrac1k$ 与 $\ln$ 同框 → 找能裂项成对数差的放缩**（$\ln\dfrac{k+1}{k}$ 是天然"裂项对数"）；
- 大题书写："取 $x=\dfrac1k$，由 $\ln(1+x)>\dfrac{x}{1+x}$ 得 $\dfrac1{k+1}<\ln\dfrac{k+1}{k}$，累加得…"——一行放缩、一行累加、一行结论。
