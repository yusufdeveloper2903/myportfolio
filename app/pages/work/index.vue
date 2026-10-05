<script setup lang="ts">
const { t } = useI18n()
const { data: projects } = await useProjects()

usePageSeo(() => ({ title: t('seo.workTitle'), description: t('seo.workDescription') }))
</script>

<template>
  <section class="container-page py-16 sm:py-24">
    <SectionHeading
      as="h1"
      :eyebrow="$t('work.eyebrow')"
      :title="$t('work.title')"
      :subtitle="$t('work.subtitle')"
    />
    <ul class="mt-12 -mx-3 flex flex-col gap-2 sm:-mx-4">
      <li v-for="project in projects" :key="project.path" v-reveal>
        <ProjectRow :project="project" />
      </li>
    </ul>
  </section>
</template>
