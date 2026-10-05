<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <nav
    :aria-label="$t('locale.label')"
    class="flex items-center rounded-full border border-line p-0.5"
  >
    <NuxtLink
      v-for="item in locales"
      :key="item.code"
      :to="switchLocalePath(item.code)"
      :hreflang="item.language"
      :aria-current="item.code === locale ? 'true' : undefined"
      :title="item.name"
      class="rounded-full px-2 py-1 font-mono text-xs uppercase transition-colors"
      :class="item.code === locale ? 'bg-fg text-bg' : 'text-muted hover:text-fg'"
    >
      {{ item.code }}
    </NuxtLink>
  </nav>
</template>
