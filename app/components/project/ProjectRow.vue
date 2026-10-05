<script setup lang="ts">
import type { ProjectsEnCollectionItem } from '@nuxt/content'

defineProps<{ project: ProjectsEnCollectionItem }>()
</script>

<template>
  <NuxtLinkLocale
    :to="project.path"
    class="group grid gap-5 rounded-card p-3 transition-colors hover:bg-surface sm:grid-cols-[14rem_1fr] sm:p-4"
  >
    <div class="overflow-hidden rounded-xl border border-line">
      <img
        :src="project.cover"
        :alt="project.title"
        loading="lazy"
        class="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div class="flex min-w-0 flex-col">
      <div class="flex items-baseline justify-between gap-4">
        <h3 class="text-xl font-semibold tracking-tight">{{ project.title }}</h3>
        <span class="font-mono text-sm text-subtle">{{ project.year }}</span>
      </div>
      <p class="mt-1 text-sm text-muted">{{ project.role }}</p>
      <p class="mt-3 text-pretty text-muted">{{ project.description }}</p>
      <div class="mt-4 flex flex-wrap gap-1.5">
        <TechBadge v-for="tech in project.stack" :key="tech">{{ tech }}</TechBadge>
      </div>
      <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium sm:mt-auto sm:pt-4">
        {{ $t('work.viewCase') }}
        <Icon
          name="lucide:arrow-right"
          class="size-4 transition-transform group-hover:translate-x-1"
        />
      </span>
    </div>
  </NuxtLinkLocale>
</template>
