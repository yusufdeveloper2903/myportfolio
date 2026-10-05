<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <NuxtLinkLocale to="/" class="group inline-flex items-center gap-2.5 font-semibold">
    <span
      class="grid size-8 place-items-center rounded-lg bg-fg text-sm text-bg transition-transform group-hover:-rotate-6"
      aria-hidden="true"
    >
      {{ site.monogram }}
    </span>
    <span class="hidden sm:inline">{{ site.name }}</span>
  </NuxtLinkLocale>
</template>
