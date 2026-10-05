<script setup lang="ts">
import type { ProjectsEnCollectionItem } from '@nuxt/content'

import { site } from '~/data/site'

const props = defineProps<{ projects: ProjectsEnCollectionItem[] }>()
const primary = computed(() => props.projects[0])
const secondary = computed(() => props.projects[1])
</script>

<template>
  <section class="container-page pb-24" :aria-label="$t('bento.featured')">
    <div class="grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Featured project -->
      <NuxtLinkLocale
        v-if="primary"
        v-reveal
        :to="primary.path"
        class="group card flex flex-col overflow-hidden transition-colors hover:bg-surface-hover sm:col-span-2 lg:row-span-2"
      >
        <div class="overflow-hidden border-b border-line">
          <img
            :src="primary.cover"
            :alt="primary.title"
            class="aspect-[16/9] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div class="flex flex-1 flex-col justify-end p-6">
          <div class="flex items-center justify-between gap-3">
            <p class="eyebrow">{{ $t('bento.featured') }}</p>
            <PrivateBadge v-if="primary.confidential" />
          </div>
          <h3 class="mt-2 text-2xl font-semibold tracking-tight">{{ primary.title }}</h3>
          <p class="mt-2 line-clamp-2 text-sm text-muted">{{ primary.description }}</p>
          <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
            {{ $t('work.viewCase') }}
            <Icon
              name="lucide:arrow-up-right"
              class="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </NuxtLinkLocale>

      <!-- Years of experience -->
      <div v-reveal class="card flex flex-col justify-between p-6">
        <Icon name="lucide:sparkles" class="size-5 text-accent" />
        <div>
          <p class="text-5xl font-semibold tracking-tight">{{ site.yearsOfExperience }}+</p>
          <p class="mt-1 text-sm text-muted">{{ $t('bento.years') }}</p>
        </div>
      </div>

      <!-- Location & local time -->
      <div v-reveal class="card flex flex-col justify-between p-6">
        <Icon name="lucide:map-pin" class="size-5 text-accent" />
        <div>
          <p class="text-sm text-muted">{{ $t('bento.basedIn') }}</p>
          <p class="mt-1 font-medium">{{ $t('bento.location') }}</p>
          <p class="mt-3 text-sm text-muted">
            {{ $t('bento.localTime') }} · <LocalClock :time-zone="site.timeZone" />
          </p>
        </div>
      </div>

      <!-- Stack -->
      <div v-reveal class="card p-6 sm:col-span-2">
        <p class="eyebrow">{{ $t('bento.stack') }}</p>
        <dl class="mt-4 grid gap-4 sm:grid-cols-3">
          <div v-for="group in site.stack" :key="group.key">
            <dt class="text-sm font-medium">{{ $t(`stack.groups.${group.key}`) }}</dt>
            <dd class="mt-2 flex flex-col gap-1.5">
              <span
                v-for="item in group.items"
                :key="item.name"
                class="flex items-center gap-2 text-sm text-muted"
              >
                <Icon :name="item.icon" class="size-3.5" />
                {{ item.name }}
              </span>
            </dd>
          </div>
        </dl>
      </div>

      <!-- AI-assisted engineering -->
      <div v-reveal class="card relative overflow-hidden p-6 sm:col-span-2 sm:p-8 lg:col-span-4">
        <div
          class="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-accent/15 blur-3xl"
          aria-hidden="true"
        />
        <div class="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p class="eyebrow flex items-center gap-2">
              <Icon name="lucide:sparkles" class="size-3.5 text-accent" />
              {{ $t('ai.eyebrow') }}
            </p>
            <h3 class="mt-3 text-2xl font-semibold tracking-tight text-balance">
              {{ $t('ai.title') }}
            </h3>
            <p class="mt-3 text-pretty text-muted">{{ $t('ai.text') }}</p>
            <ul class="mt-5 grid gap-2 text-sm">
              <li v-for="index in 3" :key="index" class="flex gap-2.5">
                <Icon name="lucide:check" class="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{{ $t(`ai.points.${index - 1}`) }}</span>
              </li>
            </ul>
          </div>
          <ul class="flex flex-wrap gap-2 lg:justify-end">
            <li
              v-for="model in site.aiModels"
              :key="model.name"
              class="flex items-center gap-2 rounded-full border border-line bg-bg px-3.5 py-2 text-sm"
            >
              <Icon :name="model.icon" class="size-4" />
              {{ model.name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Companies -->
      <div v-reveal class="card flex flex-col justify-between p-6 sm:col-span-2">
        <p class="eyebrow">{{ $t('bento.companies') }}</p>
        <ul class="mt-5 flex flex-wrap gap-2">
          <li
            v-for="company in site.companies"
            :key="company"
            class="rounded-full border border-line bg-bg px-3 py-1.5 text-sm"
          >
            {{ company }}
          </li>
        </ul>
      </div>

      <!-- Second project -->
      <NuxtLinkLocale
        v-if="secondary"
        v-reveal
        :to="secondary.path"
        class="group card flex items-center gap-5 p-4 transition-colors hover:bg-surface-hover sm:col-span-2"
      >
        <img
          :src="secondary.cover"
          :alt="secondary.title"
          loading="lazy"
          class="aspect-[4/3] w-32 shrink-0 rounded-xl border border-line object-cover sm:w-40"
        />
        <div class="min-w-0">
          <p class="flex items-center gap-2">
            <span class="eyebrow">{{ secondary.year }}</span>
            <PrivateBadge v-if="secondary.confidential" />
          </p>
          <h3 class="mt-1 text-lg font-medium">{{ secondary.title }}</h3>
          <p class="mt-1 line-clamp-2 text-sm text-muted">{{ secondary.description }}</p>
        </div>
      </NuxtLinkLocale>
    </div>
  </section>
</template>
