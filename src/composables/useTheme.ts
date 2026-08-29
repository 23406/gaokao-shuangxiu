import { ref } from 'vue'

export type ThemeMode = 'dark' | 'light'
const STORAGE_KEY = 'dsh-theme'

const theme = ref<ThemeMode>('dark')

function apply(t: ThemeMode) {
  document.documentElement.setAttribute('data-theme', t)
}

/** 在应用挂载前调用一次，避免首屏主题闪烁 */
export function initTheme() {
  let saved: string | null = null
  try {
    saved = localStorage.getItem(STORAGE_KEY)
  } catch {
    /* 隐私模式等场景忽略 */
  }
  theme.value = saved === 'light' ? 'light' : 'dark'
  apply(theme.value)
}

export function useTheme() {
  return { theme }
}

export function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  try {
    localStorage.setItem(STORAGE_KEY, theme.value)
  } catch {
    /* 忽略 */
  }
  apply(theme.value)
}
