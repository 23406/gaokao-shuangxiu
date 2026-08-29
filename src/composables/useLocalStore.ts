import { reactive, watch } from 'vue'

export interface NoteState {
  fav: boolean
  wrong: boolean
  note: string
}

const KEY = 'gaokao-shuangxiu:v1'

function load(): Record<string, NoteState> {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

// 模块级单例：所有页面共享同一份收藏/笔记/错题状态
const state = reactive<Record<string, NoteState>>(load())

watch(
  state,
  () => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state))
    } catch {
      /* 存储满等异常静默忽略 */
    }
  },
  { deep: true },
)

export function useLocalStore() {
  const get = (p: string): NoteState => {
    if (!state[p]) state[p] = { fav: false, wrong: false, note: '' }
    return state[p]
  }
  const toggleFav = (p: string) => {
    get(p).fav = !get(p).fav
  }
  const toggleWrong = (p: string) => {
    get(p).wrong = !get(p).wrong
  }
  const setNote = (p: string, v: string) => {
    get(p).note = v
  }
  const list = (key: 'fav' | 'wrong'): string[] =>
    Object.entries(state)
      .filter(([, v]) => v[key])
      .map(([p]) => p)

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `gaokao-shuangxiu-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(a.href)
  }

  const importJson = (text: string) => {
    const data = JSON.parse(text)
    for (const [k, v] of Object.entries<NoteState>(data)) {
      if (v && typeof v === 'object') state[k] = { fav: !!v.fav, wrong: !!v.wrong, note: String(v.note ?? '') }
    }
  }

  return { state, get, toggleFav, toggleWrong, setNote, list, exportJson, importJson }
}
