import { onMounted, readonly, ref, type Ref } from 'vue'

import { useEventListener } from './useEventListener'

/** `true` once the page is scrolled past `threshold` pixels. */
export function useScrolled(threshold = 50): Readonly<Ref<boolean>> {
  const scrolled = ref(false)
  const update = () => {
    scrolled.value = window.scrollY > threshold
  }

  onMounted(update)
  useEventListener(window, 'scroll', update, { passive: true })

  return readonly(scrolled)
}
