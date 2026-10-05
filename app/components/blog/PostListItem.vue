<script setup lang="ts">
import type { BlogEnCollectionItem } from '@nuxt/content'

defineProps<{ post: BlogEnCollectionItem }>()

const { locale } = useI18n()
</script>

<template>
  <NuxtLinkLocale
    :to="post.path"
    class="group grid gap-2 rounded-card p-4 transition-colors hover:bg-surface sm:grid-cols-[9rem_1fr] sm:gap-6"
  >
    <time :datetime="post.date" class="pt-1 font-mono text-sm text-subtle">
      {{ formatDate(post.date, locale) }}
    </time>
    <div>
      <h3 class="text-lg font-semibold tracking-tight text-balance group-hover:underline">
        {{ post.title }}
      </h3>
      <p class="mt-2 text-pretty text-muted">{{ post.description }}</p>
      <div v-if="post.tags?.length" class="mt-3 flex flex-wrap gap-1.5">
        <TechBadge v-for="tag in post.tags" :key="tag">#{{ tag }}</TechBadge>
      </div>
    </div>
  </NuxtLinkLocale>
</template>
