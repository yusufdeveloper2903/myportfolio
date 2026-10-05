<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()
const { data: post } = await usePost(() => String(route.params.slug))

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

usePageSeo(() => ({
  title: post.value?.title,
  description: post.value?.description ?? '',
  image: post.value?.cover,
  type: 'article',
  publishedTime: post.value?.date,
}))
</script>

<template>
  <article v-if="post" class="container-page max-w-3xl py-12 sm:py-20">
    <NuxtLinkLocale
      to="/blog"
      class="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
    >
      <Icon name="lucide:arrow-left" class="size-4" />
      {{ $t('blog.back') }}
    </NuxtLinkLocale>

    <header class="mt-8 animate-fade-up">
      <time :datetime="post.date" class="font-mono text-sm text-subtle">
        {{ formatDate(post.date, locale) }}
      </time>
      <h1 class="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {{ post.title }}
      </h1>
      <p class="mt-4 text-lg text-pretty text-muted">{{ post.description }}</p>
      <div v-if="post.tags?.length" class="mt-5 flex flex-wrap gap-1.5">
        <TechBadge v-for="tag in post.tags" :key="tag">#{{ tag }}</TechBadge>
      </div>
    </header>

    <img
      v-if="post.cover"
      :src="post.cover"
      :alt="post.title"
      class="mt-10 aspect-[16/9] w-full rounded-card border border-line object-cover"
    />

    <ContentRenderer
      :value="post"
      class="prose mt-10 prose-neutral dark:prose-invert prose-headings:tracking-tight prose-a:text-accent"
    />
  </article>
</template>
