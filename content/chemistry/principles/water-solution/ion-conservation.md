---
title: 溶液三守恒·物料/电荷/质子（两种算法）
type: example
status: draft
source: 自编（经典考法：盐类水解守恒为第 14 题热区）
difficulty: 中等
applicability: 选填压轴（常与电离平衡/水解平衡综合）
risk: 电荷守恒只对"溶液整体"成立（中性），系数=离子电荷数；物料守恒看"元素原子总数比"（含未电离的分子）；质子守恒=电荷−物料 或 水得失质子，二者必须同时正确，三个选项中常有两个正确一个错（要会判断哪个"不是恒等式"）。
fit:
  - NaHCO₃ 等混合盐溶液三守恒判断
  - 电荷/物料/质子守恒正误
  - 选填题
updated: 2025-03-09
---

## 题目

$0.1\,\mathrm{mol/L}$ 的 $\mathrm{NaHCO_3}$ 溶液中，下列说法正确的是（ ）

A. $c(\mathrm{Na^+})+c(\mathrm{H^+})=c(\mathrm{HCO_3^-})+c(\mathrm{CO_3^{2-}})+c(\mathrm{OH^-})$

B. $c(\mathrm{Na^+})=c(\mathrm{HCO_3^-})+c(\mathrm{H_2CO_3})+c(\mathrm{CO_3^{2-}})$

C. $c(\mathrm{H^+})+c(\mathrm{H_2CO_3})=c(\mathrm{CO_3^{2-}})+c(\mathrm{OH^-})$

D. $c(\mathrm{Na^+})+c(\mathrm{OH^-})=c(\mathrm{H^+})+c(\mathrm{HCO_3^-})+2c(\mathrm{CO_3^{2-}})$

## 标准解法

**三守恒逐个写**：

- **电荷守恒**（溶液必电中性，"正电荷总数=负电荷总数"，系数=电荷数）：

$$c(\mathrm{Na^+})+c(\mathrm{H^+})=c(\mathrm{HCO_3^-})+2c(\mathrm{CO_3^{2-}})+c(\mathrm{OH^-})$$

- **物料守恒**（Na 与溶解的碳元素总量比 $1:1$——碳酸氢钠中"一份 Na 配一份碳酸氢根"，无论怎么水解/电离，碳原子都在）：

$$c(\mathrm{Na^+})=c(\mathrm{HCO_3^-})+c(\mathrm{CO_3^{2-}})+c(\mathrm{H_2CO_3})$$

- **质子守恒**（水与溶质的质子得失相等；或由电荷−物料得到）：

$$c(\mathrm{H^+})+c(\mathrm{H_2CO_3})=c(\mathrm{CO_3^{2-}})+c(\mathrm{OH^-})$$

逐项对比：A 少 $c(\mathrm{CO_3^{2-}})$ 的系数 2 ✘；B ✓（物料）；C ✓（质子）；D 是把电荷守恒式左右两边的 $c(\mathrm{H^+})$ 与 $c(\mathrm{OH^-})$ 移项移反了（移项符号错：左边不应出现 $c(\mathrm{OH^-})$，而应含 $c(\mathrm{H^+})$）✘。**选 BC**。

## 邪修解法

**三句话快速判定**：

> **电荷看系数**（谁带两个负电就乘 2）、**物料看原子数**（Na:C=1:1 写全部三形态）、**质子=电荷−物料**（或"得质子=失质子"）。

**两种算法**（选填实战必会）：

1. **代数法（快）**：先把电荷守恒和物料守恒都写完，**质子守恒 = 电荷式 − 物料式**（相减后 Na⁺、H⁺ 相关项能合并的合并）——本**例**：电荷−物料得 $c(\mathrm{H^+})=c(\mathrm{CO_3^{2-}})+c(\mathrm{OH^-})-c(\mathrm{H_2CO_3})$ ⇒ 移项即 C；
2. **得失质子法（直觉）**：以 $\mathrm{H_2O}$、$\mathrm{HCO_3^-}$ 为基准：得质子的有 $\mathrm{CO_3^{2-}}$（得 1 → $\mathrm{HCO_3^-}$? 不——基准物得失要看"相对基准谁多质子"）……**最稳是法 1**；法 2 快速版口诀："**得质子一方 = 失质子一方**：$H_2CO_3$（碳酸根? ）"——写基准后：$\mathrm{HCO_3^-}$ 失质子→$\mathrm{CO_3^{2-}}$，得质子→$\mathrm{H_2CO_3}$；$\mathrm{H_2O}$ 失质子→$\mathrm{OH^-}$，得质子→$\mathrm{H^+}$ ⇒ $c(\mathrm{H^+})+c(\mathrm{H_2CO_3})=c(\mathrm{CO_3^{2-}})+c(\mathrm{OH^-})$ ✓（本知识卡正确性以法 1 为准）。

30 秒内锁 BC。

## 点评

- **三守恒链**（选填万能验证）：物料−电荷→质子；任何"看似正确"的选项都能用"三条恒等式"逐个检验；
- 混合溶液（如 $\mathrm{NaOH}+\mathrm{Na_2CO_3}$）物料守恒按**组成比**写：Na 总量 : C 总量 $=(2n_{\mathrm{Na_2CO_3}}+n_{\mathrm{NaOH}}):n_{CO_3^{2-}\text{总}}$；
- 弱酸弱碱盐（$\mathrm{NH_4HCO_3}$）：电荷 $c(\mathrm{NH_4^+})+c(\mathrm{H^+})=c(\mathrm{HCO_3^-})+2c(\mathrm{CO_3^{2-}})+c(\mathrm{OH^-})$；物料两个（N 与 C 各自守恒：$c(\mathrm{NH_4^+})+c(\mathrm{NH_3\cdot H_2O})=c(\mathrm{HCO_3^-})+c(\mathrm{CO_3^{2-}})+c(\mathrm{H_2CO_3})$）；
- 第 14 题（离子平衡综合）常与下列组合：$K_a$/$K_b$ 比较离子浓度大小、稀释比值 $\dfrac{c(\mathrm H^+)}{c(\mathrm{CH_3COO^-})}$ 变化、盐与酸等体积混合——**守恒式写全后，离子大小判断用"主次电离/水解"排序**；
- 浓度比较模板（$0.1\,\mathrm{mol/L}\ \mathrm{NaHCO_3}$）：$c(\mathrm{Na^+})>c(\mathrm{HCO_3^-})>c(\mathrm{OH^-})>c(\mathrm{H^+})>c(\mathrm{CO_3^{2-}})$——HCO₃⁻ 水解为主（略碱），CO₃²⁻ 只来自电离（很少）。
