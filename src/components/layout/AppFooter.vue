<script setup lang="ts">
import AppLogo from '@/components/ui/AppLogo.vue'
import SocialLinks from '@/components/ui/SocialLinks.vue'
import { navLinks } from '@/data/navigation'
import { profile } from '@/data/profile'
import { services } from '@/data/services'

const pageLinks = navLinks.filter((link) => link.href !== '#contact')
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <AppLogo variant="dark" />
          <p class="footer__text">{{ profile.intro }}</p>
          <SocialLinks class="footer__socials" />
        </div>

        <nav class="footer__column" aria-label="Pages">
          <h2 class="footer__title">Pages</h2>
          <a v-for="link in pageLinks" :key="link.href" :href="link.href" class="footer__link">
            {{ link.label }}
          </a>
        </nav>

        <div class="footer__column">
          <h2 class="footer__title">Services</h2>
          <a v-for="service in services" :key="service.title" href="#services" class="footer__link">
            {{ service.title }}
          </a>
        </div>

        <address class="footer__column">
          <h2 class="footer__title">Contact</h2>
          <a :href="profile.phoneHref" class="footer__link">{{ profile.phone }}</a>
          <a :href="`mailto:${profile.email}`" class="footer__link">{{ profile.email }}</a>
          <span class="footer__link">{{ profile.location }}</span>
        </address>
      </div>

      <p class="footer__copy">© {{ year }} {{ profile.name }}. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 100px 0 40px;
  border-top: 2px solid $color-teal;
  background-color: $color-bg;

  &__grid {
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    gap: 40px;

    @include below(lg) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include below(md) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }

  &__brand {
    @include below(lg) {
      grid-column: 1 / -1;
    }

    @include below(md) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__text {
    max-width: 70%;
    margin-top: 14px;
    color: $color-text-muted;
    font-size: 18px;
    line-height: 1.4;

    @include below(lg) {
      max-width: 100%;
    }
  }

  &__socials {
    margin-top: 45px;
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-style: normal;

    @include below(md) {
      align-items: center;
    }
  }

  &__title {
    margin-bottom: 18px;
    color: $color-teal;
    font-size: 24px;
    font-weight: 500;
  }

  &__link {
    color: #787878;
    font-size: 18px;
    text-decoration: none;
    word-break: break-word;
    @include focus-ring;

    &[href]:hover {
      text-decoration: underline;
    }
  }

  &__copy {
    margin-top: 60px;
    color: $color-text-muted;
    font-size: 14px;
    text-align: center;
  }
}
</style>
