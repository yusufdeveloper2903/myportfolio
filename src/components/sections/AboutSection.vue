<script setup lang="ts">
import portrait from '@/assets/images/about/portrait.png'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
</script>

<template>
  <section id="about" class="about">
    <div class="container about__inner">
      <img
        :src="portrait"
        :alt="profile.name"
        class="about__photo"
        width="353"
        height="707"
        loading="lazy"
      />

      <div class="about__content">
        <h2 class="about__title">About Me</h2>
        <p class="about__text">{{ profile.about }}</p>

        <dl class="about__facts">
          <div v-for="fact in profile.facts" :key="fact.label" class="about__fact">
            <dt>{{ fact.label }}:</dt>
            <dd>
              <a v-if="fact.href" :href="fact.href">{{ fact.value }}</a>
              <template v-else>{{ fact.value }}</template>
            </dd>
          </div>
        </dl>

        <p class="about__stats">
          <span class="about__stats-number">{{ projects.length }}</span> Projects complete
        </p>

        <a :href="profile.cvUrl" class="about__cv" download>Download CV</a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  padding-block: 50px;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    @include below(lg) {
      flex-direction: column-reverse;
      text-align: center;
    }
  }

  &__photo {
    flex: 0 1 40%;
    width: 40%;
    height: auto;

    @include below(lg) {
      width: 70%;
      max-width: 353px;
    }
  }

  &__content {
    flex: 0 1 50%;
  }

  &__title {
    @include section-title;
  }

  &__text {
    margin: 30px 0 50px;
    color: $color-text-subtle;
    font-size: 24px;
    line-height: 1.2;
  }

  &__facts {
    display: grid;
    gap: 20px;
    font-size: 22px;

    @include below(lg) {
      justify-items: center;
    }

    @include below(sm) {
      font-size: 18px;
    }
  }

  &__fact {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 12px;
    text-align: left;

    @include below(sm) {
      grid-template-columns: 1fr;
      gap: 4px;
      text-align: center;
    }

    dt {
      font-weight: 700;
    }

    dd {
      color: $color-text-subtle;
      overflow-wrap: anywhere;
    }

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__stats {
    margin: 50px 0 30px;
    font-size: 27px;
    font-weight: 700;
  }

  &__stats-number {
    color: $color-gold;
  }

  &__cv {
    display: inline-block;
    padding: 16px 30px;
    border-radius: 25px;
    background-color: $color-yellow;
    color: $color-bg;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    transition: transform $transition-base;
    @include focus-ring;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
