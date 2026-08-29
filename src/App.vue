<template>
  <div class="shell">
    <MatrixRain />
    <header class="topbar">
      <div class="topbar-inner panel">
        <router-link to="/" class="brand" @click="clearSearch">
          <span class="b b-dao">道</span>
          <span class="b b-xie">邪</span>
          <span class="brand-name">高考双修</span>
          <span class="brand-sub">gaokao · dual-cultivation</span>
        </router-link>
        <nav class="subject-nav">
          <router-link v-for="s in SUBJECTS" :key="s.slug" :to="'/node/' + s.slug">{{ s.title }}</router-link>
        </nav>
        <SearchBox ref="searchRef" />
        <nav class="tool-nav">
          <button
            class="theme-toggle"
            :title="theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式'"
            @click="toggleTheme"
          >
            {{ theme === 'dark' ? '☀️' : '🌙' }}
          </button>
          <router-link to="/evil">⚡ 邪修速查</router-link>
          <router-link to="/mine">★ 我的</router-link>
        </nav>
      </div>
    </header>

    <main class="main">
      <router-view />
    </main>

    <button v-if="showTop" class="back-top" title="回到顶部" @click="scrollTop">▲</button>

    <footer class="footer">
      <div class="footer-inner">
        <span>高考双修 · 完全免费开源 · 代码 GPL-3.0 · 内容 CC BY-SA 4.0</span>
        <span class="footer-links">
          <a :href="GITHUB_URL" target="_blank" rel="noopener">GitHub</a>
          <a :href="feedbackUrl('', '站点')" target="_blank" rel="noopener">提 Issue 纠错</a>
        </span>
      </div>
      <div class="disclaimer">⚠ 本站内容仅供学习参考，邪修速解请先核对适用条件；解答题务必使用标准解法。</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { SUBJECTS, GITHUB_URL, feedbackUrl } from './config'
import { useTheme, toggleTheme } from './composables/useTheme'
import MatrixRain from './components/MatrixRain.vue'
import SearchBox from './components/SearchBox.vue'

const { theme } = useTheme()
const showTop = ref(false)

function onScroll() {
  showTop.value = window.scrollY > 400
}
function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function clearSearch() {
  // 搜索框由自身管理，点 logo 只负责跳首页
}
</script>

<style scoped>
.shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 10px 16px 0;
}
.topbar-inner {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 8px 14px;
  max-width: 1200px;
  margin: 0 auto;
}
.brand {
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: none;
  flex: none;
}
.b {
  font-family: var(--mono);
  font-size: 15px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 4px;
}
.b-dao {
  color: var(--green);
  border: 1px solid var(--green);
}
.b-xie {
  color: var(--red);
  border: 1px solid var(--red);
  margin-left: -6px;
}
.brand-name {
  font-family: var(--mono);
  font-size: 18px;
  color: var(--green-bright);
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
  letter-spacing: 2px;
}
.brand-sub {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--text-faint);
  margin-left: 4px;
}
.subject-nav {
  display: flex;
  gap: 4px;
  flex: none;
}
.subject-nav a,
.tool-nav a {
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 14px;
  border-bottom: none;
  color: var(--text-dim);
}
.subject-nav a:hover,
.tool-nav a:hover,
.subject-nav a.router-link-active,
.tool-nav a.router-link-active {
  color: var(--green-bright);
  background: var(--bg-hover);
}
.tool-nav {
  display: flex;
  gap: 4px;
  margin-left: auto;
  flex: none;
  align-items: center;
}
.theme-toggle {
  width: 30px;
  height: 30px;
  padding: 0;
  border: 1px solid var(--line-strong);
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  font-size: 15px;
  line-height: 1;
  transition: all 0.15s;
}
.theme-toggle:hover {
  background: var(--bg-hover);
}
.main {
  flex: 1;
}
.footer {
  border-top: 1px solid var(--line);
  padding: 14px 16px 20px;
  margin-top: 20px;
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12.5px;
  color: var(--text-faint);
}
.footer-links {
  display: flex;
  gap: 14px;
}
.disclaimer {
  max-width: 1200px;
  margin: 8px auto 0;
  font-size: 12px;
  color: var(--text-faint);
}
.back-top {
  position: fixed;
  right: 24px;
  bottom: 32px;
  z-index: 90;
  width: 40px;
  height: 40px;
  font-size: 14px;
  color: var(--green);
  background: var(--bg-panel-solid);
  border: 1px solid var(--line-strong);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 14px rgba(0, 255, 65, 0.25);
  transition: all 0.15s;
}
.back-top:hover {
  background: var(--bg-hover);
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.4);
}
@media print {
  .back-top {
    display: none !important;
  }
}
@media (max-width: 900px) {
  .topbar-inner {
    flex-wrap: wrap;
    gap: 10px;
  }
  .brand-sub {
    display: none;
  }
  .tool-nav {
    margin-left: 0;
  }
}
</style>
