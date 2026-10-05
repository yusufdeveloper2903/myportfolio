<script setup lang="ts">
const { t } = useI18n()

const [{ data: featured }, { data: posts }, { data: experience }] = await Promise.all([
  useProjects({ featured: true }),
  usePosts({ limit: 1 }),
  useExperience(),
])

usePageSeo(() => ({ description: t('seo.description') }))
</script>

<template>
  <div>
    <HomeHero />
    <HomeBento :projects="featured" :latest-post="posts[0]" />
    <HomeWork :projects="featured" />
    <HomeExperience :items="experience" />
    <HomeContact />
  </div>
</template>
