<script setup lang="ts">
import { computed, ref } from 'vue'

import ProjectCard from '@/components/portfolio/ProjectCard.vue'
import { projects } from '@/data/projects'

const showAll = ref(false)

const visibleProjects = computed(() =>
  showAll.value ? projects : projects.filter((project) => project.featured),
)
const hasHiddenProjects = projects.some((project) => !project.featured)
</script>

<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <h2 class="portfolio__title">Featured My Portfolio</h2>
      <p class="portfolio__text">
        Explore some of my latest website projects. Non suscipit ex blandit vitae. Pellentesque vel
        urna id massa sagittis luctus Fusce iaculis.
      </p>

      <ul id="portfolio-grid" class="portfolio__grid">
        <li v-for="project in visibleProjects" :key="project.url + project.title">
          <ProjectCard :project="project" />
        </li>
      </ul>

      <div v-if="hasHiddenProjects" class="portfolio__actions">
        <button
          type="button"
          class="portfolio__toggle"
          :aria-expanded="showAll"
          aria-controls="portfolio-grid"
          @click="showAll = !showAll"
        >
          {{ showAll ? 'Show Less' : 'All Projects' }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.portfolio {
  padding-block: 70px 40px;

  &__title {
    color: $color-teal;
    font-size: 45px;

    @include below(md) {
      font-size: 36px;
      text-align: center;
    }
  }

  &__text {
    max-width: 50%;
    margin: 14px 0 50px;
    color: $color-text-muted;
    font-size: 18px;
    line-height: 1.3;

    @include below(md) {
      max-width: 100%;
      text-align: center;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 10%;

    @include below(md) {
      grid-template-columns: 1fr;
    }
  }

  &__actions {
    display: flex;
    justify-content: center;
    margin-block: 50px 30px;
  }

  &__toggle {
    padding: 18px 60px;
    border: 1px solid $color-teal;
    border-radius: 5px;
    background-color: $color-teal;
    box-shadow: $shadow-glow;
    color: $color-bg;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    transition: all $transition-base;
    @include focus-ring;

    &:hover {
      background-color: $color-bg;
      color: $color-teal;
    }
  }
}
</style>
