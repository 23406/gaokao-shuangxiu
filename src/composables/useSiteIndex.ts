import { ref } from 'vue'
import type { SiteIndex } from '../types'

let cache: Promise<SiteIndex> | null = null

export function useSiteIndex() {
  const index = ref<SiteIndex | null>(null)
  if (!cache) {
    cache = fetch(`${import.meta.env.BASE_URL}content/index.json`).then((r) => r.json())
    cache.catch(() => {
      cache = null
    })
  }
  cache.then((d) => {
    index.value = d
  })
  return index
}
