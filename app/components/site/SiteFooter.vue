<script setup lang="ts">
import { site } from '~/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <div
      class="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row"
    >
      <p>© {{ year }} {{ site.name }}. {{ $t('footer.rights') }}</p>
      <SocialLinks />
    </div>
  </footer>
</template>
