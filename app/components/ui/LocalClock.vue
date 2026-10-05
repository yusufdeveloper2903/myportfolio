<script setup lang="ts">
const props = defineProps<{ timeZone: string }>()

const { locale } = useI18n()
const now = useNow({ scheduler: (callback) => useIntervalFn(callback, 30_000) })
const time = computed(() => formatTime(now.value, props.timeZone, locale.value))
</script>

<template>
  <!-- Rendered on the client only: the server's clock would cause a hydration mismatch. -->
  <ClientOnly>
    <time class="font-mono tabular-nums">{{ time }}</time>
    <template #fallback><span class="font-mono">--:--</span></template>
  </ClientOnly>
</template>
