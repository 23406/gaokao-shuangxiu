---
title: 三角形四心与向量
type: knowledge
status: draft
keywords: [三角形, 重心, 垂心, 外心, 内心, 奔驰定理, 向量]
updated: 2025-02-20
---

# 三角形四心与向量

> 四心（重心/垂心/外心/内心）是平面向量选填的常客：**给一个向量条件，问"P 是三角形什么心"**。只需记住四条判据 + 每条 2 行推导，这类题 10 秒拿下。

![](img/math/triangle-centers.svg)

上图：同一锐角三角形上的四心（蓝=中线交点 G，红=高线交点 H，绿=中垂线交点 O，橙=角平分线交点 I）；注意到 O、G、H 三点共线（欧拉线）。

## 四心速查总表

| 名称 | 几何定义 | 向量判据（P 为所求点） | 位置 |
| --- | --- | --- | --- |
| 重心 $G$ | 三条中线的交点 | $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec 0$（等价于任意点 $O$：$\overrightarrow{PA}+\overrightarrow{PB}+\overrightarrow{PC}=3\overrightarrow{PG}$） | 恒在形内 |
| 垂心 $H$ | 三条高线的交点 | $\overrightarrow{HA}\cdot\overrightarrow{HB}=\overrightarrow{HB}\cdot\overrightarrow{HC}=\overrightarrow{HC}\cdot\overrightarrow{HA}$ | 锐角在形内；直角在顶点；钝角在形外 |
| 外心 $O$ | 三边中垂线交点（外接圆圆心） | $|\overrightarrow{OA}|=|\overrightarrow{OB}|=|\overrightarrow{OC}|=R$ | 锐角在形内；直角在斜边中点；钝角在形外 |
| 内心 $I$ | 三条角平分线交点（内切圆圆心） | $a\overrightarrow{IA}+b\overrightarrow{IB}+c\overrightarrow{IC}=\vec 0$（$a=BC,b=CA,c=AB$），或"到三边距离相等" | 恒在形内 |

> 口诀：**重"零和"、垂"点积"、外"半径"、内"边权"**。

## 重心：零和 + 2:1 分中线 + 面积三等分

**核心结论**：任取一点 $P$，$G$ 为重心 ⟺

$$
\overrightarrow{PA}+\overrightarrow{PB}+\overrightarrow{PC}=3\overrightarrow{PG}
$$

**推导**（高中标准证法，大题可写）：

1. 设 $D$ 为 $BC$ 中点（$\overrightarrow{AD}=\frac12(\overrightarrow{AB}+\overrightarrow{AC})$），$G$ 在 $AD$ 上。
2. 设 $\overrightarrow{AG}=t\,\overrightarrow{AD}$，又 $G$ 在 $BE$（$E$ 为 $AC$ 中点）上：$\overrightarrow{AG}=\overrightarrow{AB}+\overrightarrow{BG}$，而 $\overrightarrow{BG}=s\,\overrightarrow{BE}=s\left(\frac12\overrightarrow{AC}-\overrightarrow{AB}\right)$，故
   $\overrightarrow{AG}=(1-s)\overrightarrow{AB}+\frac s2\overrightarrow{AC}$。
3. 与 $\overrightarrow{AG}=\frac t2\overrightarrow{AB}+\frac t2\overrightarrow{AC}$ 比较系数：$\frac t2=1-s$ 且 $\frac t2=\frac s2$，解得 $t=\frac23$，即 $AG:GD=2:1$（**重心分中线 2:1**）。
4. 由 $\overrightarrow{AG}=\frac13(\overrightarrow{AB}+\overrightarrow{AC})$，得 $\overrightarrow{GA}=-\frac13(\overrightarrow{AB}+\overrightarrow{AC})$，代入：
   $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\overrightarrow{GA}+(\overrightarrow{GA}+\overrightarrow{AB})+(\overrightarrow{GA}+\overrightarrow{AC})=3\overrightarrow{GA}+(\overrightarrow{AB}+\overrightarrow{AC})=\vec 0$。
   反向同理：由 $\overrightarrow{PA}+\overrightarrow{PB}+\overrightarrow{PC}=3\overrightarrow{PG}$ 取 $P=G$ 立得 $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec 0$。

**坐标版**：$G=\left(\dfrac{x_A+x_B+x_C}{3},\dfrac{y_A+y_B+y_C}{3}\right)$；高中常见题"求与 $G$ 有关的向量模"用 $\overrightarrow{PG}=\dfrac{\overrightarrow{PA}+\overrightarrow{PB}+\overrightarrow{PC}}{3}$ 直接代。

**面积**：重心把三角形分成三个等面积小三角形（$S_{\triangle GBC}=S_{\triangle GCA}=S_{\triangle GAB}=\frac13S$），这是奔驰定理（$S_A\overrightarrow{PA}+S_B\overrightarrow{PB}+S_C\overrightarrow{PC}=\vec 0$）中 $S_A:S_B:S_C=1:1:1$ 的情形。

## 垂心：点积两两相等

**核心结论**：$H$ 为垂心 ⟺ $\overrightarrow{HA}\cdot\overrightarrow{HB}=\overrightarrow{HB}\cdot\overrightarrow{HC}=\overrightarrow{HC}\cdot\overrightarrow{HA}$，即**起点任意**（也可写成 $\overrightarrow{OA}\cdot\overrightarrow{OB}=\overrightarrow{OB}\cdot\overrightarrow{OC}=\overrightarrow{OC}\cdot\overrightarrow{OA}$）。

**推导**（只要一条线）：$HB\perp CA$ ⟺ $\overrightarrow{HB}\cdot\overrightarrow{CA}=0$ ⟺
$\overrightarrow{HB}\cdot(\overrightarrow{HA}-\overrightarrow{HC})=0$ ⟺ $\overrightarrow{HB}\cdot\overrightarrow{HA}=\overrightarrow{HB}\cdot\overrightarrow{HC}$。

- 三条高线 ⟹ 三对点积两两相等；反之三对相等 ⟹ $H$ 在三条高线上 ⟹ 交点唯一即垂心。
- **平方判据**（极化恒等式变形，选填可用）：把点积换成"模平方"，得 $H$ 为垂心 ⟺
  $|\overrightarrow{HA}|^2+|\overrightarrow{BC}|^2=|\overrightarrow{HB}|^2+|\overrightarrow{CA}|^2=|\overrightarrow{HC}|^2+|\overrightarrow{AB}|^2$。
  推导一行：由 $\overrightarrow{HB}\cdot\overrightarrow{HA}=\overrightarrow{HB}\cdot\overrightarrow{HC}$ 移项 $\overrightarrow{HB}\cdot\overrightarrow{CA}=0$ 后，用 $\overrightarrow{HB}\cdot\overrightarrow{HA}=\frac{|\overrightarrow{HB}|^2+|\overrightarrow{HA}|^2-|\overrightarrow{AB}|^2}{2}$ 代入化简即得。

## 外心：模相等 + 投影半模结论

**核心结论**：$|OA|=|OB|=|OC|$；等价地，$(O$ 在 $AB$ 中垂线 $)$ ⟺ $(\overrightarrow{OA}+\overrightarrow{OB})\cdot\overrightarrow{AB}=0$。

**推导**：$OA^2=OB^2$ ⟺ $\overrightarrow{OA}^2-\overrightarrow{OB}^2=0$ ⟺ $(\overrightarrow{OA}-\overrightarrow{OB})\cdot(\overrightarrow{OA}+\overrightarrow{OB})=0$ ⟺ $\overrightarrow{BA}\cdot(\overrightarrow{OA}+\overrightarrow{OB})=0$，即 $AB\perp(OA+OB)$——向量 $\overrightarrow{OA}+\overrightarrow{OB}$ 的方向正是从 $O$ 到 $AB$ 中点的方向，即 $O$ 在中垂线上。

**投影半模结论**（选填秒杀高频）：

$$
\overrightarrow{AO}\cdot\overrightarrow{AC}=\frac12|\overrightarrow{AC}|^2,\qquad
\overrightarrow{AO}\cdot\overrightarrow{AB}=\frac12|\overrightarrow{AB}|^2
$$

**推导**：圆心 $O$ 到弦 $AC$ 的垂足 $M$ 平分弦（垂径定理），故 $AO$ 在 $\overrightarrow{AC}$ 方向上的投影 $=AM=\dfrac{|AC|}{2}$，点在积"模长×投影"即得。反过来用它可判断："若 $O$ 满足 $\overrightarrow{AO}\cdot\overrightarrow{AC}=\frac12 AC^2$ 且 $|OA|=|OB|$，则 $O$ 是外心"。

另记：$R$ 为外接圆半径时 $\overrightarrow{OA}\cdot\overrightarrow{OB}=R^2\cos\angle AOB=R^2\cos 2C$（圆心角 $=2$ 倍同弧圆周角；$C>90^\circ$ 时取 $2\pi-2C$，余弦值相同）。

## 内心：边权零和 + 坐标 + 角平分线定理

**核心结论**：$I$ 为内心 ⟺ $a\overrightarrow{IA}+b\overrightarrow{IB}+c\overrightarrow{IC}=\vec 0$（边权：对边边长作系数）。

**推导**（面积法，2 行）：$I$ 到三边距离都等于内切圆半径 $r$，于是
$S_{\triangle IBC}:S_{\triangle ICA}:S_{\triangle IAB}=\frac12ar:\frac12br:\frac12cr=a:b:c$；代入奔驰定理即得。

**坐标版**：$I=\left(\dfrac{ax_A+bx_B+cx_C}{a+b+c},\dfrac{ay_A+by_B+cy_C}{a+b+c}\right)$。推导：设 $\overrightarrow{IE}$…更直接——内心重心坐标为边长加权：由上式取起点 $O$ 为原点，$\overrightarrow{OI}=\dfrac{a\overrightarrow{OA}+b\overrightarrow{OB}+c\overrightarrow{OC}}{a+b+c}$，坐标即得。

**相关结论**：

- 角平分线定理：$AD$ 平分 $\angle A$ 交 $BC$ 于 $D$，则 $\dfrac{BD}{DC}=\dfrac{AB}{AC}=\dfrac{c}{b}$；
- 内切圆半径 $r=\dfrac{S}{p}$（$p=\dfrac{a+b+c}{2}$ 为半周长，$S$ 为面积）——由 $S=\frac12r(a+b+c)$ 一步得出；
- 方向表示：$\overrightarrow{AI}$ 的方向 $\parallel \dfrac{\overrightarrow{AB}}{c}+\dfrac{\overrightarrow{AC}}{b}$（沿两边单位向量叠加，角平分线方向）。

## 四心判据总演练（选填秒杀）

| 条件（P 是 △ABC 内/外一点） | 判定 |
| --- | --- |
| $\overrightarrow{PA}+\overrightarrow{PB}+\overrightarrow{PC}=\vec 0$ | 重心 |
| $\overrightarrow{PA}\cdot\overrightarrow{PB}=\overrightarrow{PB}\cdot\overrightarrow{PC}=\overrightarrow{PC}\cdot\overrightarrow{PA}$ | 垂心 |
| $|\overrightarrow{PA}|=|\overrightarrow{PB}|=|\overrightarrow{PC}|$ | 外心 |
| $a\overrightarrow{PA}+b\overrightarrow{PB}+c\overrightarrow{PC}=\vec 0$ | 内心 |

**典型例题（自编，选填）**：已知 $P$ 是 $\triangle ABC$ 内一点，满足 $\overrightarrow{PA}+\overrightarrow{PB}+\overrightarrow{PC}=\vec 0$，且 $|\overrightarrow{PA}|=|\overrightarrow{PB}|=|\overrightarrow{PC}|$，则 $\triangle ABC$ 的形状是（ ）

**解答**：第一条 ⟹ $P$ 是重心；第二条 ⟹ $P$ 是外心；重心 = 外心 ⟹ 三边中垂线与中线重合 ⟹ 等边三角形（**等边三角形四心重合为一点**）。答案为等边三角形。

## 点评

- **大题怎么写**：先用几何定义写一句"由重心性质，$\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec 0$"（或高线 ⟹ 垂直 ⟹ 点积为零），再向量代数；别直接甩判据不解释。
- **等边三角形四心重合**，是"心与心重合"问题的标准答案；
- **钝角三角形**：垂心、外心都在形外——题目给图时先分清锐角钝角；
- 四心判据的总源头是**奔驰定理**（面积比版），详见平面向量知识卡（`algebra/vectors.md`）；重心坐标公式与欧拉线（外心、重心、垂心三点共线，$OG:GH=1:2$）是进阶补充，不需要记。
