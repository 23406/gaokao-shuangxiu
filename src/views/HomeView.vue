<template>
  <div class="home">
    <section class="hero">
      <h1 class="glitch" data-text="高 考 双 修">高 考 双 修</h1>
      <p class="slogan">标准解法 × 邪修速解</p>
      <p class="desc">{{ SITE_DESC }}</p>
      <div class="hero-actions">
        <a class="btn" href="#/node/math">▸ 进入数学</a>
        <a class="btn" href="#/evil">⚡ 邪修速查表</a>
        <button class="btn" @click="randomExample">🎲 随机一题</button>
        <a class="btn" :href="GITHUB_URL" target="_blank" rel="noopener">⌥ GitHub 开源</a>
      </div>
      <div class="terminal-line">$ 高考复习 · 免费 · 开源 · 标准邪修双修 --no-paid-courses</div>
    </section>

    <section v-if="index" class="subjects">
      <router-link
        v-for="s in index.stats"
        :key="s.slug"
        class="subject-card panel"
        :to="'/node/' + s.slug"
      >
        <div class="s-title">{{ s.title }}</div>
        <div class="s-sub">{{ subjectSlug(s.slug) }}</div>
        <div class="s-stats">
          <span>知识点 {{ s.knowledge }}</span>
          <span>例题 {{ s.example }}</span>
          <span>口诀 {{ s.mnemonic }}</span>
        </div>
      </router-link>
    </section>
    <section v-else class="subjects">
      <div v-for="i in 4" :key="i" class="subject-card skeleton" style="height: 110px"></div>
    </section>

    <section class="features">
      <div class="feature panel">
        <h3>双解并排</h3>
        <p>每个例题：左边标准解法按部就班，右边邪修速解直击要害。没有邪修就不显示，不注水。</p>
      </div>
      <div class="feature panel">
        <h3>适用条件 + 风险提示</h3>
        <p>每招邪修都写清"什么题能用"，并强制红字警告"仅限选填 / 大题慎用"。邪修不坑人。</p>
      </div>
      <div class="feature panel">
        <h3>收藏 / 笔记 / 错题</h3>
        <p>免登录，数据存在浏览器本地，支持导出 JSON 备份。自己的复习轨迹自己掌握。</p>
      </div>
      <div class="feature panel">
        <h3>知识导图导航</h3>
        <p>科目 → 分支 → 知识点 → 题型 → 例题，逐级点开。全局搜索秒查，邪修速查表反查。</p>
      </div>
    </section>

    <section class="notice panel">
      <h3>⚠ 使用须知</h3>
      <ul>
        <li>内容按<strong>新高考 · 新课标卷 · 人教版 2019 新教材</strong>组织，持续生产与校对中。</li>
        <li>邪修解法用于<strong>选择题 / 填空题秒杀</strong>；解答题请用标准解法写全步骤，否则可能按过程缺失扣分。</li>
        <li>发现错误请点页面里的「纠错反馈」按钮提 Issue，感谢每一位贡献者。</li>
        <li>本项目完全免费开源：代码 GPL-3.0，内容 CC BY-SA 4.0。</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { SITE_DESC, GITHUB_URL } from '../config'
import { useSiteIndex } from '../composables/useSiteIndex'

const index = useSiteIndex()
const router = useRouter()

async function randomExample() {
  try {
    const data = await fetch(`${import.meta.env.BASE_URL}content/search.json`).then((r) => r.json())
    const examples = data.filter((it: { type: string }) => it.type === 'example')
    if (!examples.length) return
    const pick = examples[Math.floor(Math.random() * examples.length)]
    router.push({ path: '/node/' + pick.path })
  } catch {
    /* 忽略加载失败 */
  }
}

function subjectSlug(slug: string): string {
  const map: Record<string, string> = {
    math: 'math',
    physics: 'physics',
    chemistry: 'chemistry',
    biology: 'biology',
  }
  return map[slug] || slug
}
</script>

<style scoped>
.home {
  max-width: 1080px;
  margin: 0 auto;
  padding: 20px;
}
.hero {
  text-align: center;
  padding: 40px 10px 30px;
}
.glitch {
  font-family: var(--mono);
  font-size: 52px;
  letter-spacing: 12px;
  color: var(--green);
  text-shadow:
    0 0 10px rgba(0, 255, 65, 0.6),
    0 0 40px rgba(0, 255, 65, 0.3);
  margin: 0;
}
.slogan {
  font-family: var(--mono);
  color: var(--red);
  letter-spacing: 6px;
  margin: 10px 0 6px;
  text-shadow: 0 0 12px rgba(255, 59, 92, 0.4);
}
.desc {
  color: var(--text-dim);
  max-width: 640px;
  margin: 10px auto;
  font-size: 14px;
}
.hero-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 18px 0;
}
.terminal-line {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--green-faint);
  margin-top: 14px;
}
.subjects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin: 24px 0;
}
.subject-card {
  padding: 16px 18px;
  transition: all 0.15s;
  color: inherit;
  border-bottom: 1px solid var(--line);
}
.subject-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 24px rgba(0, 255, 65, 0.25);
}
.s-title {
  font-size: 26px;
  color: var(--green-bright);
  font-family: var(--mono);
}
.s-sub {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--text-faint);
  margin: 2px 0 10px;
}
.s-stats {
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: var(--text-dim);
  font-family: var(--mono);
}
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  margin: 24px 0;
}
.feature {
  padding: 14px 18px;
}
.feature h3 {
  margin: 0 0 8px;
  color: var(--green);
  font-family: var(--mono);
  font-size: 15px;
}
.feature p {
  margin: 0;
  font-size: 13.5px;
  color: var(--text-dim);
}
.notice {
  padding: 14px 20px;
  margin-bottom: 30px;
}
.notice h3 {
  color: var(--amber);
  font-family: var(--mono);
  font-size: 15px;
}
.notice li {
  font-size: 13.5px;
  color: var(--text-dim);
  margin: 4px 0;
}
@media (max-width: 768px) {
  .glitch {
    font-size: 32px;
    letter-spacing: 6px;
  }
}
</style>
