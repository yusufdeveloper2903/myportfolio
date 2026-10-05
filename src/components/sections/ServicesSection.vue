<script setup lang="ts">
import { services } from '@/data/services'
</script>

<template>
  <section id="services" class="services">
    <div class="container">
      <h2 class="services__title">Services</h2>
      <p class="services__text">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
      </p>

      <ul class="services__grid">
        <li v-for="service in services" :key="service.title" class="services__card">
          <img :src="service.icon" alt="" class="services__icon" loading="lazy" />
          <h3 class="services__card-title">{{ service.title }}</h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.services {
  padding-block: 40px;
  text-align: center;

  &__title {
    @include section-title;
  }

  &__text {
    margin: 30px 0;
    color: $color-text-subtle;
    font-size: 25px;

    @include below(sm) {
      font-size: 18px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 5%;

    @include below(md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include below(sm) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    padding: 30px 16px 50px;
    background-color: $color-surface;
    transition: background-color $transition-fast;

    &:hover {
      background-color: $color-yellow;
    }
  }

  &__icon {
    margin-inline: auto;
  }

  &__card-title {
    margin: 20px 0 10px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;

    &::after {
      content: '';
      display: block;
      width: 40px;
      height: 1px;
      margin: 10px auto 0;
      background-color: yellow;
    }
  }
}
</style>
