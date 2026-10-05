<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section class="container-page pt-16 pb-12 sm:pt-24">
    <div class="animate-fade-up">
      <AvailabilityBadge />
    </div>

    <div class="mt-8 flex items-center gap-4 animate-fade-up [animation-delay:80ms]">
      <img
        :src="site.avatar"
        :alt="site.name"
        width="56"
        height="56"
        class="size-14 rounded-full border border-line bg-surface object-cover object-top"
        fetchpriority="high"
      />
      <div>
        <p class="font-medium">{{ site.name }}</p>
        <p class="text-sm text-muted">{{ $t('hero.role') }}</p>
      </div>
    </div>

    <h1
      class="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-balance animate-fade-up [animation-delay:160ms] sm:text-6xl"
    >
      {{ $t('hero.title') }}
    </h1>
    <p
      class="mt-6 max-w-2xl text-lg text-pretty text-muted animate-fade-up [animation-delay:240ms]"
    >
      {{ $t('hero.subtitle') }}
    </p>

    <div class="mt-10 flex flex-wrap gap-3 animate-fade-up [animation-delay:320ms]">
      <NuxtLinkLocale to="/work" class="btn-primary">
        {{ $t('hero.ctaWork') }}
        <Icon name="lucide:arrow-right" class="size-4" />
      </NuxtLinkLocale>
      <NuxtLinkLocale to="/#contact" class="btn-ghost">{{ $t('hero.ctaContact') }}</NuxtLinkLocale>
    </div>
  </section>
</template>
