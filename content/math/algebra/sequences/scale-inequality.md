---
title: 数列不等式放缩（拆项法）
type: example
status: draft
source: 自编（经典考法）
difficulty: 较难
applicability: 解答题为主（选填用特殊值快速验证）
risk: 放缩方向不能反（证 <2 要把每一项放**大**成可裂项形式）；裂项后剩余项符号要检查；首项常要单独保留（从第二项开始放缩）。
fit:
  - 1/n² 型求和证明 <C
  - 裂项相消衍生不等式
  - 数列压轴/选填验证
updated: 2025-02-15
---

## 题目

证明：对任意正整数 $n$，都有

$$
1+\dfrac1{2^2}+\dfrac1{3^2}+\cdots+\dfrac1{n^2}<2
$$

## 标准解法

**方法：放缩 + 裂项**。**放缩**：当 $k\ge2$ 时，

$$
\dfrac1{k^2}<\dfrac1{k(k-1)}=\dfrac1{k-1}-\dfrac1k
$$

**求和**：

$$
S_n=1+\sum_{k=2}^{n}\dfrac1{k^2}<1+\sum_{k=2}^{n}\left(\dfrac1{k-1}-\dfrac1k\right)
$$

裂项相消：

$$
\sum_{k=2}^{n}\left(\dfrac1{k-1}-\dfrac1k\right)=1-\dfrac1n
$$

所以

$$
S_n<1+\left(1-\dfrac1n\right)=2-\dfrac1n<2
$$

证毕。（$\dfrac1n>0$，故 $2-\dfrac1n<2$。）

## 邪修解法

**用途：选填验证量级**。**适用特征**：快速判断"和小于某个常数"是否成立 → **特殊值与量级双检**：

1. $n=1$：$S_1=1<2$ ✓；
2. $n=2$：$1+\dfrac14=1.25<2$ ✓；
3. 大 $n$ 量级：$\sum\dfrac1{k^2}<\dfrac{\pi^2}6\approx1.645$（巴塞尔问题，选填可直接引用）→ 远小于 2 ✓。

**30 秒定性**：通项 $\dfrac1{k^2}$ 收敛快（和有限），只要前几项不爆，结论必成立。

## 点评

- 放缩三件套（背住）：

| 目标 | 放缩式 |
| --- | --- |
| $\sum\dfrac1{k^2}$ 上界 | $\dfrac1{k^2}<\dfrac1{k(k-1)}=\dfrac1{k-1}-\dfrac1k$ |
| $\sum\dfrac1k$ 上界 | $\dfrac1k<\ln\dfrac{k}{k-1}$（由 $\ln(1+u)>\dfrac{u}{1+u}$ 推出）→ 和 $<\ln n$ |
| 分式型 | $\dfrac{1}{\sqrt k}<\dfrac{2}{\sqrt k+\sqrt{k-1}}=2(\sqrt k-\sqrt{k-1})$（有理化裂项） |

- "从第 2 项起放缩"是通用做法（首项保留，避免 $k=1$ 时分母为 0）；
- 大题模板："当 $k\ge2$ 时，$\dfrac1{k^2}<\dfrac1{k(k-1)}$，故 $S_n<\dots$"——放缩式必须写"为什么成立"（不等式依据）；
- 变式：证明 $\dfrac1{1^2}+\dfrac1{2^2}+\cdots+\dfrac1{n^2}<\dfrac53$ 时改用更精细的放缩 $\dfrac1{k^2}<\dfrac1{k^2-1}=\dfrac12\left(\dfrac1{k-1}-\dfrac1{k+1}\right)$（从第 $3$ 项起），得 $\sum<\dfrac11+\dfrac14+\dfrac12\left(\dfrac12+\dfrac13\right)=\dfrac53$（若仍用 $\dfrac1{k(k-1)}$ 最多到 $\dfrac74-\dfrac1n$，$\dfrac74>\dfrac53$ 证不出，必须换更细的放缩式）。
