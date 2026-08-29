---
title: 回归方程·必过样本中心点求截距
type: example
status: draft
source: 自编（经典考法：回归直线过 (x̄,ȳ) 是最小二乘的直接推论）
difficulty: 中等
applicability: 选填通用
risk: 回归方程 ŷ=b̂x+â 中，只有 (x̄,ȳ) 这"一个点"是必然满足的（因为 â=ȳ−b̂x̄ 由中心点定义）——它不是"大多数点"的近似，而是一次手工精确代入；x̂、y 的下标别写错。
fit:
  - 已知 b̂（或斜率）求截距 â
  - 样本中心点 (x̄,ȳ)
  - 相关系数 r 的符号与大小
  - 选填题
updated: 2025-03-03
---

## 题目

某兴趣小组收集 5 组数据 $(x_i,y_i)$，计算得 $\bar x=3$，$\bar y=6$。用最小二乘法拟合一元线性回归方程 $\hat y=\hat b x+\hat a$，得 $\hat b=1.8$。则 $\hat a$ 的值为（ ）

A. $0.6$

B. $5.4$

C. $-0.6$

D. $1.8$

## 标准解法

**先证结论（课本推导）：** 最小二乘法要求残差平方和

$$Q=\sum_{i=1}^{n}\left(y_i-\hat a-\hat b x_i\right)^2$$

最小。令 $\dfrac{\partial Q}{\partial \hat a}=0$（对 $\hat a$ 求偏导）：

$$-2\sum_{i=1}^{n}\left(y_i-\hat a-\hat b x_i\right)=0\ \Longrightarrow\ \sum y_i=n\hat a+\hat b\sum x_i$$

两边除以 $n$：$\bar y=\hat a+\hat b\bar x$，即 **回归直线必过样本中心点 $(\bar x,\bar y)$**，且

$$\hat a=\bar y-\hat b\bar x$$

**代入计算：**

$$\hat a=6-1.8\times3=6-5.4=0.6$$

选 **A**。

## 邪修解法

**"中心点扔进直线"**：回归直线 $y=bx+a$ 一定经过 $(\bar x,\bar y)$——这是$\bar y=\hat a+\hat b\bar x$ 的移项形式。

> 口诀：**"求截距？中心点（均值点）代进 y=kx+b"**；求斜率？中心点加 $\hat b=\dfrac{\sum(x_i-\bar x)(y_i-\bar y)}{\sum(x_i-\bar x)^2}$。

**为什么能这么干**：最小二乘正规方程第一条就是"残差和为零"（$\sum(y_i-\hat y_i)=0$，已在上面求导证出），几何上意思是回归线恰好在数据点"重心"处穿过——所以中心点代入不是近似，是精确恒等式。

30 秒出 A。

## 点评

- 相关系数 $r\in[-1,1]$：$r>0$ 正相关、$r<0$ 负相关；$|r|$ 越接近 1，线性相关越强；$|r|$ 接近 0 则线性相关弱（但可能有非线性关系）；
- **$r$ 与 $\hat b$ 同号**（推导：$\hat b=\dfrac{\sum(x_i-\bar x)(y_i-\bar y)}{\sum(x_i-\bar x)^2}$ 的分母 $>0$，故 $\hat b$ 与分子 $\sum(x_i-\bar x)(y_i-\bar y)$ 同号；而 $r=\dfrac{\sum(x_i-\bar x)(y_i-\bar y)}{\sqrt{\sum(x_i-\bar x)^2\sum(y_i-\bar y)^2}}$ 的分母 $>0$，故 $r$ 也与同一分子同号——于是 $r$ 与 $\hat b$ 同号）；
- 常错：把 $\hat b\bar x=5.4$ 当答案（那只是斜率这一项，忘减 6）；$r$ 做大小比较时忽略"符号只看相关方向、大小看绝对值"；
- 变式：给回归方程和 $x$ 求预测 $\hat y$（直接代入）；给 $r$ 问两变量关系（相关方向与强弱）；
- 真题关联：统计建模（线性回归）为新高考必考板块。🔗 真题公开资料：[中国教育考试网·普通高考](https://gaokao.neea.edu.cn/)（官方试题评析）、[百度题库·2024新课标Ⅰ卷数学](https://tiku.baidu.com/tikupc/paperdetail/d6f8c6d4a1c7aa00b52acba6)。
