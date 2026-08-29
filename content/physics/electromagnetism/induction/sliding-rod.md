---
title: 滑行棒总位移（动量+电量）
type: example
status: draft
source: 自编（经典考法）
difficulty: 较难
applicability: 选填通用
risk: 位移公式 x=mv₀R/(B²L²) 只适用于"纯电阻回路+无外恒力"；R 是回路总电阻；先确认是"滑行棒"模型再套。
fit:
  - 导轨上棒有初速、纯电阻回路
  - 求滑行总位移/电量/热量
  - 选填题
updated: 2025-02-22
---

## 题目

如图所示（光滑水平导轨间距 $L=1\,\text{m}$，竖直向里 $B=1\,\text{T}$，回路总电阻 $R=1\,\Omega$，棒质量 $m=0.2\,\text{kg}$），导体棒以 $v_0=4\,\text{m/s}$ 沿导轨向右滑行，最终停下。棒滑行的总位移为（ ）

A. $0.8\,\text{m}$

B. $1.6\,\text{m}$

C. $0.4\,\text{m}$

D. $0.2\,\text{m}$

## 标准解法

**动量定理**（全过程）：安培力的冲量等于棒的动量变化：

$$
-BLq=0-mv_0\Rightarrow q=\dfrac{mv_0}{BL}
$$

**电量与位移的关系**：

$$
q=\dfrac{\Delta\Phi}{R}=\dfrac{BLx}{R}
$$

联立：

$$
\dfrac{BLx}{R}=\dfrac{mv_0}{BL}\Rightarrow x=\dfrac{mv_0R}{B^2L^2}
$$

代入数值：

$$
x=\dfrac{0.2\times4\times1}{1^2\times1^2}=0.8\,\text{m}
$$

选 **A**。

## 邪修解法

**适用特征**：滑行棒 → **模型公式直接套**：

$$
x=\dfrac{mv_0R}{B^2L^2}
$$

**心算**：分子 $0.2\times4\times1=0.8$，分母 $1\times1=1$ ⇒ $0.8\,\text{m}$。**30 秒选 A**。

## 点评

- 同场三兄弟（背住）：
  - 通过电量 $q=\dfrac{mv_0}{BL}=0.8\,\text{C}$；
  - 产生热量 $Q=\dfrac12mv_0^2=1.6\,\text{J}$；
  - 运动时间 $t$：由动量定理 $F_{均}t=mv_0$ 或能量法，图像法更稳（$v-t$ 图下面积 = 位移 $x$）。
- 变式：若导轨**倾斜**（$m g\sin\theta$ 是外力）：动量定理 $m g\sin\theta\cdot t-BLq=mv$ 需要时间/能量补方程——先判断是否"纯滑行"；
- 风险：$R$ 用回路总电阻（棒内阻 + 外电阻）；位移公式里 $L$ 是有效切割长度，等于导轨间距。
