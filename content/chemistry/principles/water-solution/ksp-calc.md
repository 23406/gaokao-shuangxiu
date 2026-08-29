---
title: Ksp 计算饱和浓度（开方心算）
type: example
status: draft
source: 自编（经典考法）
difficulty: 中档
applicability: 选填通用
risk: 同类型沉淀（AB 型）才可直接开方；AB₂ 型要开立方（含系数）；Ksp 只与温度有关，比较溶解度需同类型。
fit:
  - 已知 Ksp 求饱和溶液离子浓度
  - 同类型沉淀比较溶解度
  - 选填题
updated: 2025-03-01
---

## 题目

$25°C$ 时，$AgCl$ 的 $K_{sp}=1.8\times10^{-10}$，则其饱和溶液中 $c(Ag^+)$ 约为（ ）

A. $1.34\times10^{-5}\,\text{mol/L}$

B. $1.8\times10^{-5}\,\text{mol/L}$

C. $3.6\times10^{-5}\,\text{mol/L}$

D. $1.34\times10^{-10}\,\text{mol/L}$

## 标准解法

**溶解平衡**：$AgCl(s)\rightleftharpoons Ag^++Cl^-$，饱和时 $c(Ag^+)=c(Cl^-)=x$：

$$
K_{sp}=x^2=1.8\times10^{-10}
$$

$$
x=\sqrt{1.8\times10^{-10}}=\sqrt{1.8}\times10^{-5}\approx1.34\times10^{-5}\,\text{mol/L}
$$

选 **A**。

## 邪修解法

**适用特征**：AB 型沉淀 → **"Ksp 开方即浓度"**：

$$
c(Ag^+)=\sqrt{K_{sp}}=\sqrt{1.8}\times10^{-5}\approx1.34\times10^{-5}
$$

**30 秒选 A**——先开方再补 $10^{-5}$，量级用 $\sqrt{1.8}\approx1.34$ 心算。

## 点评

- 三型速查（Ksp 与浓度换算）：

| 型 | 关系 | 例 |
| --- | --- | --- |
| AB（1:1） | $c=\sqrt{K_{sp}}$ | AgCl、BaSO₄ |
| AB₂（1:2） | $c(A^{2+})=\sqrt[3]{\dfrac{K_{sp}}{4}}$ | CaF₂、Mg(OH)₂ |
| A₂B（2:1） | 同理 | Ag₂CrO₄ |

- 同类型比较：$K_{sp}$ **小**者难溶（同型直接比）；不同类型（AgCl vs Ag₂CrO₄）**不能**直接比 Ksp，要算溶解度（$S=\sqrt{K_{sp}}$ 或 $\sqrt[3]{K_{sp}/4}$）；
- 加入 $Cl^-$ 后沉淀溶解平衡左移（同离子效应）：$c(Ag^+)=\dfrac{K_{sp}}{c(Cl^-)}$——"Ksp 是乘积不变"；
- 风险：$K_{sp}$ 单位随类型不同（AB: mol²/L²；AB₂: mol³/L³），只比数值不比单位；题目温度变则 Ksp 变。
