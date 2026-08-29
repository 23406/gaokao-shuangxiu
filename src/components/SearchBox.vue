<template>
  <div class="search-wrap">
    <div class="term-input">
      <span class="prompt">&gt;_</span>
      <input
        v-model="q"
        type="text"
        placeholder="搜知识点 / 邪修 / 例题…"
        @focus="open = q.trim().length > 0"
        @blur="onBlur"
        @keydown.enter="goFirst"
      />
    </div>
    <div v-if="open && results.length" class="results panel">
      <div
        v-for="r in results"
        :key="r.path"
        class="result"
        @mousedown.prevent="go(r.path)"
      >
        <span class="tag" :class="r.type">{{ typeLabel(r.type) }}</span>
        <span class="r-title">{{ r.title }}</span>
        <span class="r-path">{{ r.path }}</span>
      </div>
      <div v-if="!results.length" class="empty">未找到匹配内容</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Fuse from 'fuse.js'
import type { SearchItem } from '../types'
import { typeLabel } from '../utils'

const router = useRouter()
const q = ref('')
const results = ref<SearchItem[]>([])
const open = ref(false)

let fuse: Fuse<SearchItem> | null = null

async function ensureFuse() {
  if (fuse) return
  const data: SearchItem[] = await fetch(`${import.meta.env.BASE_URL}content/search.json`).then((r) => r.json())
  fuse = new Fuse(data, {
    keys: [
      { name: 'title', weight: 3 },
      { name: 'keywords', weight: 2 },
      { name: 'summary', weight: 1 },
    ],
    threshold: 0.42,
    ignoreLocation: true,
  })
}

watch(q, async (v) => {
  if (!v.trim()) {
    results.value = []
    open.value = false
    return
  }
  await ensureFuse()
  results.value = fuse!.search(v, { limit: 10 }).map((r) => r.item)
  open.value = true
})

function onBlur() {
  // 延迟关闭，给 mousedown 跳转留时间
  setTimeout(() => {
    open.value = false
  }, 120)
}

function goFirst() {
  if (results.value.length) go(results.value[0].path)
}

function go(p: string) {
  q.value = ''
  open.value = false
  router.push({ path: '/node/' + p })
}
</script>

<style scoped>
.search-wrap {
  position: relative;
  width: 300px;
  max-width: 40vw;
}
.results {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  max-height: 420px;
  overflow-y: auto;
  z-index: 50;
  padding: 6px;
}
.result {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.result:hover {
  background: var(--bg-hover);
}
.r-title {
  color: var(--green-bright);
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.r-path {
  margin-left: auto;
  color: var(--text-faint);
  font-family: var(--mono);
  font-size: 11px;
  flex: none;
}
.empty {
  padding: 10px;
  color: var(--text-faint);
  text-align: center;
  font-size: 13px;
}
@media (max-width: 768px) {
  .search-wrap {
    width: 100%;
    max-width: none;
  }
}
</style>
