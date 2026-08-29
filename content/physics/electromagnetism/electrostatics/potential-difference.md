---
title: 电势差与电场力做功
type: example
status: draft
source: 自编（经典考法）
difficulty: 中等
applicability: 选填通用
risk: W=qU 里电性、正负、方向三处符号最容易翻车：正电荷沿电场力方向移动 W>0，电场力做负功时先判断再代绝对值。
fit:
  - 电场力做功与电势差的关系（W=qU）
  - 电势高低比较（做功正负判断）
  - 选填题
updated: 2025-03-03
---

## 题目

在匀强电场中，把带正电的电荷 $q=2\times10^{-6}\ \mathrm{C}$ 从 $A$ 点移动到 $B$ 点，电场力做功 $W=4\times10^{-4}\ \mathrm{J}$。下列说法正确的是（ ）

A. $U_{AB}=200\ \mathrm{V}$，且 $\varphi_A>\varphi_B$

B. $U_{AB}=200\ \mathrm{V}$，且 $\varphi_A<\varphi_B$

C. $U_{AB}=8\times10^{-4}\ \mathrm{V}$

D. $U_{AB}=0.5\ \mathrm{V}$

## 标准解法

**电势差定义**（电场力做功）：$W=qU_{AB}$，即

$$U_{AB}=\frac{W}{q}=\frac{4\times10^{-4}}{2\times10^{-6}}=200\ \mathrm{V}$$

**符号判断**：$U_{AB}=\varphi_A-\varphi_B>0$ ⇒ $\varphi_A>\varphi_B$。

物理意义验证：正电荷被电场力从 A 移到 B 过程中**做正功**，电势能 $E_p=q\varphi$ 减小 ⇒ $\varphi_A>\varphi_B$，两者一致 ✓。

选 **A**。

## 邪修解法

**"正电荷顺势走，电势往下掉"**口诀：

- 正电荷沿**电场线方向**移动，电场力做正功，电势**降低**（$\varphi_A>\varphi_B$）；
- 反过来说：电场力对正电荷做正功 ⇒ 起点电势高于终点。

**先算比值再定符号**：$\dfrac{W}{q}=\dfrac{4\times10^{-4}}{2\times10^{-6}}=2\times10^{2}=200$——数字上"负次幂相减"：$10^{-4}\div10^{-6}=10^2$，即 $2\times100=200$。30 秒选 A。

## 点评

- 公式系：$W_{AB}=qU_{AB}=q(\varphi_A-\varphi_B)=-\Delta E_p$——四个式子是同一句话，考前默写一遍；
- 常见翻车点：①$U_{AB}$ 与 $U_{BA}$ 差一符号（$U_{BA}=-U_{AB}$）；②代负电荷时忘符号——先判断方向再代绝对值更稳；③把 $W$ 当 $V$ 相除（单位 L vs V）；
- 变式：问"电荷从 B 移到 A 电场力做功"——$W_{BA}=qU_{BA}=-4\times10^{-4}\ \mathrm{J}$（做负功）；
- 若再给 $B$ 点电势 $\varphi_B=100\ \mathrm V$，则 $\varphi_A=300\ \mathrm V$，而 $A$ 点电势能 $E_p=q\varphi_A=6\times10^{-4}\ \mathrm{J}$——"电势、电势差、电势能"三连套路。