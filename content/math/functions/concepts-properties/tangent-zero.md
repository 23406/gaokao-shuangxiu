---
title: 过原点的切线斜率（y=eˣ）
type: example
status: draft
source: 自编（经典考法）
difficulty: 中等
applicability: 选填通用
risk: 切线问题必须"设切点"而不是"设切线"：斜率=f'(x₀)=连原点斜率，两个式子才能把 x₀ 解出来。
fit:
  - 导数的几何意义（切点未知）
  - 指数函数切线
  - 选填题
updated: 2025-03-03
---

## 题目

过原点作曲线 $y=\mathrm e^x$ 的切线，则切线的斜率为（ ）

A. $\mathrm e$

B. $1$

C. $\mathrm e^2$

D. $2\mathrm e$

## 标准解法

**设切点 $(x_0,\mathrm e^{x_0})$**，切线斜率与切点同时未知，列两个相等关系：

- 导数给斜率：$k=f'(x_0)=\mathrm e^{x_0}$；
- 切线过原点，斜率又等于两点连线斜率：$k=\dfrac{\mathrm e^{x_0}-0}{x_0-0}=\dfrac{\mathrm e^{x_0}}{x_0}$。

联立：

$$\mathrm e^{x_0}=\frac{\mathrm e^{x_0}}{x_0}\ \Rightarrow\ x_0=1$$

（$\mathrm e^{x_0}\ne 0$，可直接约去；$x_0\ne 0$ 由切点不在原点上保证。）

代入得 $k=\mathrm e^1=\mathrm e$，切点为 $(1,\mathrm e)$，切线为 $y=\mathrm ex$。

选 **A**。

## 邪修解法

**"切线过原点"通式秒杀**：切点 $(x_0,f(x_0))$ 处的切线过原点，等价于

$$f(x_0)=x_0 f'(x_0)$$

（斜率两写法：$f'(x_0)=\dfrac{f(x_0)}{x_0}$），解出 $x_0$ 即可，无需写完整切线方程。

- 本题：$\mathrm e^{x_0}=x_0\mathrm e^{x_0}\Rightarrow x_0=1\Rightarrow k=\mathrm e$；
- **背下这对"黄金相切"**：$y=\mathrm e^x$ 与 $y=\mathrm ex$ 相切于 $(1,\mathrm e)$；$y=\ln x$ 与 $y=\dfrac{x}{\mathrm e}$ 相切于 $(\mathrm e,1)$。选择题看到这两个曲线+过原点，直接对应选项。

## 点评

- 通式总结（切点未知的三板斧）：①切点坐标 $(x_0,f(x_0))$；②斜率 $f'(x_0)$；③用"连线斜率=导数斜率"补一个方程；
- 本题为什么不用"设切线 $y=kx$"？因为切点、斜率都未知，一个方程不够；$y=\mathrm e^x$ 是严格凸函数，过原点的切线**只有一条**，斜率为 $\mathrm e$；
- 变式：过原点引 $y=x\ln x$ 的切线？$x_0\ln x_0 = x_0(\ln x_0+1)$ 无解（该曲线不过原点方向切线时注意定义域）——用通式最稳；
- 选择题陷阱选项设计：$\mathrm e^2$（$x_0=2$ 时代入 $k=\mathrm e^{x_0}$ 得到 $k=\mathrm e^2$ 的错误产物）、$2\mathrm e$（把 $\mathrm e^x$ 的导数当成斜率）——都是"取错切点"的产物。
