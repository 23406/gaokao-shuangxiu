---
title: 椭圆离心率范围（焦点三角形直角）
type: example
status: draft
source: 自编（经典考法）
difficulty: 较难
applicability: 选填通用
risk: 直角顶点 P 不一定在圆上就能画——必须判断"圆与椭圆是否有交点"，条件本质是圆半径 c 与椭圆短半轴 b 的比较。
fit:
  - 椭圆焦点三角形（顶角范围）
  - 离心率取值范围
  - 选填题
updated: 2025-03-03
---

## 题目

椭圆 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$（$a>b>0$）的左、右焦点分别为 $F_1,F_2$。若椭圆上存在点 $P$ 使得 $\angle F_1PF_2=90^\circ$，则离心率 $e$ 的取值范围是（ ）

A. $\left[\dfrac{\sqrt2}{2},1\right)$

B. $\left[\dfrac12,1\right)$

C. $\left[\dfrac{\sqrt3}{2},1\right)$

D. $\left(0,\dfrac{\sqrt2}{2}\right]$

## 标准解法

**几何转化**：$\angle F_1PF_2=90^\circ$ 等价于 $P$ 在以 $F_1F_2$ 为直径的圆上（中线长定理：直角顶点到斜边中点距离等于斜边一半），即

$$x_P^2+y_P^2=c^2$$

（圆心为原点，半径为 $c$。）

**交点存在性**：椭圆上任意点到原点的距离平方 $x^2+y^2$ 满足

$$b^2\le x^2+y^2\le a^2$$

（最近点是短轴端点 $(0,\pm b)$，最远点是长轴端点 $(\pm a,0)$。）故圆与椭圆有公共点 ⇔ $b\le c\le a$。$c\le a$ 恒成立，由 $b\le c$：

$$b^2\le c^2\ \Rightarrow\ a^2-c^2\le c^2\ \Rightarrow\ e^2=\frac{c^2}{a^2}\ge\frac12\ \Rightarrow\ e\ge\frac{\sqrt2}{2}$$

又 $e<1$。综上 $e\in\left[\dfrac{\sqrt2}{2},1\right)$。

选 **A**。

## 邪修解法

**焦点三角形通式**：椭圆上存在 $P$ 使 $\angle F_1PF_2=\theta$ ⇔ $e\ge\sin\dfrac{\theta}{2}$。

推导（30 秒版）：记 $m=|PF_1|,\ n=|PF_2|$，则 $m+n=2a$，$m^2+n^2=4a^2-2mn$。余弦定理：

$$4c^2=m^2+n^2-2mn\cos\theta=4a^2-2mn(1+\cos\theta)$$

$$\Rightarrow mn=\frac{2b^2}{1+\cos\theta}$$

又 $mn\le a^2$（等号当 $P$ 为短轴端点时取到），代入整理得 $1-e^2\le\dfrac{1+\cos\theta}{2}$，即

$$e^2\ge\frac{1-\cos\theta}{2}=\sin^2\frac{\theta}{2}\ \Rightarrow\ e\ge\sin\frac{\theta}{2}$$

- $\theta=90^\circ$：$e\ge\sin45^\circ=\dfrac{\sqrt2}{2}$ ✓；
- $\theta=120^\circ$：$e\ge\sin60^\circ=\dfrac{\sqrt3}{2}$；
- 背记法：**"顶角越大，离心率下限越高"**（$e$ 越接近 1，椭圆越扁，顶角才能张得开）。

## 点评

- 变式：把直角改成 $\angle F_1PF_2=60^\circ$，答案变 $e\ge\dfrac12$——用通式秒换（$e\ge\sin\dfrac{\theta}{2}=\sin30^\circ$；$\dfrac{\sqrt3}{2}$ 是 $\theta=120^\circ$ 时的值，别混）；
- 顶角的"最大值"也常考：$P$ 在短轴端点时 $\angle F_1PF_2$ 最大，$\cos\theta_{\max}=1-2e^2$（此时 $m=n=a$ 代入余弦定理即得）；
- 计算细节：$b^2\le c^2$ 与"圆半径 $c$ ≥ 椭圆最近距离 $b$"是同一件事，几何画出来更直观；
- 双曲线变式：焦点三角形顶角范围对应 $e$ 的范围推导类似，但 $mn$ 换成用 $|m-n|=2a$ 处理，别套椭圆公式。
