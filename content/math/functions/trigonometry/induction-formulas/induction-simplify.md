---
title: 诱导公式复合化简（纯标准解法）
type: example
status: draft
source: 自编
difficulty: 基础
updated: 2025-02-01
---

## 题目

化简：

$$
\dfrac{\sin(2\pi-\alpha)\cos(\pi+\alpha)}{\cos(\alpha-\pi)\sin(-\alpha)}
$$

## 标准解法

逐项用诱导公式化简，分子分母分别处理：

**分子**：

- $\sin(2\pi-\alpha)=-\sin\alpha$（$2\pi$ 是 $\dfrac{\pi}{2}$ 的 4 倍，偶数倍不变名；第四象限 $\sin$ 为负）
- $\cos(\pi+\alpha)=-\cos\alpha$（$\pi$ 是 2 倍偶数，不变名；第三象限 $\cos$ 为负）

分子 $=(-\sin\alpha)\cdot(-\cos\alpha)=\sin\alpha\cos\alpha$。

**分母**：

- $\cos(\alpha-\pi)=\cos(\pi-\alpha)=-\cos\alpha$（第二象限 $\cos$ 为负）
- $\sin(-\alpha)=-\sin\alpha$

分母 $=(-\cos\alpha)\cdot(-\sin\alpha)=\sin\alpha\cos\alpha$。

所以原式 $=\dfrac{\sin\alpha\cos\alpha}{\sin\alpha\cos\alpha}=1$（$\alpha$ 使分母不为零时成立）。

## 点评

- 本题没有邪修——化简题的答案依赖**全过程变号正确**，不存在"跳过步骤"的捷径，老老实实逐项化简就是最快的路。
- 这类题是"基础送分题"，但每年都有考生在 $\cos(\alpha-\pi)$ 这种"角在前"的形式上栽跟头：先把它写成熟悉的形式 $\cos(\pi-\alpha)$ 再判断符号。
- 化简结果别忘了说明定义域限制（分母 $\neq 0$），解答题会扣"完整性"分。
