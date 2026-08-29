---
title: 三角函数·图像与性质（y=Asin(ωx+φ)）
type: knowledge
status: draft
keywords: [三角函数, 图像性质, 单调性, 对称性, 图像变换, 周期性, 解析式]
updated: 2025-03-09
---

# 三角函数·图像与性质

## 三函数性质总表（选填直接用；大题写单调区间/对称轴必须列整体代换步骤）

| 函数 | 定义域 | 值域 | 周期 | 奇偶性 | 单增区间 | 单减区间 | 对称轴 | 对称中心 |
|------|--------|------|------|--------|----------|----------|--------|----------|
| $y=\sin x$ | $\mathbb R$ | $[-1,1]$ | $2\pi$ | 奇 | $[-\frac{\pi}{2}+2k\pi,\,\frac{\pi}{2}+2k\pi]$ | $[\frac{\pi}{2}+2k\pi,\,\frac{3\pi}{2}+2k\pi]$ | $x=\frac{\pi}{2}+k\pi$ | $(k\pi,\,0)$ |
| $y=\cos x$ | $\mathbb R$ | $[-1,1]$ | $2\pi$ | 偶 | $[-\pi+2k\pi,\,2k\pi]$ | $[2k\pi,\,\pi+2k\pi]$ | $x=k\pi$ | $(\frac{\pi}{2}+k\pi,\,0)$ |
| $y=\tan x$ | $x\neq\frac{\pi}{2}+k\pi$ | $\mathbb R$ | $\pi$ | 奇 | $(-\frac{\pi}{2}+k\pi,\,\frac{\pi}{2}+k\pi)$ 无减区间 | 无 | $(\frac{k\pi}{2},\,0)$ |

背法：$\sin$ 的对称轴在峰/谷（$x=\dfrac{\pi}{2}+k\pi$，恰是 $\cos$ 的零点），$\cos$ 的对称轴也在峰/谷（$x=k\pi$，恰是 $\sin$ 的零点）；$\tan$ 只有对称中心，**没有对称轴**。

## 一般式 $y=A\sin(\omega x+\varphi)+b$ 的“三步破”

**第 1 步：周期与值域（最省时）**

$$T=\frac{2\pi}{|\omega|},\qquad \text{值域}=[b-A,\;b+A]$$

注意 $T$ 与 $\varphi$ 无关：平移不改变周期。

**第 2 步：整体代换求单调/对称轴/对称中心**

令 $u=\omega x+\varphi$，把 $\sin u$ 的结论平移到 $u$ 上再解 $x$：

- 单增区间：$-\frac{\pi}{2}+2k\pi\le \omega x+\varphi\le \frac{\pi}{2}+2k\pi$，解出 $x$；
- 对称轴：$\omega x+\varphi=\frac{\pi}{2}+k\pi$ 解出 $x$ 即为直线方程；
- 对称中心：$\omega x+\varphi=k\pi$，对称中心为 $(x,\;b)$（纵坐标是 $b$，不是 0！）。

**推导（相邻对称轴间距为什么是 $T/2$）**：相邻两条对称轴对应 $u_1=\frac{\pi}{2}+k\pi$、$u_2=\frac{\pi}{2}+(k+1)\pi$，差 $\Delta u=\pi$；因 $u=\omega x+\varphi$，$x$ 的差 $\Delta x=\dfrac{\pi}{|\omega|}=\dfrac{T}{2}$。同理相邻对称中心间距 $T/2$，对称轴与相邻对称中心间距 $T/4$，相邻两极值点间距 $T/2$，相邻两零点间距 $T/2$。

**第 3 步：由图像写解析式（求 $\omega$、$\varphi$ 的两定法）**

- $A=\dfrac{M-m}{2}$，$b=\dfrac{M+m}{2}$（$M$、$m$ 为最大值、最小值）；
- $\omega$：量出周期 $T$（相邻峰/谷或相邻对称中心间距是 $T/2$，相邻零点间距也是 $T/2$），$\omega=\dfrac{2\pi}{T}$；
- $\varphi$：**五点法对号入座**——找图像中编号为 $0,\frac{\pi}{2},\pi,\frac{3\pi}{2},2\pi$ 中任意一个明显点（第一上升零点对应 $u=0$，波峰对应 $u=\frac{\pi}{2}$，波谷对应 $u=\frac{3\pi}{2}$），代入 $\omega x_0+\varphi=$ 对应值，取 $k\in\mathbb Z$ 使 $\varphi$ 落在题目范围（如 $(-\pi,\pi]$）。

## 图像变换：先平移还是先伸缩（易错核心）

以 $y=\sin x\to y=\sin(2x+\frac{\pi}{3})$ 为例，**两条路线结果必须相同**：

- 先缩后移：$\sin x\ \xrightarrow{\text{横缩}\frac{1}{2}}\ \sin 2x\ \xrightarrow{\text{左移}\frac{\pi}{6}}\ \sin 2(x+\frac{\pi}{6})=\sin(2x+\frac{\pi}{3})$；
- 先移后缩：$\sin x\ \xrightarrow{\text{左移}\frac{\pi}{3}}\ \sin(x+\frac{\pi}{3})\ \xrightarrow{\text{横缩}\frac{1}{2}}\ \sin(2x+\frac{\pi}{3})$。

**通式**（$\omega>0$）：$\sin(\omega x+\varphi)=\sin\!\big[\omega(x+\frac{\varphi}{\omega})\big]$，所以相对 $y=\sin x$ 的**水平平移总量恒为 $\dfrac{|\varphi|}{\omega}$**——先平移后伸缩时平移 $|\varphi|$，先伸缩后平移时只平移 $\dfrac{|\varphi|}{\omega}$。判定口诀：**横向平移的对象是“括号里的 $x$”，先伸缩会把 $x$ 挤紧，平移量同步缩水**。

竖直方向同理有坑：$y=\sin x\to y=A\sin x+b$ 必须**先纵伸 $A$、后加 $b$**（先加 $b$ 再纵伸会多出 $Ab$，方向就不对了）。

![](img/math/trig-shift.svg)

## 辅助角与恒等变换衔接

$$a\sin x+b\cos x=\sqrt{a^2+b^2}\,\sin(x+\varphi),\qquad \tan\varphi=\frac{b}{a}\quad(a>0)$$

$\varphi$ 的具体取值由 $(a,b)$ 所在象限确定；若 $a<0$，先提负号写成 $\sqrt{a^2+b^2}$ 的正系数再套（或改用 $\cos$ 形式）。配合 `auxiliary-angle` 例题使用：先辅助角合一，再用第 2 步整体代换求单调/对称。

## 邪修提示

- **$\omega<0$ 先提负**：$\sin$ 是奇函数、$\tan$ 是奇函数（提负号要乘在 $\sin$ 外面，图像上下翻转），$\cos$ 是偶函数（直接 $\cos(-\omega x+\varphi)=\cos(\omega x-\varphi)$）；
- 单调区间**不要**在 $\omega x$ 上盲目加 $2k\pi$：$x$ 的步长是 $\dfrac{2\pi}{|\omega|}$（即 $T$），必须整体代换解出 $x$ 再写区间；
- 由图像求 $\varphi$ 时，选点越"确定"越好（峰/谷/第一上升零点），不要选挨着轴的模糊点导致多解；算相邻零点间距是 $T/2$，别当成 $T$；
- 变换题选 "平移 $\frac{\pi}{3}$" 还是 "平移 $\frac{\pi}{6}$"，先看目标式里 $\omega$ 是否已缩：**已缩分母除 $\omega$，未缩直接用**；
- 风险：总表结论在选填可直接用；大题求单调区间必须写"令 $u=\omega x+\varphi$…"的整体代换过程，只写结果会被扣过程分。
