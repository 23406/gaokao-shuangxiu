---
title: Φ-t 图像（斜率即电动势）
type: example
status: draft
source: 自编（经典考法）
difficulty: 中档
applicability: 选填通用
risk: 斜率有正负（方向）；斜率是"磁通量变化率"=感应电动势（非磁通量大小）；Φ-t 图水平段电动势为零。
fit:
  - Φ-t 图像判断各段时间电动势
  - 或求某时刻电动势/电流
  - 选填题
updated: 2025-02-26
---

## 题目

闭合线圈的磁通量随时间变化的 $\Phi$-$t$ 图像如图所示（$0\sim2\,\text{s}$ 内 $\Phi$ 从 $0$ 均匀增大到 $2\,\text{Wb}$，$2\sim4\,\text{s}$ 内保持 $2\,\text{Wb}$，$4\sim6\,\text{s}$ 内从 $2\,\text{Wb}$ 均匀减小到 $0$）。线圈匝数 $n=1$，则 $0\sim2\,\text{s}$ 内感应电动势的大小为（ ）

A. $1\,\text{V}$

B. $2\,\text{V}$

C. $0.5\,\text{V}$

D. $0$

## 标准解法

**法拉第电磁感应定律**：

$$
E=n\dfrac{\Delta\Phi}{\Delta t}=1\times\dfrac{2-0}{2}=1\,\text{V}
$$

**验证其余段**：$2\sim4\,\text{s}$ 斜率为 $0$ ⇒ $E=0$；$4\sim6\,\text{s}$：$E=1\times\dfrac{0-2}{2}=-1\,\text{V}$（方向相反，大小仍为 $1\,\text{V}$）。

选 **A**。

## 邪修解法

**适用特征**：$\Phi$-$t$ 图像 → **"斜率就是电动势"**：

- 图像直线段斜率 $=\dfrac{\Delta\Phi}{\Delta t}=\dfrac{2}{2}=1$ ⇒ $E=1\,\text{V}$；
- 水平段（斜率 $0$）⇒ 无电动势；负斜率 ⇒ 方向相反。

**15 秒选 A**——读斜率，不读数值。

## 点评

- 图像题统一心法（背住）：$\Phi$-$t$ 图**斜率 = 电动势**；$B$-$t$ 图**斜率 ×nS = 电动势**（见[电磁感应图像](/node/physics/electromagnetism/induction/induction-image)）；
- 若题给 $\Phi=\Phi_0\sin\omega t$（正弦变化）：$\dfrac{\Delta\Phi}{\Delta t}$ 的最大值 = 即时电动势最大值 $E_m=n\Phi_0\omega$——"正弦磁通量 → 余弦电动势"，相位差 $90°$;
- 若问**电流**：再除以回路总电阻 $I=\dfrac E{R}$；
- 风险：图像纵轴是 $\Phi$ 时"图象面积"无物理意义（面积有意义的只有 $v$-$t$、$F$-$x$ 这类）；$\Delta\Phi$ 取绝对值算大小，方向用楞次定律另行判断。
