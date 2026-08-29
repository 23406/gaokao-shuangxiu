---
title: 诱导公式
type: knowledge
status: draft
keywords: [诱导公式, 奇变偶不变, 符号看象限, 三角函数, 化简求值]
updated: 2025-02-01
---

# 诱导公式

## 一句话记忆

> **奇变偶不变，符号看象限。**

把任意角写成 $k\cdot\dfrac{\pi}{2}\pm\alpha$（$k\in\mathbb{Z}$，$\alpha$ 为锐角）：

- **奇变偶不变**：$k$ 为**奇数**，函数名改变（$\sin\leftrightarrow\cos$，$\tan\leftrightarrow\cot$）；$k$ 为**偶数**，函数名不变。
- **符号看象限**：把 $\alpha$ 看作锐角，判断 $k\cdot\dfrac{\pi}{2}\pm\alpha$ 所在象限，取**变名前的原函数**在该象限的符号。

## 常用公式表（用口诀现场推，不用背）

| 角 | $\sin$ | $\cos$ | $\tan$ |
| --- | --- | --- | --- |
| $-\alpha$ | $-\sin\alpha$ | $\cos\alpha$ | $-\tan\alpha$ |
| $\pi-\alpha$ | $\sin\alpha$ | $-\cos\alpha$ | $-\tan\alpha$ |
| $\pi+\alpha$ | $-\sin\alpha$ | $-\cos\alpha$ | $\tan\alpha$ |
| $2\pi-\alpha$ | $-\sin\alpha$ | $\cos\alpha$ | $-\tan\alpha$ |
| $\dfrac{\pi}{2}-\alpha$ | $\cos\alpha$ | $\sin\alpha$ | $\cot\alpha$ |
| $\dfrac{\pi}{2}+\alpha$ | $\cos\alpha$ | $-\sin\alpha$ | $-\cot\alpha$ |
| $\dfrac{3\pi}{2}-\alpha$ | $-\cos\alpha$ | $-\sin\alpha$ | $\cot\alpha$ |
| $\dfrac{3\pi}{2}+\alpha$ | $-\cos\alpha$ | $\sin\alpha$ | $-\cot\alpha$ |

验证一例：$\cos\left(\dfrac{3\pi}{2}+\alpha\right)$。$\dfrac{3\pi}{2}$ 是 $\dfrac{\pi}{2}$ 的 3 倍（奇数）→ 变名：$\cos\to\sin$；$\dfrac{3\pi}{2}+\alpha$ 在第四象限，第四象限 $\cos$ 为正 → 结果 $=+\sin\alpha$。

## 本质：单位圆对称性

全部 36 条公式都是单位圆上对称操作的体现，记口诀本质上是在"算对称"：

- $\pi+\alpha$：关于原点对称（横纵坐标都变号）
- $-\alpha$：关于 $x$ 轴对称
- $\pi-\alpha$：关于 $y$ 轴对称
- $\dfrac{\pi}{2}-\alpha$：终边关于直线 $y=x$ 对称（坐标互换 → 函数名互换）；$\dfrac{\pi}{2}+\alpha$：终边由 $\alpha$ 绕原点旋转 $\dfrac{\pi}{2}$ 得到（坐标 $(x,y)\to(-y,x)$，同样坐标互换 → 函数名互换，符号另判）

## 易错点（高考高频失分点）

1. **先变名，再定号**：符号判断用的是"变名前的函数"在该象限的符号，别拿变名后的函数定号。
2. $\sin(\pi-\alpha)=\sin\alpha$，$\cos(\pi-\alpha)=-\cos\alpha$——一正一负，别记反。
3. 只有 $\dfrac{\pi}{2}$ 的**奇数倍**才变名，$\pi$、$2\pi$ 的整数倍**不变名**。
4. 化简含 $k\pi$ 的式子时，先讨论 $k$ 的奇偶再套口诀，不要硬套。

## 题型地图

- 求值型：给一个三角函数值，求另一个 → 选填可特殊值法秒杀（见例题）
- 化简型：多公式复合化简 → 通分/约分/统一角
- 证明型：三角形内角恒等式 → 利用 $A+B+C=\pi$
