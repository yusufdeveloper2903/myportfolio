<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <ul class="flex items-center gap-1">
    <li v-for="social in site.socials" :key="social.name">
      <a
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="social.name"
        class="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-hover hover:text-fg"
      >
        <Icon :name="social.icon" class="size-4" />
      </a>
    </li>
  </ul>
</template>
