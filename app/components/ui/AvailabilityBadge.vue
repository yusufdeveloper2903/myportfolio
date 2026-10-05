<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <p
    class="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted"
  >
    <span class="relative flex size-2" aria-hidden="true">
      <span
        v-if="site.availableForWork"
        class="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60"
      />
      <span
        class="relative inline-flex size-2 rounded-full"
        :class="site.availableForWork ? 'bg-success' : 'bg-subtle'"
      />
    </span>
    {{ site.availableForWork ? $t('hero.available') : $t('hero.unavailable') }}
  </p>
</template>
