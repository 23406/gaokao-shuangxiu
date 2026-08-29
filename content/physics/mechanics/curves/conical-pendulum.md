---
title: 圆锥摆·角速度与摆角的关系
type: example
status: draft
source: 自编（经典考法：圆锥摆为圆周运动典型模型）
difficulty: 中等
applicability: 选填通用
risk: 水平面内圆周运动的向心力是水平方向的分力（$mg\tan\theta$），不是绳的拉力的全部；竖直方向受力平衡（$T\cos\theta=mg$）；摆角公式 $\cos\theta=\dfrac{g}{\omega^2L}$ 成立条件是"稳定圆锥摆"。
fit:
  - 圆锥摆（水平圆周运动的摆）
  - 受力分解求角速度/摆角
  - 选填题
updated: 2025-03-05
---

## 题目

某圆锥摆（细线一端固定，一端系小球，小球在水平面内做匀速圆周运动）的摆线长为 $L$，角速度为 $\omega=\sqrt{\dfrac{2g}{L}}$。则摆线与竖直方向的夹角 $\theta$ 为（ ）

A. $60^\circ$

B. $45^\circ$

C. $30^\circ$

D. $90^\circ$

![](img/physics/conical-pendulum.svg)

## 标准解法

**第一步（受力分析）**：小球受重力 $mg$、绳拉力 $T$（沿绳方向）。水平面内圆周运动：

- 竖直方向平衡：$T\cos\theta=mg$；
- 水平方向提供向心力：$T\sin\theta=m\omega^2r$，其中半径 $r=L\sin\theta$。

**第二步（消 $T$ 解 $\theta$）**：两式相除（或直接 $mg\tan\theta=m\omega^2r$）：

$$mg\tan\theta=m\omega^2L\sin\theta\ \Rightarrow\ \tan\theta=\frac{\omega^2L}{g}\sin\theta$$

若 $\sin\theta\neq0$，两边除以 $\sin\theta$：

$$\cos\theta=\frac{g}{\omega^2L}=\frac{g}{\dfrac{2g}{L}\cdot L}=\frac12\ \Rightarrow\ \theta=60^\circ$$

选 **A**。（$\theta=0$ 时 $\sin\theta=0$ 是静止解，剔除。）

## 邪修解法

**结论公式秒杀**：

> **$\cos\theta=\dfrac{g}{\omega^2L}$**——摆角只由角速度与摆长决定（与质量无关）。

**为什么**：推导就两行：竖直 $T\cos\theta=mg$、水平 $T\sin\theta=m\omega^2L\sin\theta$，相除直接出 $\cos\theta$。可见"质量不出现"——因为重力与向心力都正比于 $m$，约掉了。

**速算**：$\omega^2L=2g$ ⇒ $\cos\theta=g/(2g)=1/2$ ⇒ $\theta=60^\circ$。

30 秒出 A。

## 点评

- 题目变体：问角速度 $\omega$：$\omega=\sqrt{\dfrac{g}{L\cos\theta}}$；问线速度 $v$：$v=\omega r=\omega L\sin\theta$；
- 若两摆线长相同时 $\omega$ 相同 ⇒ 摆角相同（$\cos\theta\propto1/\omega^2$）；质量不同不影响摆角——注意与"绳断"题型区分（绳的张力 $T=\dfrac{mg}{\cos\theta}$ 与质量有关）；
- 常见误区：把 $T\sin\theta$ 当 $mg$（那是单摆/竖直圆周）；忘了半径是 $L\sin\theta$ 不是绳长；
- 与"竖直圆周（绳6杆5）"区分：圆锥摆是**稳定圆周**匀速运行，没有最低最高点能量变换；
- 真题关联：圆周运动受力分析为新高考高频必考点。🔗 真题公开资料：[中国教育考试网·普通高考](https://gaokao.neea.edu.cn/)（官方试题评析）。
