<script setup lang="ts">
import { roleKey, site } from '~/data/site'
</script>

<template>
  <section
    class="container-page grid items-center gap-10 pt-12 pb-16 sm:pt-20 lg:grid-cols-[1fr_auto] lg:gap-16"
  >
    <div class="relative mx-auto w-full max-w-xs animate-fade-up sm:max-w-sm lg:order-last lg:w-96">
      <div
        class="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <img
        :src="site.avatar"
        :alt="site.name"
        width="800"
        height="800"
        class="relative aspect-square w-full rounded-[2rem] border border-line object-cover shadow-2xl"
        fetchpriority="high"
      />
    </div>

    <div>
      <div class="animate-fade-up">
        <AvailabilityBadge />
      </div>

      <div class="mt-6 animate-fade-up [animation-delay:80ms]">
        <p class="text-lg font-medium">{{ site.name }}</p>
        <p class="text-muted">{{ $t(`hero.role.${roleKey}`) }}</p>
      </div>

      <h1
        class="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance animate-fade-up [animation-delay:160ms] sm:text-5xl"
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
        <NuxtLinkLocale to="/#contact" class="btn-ghost">{{
          $t('hero.ctaContact')
        }}</NuxtLinkLocale>
      </div>
    </div>
  </section>
</template>
