import type { Directive } from 'vue'

/**
 * `v-reveal`: fades an element in the first time it enters the viewport.
 * The hidden state is rendered on the server so there is no flash on hydration;
 * a <noscript> style in app.vue keeps content visible without JavaScript.
 */
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined

  const getObserver = () =>
    (observer ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute('data-reveal', 'visible')
          observer?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    ))

  const reveal: Directive<HTMLElement> = {
    getSSRProps: () => ({ 'data-reveal': '' }),
    mounted(el) {
      if (el.getAttribute('data-reveal') === 'visible') return
      el.setAttribute('data-reveal', '')
      getObserver().observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  }

  nuxtApp.vueApp.directive('reveal', reveal)
})
