<template>
  <div class="evil-page">
    <header class="page-head">
      <h1>⚡ 邪修速查表</h1>
      <p class="sub">全站邪修大招总索引 —— 按「适用特征」反查，选填秒杀。</p>
      <div class="warn-box" style="max-width: 720px">
        <span class="warn-title">⚠ 全局警告</span>
        以下速解均为<strong>非常规技巧</strong>，多数仅适用于选择题/填空题；解答题必须使用标准解法写全步骤，否则按过程缺失扣分。使用前先核对适用特征。
      </div>
    </header>

    <div v-if="loading" class="panel" style="padding: 20px">
      <div class="skeleton" style="height: 300px"></div>
    </div>

    <section v-for="group in groups" :key="group.subject" class="group panel">
      <h2 class="group-title">{{ subjectName(group.subject) }} · {{ group.items.length }} 招</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>标题</th>
              <th>适用特征</th>
              <th>适用范围</th>
              <th>风险</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="it in group.items" :key="it.path">
              <td>
                <router-link :to="'/node/' + it.path">{{ it.title }}</router-link>
              </td>
              <td class="fit">
                <span v-for="(f, i) in it.fit" :key="i" class="fit-item">{{ f }}</span>
              </td>
              <td class="app">{{ it.applicability || '—' }}</td>
              <td class="risk-cell" :title="it.risk">{{ it.risk ? it.risk.slice(0, 40) + (it.risk.length > 40 ? '…' : '') : '—' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <p v-if="!loading && !groups.length" class="panel empty">暂无收录，内容生产中……</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SearchItem } from '../types'

const loading = ref(true)
const groups = ref<{ subject: string; items: SearchItem[] }[]>([])

const SUBJECT_NAMES: Record<string, string> = {
  math: '数学',
  physics: '物理',
  chemistry: '化学',
  biology: '生物',
}

fetch(`${import.meta.env.BASE_URL}content/search.json`)
  .then((r) => r.json())
  .then((data: SearchItem[]) => {
    const evil = data.filter((it) => it.type === 'example' && (it.fit?.length || it.risk))
    const bySubject = new Map<string, SearchItem[]>()
    for (const it of evil) {
      if (!bySubject.has(it.subject)) bySubject.set(it.subject, [])
      bySubject.get(it.subject)!.push(it)
    }
    groups.value = [...bySubject.entries()].map(([subject, items]) => ({ subject, items }))
    loading.value = false
  })

function subjectName(s: string): string {
  return SUBJECT_NAMES[s] || s
}
</script>

<style scoped>
.evil-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}
.page-head h1 {
  font-family: var(--mono);
  color: var(--red);
  text-shadow: 0 0 14px rgba(255, 59, 92, 0.4);
  margin: 0 0 6px;
}
.page-head .sub {
  color: var(--text-dim);
  margin: 0 0 12px;
}
.group {
  padding: 14px 18px;
  margin-bottom: 16px;
}
.group-title {
  font-family: var(--mono);
  font-size: 16px;
  color: var(--green);
  margin: 0 0 10px;
}
.table-wrap {
  overflow-x: auto;
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 13.5px;
}
th,
td {
  border: 1px solid var(--line);
  padding: 8px 10px;
  text-align: left;
  vertical-align: top;
}
th {
  background: rgba(0, 255, 65, 0.06);
  color: var(--green);
  font-family: var(--mono);
  font-weight: normal;
}
.fit-item {
  display: inline-block;
  margin: 2px 6px 2px 0;
  padding: 0 7px;
  border: 1px dashed rgba(77, 201, 255, 0.45);
  border-radius: 3px;
  color: var(--info-text);
  font-size: 12px;
}
.app {
  color: var(--amber);
  white-space: nowrap;
}
.risk-cell {
  color: var(--red);
  font-size: 12.5px;
}
.empty {
  padding: 30px;
  text-align: center;
  color: var(--text-faint);
}
</style>
