---
title: 三角函数图像平移（先提系数）
type: example
status: draft
source: 自编（经典考法）
difficulty: 中档
applicability: 选填通用
risk: 平移量是"x 的位移"——代入 (x−φ) 后要乘上 ω（如 sin2x 右移 π/6 → sin(2x−π/3) 不是 sin(2x−π/6)）；先提系数再判平移方向。
fit:
  - y=sin(ωx) 平移/伸缩判断
  - 或由变换结果反推平移量
  - 选填题
updated: 2025-03-02
---

## 题目

将函数 $y=\sin2x$ 的图像向右平移 $\dfrac{\pi}{6}$ 个单位，所得图像对应的函数解析式为（ ）

A. $y=\sin\left(2x-\dfrac{\pi}{3}\right)$

B. $y=\sin\left(2x+\dfrac{\pi}{3}\right)$

C. $y=\sin\left(x-\dfrac{\pi}{6}\right)$

D. $y=\sin\left(2x-\dfrac{\pi}{6}\right)$

## 标准解法

**平移法则**："左加右减，对 $x$ 操作"：右移 $\dfrac{\pi}{6}$ 相当于 $x\to x-\dfrac{\pi}{6}$：

$$
y=\sin2x\ \Rightarrow\ y=\sin\left[2\left(x-\dfrac{\pi}{6}\right)\right]=\sin\left(2x-\dfrac{\pi}{3}\right)
$$

选 **A**。

## 邪修解法

**适用特征**：平移选择题 → **"先提系数"两步**：

1. 右移 $x$ 方向 $\dfrac{\pi}{6}$ ⇒ 括号内减 $\dfrac{\pi}{6}$；
2. **乘回 $ω=2$** ⇒ $\dfrac{\pi}{3}$ ⇒ $\sin\left(2x-\dfrac{\pi}{3}\right)$。

**20 秒选 A**——忘记"乘回 ω"就掉进 D 的陷阱。

## 点评

- "平移量 vs 相位变化"：图像平移 $\dfrac{\pi}{6}$，相位角变化 $\omega\cdot\dfrac{\pi}{6}$——**平移量是 $x$ 的位移，相位是 $x$ 位移乘 $ω$**；
- 周期变化反推：由 $\sin(2x-\varphi)$ 判断是"右移 $\dfrac{\varphi}{2}$"——**先还原成 $\sin2(x-\dfrac{\varphi}{2})$**；
- 若先伸缩后平移：顺序不同结果不同（"先平移后伸缩 = 先伸缩后平移的相位再除 ω"）——题干说清楚过程再操作；
- 风险：口决"左加右减"一律作用于 $x$，不是直接作用 $2x$——这是第一出错点；$y=\sin(2x-\dfrac{\pi}{3})$ 也可写成 $\sin2\left(x-\dfrac{\pi}{6}\right)$，两形式等价。
