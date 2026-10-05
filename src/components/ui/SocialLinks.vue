<script setup lang="ts">
import { socialLinks } from '@/data/profile'
</script>

<template>
  <ul class="socials">
    <li v-for="link in socialLinks" :key="link.name">
      <a
        :href="link.url"
        class="socials__link"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="link.name"
      >
        <img :src="link.icon" alt="" width="32" height="32" />
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.socials {
  display: flex;
  align-items: center;
  gap: 25px;

  &__link {
    display: block;
    @include focus-ring;

    img {
      width: 32px;
      height: 32px;
      object-fit: contain;
      transition: filter $transition-fast;
    }

    &:hover img {
      // Tints the grey icons to $color-orange.
      filter: invert(57%) sepia(99%) saturate(535%) hue-rotate(359deg) brightness(101%)
        contrast(105%);
    }
  }
}
</style>
