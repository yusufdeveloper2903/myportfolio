<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
const slug = computed(() => String(route.params.slug))

const [{ data: project }, { data: projects }] = await Promise.all([useProject(slug), useProjects()])

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

const next = computed(() => {
  const list = projects.value
  const index = list.findIndex((item) => item.path === project.value?.path)
  return list.length > 1 ? list[(index + 1) % list.length] : undefined
})

usePageSeo(() => ({
  title: project.value?.title,
  description: project.value?.description ?? t('seo.workDescription'),
  image: project.value?.cover,
  type: 'article',
}))
</script>

<template>
  <article v-if="project" class="container-page py-12 sm:py-20">
    <NuxtLinkLocale
      to="/work"
      class="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
    >
      <Icon name="lucide:arrow-left" class="size-4" />
      {{ $t('work.back') }}
    </NuxtLinkLocale>

    <header class="mt-8 animate-fade-up">
      <h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {{ project.title }}
      </h1>
      <p class="mt-4 max-w-2xl text-lg text-pretty text-muted">{{ project.description }}</p>

      <dl class="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-4">
        <div>
          <dt class="eyebrow">{{ $t('work.role') }}</dt>
          <dd class="mt-2 text-sm">{{ project.role }}</dd>
          <dd v-if="project.company" class="mt-1 text-sm text-muted">{{ project.company }}</dd>
        </div>
        <div>
          <dt class="eyebrow">{{ $t('work.year') }}</dt>
          <dd class="mt-2 text-sm">{{ project.year }}</dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="eyebrow">{{ $t('work.stack') }}</dt>
          <dd class="mt-2 flex flex-wrap gap-1.5">
            <TechBadge v-for="tech in project.stack" :key="tech">{{ tech }}</TechBadge>
          </dd>
        </div>
      </dl>

      <ConfidentialNotice v-if="project.confidential" class="mt-6 max-w-3xl" />

      <div class="mt-6 flex flex-wrap gap-3">
        <a
          v-if="project.links?.live"
          :href="project.links?.live"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          {{ $t('work.live') }}
          <Icon name="lucide:arrow-up-right" class="size-4" />
        </a>
        <a
          v-if="project.links?.source"
          :href="project.links?.source"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-ghost"
        >
          <Icon name="simple-icons:github" class="size-4" />
          {{ $t('work.source') }}
        </a>
      </div>
    </header>

    <!-- With a gallery, its first (full-width) shot already serves as the hero image. -->
    <img
      v-if="!project.gallery?.length"
      :src="project.cover"
      :alt="project.title"
      class="mt-12 aspect-[16/9] w-full rounded-card border border-line object-cover"
    />

    <dl v-if="project.metrics?.length" class="mt-12 grid gap-4 sm:grid-cols-3">
      <div v-for="metric in project.metrics" :key="metric.label" class="card p-6">
        <dt class="text-sm text-muted">{{ metric.label }}</dt>
        <dd class="mt-2 text-3xl font-semibold tracking-tight">{{ metric.value }}</dd>
      </div>
    </dl>

    <ProjectGallery v-if="project.gallery?.length" :items="project.gallery" class="mt-12" />

    <ContentRenderer
      :value="project"
      class="prose mt-12 max-w-3xl prose-neutral dark:prose-invert prose-headings:tracking-tight prose-a:text-accent"
    />

    <NuxtLinkLocale
      v-if="next"
      :to="next.path"
      class="group card mt-20 flex items-center justify-between gap-6 p-6 transition-colors hover:bg-surface-hover"
    >
      <div>
        <p class="eyebrow">{{ $t('work.next') }}</p>
        <p class="mt-2 text-xl font-semibold">{{ next.title }}</p>
      </div>
      <Icon
        name="lucide:arrow-right"
        class="size-5 transition-transform group-hover:translate-x-1"
      />
    </NuxtLinkLocale>
  </article>
</template>
