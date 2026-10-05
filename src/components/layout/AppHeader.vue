<script setup lang="ts">
import { ref, watch } from 'vue'

import menuIcon from '@/assets/images/icons/menu.png'
import AppLogo from '@/components/ui/AppLogo.vue'
import { useEventListener } from '@/composables/useEventListener'
import { useMediaQuery } from '@/composables/useMediaQuery'
import { useScrolled } from '@/composables/useScrolled'
import { navLinks } from '@/data/navigation'

const isScrolled = useScrolled(50)
// Keep in sync with the `md` breakpoint in abstracts/_variables.scss.
const isDesktop = useMediaQuery('(min-width: 769px)')
const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(isDesktop, (desktop) => desktop && closeMenu())
useEventListener(window, 'keydown', (event) => event.key === 'Escape' && closeMenu())
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="container header__inner">
      <AppLogo />

      <button
        type="button"
        class="header__toggle"
        :class="{ 'header__toggle--active': isMenuOpen }"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-nav"
        @click="isMenuOpen = !isMenuOpen"
      >
        <img :src="menuIcon" alt="" width="35" height="35" />
        <span class="visually-hidden">{{ isMenuOpen ? 'Close menu' : 'Open menu' }}</span>
      </button>

      <nav id="primary-nav" class="nav" :class="{ 'nav--open': isMenuOpen }" aria-label="Primary">
        <ul class="nav__list">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="nav__link"
              :class="{ 'nav__link--cta': link.href === '#contact' }"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: $header-height;
  padding-block: 20px 10px;
  background-color: $color-navy;
  transition:
    background-color $transition-fast,
    box-shadow $transition-fast;

  &--scrolled {
    background-color: $color-bg;
    box-shadow: 0 4px 6px -1px rgb(27, 7, 7);
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__toggle {
    display: none;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    transition: transform 0.5s;
    @include focus-ring;

    img {
      width: 35px;
      // Renders the dark icon white.
      filter: invert(100%);
    }

    &--active {
      transform: rotate(180deg);
    }

    @include below(md) {
      display: block;
    }
  }
}

.nav {
  &__list {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  &__link {
    color: $color-text-nav;
    font-size: 18px;
    text-decoration: none;
    transition: color $transition-fast;
    @include focus-ring;

    &:hover {
      color: $color-orange;
      text-decoration: underline;
    }

    &--cta {
      padding: 14px 35px;
      border-radius: 25px;
      background-color: $color-teal-light;
      color: $color-white;
      font-weight: 700;

      &:hover {
        color: $color-white;
        text-decoration: none;
      }
    }
  }

  @include below(md) {
    position: fixed;
    inset: 0 auto 0 0;
    width: 100%;
    max-width: 250px;
    padding-top: 25px;
    background-color: $color-white;
    transform: translateX(-100%);
    visibility: hidden;
    transition:
      transform 0.6s ease,
      visibility 0.6s;

    &--open {
      transform: translateX(0);
      visibility: visible;
    }

    &__list {
      flex-direction: column;
      gap: 0;
    }

    &__list li {
      padding: 20px 0;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav,
  .header__toggle {
    transition: none;
  }
}
</style>
