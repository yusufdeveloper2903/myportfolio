import { onBeforeUnmount, onMounted, readonly, ref, type Ref } from 'vue'

/** Reactive wrapper around `window.matchMedia`. */
export function useMediaQuery(query: string): Readonly<Ref<boolean>> {
  const matches = ref(false)
  let mql: MediaQueryList | undefined

  const update = (event: MediaQueryList | MediaQueryListEvent) => {
    matches.value = event.matches
  }

  onMounted(() => {
    mql = window.matchMedia(query)
    update(mql)
    mql.addEventListener('change', update)
  })
  onBeforeUnmount(() => mql?.removeEventListener('change', update))

  return readonly(matches)
}
