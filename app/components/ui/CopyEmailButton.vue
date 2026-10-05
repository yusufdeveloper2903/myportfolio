<script setup lang="ts">
import { site } from '~/data/site'

const { copy, copied } = useClipboardCopy()
</script>

<template>
  <button type="button" class="btn-ghost" @click="copy(site.email)">
    <Icon :name="copied ? 'lucide:check' : 'lucide:copy'" class="size-4" />
    <span aria-live="polite">{{ copied ? $t('contact.copied') : $t('contact.copy') }}</span>
  </button>
</template>
