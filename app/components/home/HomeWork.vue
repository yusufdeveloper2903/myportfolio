<script setup lang="ts">
import type { ProjectsEnCollectionItem } from '@nuxt/content'

defineProps<{ projects: ProjectsEnCollectionItem[] }>()
</script>

<template>
  <section id="work" class="container-page scroll-mt-20 pb-24">
    <div class="flex flex-wrap items-end justify-between gap-6">
      <SectionHeading
        :eyebrow="$t('work.eyebrow')"
        :title="$t('work.title')"
        :subtitle="$t('work.subtitle')"
      />
      <NuxtLinkLocale to="/work" class="btn-ghost">
        {{ $t('work.viewAll') }}
        <Icon name="lucide:arrow-right" class="size-4" />
      </NuxtLinkLocale>
    </div>
    <ul class="mt-10 -mx-3 flex flex-col gap-2 sm:-mx-4">
      <li v-for="project in projects" :key="project.path" v-reveal>
        <ProjectRow :project="project" />
      </li>
    </ul>
  </section>
</template>
