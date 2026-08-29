---
title: 辅助角公式求最值（R=√(a²+b²)）
type: example
status: draft
source: 自编（经典考法）
difficulty: 中档
applicability: 选填通用
risk: 辅助角公式化简后是"正弦型"函数，最大值 = √(a²+b²)（当 a、b 同号无影响，反正负号影响初相不影响振幅）；注意题目问"最大值"还是"最小正周期"。
fit:
  - a·sin2x + b·cos2x 型（或含 sinx、cosx 乘积）
  - 求最大值/周期
  - 选填题
updated: 2025-02-18
---

## 题目

函数 $f(x)=\cos 2x+\sqrt3\sin 2x$ 的最大值为（ ）

A. $2$

B. $3$

C. $1$

D. $\sqrt3$

## 标准解法

**辅助角公式**：

$$
a\sin\theta+b\cos\theta=\sqrt{a^2+b^2}\sin(\theta+\varphi)
$$

其中 $\tan\varphi=\dfrac ba$（$a=\sqrt3$，$b=1$ 时 $\varphi=\dfrac{\pi}{6}$）。

本题 $f(x)=\sqrt3\sin2x+\cos2x=2\sin\left(2x+\dfrac{\pi}{6}\right)$。

**最大值**：$\sin$ 型最大值为振幅 $2$，选 **A**。

## 邪修解法

**适用特征**：$a\sin+b\cos$ 非齐次三角式 → **振幅直接算**：

$$
R=\sqrt{a^2+b^2}=\sqrt{3+1}=2
$$

最大值 $=R=2$，**10 秒：A**——不用管初相 $\varphi$ 是多少。

## 点评

- 辅助角公式全家桶（背住系数）：

| 目标 | 化简结果 |
| --- | --- |
| $\sqrt3\sin2x+\cos2x$ | $2\sin(2x+\dfrac{\pi}{6})$ |
| $\sin x-\cos x$ | $\sqrt2\sin(x-\dfrac{\pi}{4})$ |
| $\sin x+\sqrt3\cos x$ | $2\sin(x+\dfrac{\pi}{3})$ |

- 相关问法：最小正周期 $T=\dfrac{2\pi}{2}=\pi$（相位角系数是 2）；对称轴 $2x+\dfrac{\pi}{6}=\dfrac{\pi}{2}+k\pi$；
- 常见前置动作：遇到 $\sin^2x$、$\sin x\cos x$ 先用**降幂公式**（$\sin^2x=\dfrac{1-\cos2x}{2}$、$\sin x\cos x=\dfrac{\sin2x}{2}$）化成同角、同频的 $a\sin2x+b\cos2x$ 再辅助角；
- 风险：最高点取值（$2x+\dfrac{\pi}{6}=\dfrac{\pi}{2}+2k\pi$ 时取最大）别和"最小值点"混；题干若给定义域限制，还要验最值是否能取到。
