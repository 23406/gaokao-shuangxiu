<template>
  <canvas ref="cv" class="matrix-rain" aria-hidden="true"></canvas>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const cv = ref<HTMLCanvasElement | null>(null)
let raf = 0
let cols: number[] = []
let resizeFn = () => {}
let cleanup = () => {}

const CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF+-=*/<>(){}[]'

onMounted(() => {
  const canvas = cv.value
  if (!canvas) return
  // 尊重系统"减少动态效果"设置
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none'
    return
  }
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  const resize = () => {
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
    cols = Array(Math.floor(canvas.width / (16 * dpr))).fill(0)
  }
  resizeFn = resize
  resize()
  window.addEventListener('resize', resize)

  let last = 0
  const draw = (t: number) => {
    raf = requestAnimationFrame(draw)
    if (t - last < 50) return
    last = t
    ctx.fillStyle = 'rgba(2, 5, 3, 0.13)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.font = `${14 * dpr}px "Cascadia Mono", Consolas, monospace`
    for (let i = 0; i < cols.length; i++) {
      const ch = CHARS[Math.floor(Math.random() * CHARS.length)]
      const x = i * 16 * dpr
      const y = cols[i] * 16 * dpr
      ctx.fillStyle = Math.random() > 0.975 ? '#c9ffd8' : 'rgba(0, 255, 65, 0.8)'
      ctx.fillText(ch, x, y)
      if (y > canvas.height && Math.random() > 0.975) cols[i] = 0
      cols[i]++
    }
  }
  raf = requestAnimationFrame(draw)

  cleanup = () => {
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', resize)
  }
})

onBeforeUnmount(() => {
  cleanup()
})
</script>

<style scoped>
.matrix-rain {
  position: fixed;
  inset: 0;
  z-index: 0;
  opacity: 0.3;
  pointer-events: none;
}
</style>
