<script setup lang="ts">
import { computed } from 'vue'

import logoFooter from '@/assets/images/brand/logo-footer.png'
import logo from '@/assets/images/brand/logo.png'
import { profile } from '@/data/profile'

const props = withDefaults(defineProps<{ variant?: 'light' | 'dark' }>(), {
  variant: 'light',
})

const src = computed(() => (props.variant === 'light' ? logo : logoFooter))
</script>

<template>
  <a href="#home" class="logo" :class="`logo--${variant}`" :aria-label="`${profile.name} — home`">
    <img :src="src" alt="" width="38" height="35" />
    <span class="logo__text" aria-hidden="true">{{ profile.monogram }}</span>
  </a>
</template>

<style scoped lang="scss">
.logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  @include focus-ring;

  &__text {
    font-size: 30px;
    font-weight: 700;
  }

  &--light .logo__text {
    color: $color-white;
  }

  &--dark .logo__text {
    color: $color-teal;
  }
}
</style>
