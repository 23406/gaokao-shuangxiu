---
title: 直角三力平衡（tanθ 心算）
type: example
status: draft
source: 自编（经典考法）
difficulty: 中档
applicability: 选填通用
risk: 直角三力结论只适用于"一个力竖直、一个力水平"（直角）构型；一般角度构型要用拉密定理或正交分解。
fit:
  - 绳挂球 + 水平推力，或竖直墙夹球的静止问题
  - 其中一个力方向竖直、一个水平
  - 选填题
updated: 2025-02-14
---

## 题目

质量为 $m$ 的小球用轻绳悬挂，用水平恒力 $F$ 缓慢将小球推开，使绳与竖直方向成 $\theta$ 角（小球静止）。此时水平力 $F$ 的大小为（ ）

A. $mg\tan\theta$

B. $mg\cos\theta$

C. $mg\cot\theta$

D. $mg$

## 标准解法

**正交分解**（以小球为对象，竖直、水平建系）：

- 竖直方向：$T\cos\theta=mg$；
- 水平方向：$F=T\sin\theta$。

联立得：

$$
F=mg\tan\theta
$$

选 **A**。

## 邪修解法

**适用特征**：三力平衡，一个力竖直（G）一个力水平（F）→ **直角三力三角形心算**：$G$、$F$ 是两条直角边，$T$ 是斜边：

$$
\tan\theta=\dfrac{F}{G}\Rightarrow F=mg\tan\theta
$$

**10 秒出答案：A**——"对边比邻边"，用 $\tan$ 直接写。

## 点评

- 配套结论（一起背）：绳拉力 $T=\dfrac{mg}{\cos\theta}$，推力 $F=mg\tan\theta$；
- 同构变式：光滑球夹在竖直墙与斜面之间（见整体隔离例题），墙弹力 $N_1=mg\tan\theta$ 一模一样的结构；
- 若"缓慢推开"改成"突然推到 $\theta$ 位置"，这是**摆动**问题（圆周运动），不再是平衡，$T=mg\cos\theta+$向心力项——看清"缓慢/静止"关键词；
- 大题书写："水平方向 $F=T\sin\theta$，竖直方向 $T\cos\theta=mg$，联立得…"两句拿满分。
