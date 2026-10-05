<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  subtitle?: string
  as?: 'h1' | 'h2'
}>()
</script>

<template>
  <div class="max-w-2xl">
    <p class="eyebrow">{{ eyebrow }}</p>
    <component
      :is="as ?? 'h2'"
      class="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
    >
      {{ title }}
    </component>
    <p v-if="subtitle" class="mt-4 text-lg text-pretty text-muted">{{ subtitle }}</p>
  </div>
</template>
