<script setup lang="ts">
import { site } from '~/data/site'

/**
 * Shows its content only while the backend/DevOps flag is on, or with `off`
 * only while it is off. Used in Markdown as `:if-backend[...]`.
 */
const props = defineProps<{ off?: boolean }>()
</script>

<template>
  <slot v-if="site.features.backendDevops !== props.off" />
</template>
