---
title: 诱导公式求值（特殊值法秒杀）
type: example
status: draft
source: 自编（改编自新课标卷选填高频考法）
difficulty: 中档
applicability: 选填专用
risk: 特殊值法只适用于选择题/填空题；解答题必须写出诱导公式的完整推导步骤，直接赋值会被按"无过程"处理扣分。
fit:
  - 求值题，条件只有一个等式
  - 答案只依赖条件本身（定值）
  - 选填题，不需要过程
updated: 2025-02-01
---

## 题目

已知 $\sin(\pi+\alpha)=\dfrac{1}{2}$，且 $\alpha$ 为第四象限角，求：

(1) $\cos\left(\dfrac{3\pi}{2}+\alpha\right)$ 的值；

(2) $\tan(\pi-\alpha)$ 的值。

## 标准解法

**(1)** 由诱导公式 $\sin(\pi+\alpha)=-\sin\alpha$，得 $\sin\alpha=-\dfrac12$。

对 $\cos\left(\dfrac{3\pi}{2}+\alpha\right)$：$\dfrac{3\pi}{2}$ 是 $\dfrac{\pi}{2}$ 的 3 倍（奇数）→ 变名 $\cos\to\sin$；$\dfrac{3\pi}{2}+\alpha$ 落在第四象限，$\cos$ 为正 → 原式 $=\sin\alpha=-\dfrac12$。

**(2)** 因为 $\alpha$ 在第四象限，$\cos\alpha=\sqrt{1-\sin^2\alpha}=\sqrt{1-\dfrac14}=\dfrac{\sqrt3}{2}$，

所以 $\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}=-\dfrac{1}{\sqrt3}$。

再由 $\tan(\pi-\alpha)=-\tan\alpha$（$\pi$ 的整数倍不变名，第二象限 $\tan$ 为负），得

$$
\tan(\pi-\alpha)=\dfrac{1}{\sqrt3}=\dfrac{\sqrt3}{3}
$$

## 邪修解法

**适用特征**：条件只给一个等式 + 角限定了象限 → 直接挑一个**满足条件的特殊角**代入，选填题心算秒杀。

**思路**：$\alpha$ 是第四象限角且 $\sin\alpha=-\dfrac12$ → 直接取 $\alpha=-\dfrac{\pi}{6}$（即 $-30°$，完全满足条件）。

(1) $\cos\left(\dfrac{3\pi}{2}-\dfrac{\pi}{6}\right)=\cos\dfrac{4\pi}{3}=\cos 240°=-\dfrac12$

(2) $\tan\left(\pi+\dfrac{\pi}{6}\right)=\tan\dfrac{7\pi}{6}=\tan\dfrac{\pi}{6}=\dfrac{\sqrt3}{3}$

**全程心算 10 秒，一条诱导公式都不用背。** 核心逻辑：特殊角也满足题目条件，所以它算出的答案就是题目的答案。

## 点评

- 特殊值法的前提是**答案是定值**：题目条件唯一确定所求值时才安全。若答案依赖参数/区间，赋值可能踩坑。
- 考试中遇到"条件给等式 + 选填求值"，第一反应就是特殊值法；算完再用口诀验算一遍，双保险。
