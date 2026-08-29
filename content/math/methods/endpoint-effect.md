---
title: 邪修·端点效应
type: knowledge
status: draft
keywords: [端点效应, 端点检验, 恒成立求参, 选填秒杀]
updated: 2025-02-02
---

# ⚡ 邪修·端点效应

> **适用特征**：恒成立/存在性问题求参数范围；"$\forall x\in[a,b]$，$f(x)\ge0$"型；选填题。
>
> **风险提示**：端点效应给出的是**必要条件**（端点处必须成立），选出的范围还要验证充分性；大题必须完整证明，选填则可"猜范围后验证"。

## 心法

**必要条件先行**：$f(x)\ge0$ 在 $[a,b]$ 恒成立 ⟹ 端点 $f(a)\ge0$、$f(b)\ge0$。把端点代入，立刻砍掉参数范围的一大半。

## 三步走

1. **代端点**：$f(a)\ge0$、$f(b)\ge0$ 解出参数范围；
2. **代"危险点"**：分段函数衔接点、$f'(x)=0$ 的驻点、无定义点——这些地方最容易突破；
3. **验证**：把候选范围代回原式（或心算单调性）确认充分性。

## 常见面孔

- 分段函数单调求参 → 衔接点代入（见[例题](/node/math/functions/concepts-properties/monotonic-param)）；
- $e^x\ge ax+b$ 恒成立 → $x=0$ 处 $1\ge b$，$x\to-\infty$ 检查；
- $\ln x\le ax-1$ 恒成立 → $x=1$ 处 $0\le a-1$，得 $a\ge1$；
- 三角函数不等式恒成立 → 代 $\pm\dfrac\pi2$ 等特殊点。

## 配套例题

- [分段函数单调求参（端点检验法）](/node/math/functions/concepts-properties/monotonic-param)
