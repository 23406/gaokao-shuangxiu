---
title: 抛物线焦点弦与顶点三角形面积
type: example
status: draft
source: 自编（经典考法：抛物线综合为新课标卷常客）
difficulty: 较难
applicability: 选填通用
risk: 用直线 y=k(x-1) 假定斜率存在，别忘了"通径（垂直焦点弦）"是斜率不存在情形——它恰好给出最小值，必须单独检验。
fit:
  - 抛物线焦点弦与原点围成三角形面积
  - 韦达定理与弦长处理
  - 选填题
updated: 2025-03-03
---

## 题目

过抛物线 $y^2=4x$ 的焦点 $F$ 的直线与抛物线交于 $A$、$B$ 两点，$O$ 为坐标原点，则 $\triangle AOB$ 面积的最小值为（ ）

A. $2$

B. $4$

C. $8$

D. $1$

## 标准解法

**设线**：$F(1,0)$，设直线 $l:\ y=k(x-1)$（先假设斜率存在，$k\ne0$）：

$$x=\frac{y}{k}+1$$

代入 $y^2=4x$：

$$y^2=\frac{4}{k}y+4\ \Rightarrow\ y^2-\frac{4}{k}y-4=0$$

**韦达**：$y_1+y_2=\dfrac4k$，$y_1y_2=-4$。

**面积**（$A(x_1,y_1),B(x_2,y_2)$，$S=\frac12|x_1y_2-x_2y_1|$）：

$$x_1y_2-x_2y_1=\left(\frac{y_1}{k}+1\right)y_2-\left(\frac{y_2}{k}+1\right)y_1=y_2-y_1$$

$$\Rightarrow S=\frac12|y_2-y_1|=\frac12\sqrt{(y_1+y_2)^2-4y_1y_2}=\frac12\sqrt{\frac{16}{k^2}+16}=2\sqrt{1+\frac{1}{k^2}}>2$$

**检验斜率不存在**：$l:x=1$（通径），$A(1,2),B(1,-2)$，$S=\frac12\times1\times4=2$ ✓ 可达。

综上 $S_{\min}=2$，选 **A**。

## 邪修解法

**秒杀公式**：抛物线 $y^2=2px$ 的焦点弦与原点围成的三角形

$$S_{\min}=\frac{p^2}{2}$$

- 出现方式：**通径垂直到焦点**时取最小（$AB$ 为通径 $x=\dfrac p2$，$S=\dfrac12\cdot\dfrac p2\cdot 2p=\dfrac{p^2}2$）；
- 本题 $y^2=4x$：$p=2\Rightarrow S_{\min}=\dfrac{4}{2}=2$，15 秒出 A。

口诀：**"焦点三角形（顶点在原点），通径截一半，半边 p 乘半 p 再除 2"**。

## 点评

- 大背景：抛物线焦点弦四大结论——$y_1y_2=-p^2$、$x_1x_2=\dfrac{p^2}{4}$、$\dfrac{1}{|FA|}+\dfrac{1}{|FB|}=\dfrac2p$、弦长 $|AB|=\dfrac{2p}{\sin^2\theta}$（$\theta$ 为直线倾斜角）——面积题常与它们混考；
- 本题 $|AB|_{\min}=2p=4$（通径）；面积最小 2 时对应通径，两个"最小"要分清；
- 变式：改为"过焦点的弦与顶点构成三角形，求 $\triangle AOB$ 面积范围"——答案 $[2,+\infty)$；若问"弦中点轨迹"则是 $y^2=p\left(x-\dfrac p2\right)$（顶点 $(p/2,0)$ 开口向右的抛物线，端点 $(x_1,y_1),(x_2,y_2)$ 的中点 $(x_M,y_M)$ 满足 $y_M^2=p\left(x_M-\dfrac p2\right)$，验算 $p=2$ 时中点 $(3,2)$：$4=2(3-1)$ ✓）；
- 大题书写：斜率不存在情形一定要补一句"当 $l\perp x$ 轴时……"，否则失完整性分。
- 真题关联：抛物线综合（焦点弦/面积）是新高考高频考法。🔗 真题公开资料：[中国教育考试网·普通高考](https://gaokao.neea.edu.cn/)（官方试题评析）、[百度题库·2024新课标Ⅰ卷数学](https://tiku.baidu.com/tikupc/paperdetail/d6f8c6d4a1c7aa00b52acba6)。
