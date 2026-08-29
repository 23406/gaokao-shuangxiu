<template>
  <div class="actions">
    <button class="btn" :class="{ on: get(path).fav }" @click="toggleFav(path)" :title="'收藏 ' + title">
      ★ 收藏{{ get(path).fav ? ' ✓' : '' }}
    </button>
    <button class="btn amber" :class="{ on: get(path).wrong }" @click="toggleWrong(path)" :title="'标记错题 ' + title">
      ✗ 错题{{ get(path).wrong ? ' ✓' : '' }}
    </button>
    <button class="btn" :class="{ on: noteOpen }" @click="noteOpen = !noteOpen">✎ 笔记</button>
    <a class="btn" :href="feedbackUrl(path, title)" target="_blank" rel="noopener">⚠ 纠错反馈</a>
    <div v-if="noteOpen" class="note-box panel">
      <textarea
        :value="get(path).note"
        placeholder="私人笔记，仅保存在本机浏览器（可到「我的」页面导出 JSON 备份）"
        rows="4"
        @input="setNote(path, ($event.target as HTMLTextAreaElement).value)"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLocalStore } from '../composables/useLocalStore'
import { feedbackUrl } from '../config'

const props = defineProps<{ path: string; title: string }>()

const { get, toggleFav, toggleWrong, setNote } = useLocalStore()
const noteOpen = ref(false)
</script>

<style scoped>
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0 6px;
}
.note-box {
  width: 100%;
  padding: 8px;
}
.note-box textarea {
  width: 100%;
  background: var(--input-bg);
  border: 1px solid var(--line);
  border-radius: 4px;
  color: var(--text);
  font-family: var(--sans);
  font-size: 13.5px;
  padding: 8px 10px;
  resize: vertical;
  outline: none;
}
.note-box textarea:focus {
  border-color: var(--green);
}
</style>
