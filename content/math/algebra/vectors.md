---
title: 平面向量
type: knowledge
status: draft
keywords: [向量运算, 数量积, 投影, 极化恒等式, 奔驰定理]
updated: 2025-02-14
---

# 平面向量

## 基本概念

- 向量：有大小有方向；模 $|\vec a|$；零向量、单位向量（$\dfrac{\vec a}{|\vec a|}$）；
- 共线（平行）定理：$\vec b=\lambda\vec a$（$\vec a\neq\vec 0$）⇔ 共线；
- 基底：平面内不共线的两个向量可以表示任意向量（**平面向量基本定理**）。

## 运算

**加法**（三角形/平行四边形法则）、减法（"共起点，连终点，指被减"）、数乘（改变大小，负数反向）。

**数量积**：

$$
\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta
$$

- 向量夹角 $\theta\in[0,\pi]$；$\vec a\cdot\vec b=0\Leftrightarrow\vec a\perp\vec b$；
- 投影：$\vec a$ 在 $\vec b$ 方向上的投影 $=|\vec a|\cos\theta=\dfrac{\vec a\cdot\vec b}{|\vec b|}$（**可正可负**）；
- 模长：$|\vec a|^2=\vec a\cdot\vec a$；$|\vec a\pm\vec b|^2=|\vec a|^2+|\vec b|^2\pm2\vec a\cdot\vec b$。

## 坐标运算（建系万能法）

设 $\vec a=(x_1,y_1)$，$\vec b=(x_2,y_2)$：

- $\vec a\cdot\vec b=x_1x_2+y_1y_2$；$|\vec a|=\sqrt{x_1^2+y_1^2}$；
- 夹角：$\cos\theta=\dfrac{x_1x_2+y_1y_2}{|\vec a||\vec b|}$；
- 垂直：$x_1x_2+y_1y_2=0$；平行：$x_1y_2=x_2y_1$；
- **向量法证明几何**：建系 → 点坐标 → 数量积为零即垂直。

## 高频定理与结论（选填直接抄）

**三点共线**：$A,B,C$ 共线 ⇔ $\overrightarrow{OC}=\lambda\overrightarrow{OA}+\mu\overrightarrow{OB}$ 且 $\lambda+\mu=1$（$\lambda,\mu\in\mathbb R$）。

**中线/重心**：$M$ 为 $BC$ 中点时 $\overrightarrow{AM}=\dfrac12(\overrightarrow{AB}+\overrightarrow{AC})$；重心 $G$：$\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec 0$，且 $\overrightarrow{AG}=\dfrac13(\overrightarrow{AB}+\overrightarrow{AC})$。

**极化恒等式**（秒杀数量积）：

$$
\vec a\cdot\vec b=\dfrac{|\vec a+\vec b|^2-|\vec a-\vec b|^2}{4}
$$

- 应用：已知 $\triangle ABC$ 中某边中线长、对边定值，求 $\overrightarrow{AB}\cdot\overrightarrow{AC}$ 范围——转成"中线平方−半底平方"。

**奔驰定理**（选填）：$P$ 为 $\triangle ABC$ 内一点，$S_A\overrightarrow{PA}+S_B\overrightarrow{PB}+S_C\overrightarrow{PC}=\vec 0$（$S_A$ 为 $\triangle PBC$ 面积）。

## 邪修提示

- 数量积最值/范围：**极化恒等式**或**坐标法**二选一，比"设角+三角函数"快；
- 求投影：直接用 $\dfrac{\vec a\cdot\vec b}{|\vec b|}$，别画图补线；
- 向量与几何综合：**先猜特殊位置**（中点/重心/最特殊三角形）再看选项；
- 风险：投影是标量可正可负；$\vec a\cdot\vec b=0$ 只说明垂直，不能推出 $\vec a=\vec 0$ 或 $\vec b=\vec 0$。
