---
title: 空间向量法求二面角（垂直洞察秒杀）
type: example
status: draft
source: 自编（经典考法）
difficulty: 较难
applicability: 选填专用（大题需写建系与法向量求法步骤）
risk: 二面角取"法向量夹角"还是其补角，要看图形锐钝（看两个半平面的开口方向）；建系后每个点坐标必须复核。
fit:
  - 四棱锥/长方体建系求二面角
  - 或选项为特殊角（30/45/60/90）
  - 选填题
updated: 2025-02-16
---

## 题目

四棱锥 $P-ABCD$ 中，底面 $ABCD$ 是边长 $2$ 的正方形，$PA\perp$ 底面 $ABCD$，$PA=2$。二面角 $A-PB-C$ 的平面角为（ ）

A. $30°$

B. $45°$

C. $60°$

D. $90°$

## 标准解法

**方法：空间向量法**。**建系**：以 $A$ 为原点，$AB$ 为 $x$ 轴、$AD$ 为 $y$ 轴、$AP$ 为 $z$ 轴：

$$
A(0,0,0),\ B(2,0,0),\ C(2,2,0),\ P(0,0,2)
$$

**求法向量**：

- 平面 $PAB$：由 $\overrightarrow{AP}=(0,0,2)$、$\overrightarrow{AB}=(2,0,0)$ 得法向量 $\vec n_1=(0,1,0)$（即 $y$ 轴方向）；
- 平面 $PBC$：$\overrightarrow{PB}=(2,0,-2)$，$\overrightarrow{PC}=(2,2,-2)$，

$$
\vec n_2=\overrightarrow{PB}\times\overrightarrow{PC}=(4,0,4)\ \Rightarrow\ (1,0,1)
$$

**算夹角**：

$$
\cos\theta=\dfrac{|\vec n_1\cdot\vec n_2|}{|\vec n_1||\vec n_2|}=\dfrac{0}{1\times\sqrt2}=0
$$

$\theta=90°$，选 **D**。

## 邪修解法

**适用特征**：找"一条线垂直一个面" → **几何洞察秒杀**：

- $BC\perp AB$（正方形）且 $BC\perp PA$（$PA\perp$ 底面，$BC\subset$ 底面）；
- 所以 $BC\perp$ 平面 $PAB$（一条线与平面内两条相交直线垂直）；
- 而 $BC\subset$ 平面 $PBC$ ⇒ **平面 $PBC\perp$ 平面 $PAB$** ⇒ 二面角 $=90°$。

**30 秒锁定 D**，坐标都不用建。

## 点评

- 向量法的通用流程：建系 → 写坐标 → 求法向量（叉乘或解方程组）→ $\cos\theta=\dfrac{|\vec n_1\cdot\vec n_2|}{|\vec n_1||\vec n_2|}$ → 判断锐钝；
- **先找垂直关系再决定要不要建系**：能看到"线与面垂直"就几何法，看不到才建系（建系是保底万能法）；
- 同类洞察：$BC\perp$ 平面 $PAB$ 还能立刻推出 $BC\perp PB$（线面垂直⇒线线垂直），这是二面角题最常用的"第一结论"；
- 大题书写："以 $A$ 为原点建系，得 $A(0,0,0)\dots$，平面 $PBC$ 法向量 $\vec n=(1,0,1)$…"每一步都写坐标，步骤分稳拿。
