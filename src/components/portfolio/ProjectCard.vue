<script setup lang="ts">
import arrowIcon from '@/assets/images/icons/arrow-right.png'
import ReadMore from '@/components/ui/ReadMore.vue'
import type { Project } from '@/types'

defineProps<{ project: Project }>()
</script>

<template>
  <article class="project">
    <div class="project__media">
      <img
        :src="project.image"
        :alt="`${project.title} preview`"
        class="project__image"
        loading="lazy"
      />
    </div>
    <h3 class="project__title">{{ project.title }}</h3>
    <ReadMore :text="project.summary" :more="project.details" class="project__text" />
    <a :href="project.url" class="project__link" target="_blank" rel="noopener noreferrer">
      Watch the Website
      <img :src="arrowIcon" alt="" width="18" height="18" class="project__arrow" />
    </a>
  </article>
</template>

<style scoped lang="scss">
.project {
  &__media {
    overflow: hidden;
    border-radius: 5px;
  }

  &__image {
    width: 100%;
    height: 270px;
    object-fit: cover;
    transition: transform $transition-base;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__title {
    margin-top: 30px;
    color: $color-teal;
    font-size: 30px;
  }

  &__text {
    margin: 10px 0 20px;
    color: $color-text-muted;
    font-size: 16px;
    line-height: 1.3;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: $color-teal;
    font-weight: 500;
    text-decoration: none;
    @include focus-ring;

    &:hover {
      text-decoration: underline;
    }

    &:hover .project__arrow {
      transform: translateX(20px);
    }
  }

  &__arrow {
    transition: transform $transition-fast;
  }
}
</style>
