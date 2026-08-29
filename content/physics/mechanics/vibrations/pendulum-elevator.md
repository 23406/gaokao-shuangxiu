---
title: 单摆变式·电梯加速（等效 g）
type: example
status: draft
source: 自编（经典考法：等效重力加速度判断为选填高频）
difficulty: 中等
applicability: 选填通用
risk: 非惯性系中把视重力 g_eff 代入周期公式：电梯加速上升 g_eff=g+a、加速下降 g_eff=g−a、自由下落 g_eff=0（周期趋于无穷大/失稳）；只替换 g，公式 T=2π√(L/g) 形式不变。
fit:
  - 电梯/升降机中单摆周期
  - 等效重力加速度
  - 选填题
updated: 2025-03-07
---

## 题目

一单摆在地面（$g=10\,\mathrm{m/s^2}$）上的周期为 $T_0=2\,\mathrm{s}$。现把它挂在以 $a=5\,\mathrm{m/s^2}$ 匀加速上升的电梯内（摆长不变），其周期变为（ ）

A. $\dfrac{2\sqrt6}{3}\,\mathrm s$

B. $2\sqrt6\,\mathrm s$

C. $1\,\mathrm s$

D. $4\,\mathrm s$

## 标准解法

**等效重力加速度**：电梯匀加速上升时，视重 $mg_+ = m(g+a)$，即 $g_{\text{eff}}=g+a=15\,\mathrm{m/s^2}$。

$$T'=2\pi\sqrt{\frac{L}{g_{\text{eff}}}},\qquad T_0=2\pi\sqrt{\frac{L}{g}}$$

$$\frac{T'}{T_0}=\sqrt{\frac{g}{g_{\text{eff}}}}=\sqrt{\frac{10}{15}}=\frac{\sqrt6}{3}\ \Rightarrow\ T'=2\times\frac{\sqrt6}{3}=\frac{2\sqrt6}{3}\,\mathrm{s}\approx1.63\,\mathrm s$$

周期变短（"重力感加重"，摆荡得更快）✓ 选 **A**。

## 邪修解法

**口诀**：

> **"加速向上：g+a；加速向下：g−a；完全失重：g=0"**；
> 周期只跟"看到的 g"走：$T'=T_0\sqrt{\dfrac{g}{g_{\text{eff}}}}$——根号在分母，g_eff 变大 T 变小。

**为什么**：电梯里摆球"感受到"的重力不是 mg 而是视重 $m(g\pm a)$（牛顿第二定律：$T−mg=ma$ ⇒ $T=m(g+a)$），把视重当"新 g"即可原公式照用。

30 秒出 A。

## 点评

- 变式①电梯减速上升（$g_{\text{eff}}=g-a$）：$T'$ 变长——注意"加速/减速"要和"方向"分开判定：**向上减速 = 向下加速 = g−a**；
- 变式②完全失重（自由下落/绕地轨道）：$g_{\text{eff}}=0$，$T\to\infty$——"单摆失去回复力，不再摆动"（物体对绳/秤无压力）是最干净的理解；
- 变式③加速水平运动：$g_{\text{eff}}=\sqrt{g^2+a^2}$（等效重力场方向偏斜，是"倾斜单摆"模型）；
- 与"单摆测 g"实验联动：$g=\dfrac{4\pi^2L}{T^2}$，换到电梯数据代入即可；
- 真题关联：等效重力场/视重是新课标物理选填常客（与[等效重力场模型](/node/physics/models/composite-field/equivalent-field)配套）。🔗 真题公开资料：[中国教育考试网·普通高考](https://gaokao.neea.edu.cn/)（官方试题评析）。
