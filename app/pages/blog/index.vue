<script setup lang="ts">
const { t } = useI18n()
const { data: posts } = await usePosts()

usePageSeo(() => ({ title: t('seo.blogTitle'), description: t('seo.blogDescription') }))
</script>

<template>
  <section class="container-page py-16 sm:py-24">
    <SectionHeading
      as="h1"
      :eyebrow="$t('blog.eyebrow')"
      :title="$t('blog.title')"
      :subtitle="$t('blog.subtitle')"
    />
    <ul v-if="posts.length" class="mt-12 -mx-4 flex flex-col gap-1">
      <li v-for="post in posts" :key="post.path" v-reveal>
        <PostListItem :post="post" />
      </li>
    </ul>
    <p v-else class="mt-12 text-muted">{{ $t('blog.empty') }}</p>
  </section>
</template>
