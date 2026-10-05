<script setup lang="ts">
import { site } from '~/data/site'

const { t } = useI18n()
const head = useLocaleHead({ seo: true })
const { siteUrl } = useRuntimeConfig().public

useHead({
  htmlAttrs: { lang: () => head.value.htmlAttrs?.lang },
  link: () => head.value.link ?? [],
  meta: () => head.value.meta ?? [],
  titleTemplate: (title) => (title ? `${title} · ${site.name}` : t('seo.title')),
  // Keep scroll-reveal content visible when JavaScript is disabled.
  noscript: [
    { innerHTML: '<style>[data-reveal]{opacity:1!important;transform:none!important}</style>' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: site.name,
        jobTitle: 'Senior Full-Stack Engineer',
        email: `mailto:${site.email}`,
        url: siteUrl,
        image: new URL(site.avatar, siteUrl).href,
        address: { '@type': 'PostalAddress', addressLocality: 'Tashkent', addressCountry: 'UZ' },
        sameAs: site.socials.map((social) => social.url),
      }),
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
