---
title: 水流冲击力（ρSv²）
type: example
status: draft
source: 自编（经典考法）
difficulty: 较难
applicability: 选填通用
risk: 流体冲击用"单位时间质量 × 速度变化"；水打到墙后沿墙流走（不反弹）时 Δv=v，反弹时 Δv=2v；ρSv 是单位时间质量。
fit:
  - 连续流体（水柱/沙流/子弹流）冲击
  - 求平均作用力
  - 选填题
updated: 2025-02-25
---

## 题目

水管喷嘴横截面积 $S=1\times10^{-3}\,\text{m}^2$，水以 $v=2\,\text{m/s}$ 的速度水平射出，垂直打在竖直墙壁上后沿墙流下（水密度 $\rho=1\times10^3\,\text{kg/m}^3$）。水对墙壁的平均作用力为（ ）

A. $4\,\text{N}$

B. $2\,\text{N}$

C. $8\,\text{N}$

D. $1\,\text{N}$

## 标准解法

**动量定理（连续流体）**：取 $\Delta t$ 时间内打到墙上的水为研究对象：

- 水的质量：$m=\rho V=\rho Sv\Delta t$；
- 速度变化（沿原方向为正）：水流沿墙流走，垂直墙方向末速为 $0$，$\Delta v=v$；
- 由动量定理 $F\Delta t=m\Delta v=\rho Sv^2\Delta t$：

$$
F=\rho Sv^2=10^3\times1\times10^{-3}\times2^2=4\,\text{N}
$$

选 **A**。

## 邪修解法

**适用特征**：流体冲击垂直平面 → **公式直接套**：

$$
F=\rho Sv^2
$$

**心算**：$10^3\times10^{-3}\times4=4\,\text{N}$。**30 秒选 A**。

## 点评

- 两个常见变式（数字相同结论不同）：
  - **完全反弹**（如弹性小球流）：$F=2\rho Sv^2$；
  - 打到**斜面**：分解速度，用垂直于斜面的分量；
- 通用公式：$F=\dfrac{\Delta p}{\Delta t}=\rho Sv(v_1\cos\theta_1+v_2\cos\theta_2)$（两分量沿法向相加）；
- 单位时间冲击量：每秒质量 $\rho Sv$（"流量 × 密度"）——先算它再乘速度，链条就清晰了；
- 大题书写："取 $\Delta t$ 内打到墙上的水为对象，$m=\rho Sv\Delta t$，由动量定理…"——微元法+动量定理两句话拿满分。
