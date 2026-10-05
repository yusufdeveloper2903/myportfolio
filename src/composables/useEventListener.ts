import { onBeforeUnmount, onMounted } from 'vue'

/** Adds a DOM listener for the lifetime of the calling component. */
export function useEventListener<K extends keyof WindowEventMap>(
  target: Window,
  event: K,
  handler: (event: WindowEventMap[K]) => void,
  options?: AddEventListenerOptions,
): void {
  onMounted(() => target.addEventListener(event, handler, options))
  onBeforeUnmount(() => target.removeEventListener(event, handler, options))
}
