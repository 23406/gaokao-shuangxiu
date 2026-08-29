---
title: 邪修·洛必达法则（超纲拓展）
type: knowledge
status: draft
keywords: [洛必达法则, 分离参数, 极限, 选填秒杀]
updated: 2025-02-15
---

# ⚡ 邪修·洛必达法则（超纲拓展）

> **适用特征**：分离参数后 $g(x)$ 在端点（如 $x\to0^+$ 或 $x\to+\infty$）是"$\dfrac00$"或"$\dfrac\infty\infty$"型，选填快速定参数边界。
>
> **风险提示（大写加粗）**：**超纲方法，大题严禁使用**（会按"过程缺失/方法不当"扣分）；洛必达不是对任意极限都成立（需导数比极限存在），选填用后务必用"端点代入检验"验证结论；高考选填的正确答案通常就是端点极限值。

## 法则

若 $\lim\dfrac{f(x)}{g(x)}$ 为 $\dfrac00$ 型或 $\dfrac\infty\infty$ 型，且 $\lim\dfrac{f'(x)}{g'(x)}$ 存在，则：

$$
\lim_{x\to a}\dfrac{f(x)}{g(x)}=\lim_{x\to a}\dfrac{f'(x)}{g'(x)}
$$

（一次不行可以连用，但每用一次都要确认仍然是不定型。）

## 高考经典面孔（选填直接出答案）

**恒成立端点极限**：$a\le\dfrac{\ln x}{x}$ 在 $x>0$ 恒成立 → 最大值 $\dfrac1{\mathrm e}$（非端点，不用洛必达）；但 $a\le\dfrac{\mathrm e^x-1}{x}$ 恒成立（$x>0$）→ $x\to0^+$ 时 $\dfrac{\mathrm e^x-1}{x}\to\dfrac{\mathrm e^0}{1}=1$ → $a\le1$。

**数列极限式**：$\lim\dfrac{\ln n}{n}=0$（分式型直接比阶）。

## 常见极限结论（背住就不用每次洛必达）

- $\lim_{x\to0}\dfrac{\sin x}{x}=1$；$\lim_{x\to0}\dfrac{\mathrm e^x-1}{x}=1$；$\lim_{x\to0}\dfrac{\ln(1+x)}{x}=1$；
- $\lim_{x\to+\infty}\dfrac{\ln x}{x}=0$；$\lim_{x\to+\infty}\dfrac{x^n}{\mathrm e^x}=0$（指数碾压幂）；
- $\lim_{x\to+\infty}\dfrac{\ln x}{x^n}=0$（幂碾压对数）。

## 使用边界（记住才安全）

1. 只有"不定型"才能用（先判断类型）；
2. 大题中出现 $\lim$ 求解要写"当 $x\to a$ 时，$g(x)\to\dfrac00$ 型"并给出**关键等式**，阅卷只看你用的对不对——**但高考标准答案从不用洛必达**，建议大题用"放缩/端点代入+单调性"替代；
3. 选填用洛必达得到边界值后，再验证边界可取性（端点封闭题）。
