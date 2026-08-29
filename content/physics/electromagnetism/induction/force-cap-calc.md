---
title: 恒力+电容模型计算（等效质量）
type: example
status: draft
source: 自编（经典考法）
difficulty: 较难
applicability: 选填专用（大题需按五模型推导书写）
risk: 该模型是"匀加速"（不是匀速！）——安培力与速度同增，合力恒定时加速度恒定；CB²L² 是电容"等效质量"，别漏。
fit:
  - 恒力拉棒+电容器接在回路
  - 求加速度/速度/电流
  - 选填题
updated: 2025-02-28
---

## 题目

光滑水平导轨间距 $L=1\,\text{m}$，磁场 $B=1\,\text{T}$ 垂直导轨平面，棒质量 $m=1\,\text{kg}$，用平行导轨的恒力 $F=4\,\text{N}$ 拉棒；棒两端并联电容 $C=1\,\text{F}$（导轨、棒及连线电阻不计，回路无电阻）。棒由静止开始运动，其加速度为（ ）

A. $2\,\text{m/s}^2$

B. $4\,\text{m/s}^2$

C. $1\,\text{m/s}^2$

D. $3\,\text{m/s}^2$

## 标准解法

**关键：$R=0$ ⇒ 电容电压 = 反电动势**：$U_C=BLv$。

**电流**：$I=C\dfrac{dU_C}{dt}=CBL\cdot a$；**安培力**：$F_{安}=BIL=CB^2L^2a$。

**牛顿第二定律**：

$$
F-F_{安}=ma\Rightarrow F=(m+CB^2L^2)a
$$

$$
a=\dfrac{F}{m+CB^2L^2}=\dfrac{4}{1+1\times1\times1}=\dfrac{4}{2}=2\,\text{m/s}^2
$$

**判性质**：$a$ 恒定 ⇒ **匀加速直线运动**（这正是"恒力+电容"模型与"恒力+电阻"（最终匀速）的差别）。

选 **A**。

## 邪修解法

**适用特征**：恒力+电容 → **五模型结论直接套**（[五模型知识卡](/node/physics/electromagnetism/induction/rod-models)含推导）：

$$
a=\dfrac{F}{m+CB^2L^2}=\dfrac{4}{1+1}=2\,\text{m/s}^2
$$

**30 秒选 A**——"电容加进质量"一句话。

## 点评

- 三个量随手可问（同一模型）：
  - 加速度 $a=\dfrac{F}{m+CB^2L^2}$（恒定）；
  - 电流 $I=CBL\cdot a=\dfrac{CFBL}{m+CB^2L^2}$（恒定）；
  - 电容电压 $U_C=BLv$（随 $v$ 线性增大）；
- **对比记忆**：恒力+电阻 → 匀速（$v=\dfrac{FR}{B^2L^2}$）；恒力+电容 → 匀加速——"电阻耗能、电容储能"的本质区别；
- 速度图像：$v$-$t$ 为直线（匀加速），别忘了和"电阻版"曲线对照（见[v-t 图像例题](/node/physics/electromagnetism/induction/induction-comprehensive)）；
- 大题书写："回路无电阻，$U_C=BLv$，故 $I=CBL\dfrac{dv}{dt}=CBL a$…由 $F-CB^2L^2a=ma$ 得…"——先列"电容电压等于反电动势"再列牛二。
