<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const is404 = computed(() => props.error.statusCode === 404)

useHead({ title: () => String(props.error.statusCode) })
</script>

<template>
  <NuxtLayout>
    <section class="container-page grid min-h-[60vh] place-items-center py-24 text-center">
      <div>
        <p class="font-mono text-sm text-subtle">{{ error.statusCode }}</p>
        <h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {{ is404 ? $t('error.notFound') : $t('error.generic') }}
        </h1>
        <p v-if="is404" class="mx-auto mt-4 max-w-md text-muted">{{ $t('error.notFoundText') }}</p>
        <NuxtLinkLocale to="/" class="btn-primary mt-8" @click="clearError()">
          <Icon name="lucide:arrow-left" class="size-4" />
          {{ $t('error.home') }}
        </NuxtLinkLocale>
      </div>
    </section>
  </NuxtLayout>
</template>
