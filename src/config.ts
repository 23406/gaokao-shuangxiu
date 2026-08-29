export const SITE_NAME = '高考双修'
export const SITE_SLOGAN = '标准解法 × 邪修速解 · 完全免费开源'
export const SITE_DESC =
  '面向新高考（新课标卷）的免费开源复习站：数理化生知识导图，每个例题标准解法与邪修速解并排，邪修一律附适用条件与风险提示。'

// 仓库地址：站点上线后，纠错按钮自动指向这里
export const GITHUB_REPO = '23406/gaokao-shuangxiu'
export const GITHUB_URL = `https://github.com/${GITHUB_REPO}`

export const SUBJECTS = [
  { slug: 'math', title: '数学' },
  { slug: 'physics', title: '物理' },
  { slug: 'chemistry', title: '化学' },
  { slug: 'biology', title: '生物' },
]

export function feedbackUrl(nodePath: string, title: string): string {
  const t = encodeURIComponent(`[纠错] ${title}（${nodePath}）`)
  const b = encodeURIComponent(
    `## 纠错反馈\n\n- 节点路径：\`${nodePath}\`\n- 标题：${title}\n\n### 问题描述\n（请说明发现的问题，最好附上正确内容或出处）\n`,
  )
  return `${GITHUB_URL}/issues/new?title=${t}&body=${b}`
}
