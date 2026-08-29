import { createRouter, createWebHashHistory } from 'vue-router'

// hash 路由：任何静态托管零配置可跑（EdgeOne / GitHub Pages / 本地）
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('./views/HomeView.vue') },
    { path: '/evil', name: 'evil', component: () => import('./views/EvilCheatsView.vue') },
    { path: '/mine', name: 'mine', component: () => import('./views/FavoritesView.vue') },
    { path: '/node/:pathMatch(.*)*', name: 'node', component: () => import('./views/NodeView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
