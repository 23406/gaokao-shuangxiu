---
title: 子弹打木块（折合质量速算）
type: example
status: draft
source: 自编（经典考法）
difficulty: 较难
applicability: 选填通用
risk: 折合质量公式只适用于"完全非弹性（粘在一起）"；求木块最小长度用"动能损失 = 摩擦生热"，木块初速为零。
fit:
  - 子弹射入静止木块并留在其中
  - 求共同速度/最小长度/热量
  - 选填题
updated: 2025-02-15
---

## 题目

质量 $m=0.1\,\text{kg}$ 的子弹以 $v_0=400\,\text{m/s}$ 射入光滑水平面上静止的质量 $M=1.9\,\text{kg}$ 的木块并留在其中，子弹在木块中受恒定阻力 $f=4\times10^3\,\text{N}$（$f$ 为子弹与木块间平均互作用力）。则木块的最小长度至少为（ ）

A. $1.9\,\text{m}$

B. $2.0\,\text{m}$

C. $0.95\,\text{m}$

D. $3.8\,\text{m}$

## 标准解法

**第一步（动量守恒求共速）**：

$$
mv_0=(M+m)v_{共}\Rightarrow v_{共}=\dfrac{0.1\times400}{2}=20\,\text{m/s}
$$

**第二步（能量损失）**：

$$
\Delta E=\dfrac12mv_0^2-\dfrac12(M+m)v_{共}^2=\dfrac12\times0.1\times160000-\dfrac12\times2\times400=8000-400=7600\,\text{J}
$$

**第三步（摩擦生热 = 相对位移 × 力）**：

$$
f\cdot L_{\min}=\Delta E\Rightarrow L_{\min}=\dfrac{7600}{4000}=1.9\,\text{m}
$$

选 **A**。

## 邪修解法

**适用特征**：完全非弹性 + 求损失能量 → **折合质量公式**：

$$
\Delta E=\dfrac12\cdot\dfrac{mM}{m+M}\cdot v_0^2
$$

**心算**：$\dfrac{mM}{m+M}=\dfrac{0.1\times1.9}{2}=0.095\,\text{kg}$，$\Delta E=\dfrac12\times0.095\times160000=7600\,\text{J}$ ⇒ $L=\dfrac{7600}{4000}=1.9\,\text{m}$。

**40 秒出答案：A**——折合质量 $\dfrac{mM}{m+M}$ 是碰撞/板块/子弹打木块的万能钥匙。

## 点评

- 三个公式链（背住）：共速 $v=\dfrac{m}{M+m}v_0$；损失 $\Delta E=\dfrac12\cdot\dfrac{mM}{m+M}v_0^2$；长度 $L=\dfrac{\Delta E}{f}$；
- 若问"子弹留在木块中的深度"：同一个 $\Delta E/f$；问"发热量"：就是 $\Delta E$；
- 若地面**粗糙**（木块滑动）：动能定理要加地面摩擦力做功项，不能再直接套；两者结合的标准题先画"共速后一起减速"的阶段图；
- 大题书写："由动量守恒得 $v_{共}=\dots$，由能量守恒 $fL=\dfrac12mv_0^2-\dfrac12(M+m)v_{共}^2$ 得…"——先写守恒再写数值。
