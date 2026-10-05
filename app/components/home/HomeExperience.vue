<script setup lang="ts">
import type { ExperienceEnCollectionItem } from '@nuxt/content'

defineProps<{ items: ExperienceEnCollectionItem[] }>()

const { t, locale } = useI18n()
</script>

<template>
  <section id="experience" class="container-page scroll-mt-20 pb-24">
    <SectionHeading :eyebrow="$t('experience.eyebrow')" :title="$t('experience.title')" />

    <ol class="mt-10 border-l border-line">
      <li v-for="item in items" :key="item.id" v-reveal class="relative pb-10 pl-8 last:pb-0">
        <span
          class="absolute top-1.5 -left-[5px] size-2.5 rounded-full border-2 border-bg"
          :class="item.end ? 'bg-subtle' : 'bg-accent'"
          aria-hidden="true"
        />
        <p class="font-mono text-xs text-subtle">
          {{ formatPeriod(item.start, item.end, locale, t('experience.present')) }} ·
          {{ item.location }}
        </p>
        <h3 class="mt-2 text-lg font-semibold">
          {{ item.role }}
          <span class="text-muted">·</span>
          <a
            v-if="item.url"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline-offset-4 hover:underline"
          >
            {{ item.company }}
          </a>
          <span v-else>{{ item.company }}</span>
        </h3>
        <ul class="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-muted marker:text-subtle">
          <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
        <div v-if="item.stack?.length" class="mt-4 flex flex-wrap gap-1.5">
          <TechBadge v-for="tech in item.stack" :key="tech">{{ tech }}</TechBadge>
        </div>
      </li>
    </ol>
  </section>
</template>
