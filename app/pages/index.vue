<script setup lang="ts">
const { t } = useI18n()

const [{ data: featured }, { data: experience }] = await Promise.all([
  useProjects({ featured: true }),
  useExperience(),
])

usePageSeo(() => ({ description: t('seo.description') }))
</script>

<template>
  <div>
    <HomeHero />
    <HomeBento :projects="featured" />
    <HomeWork :projects="featured" />
    <HomeExperience :items="experience" />
    <HomeContact />
  </div>
</template>
