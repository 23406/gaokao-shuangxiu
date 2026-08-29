import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 相对 base + hash 路由：任何静态托管（EdgeOne Pages / GitHub Pages / 本地）零配置可跑
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
