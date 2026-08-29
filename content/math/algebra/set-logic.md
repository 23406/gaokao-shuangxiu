---
title: 集合与常用逻辑
type: knowledge
status: draft
keywords: [集合运算, 子集, 充分必要条件, 量词]
updated: 2025-02-14
---

# 集合与常用逻辑

## 集合（新高考第 1~2 题常客）

- 表示：列举/描述；元素三特性：**确定性、互异性、无序性**；
- 关系：$A\subseteq B$（子集）；$A\subsetneqq B$（真子集）；空集 $\varnothing$ 是任何集合的子集；
- 运算：$A\cup B$（并）、$A\cap B$（交）、$\complement_U A$（补）；
- 数集符号：$\mathbb{N}$ 自然数、$\mathbb{Z}$ 整数、$\mathbb{Q}$ 有理数、$\mathbb{R}$ 实数。

**常用结论**：

- $A\cap B=A\Leftrightarrow A\subseteq B$；$A\cup B=B\Leftrightarrow A\subseteq B$；
- 德摩根律：$\complement(A\cup B)=(\complement A)\cap(\complement B)$；
- 含参集合题：$B\subseteq A$ 时**必须讨论 $B=\varnothing$**（经典漏解）。

## 充分必要条件

- 若 $p\Rightarrow q$：$p$ 是 $q$ 的**充分**条件，$q$ 是 $p$ 的**必要**条件；
- $p\Leftrightarrow q$：充要条件；
- 判断口诀："**小推大**"：小范围成立 ⇒ 大范围成立（小范围是充分条件）；
- 集合法：$p$ 的解集 $P$，$q$ 的解集 $Q$：$P\subseteq Q$ ⇒ $p$ 是 $q$ 的充分条件。

## 量词与否定

- 全称：$\forall x\in D, p(x)$；存在：$\exists x\in D, p(x)$；
- 否定规则："**改量词，否结论**"（$\forall$ 变 $\exists$，且对 $p(x)$ 取否定）——注意是"存在，非 p"，结论部分整体否定。

## 邪修提示

- 选填集合运算：**画数轴/Venn**（有区间画数轴，有交并画 Venn），别心算；
- 含参集合题必漏空集——看到 "$B\subseteq A$" 先写"① $B=\varnothing$ ② $B\neq\varnothing$"；
- 充分必要判断："小推大"——把两个条件各写一个"代表性例子"验证方向；
- 风险：$\varnothing\in\{0\}$ 错（$\varnothing$ 不是元素）；$0\in\varnothing$ 错；注意"集合中的元素"与"集合"区别。
