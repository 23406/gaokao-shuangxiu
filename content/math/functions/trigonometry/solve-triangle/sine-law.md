---
title: 正弦定理·知两边一对角求另一角正弦值
type: example
status: draft
source: 自编（经典考法：解三角形为新课标卷必考）
difficulty: 中等
applicability: 选填通用
risk: 用 a/sinA=b/sinB 时先判断两解可能——此题 a<b 且 B 为锐角时 A 唯一锐角解，但"a=b 或 a>b"时要警惕两解/死解。
fit:
  - 正弦定理（边化角）
  - 三角形解的个数判断
  - 选填题
updated: 2025-03-03
---

## 题目

在 $\triangle ABC$ 中，$a=3$，$b=4$，$B=60^\circ$，则 $\sin A$ 的值为（ ）

A. $\dfrac{3\sqrt3}{8}$

B. $\dfrac{\sqrt3}{8}$

C. $\dfrac{3\sqrt3}{4}$

D. $\dfrac12$

## 标准解法

**正弦定理**：$\dfrac{a}{\sin A}=\dfrac{b}{\sin B}$，即

$$\sin A=\frac{a\sin B}{b}=\frac{3\times\dfrac{\sqrt3}{2}}{4}=\frac{3\sqrt3}{8}$$

**解的个数检查**：$a<b$ ⇒ $A<B=60^\circ$（大边对大角），故 $A$ 为锐角且唯一（不会出现 $A$ 与 $180^\circ-A$ 两个解的情况）。

选 **A**。

## 邪修解法

**"边对边、角对角，乘起来除下去"**：$\sin A=\dfrac{a}{b}\sin B$——先看比值（$3/4$）乘上已知角的正弦：

- $\sin60^\circ=\dfrac{\sqrt3}{2}$，乘以 $\dfrac34$ ⇒ $\dfrac{3\sqrt3}{8}$；
- 检查方向：$a<b\Rightarrow\sin A<\sin B$，$\dfrac{3\sqrt3}{8}\approx0.65<0.866$ ✓。

30 秒出 A。

## 点评

- 正弦定理三兄弟一起记：$\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}=2R$（$R$ 为外接圆半径）——"边化角"与"角化边"都是同一个式子；
- 解的个数（已知边 $a,b$ 与角 $B$）：①$b>a$ ⇒ $A$ 唯一锐角；②$a>b$ 且 $a\sin B<b$ ⇒ 两解（$A$ 取锐角或钝角）；③$a\sin B>b$ ⇒ 无解（正弦值大于 1）；
- 选项陷阱：$\dfrac{\sqrt3}{8}$（忘了乘 $\dfrac{a}{b}$ 的 $3$）、$\dfrac{3\sqrt3}{4}$（把分母的 $b$ 写成了 $2b/...$ 类误配）；取值用 $\sin B$ 当 $\sin A$ 也是常错；
- 变式：已知 $\sin A$ 求 $a$——同一式子反向用；大题里继续用余弦定理补第三边；
- 真题关联：解三角形（正余弦定理混合）为新高考解答题第一题常客。🔗 真题公开资料：[中国教育考试网·普通高考](https://gaokao.neea.edu.cn/)（官方试题评析）、[百度题库·2024新课标Ⅰ卷数学](https://tiku.baidu.com/tikupc/paperdetail/d6f8c6d4a1c7aa00b52acba6)。
