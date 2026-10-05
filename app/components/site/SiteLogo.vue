<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <NuxtLinkLocale
    to="/"
    class="group inline-flex items-center gap-3 rounded-lg"
    :aria-label="`${site.name} — ${$t('nav.home')}`"
  >
    <LogoMark class="size-8 transition-transform duration-300 group-hover:-rotate-6" />
    <span class="hidden flex-col leading-tight sm:flex">
      <span class="text-[15px] font-semibold tracking-tight">{{ site.name }}</span>
      <span class="font-mono text-[11px] text-subtle">{{ $t('hero.role') }}</span>
    </span>
  </NuxtLinkLocale>
</template>
