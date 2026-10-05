<script setup lang="ts">
import arch from '@/assets/images/hero/arch.png'
import portrait from '@/assets/images/hero/portrait.png'
import { profile, testimonial } from '@/data/profile'
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero__inner">
      <div class="hero__content">
        <p class="hero__greeting">Hey, I’m {{ profile.firstName }}</p>
        <h1 class="hero__title">{{ profile.headline }}</h1>
        <p class="hero__intro">{{ profile.intro }}</p>
        <div class="hero__actions">
          <a href="#contact" class="hero__btn hero__btn--solid">Hire Me</a>
          <a href="#portfolio" class="hero__btn hero__btn--outline">My Work</a>
        </div>
      </div>

      <div class="hero__visual">
        <div class="hero__frame">
          <img :src="arch" alt="" class="hero__arch" width="490" height="615" />
          <img
            :src="portrait"
            :alt="profile.name"
            class="hero__portrait"
            width="266"
            height="444"
            fetchpriority="high"
          />
        </div>

        <figure class="testimonial">
          <blockquote class="testimonial__quote">“{{ testimonial.quote }}”</blockquote>
          <figcaption class="testimonial__author">
            <img :src="testimonial.avatar" alt="" width="45" height="45" />
            <span>
              <strong class="testimonial__name">{{ testimonial.author }}</strong>
              <span class="testimonial__role">{{ testimonial.role }}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  padding-block: 70px 90px;
  background-color: $color-navy;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    @include below(lg) {
      flex-direction: column;
      text-align: center;
    }
  }

  &__content {
    flex: 0 1 50%;
  }

  &__greeting {
    display: inline-block;
    padding: 15px 30px;
    border-radius: 30px;
    background-color: $color-navy-light;
    font-family: $font-hand;
    font-size: 24px;

    @include below(xl) {
      font-size: 20px;
    }
  }

  &__title {
    margin-top: 40px;
    font-size: 60px;
    font-weight: 700;
    line-height: 1.15;

    @include below(xl) {
      font-size: 40px;
    }
  }

  &__intro {
    margin-top: 30px;
    color: $color-text-hero;
    font-size: 18px;
    line-height: 1.5;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 24px 40px;
    margin-top: 50px;

    @include below(lg) {
      justify-content: center;
    }
  }

  &__btn {
    padding: 16px 25px;
    border: 1px solid $color-orange;
    border-radius: 25px;
    font-size: 18px;
    text-decoration: none;
    transition:
      color $transition-fast,
      background-color $transition-fast;
    @include focus-ring;

    &--solid {
      background-color: $color-orange;
      color: $color-white;

      &:hover {
        background-color: transparent;
        color: $color-orange;
      }
    }

    &--outline {
      color: $color-orange;

      &:hover {
        background-color: $color-orange;
        color: $color-white;
      }
    }
  }

  &__visual {
    position: relative;
    flex: 0 1 45%;
    width: 100%;
    max-width: 490px;
  }

  &__frame {
    position: relative;
  }

  &__arch {
    width: 100%;
    height: auto;
  }

  &__portrait {
    position: absolute;
    bottom: 3.3%;
    left: 50%;
    width: 75%;
    height: auto;
    transform: translateX(-50%);
  }
}

.testimonial {
  position: absolute;
  right: -25%;
  bottom: 12%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  width: 300px;
  min-height: 169px;
  padding: 20px;
  border-radius: 16px;
  background: url('@/assets/images/hero/testimonial-bg.png') center / cover no-repeat;
  text-align: left;

  @include below(xl) {
    display: none;
  }

  &__quote {
    font-size: 14px;
    line-height: 1.4;
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      border-radius: 50%;
      transition: transform 0.7s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  &__name {
    display: block;
    font-size: 16px;
  }

  &__role {
    color: $color-text-nav;
    font-size: 12px;
    font-weight: 700;
  }
}
</style>
