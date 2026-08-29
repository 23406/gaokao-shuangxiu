---
title: 等效平衡判断（恒温恒容）
type: example
status: draft
source: 自编（经典考法）
difficulty: 较难
applicability: 选填通用
risk: 等效判断的分水岭是"恒容还是恒压"+"反应前后气体分子数变不变"——恒容下若 Δn≠0，必须"折算后完全一样"；这是全章最大的思维陷阱。
fit:
  - 等效平衡的建立条件
  - 恒温恒容 vs 恒温恒压
  - 选填题
updated: 2025-03-03
---

## 题目

恒温恒容条件下，向密闭容器中充入 $1\ \mathrm{mol}\ \mathrm{N_2}$ 和 $3\ \mathrm{mol}\ \mathrm{H_2}$，发生反应 $\mathrm{N_2}+3\mathrm{H_2}\rightleftharpoons2\mathrm{NH_3}$ 建立平衡。下列投料方式达到平衡后，与上述平衡**等效**的是（ ）

A. 充入 $2\ \mathrm{mol}\ \mathrm{NH_3}$

B. 充入 $1\ \mathrm{mol}\ \mathrm{NH_3}$

C. 充入 $2\ \mathrm{mol}\ \mathrm{N_2}$ 和 $6\ \mathrm{mol}\ \mathrm{H_2}$

D. 充入 $1\ \mathrm{mol}\ \mathrm{N_2}$、$3\ \mathrm{mol}\ \mathrm{H_2}$ 和 $1\ \mathrm{mol}\ \mathrm{NH_3}$

## 标准解法

**判定策略**：把投料"折算"到方程式同一侧，看是否可还原为相同起始态。

- **先判断条件**：恒温**恒容** + 反应 $\Delta n=2-4=-2\ne0$（气体分子数变化）⇒ 只有"折算后起始物质**完全相同**"才等效；
- A：$2\ \mathrm{mol}\ \mathrm{NH_3}$ 完全折算回反应物：$2\mathrm{NH_3}\rightarrow\mathrm{N_2}+3\mathrm{H_2}$，即 $1\ \mathrm{mol}\ \mathrm{N_2}+3\ \mathrm{mol}\ \mathrm{H_2}$——与原起始态完全相同 ✓；
- B：$1\ \mathrm{mol}\ \mathrm{NH_3}$ 折算为 $0.5\ \mathrm{mol}\ \mathrm{N_2}+1.5\ \mathrm{mol}\ \mathrm{H_2}$，不同，错；
- C：$2\ \mathrm{N_2}+6\ \mathrm{H_2}$ 是原来的两倍——恒容下压强不同，平衡位置不同，错；
- D：额外多 $1\ \mathrm{mol}\ \mathrm{NH_3}$，不同，错。

选 **A**。

## 邪修解法

**三步判断法**（30 秒）：

1. **看容器**：恒容？恒压？
2. **看 Δn**：反应前后气体分子总数变没变？
3. **套口诀**：

> **"恒容变分子 → 必须一模一样；恒容不变分子、恒压情况 → 成比例就行"**（分子=气体分子总数）

- 本题：恒容 + 变分子 ⇒ 找"折算后完全一样"的选项 ⇒ 只有 A（$2\ \mathrm{mol}\ \mathrm{NH_3}\Leftrightarrow1:3$）；
- 若题干换成"恒温恒压"，C 也能等效（等比即等效）——**一个条件的差别，答案完全不同**。

## 点评

- 为什么恒容变分子要"完全一样"：压强随投料量改变，而 $\Delta n\ne0$ 时压强变化会移动平衡 ⇒ 各组分含量改变；
- 为什么恒容 $\Delta n=0$（如 $\mathrm{A+B}\rightleftharpoons2\mathrm{C}$）只需"成比例"：压强不影响平衡，等比投料只等比放大各组分浓度，百分含量相同；
- 变式：恒温恒容下 $2\mathrm{SO_2}+\mathrm{O_2}\rightleftharpoons2\mathrm{SO_3}$，与"$2\ \mathrm{mol}\ \mathrm{SO_2}+1\ \mathrm{mol}\ \mathrm{O_2}$"等效的是"$2\ \mathrm{mol}\ \mathrm{SO_3}$"（折算 $2\mathrm{SO_3}\Rightarrow2\mathrm{SO_2}+\mathrm{O_2}$ ✓ 完全相同）——同样套路；
- 注意措辞："等效平衡"只要求各组分**百分含量**相同，不一定物质的量相同；题目若问"转化率相同"则在等效条件下也成立。
