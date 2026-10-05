<script setup lang="ts">
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import BlogSection from '@/components/sections/BlogSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <BlogSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>
