<script setup lang="ts">
import { roleKey } from '~/data/site'

const { t } = useI18n()

const [{ data: featured }, { data: experience }] = await Promise.all([
  useProjects({ featured: true }),
  useExperience(),
])

usePageSeo(() => ({ description: t(`seo.description.${roleKey}`) }))
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
