<script setup lang="ts">
const colorMode = useColorMode()

function toggle() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    class="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-hover hover:text-fg"
    :aria-label="$t('theme.toggle')"
    @click="toggle"
  >
    <!-- Wrapper spans own visibility: the icon's own CSS would override `hidden`. -->
    <span class="contents dark:hidden"><Icon name="lucide:sun" class="size-4.5" /></span>
    <span class="hidden dark:contents"><Icon name="lucide:moon" class="size-4.5" /></span>
  </button>
</template>
