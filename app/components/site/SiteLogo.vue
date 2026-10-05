<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <NuxtLinkLocale
    to="/"
    class="flex flex-col rounded-lg leading-tight"
    :aria-label="`${site.name} — ${$t('nav.home')}`"
  >
    <span class="text-[15px] font-semibold tracking-tight">{{ site.name }}</span>
    <span class="hidden font-mono text-[11px] text-subtle sm:block">{{ $t('hero.role') }}</span>
  </NuxtLinkLocale>
</template>
