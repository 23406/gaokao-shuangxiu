<template>
  <div class="node-page">
    <aside class="sidebar panel">
      <div class="sidebar-title">知识导图</div>
      <ul v-if="index" class="tree">
        <TreeItem
          v-for="r in index.tree"
          :key="r.path"
          :node="r"
          :current-path="nodePath"
          :depth="0"
        />
      </ul>
      <div v-else class="skeleton" style="height: 300px"></div>
    </aside>

    <main class="main-col">
      <div v-if="loading" class="panel content-area">
        <div class="skeleton" style="height: 24px; width: 60%"></div>
        <div class="skeleton" style="height: 14px; width: 90%; margin-top: 16px"></div>
        <div class="skeleton" style="height: 14px; width: 85%; margin-top: 8px"></div>
        <div class="skeleton" style="height: 14px; width: 70%; margin-top: 8px"></div>
      </div>

      <div v-else-if="notFound" class="panel content-area">
        <h1 class="content">404 · 施工中</h1>
        <p class="content">这个分支还在浇筑，先去别处逛逛？</p>
        <a class="btn" href="#/">← 返回首页</a>
      </div>

      <article v-else-if="node" class="panel content-area" :style="{ '--content-size': fontSize + 'px' }">
        <nav class="crumbs">
          <router-link to="/">首页</router-link>
          <template v-for="b in node.breadcrumbs" :key="b.slug">
            <span class="sep">/</span>
            <router-link :to="'/node/' + pathOf(b)">{{ b.title }}</router-link>
          </template>
        </nav>

        <header class="node-head">
          <h1 class="content">{{ node.title }}</h1>
          <div class="meta-tags">
            <span class="tag" :class="node.type">{{ typeLabel(node.type) }}</span>
            <span v-if="node.meta.difficulty" class="tag">难度：{{ node.meta.difficulty }}</span>
            <span v-if="node.meta.source" class="tag">来源：{{ node.meta.source }}</span>
            <span v-if="node.meta.applicability" class="tag" style="color: var(--red); border-color: rgba(255,59,92,.5)">适用范围：{{ node.meta.applicability }}</span>
            <span v-if="node.type !== 'category'" class="tag" :class="node.meta.status">{{ statusLabel(node.meta.status) }}</span>
            <span v-for="k in node.meta.keywords" :key="k" class="tag">{{ k }}</span>
          </div>
          <div class="read-tools">
            <span class="tool-label">阅读字号</span>
            <button class="btn" title="减小字号" @click="fontSize = Math.max(12, fontSize - 1)">A−</button>
            <span class="size-label">{{ fontSize }}px</span>
            <button class="btn" title="增大字号" @click="fontSize = Math.min(20, fontSize + 1)">A+</button>
          </div>
        </header>

        <!-- 分类节点：思维导图索引 -->
        <MindMap
          v-if="node.type === 'category' && treeRoot"
          :root="treeRoot"
          :current-path="nodePath"
        />

        <!-- 分类节点：子节点卡片 -->
        <div v-if="node.type === 'category'" class="cat-children">
          <div v-if="node.html" class="content" v-html="node.html"></div>
          <div class="child-grid">
            <router-link
              v-for="c in node.children"
              :key="c.slug"
              class="child-card panel"
              :to="'/node/' + node.path + '/' + c.slug"
            >
              <span class="tag" :class="c.type">{{ typeLabel(c.type) }}</span>
              <span class="c-title">{{ c.title }}</span>
            </router-link>
          </div>
        </div>

        <!-- 例题：双解并排 -->
        <div v-else-if="node.type === 'example'" class="example">
          <section v-if="node.html" class="content question" v-html="node.html"></section>

          <div class="dual">
            <section class="sol standard panel">
              <h2 class="sol-title">标准解法</h2>
              <div class="content" v-html="node.standardHtml || '<p>（待补充）</p>'"></div>
            </section>

            <section v-if="node.evilHtml" class="sol evil panel">
              <h2 class="sol-title">⚡ 邪修速解</h2>
              <div v-if="node.meta.fit && node.meta.fit.length" class="info-box">
                <strong>适用特征：</strong>
                <span v-for="(f, i) in node.meta.fit" :key="i" class="fit-item">{{ f }}</span>
              </div>
              <div v-if="node.meta.risk" class="warn-box">
                <span class="warn-title">⚠ 风险提示</span>{{ node.meta.risk }}
              </div>
              <div class="content" v-html="node.evilHtml"></div>
            </section>
          </div>
        </div>

        <!-- 知识点 / 口诀卡 -->
        <div v-else class="content" v-html="node.html"></div>

        <NodeActions :path="node.path" :title="node.title" />

        <nav v-if="node.siblings.length" class="siblings panel">
          <div class="sib-title">本分支其他内容</div>
          <router-link
            v-for="s in node.siblings"
            :key="s.slug"
            class="sib-item"
            :to="'/node/' + node.path.split('/').slice(0, -1).join('/') + '/' + s.slug"
          >
            <span class="tag" :class="s.type">{{ typeLabel(s.type) }}</span>
            <span>{{ s.title }}</span>
          </router-link>
        </nav>
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { NodeContent, TreeMeta } from '../types'
import { typeLabel, STATUS_LABEL, findInTree } from '../utils'
import { useSiteIndex } from '../composables/useSiteIndex'
import TreeItem from '../components/TreeItem.vue'
import NodeActions from '../components/NodeActions.vue'
import MindMap from '../components/MindMap.vue'

const route = useRoute()
const index = useSiteIndex()

const nodePath = computed(() => {
  const p = route.params.pathMatch
  return Array.isArray(p) ? p.join('/') : String(p ?? '')
})

/** 思维导图数据源：从全站树中取当前分类的完整子树 */
const treeRoot = computed<TreeMeta | null>(() => {
  if (!index.value || !nodePath.value) return null
  return findInTree(index.value.tree, nodePath.value)
})

const node = ref<NodeContent | null>(null)
const loading = ref(true)
const notFound = ref(false)
const fontSize = ref(15)

watch(
  nodePath,
  async (p) => {
    loading.value = true
    notFound.value = false
    node.value = null
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}content/nodes/${p}.json`)
      if (!res.ok) throw new Error('not found')
      node.value = await res.json()
      document.title = `${node.value.title} · 高考双修`
    } catch {
      notFound.value = true
      document.title = '404 · 高考双修'
    }
    loading.value = false
  },
  { immediate: true },
)

function pathOf(b: { slug: string; title: string }): string {
  // 面包屑节点路径 = 从根累加
  const parts = nodePath.value.split('/')
  return parts.slice(0, parts.indexOf(b.slug) + 1).join('/')
}

function statusLabel(s: string): string {
  return STATUS_LABEL[s] || s
}
</script>

<style scoped>
.node-page {
  display: flex;
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  align-items: flex-start;
}
.sidebar {
  width: 300px;
  flex: none;
  max-height: calc(100vh - 130px);
  overflow-y: auto;
  padding: 10px;
  position: sticky;
  top: 76px;
}
.sidebar-title {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--green);
  padding: 4px 8px 10px;
  border-bottom: 1px dashed var(--line);
  margin-bottom: 8px;
}
.tree {
  list-style: none;
  margin: 0;
  padding: 0;
}
.main-col {
  flex: 1;
  min-width: 0;
}
.content-area {
  padding: 22px 26px;
  min-height: 400px;
}
.crumbs {
  font-family: var(--mono);
  font-size: 12.5px;
  color: var(--text-faint);
  margin-bottom: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.crumbs a {
  border-bottom: none;
}
.crumbs .sep {
  color: var(--green-faint);
}
.node-head {
  margin-bottom: 16px;
}
.node-head h1 {
  margin: 0 0 10px;
  border-bottom: none;
  padding: 0;
}
.meta-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.read-tools {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
}
.tool-label,
.size-label {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-faint);
}
.dual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 16px;
}
.sol {
  padding: 16px 18px;
}
.sol-title {
  font-family: var(--mono);
  font-size: 15px;
  margin: 0 0 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--line);
}
.sol.standard .sol-title {
  color: var(--green);
}
.sol.evil {
  border-color: rgba(255, 59, 92, 0.45);
  box-shadow: 0 0 18px rgba(255, 59, 92, 0.1);
}
.sol.evil .sol-title {
  color: var(--red);
  border-bottom-color: rgba(255, 59, 92, 0.4);
}
.fit-item {
  display: inline-block;
  margin: 2px 6px 2px 0;
  padding: 0 8px;
  border: 1px dashed rgba(77, 201, 255, 0.5);
  border-radius: 3px;
  color: var(--info-text);
  font-size: 12.5px;
}
.cat-children {
  margin-top: 6px;
}
.child-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  margin-top: 14px;
}
.child-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--line);
}
.child-card:hover {
  background: var(--bg-hover);
}
.c-title {
  color: var(--text);
  font-size: 14px;
}
.siblings {
  margin-top: 18px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.sib-title {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--green-dim);
}
.sib-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  border-bottom: none;
}
@media (max-width: 900px) {
  .node-page {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    max-height: 320px;
    position: static;
  }
  .dual {
    grid-template-columns: 1fr;
  }
}
</style>
