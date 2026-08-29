<template>
  <li class="tree-item">
    <div
      class="row"
      :class="{ active: isActive, cat: isCategory }"
      :style="{ paddingLeft: depth * 14 + 8 + 'px' }"
      @click="onClick"
    >
      <span class="arrow">{{ isCategory ? (open ? '▾' : '▸') : '·' }}</span>
      <span class="label" :title="node.title">{{ node.title }}</span>
      <span v-if="node.type === 'draft' || node.status === 'draft'" class="status">草稿</span>
    </div>
    <ul v-if="isCategory && open" class="children">
      <TreeItem
        v-for="c in node.children"
        :key="c.path"
        :node="c"
        :current-path="currentPath"
        :depth="depth + 1"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import type { TreeMeta } from '../types'

const props = defineProps<{
  node: TreeMeta
  currentPath: string
  depth: number
}>()

const router = useRouter()
const isCategory = computed(() => props.node.children.length > 0)
const isActive = computed(() => props.currentPath === props.node.path)
const isAncestor = computed(() => props.currentPath.startsWith(props.node.path + '/'))
const open = ref(isAncestor.value || (props.depth < 1 && props.node.type === 'category'))

watch(
  () => props.currentPath,
  () => {
    if (isAncestor.value) open.value = true
  },
)

function onClick() {
  if (isCategory.value) {
    open.value = !open.value
  } else {
    router.push({ path: '/node/' + props.node.path })
  }
}
</script>

<style scoped>
.tree-item {
  list-style: none;
}
.children {
  list-style: none;
  margin: 0;
  padding: 0;
}
.row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px 4px 0;
  margin: 1px 0;
  border-radius: 4px;
  cursor: pointer;
  color: var(--text-dim);
  font-size: 14px;
  border-left: 2px solid transparent;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
}
.row:hover {
  background: var(--bg-hover);
  color: var(--green-bright);
}
.row.active {
  background: rgba(0, 255, 65, 0.12);
  color: var(--green-bright);
  border-left-color: var(--green);
}
.row.cat {
  color: var(--text);
}
.arrow {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--green-dim);
  width: 12px;
  flex: none;
}
.label {
  overflow: hidden;
  text-overflow: ellipsis;
}
.status {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--amber);
  border: 1px solid rgba(255, 200, 87, 0.4);
  border-radius: 3px;
  padding: 0 4px;
  flex: none;
}
</style>
