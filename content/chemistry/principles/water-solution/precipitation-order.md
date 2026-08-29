---
title: 沉淀的先后顺序（临界浓度法）
type: example
status: draft
source: 自编（经典考法：沉淀溶解平衡为新课标卷高频）
difficulty: 较难
applicability: 选填通用
risk: 谁先沉淀比的是"开始沉淀所需沉淀剂离子浓度"，浓度越小越先生成——不同类型的沉淀（1:1 与 2:1）不能直接比 Ksp，必须折算！
fit:
  - 同离子沉淀的先后（混合溶液滴加）
  - Ksp 的应用与计算
  - 选填题
updated: 2025-03-03
---

## 题目

在 $c(\mathrm{Cl^-})=c(\mathrm{CrO_4^{2-}})=0.01\ \mathrm{mol/L}$ 的混合溶液中，缓慢滴加 $\mathrm{AgNO_3}$ 溶液。已知 $K_{sp}(\mathrm{AgCl})=1.8\times10^{-10}$，$K_{sp}(\mathrm{Ag_2CrO_4})=1.12\times10^{-12}$，下列说法正确的是（ ）

A. 先生成 $\mathrm{AgCl}$ 沉淀

B. 先生成 $\mathrm{Ag_2CrO_4}$ 沉淀

C. 两种沉淀同时生成

D. 无法比较先后

## 标准解法

**临界浓度法**：分别计算"开始沉淀所需 $c(\mathrm{Ag^+})$"：

- $\mathrm{AgCl}$：$c(\mathrm{Ag^+})=\dfrac{K_{sp}(\mathrm{AgCl})}{c(\mathrm{Cl^-})}=\dfrac{1.8\times10^{-10}}{0.01}=1.8\times10^{-8}\ \mathrm{mol/L}$；
- $\mathrm{Ag_2CrO_4}$：$c^2(\mathrm{Ag^+})\cdot c(\mathrm{CrO_4^{2-}})=K_{sp}$ ⇒ $c(\mathrm{Ag^+})=\sqrt{\dfrac{1.12\times10^{-12}}{0.01}}=\sqrt{1.12\times10^{-10}}\approx1.06\times10^{-5}\ \mathrm{mol/L}$。

**比较**：$1.8\times10^{-8}<1.06\times10^{-5}$ ⇒ 开始沉淀所需 $\mathrm{Ag^+}$ 浓度小 ⇒ **先沉淀的是 $\mathrm{AgCl}$**。

选 **A**。

## 邪修解法

**"比临界浓度，不比 Ksp"**：

- 谁先沉淀由"所需滴加离子浓度"决定：**需得越少，沉淀越先**；
- 类型不同（$\mathrm{AgCl}$ 是 1:1，$\mathrm{Ag_2CrO_4}$ 是 2:1）**必须算开方**，不能看到 $\mathrm{Ag_2CrO_4}$ 的 $K_{sp}$ 较小就说它先沉淀——那是经典陷阱！

口诀：**"1:1 除浓度的平方，2:1 开根号；同型看 Ksp，异型先折算"**。

## 点评

- 沉淀转化的延伸：向 $\mathrm{AgCl}$ 沉淀中加 $\mathrm{KI}$，由于 $K_{sp}(\mathrm{AgI})$ 更小，$\mathrm{AgCl}$ 会逐渐转化为 $\mathrm{AgI}$——"大 Ksp 转小 Ksp"；
- 变色终点：$K_{sp}$ 型决定滴定剂选择（如 $\mathrm{Ag_2CrO_4}$ 作指示剂时 $\mathrm{CrO_4^{2-}}$ 必须适当少量，否则 $\mathrm{AgCl}$ 之后的终点变色延迟）；
- 变式：若 $c(\mathrm{Cl^-})=0.1$、$c(\mathrm{CrO_4^{2-}})=0.001$——仍按临界浓度分别算，结论不变（临界浓度几乎总由大浓度的离子决定）；
- 真题关联：沉淀先后/沉淀转化与 Ksp 计算为新高考化学高频选择小题。🔗 真题公开资料：[中国教育考试网·普通高考](https://gaokao.neea.edu.cn/)（官方试题评析）。
