<template>
  <div class="mine-page">
    <header class="page-head">
      <h1>我的</h1>
      <p class="sub">收藏 / 错题 / 笔记 —— 数据保存在本机浏览器，换设备前请先导出备份。</p>
      <div class="head-actions">
        <button class="btn" @click="exportJson">⭳ 导出 JSON</button>
        <label class="btn" for="import-file">⭱ 导入 JSON</label>
        <input id="import-file" type="file" accept="application/json" style="display: none" @change="onImport" />
      </div>
    </header>

    <div class="tabs">
      <button class="btn" :class="{ on: tab === 'fav' }" @click="tab = 'fav'">★ 收藏（{{ favs.length }}）</button>
      <button class="btn amber" :class="{ on: tab === 'wrong' }" @click="tab = 'wrong'">✗ 错题（{{ wrongs.length }}）</button>
      <button class="btn" :class="{ on: tab === 'note' }" @click="tab = 'note'">✎ 笔记（{{ notes.length }}）</button>
    </div>

    <section v-if="currentList.length" class="list">
      <div v-for="p in currentList" :key="p" class="item panel">
        <div class="item-main">
          <router-link :to="'/node/' + p" class="item-title">{{ titleOf(p) }}</router-link>
          <div class="item-path">{{ p }}</div>
        </div>
        <button class="btn" @click="toggleFav(p)">★</button>
        <button class="btn amber" @click="toggleWrong(p)">✗</button>
      </div>
    </section>
    <section v-else class="panel empty">这里还空空如也 —— 去知识导图里逛一圈，把重点标记下来。</section>

    <section v-if="tab === 'note' && notes.length" class="notes">
      <div v-for="p in notes" :key="p" class="note panel">
        <div class="note-head">
          <router-link :to="'/node/' + p" class="item-title">{{ titleOf(p) }}</router-link>
          <span class="item-path">{{ p }}</span>
        </div>
        <textarea
          :value="get(p).note"
          rows="3"
          @input="setNote(p, ($event.target as HTMLTextAreaElement).value)"
        ></textarea>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocalStore } from '../composables/useLocalStore'
import { useSiteIndex } from '../composables/useSiteIndex'

const { state, list, toggleFav, toggleWrong, get, setNote, exportJson, importJson } = useLocalStore()
const index = useSiteIndex()
const tab = ref<'fav' | 'wrong' | 'note'>('fav')

const favs = computed(() => list('fav'))
const wrongs = computed(() => list('wrong'))
const notes = computed(() =>
  Object.entries(state)
    .filter(([, v]) => v.note.trim())
    .map(([p]) => p),
)

const currentList = computed(() => (tab.value === 'fav' ? favs.value : wrongs.value))

function titleOf(p: string): string {
  return index.value?.map[p]?.title || p
}

function onImport(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    try {
      importJson(String(reader.result))
      alert('导入成功')
    } catch {
      alert('导入失败：文件格式不对')
    }
  }
  reader.readAsText(file)
  ;(e.target as HTMLInputElement).value = ''
}
</script>

<style scoped>
.mine-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
.page-head h1 {
  font-family: var(--mono);
  color: var(--green);
  margin: 0 0 6px;
}
.page-head .sub {
  color: var(--text-dim);
  margin: 0 0 14px;
}
.head-actions {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
}
.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}
.item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  margin-bottom: 8px;
}
.item-main {
  flex: 1;
  min-width: 0;
}
.item-title {
  font-size: 15px;
  border-bottom: none;
}
.item-path {
  font-family: var(--mono);
  font-size: 11.5px;
  color: var(--text-faint);
}
.empty {
  padding: 40px;
  text-align: center;
  color: var(--text-faint);
}
.note {
  padding: 12px 16px;
  margin-bottom: 10px;
}
.note-head {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 8px;
}
.note textarea {
  width: 100%;
  background: var(--input-bg);
  border: 1px solid var(--line);
  border-radius: 4px;
  color: var(--text);
  font-size: 13.5px;
  padding: 8px 10px;
  resize: vertical;
  outline: none;
}
.note textarea:focus {
  border-color: var(--green);
}
</style>
