---
title: 模型·等时圆
type: knowledge
status: draft
keywords: [等时圆, 二级结论, 光滑斜面, 自由落体]
updated: 2025-02-03
---

# ⚡ 模型·等时圆

> **适用特征**：光滑轨道 + 从同一点（或同一竖直直径端点）沿不同弦滑下，比较运动时间；"从最高点沿光滑弦滑到圆周上"。
>
> **风险提示**：只对**光滑**轨道成立（有摩擦时间不等）；弦必须从圆的最高点/最低点出发；大题需写出推导（$s=\dfrac12at^2$）。

## 结论

物体从竖直圆周的**最高点 $A$** 沿任意光滑弦滑到圆周上，所用时间**都相等**，等于沿竖直直径自由落体的时间：

$$
t=2\sqrt{\dfrac{R}{g}}
$$

同理，从圆周上任意点沿光滑弦滑到**最低点**，时间也相等，同为 $2\sqrt{\dfrac{R}{g}}$。

## 推导（一句话版）

弦长 $s=2R\cos\theta$（$\theta$ 为弦与竖直方向夹角），加速度 $a=g\cos\theta$，由 $s=\dfrac12at^2$ 得

$$
t=\sqrt{\dfrac{2s}{a}}=\sqrt{\dfrac{4R\cos\theta}{g\cos\theta}}=2\sqrt{\dfrac{R}{g}}
$$

$\cos\theta$ 上下约掉——**时间与弦的方向无关**。

## 变式

- 多个等时圆拼接：沿不同圆的不同弦，时间分别等于各自 $2\sqrt{R_i/g}$，比较 $R$ 即可；
- 光滑斜面不同倾角从同一高度滑下：$t=\sqrt{\dfrac{2h}{g\sin^2\theta}}$（这不是等时圆，别混）。

## 配套例题

- [等时圆实战](/node/physics/models/iso-circular/iso-circle)
