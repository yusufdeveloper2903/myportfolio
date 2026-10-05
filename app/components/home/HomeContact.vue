<script setup lang="ts">
import { site } from '~/data/site'

const { open: openContact } = useContactDialog()
</script>

<template>
  <section id="contact" class="container-page scroll-mt-20 pb-24">
    <div v-reveal class="card relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
      <div
        class="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <p class="eyebrow relative">{{ $t('contact.eyebrow') }}</p>
      <h2
        class="relative mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl"
      >
        {{ $t('contact.title') }}
      </h2>
      <p class="relative mx-auto mt-5 max-w-xl text-pretty text-muted">
        {{ $t('contact.subtitle') }}
      </p>
      <a
        :href="`mailto:${site.email}`"
        class="relative mt-8 inline-block text-lg font-medium break-all underline decoration-line underline-offset-8 transition-colors hover:decoration-accent sm:text-2xl"
      >
        {{ site.email }}
      </a>
      <div class="relative mt-8 flex flex-wrap items-center justify-center gap-3">
        <button type="button" class="btn-primary" @click="openContact">
          <Icon name="lucide:mail" class="size-4" />
          {{ $t('contact.sendEmail') }}
        </button>
        <CopyEmailButton />
        <a :href="site.cvUrl" class="btn-ghost" download>
          <Icon name="lucide:file-down" class="size-4" />
          {{ $t('contact.downloadCv') }}
        </a>
      </div>
      <SocialLinks class="relative mt-8 justify-center" />
    </div>
    <ContactDialog />
  </section>
</template>
