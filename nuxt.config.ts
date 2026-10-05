import tailwindcss from '@tailwindcss/vite'

// TODO: set NUXT_PUBLIC_SITE_URL to your production domain (used for canonical, OG and sitemap URLs).
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',

  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@vueuse/nuxt',
  ],

  devtools: { enabled: true },

  // Folders group components by feature; they don't prefix component names.
  components: [{ path: '~/components', pathPrefix: false }],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      siteUrl,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { name: 'theme-color', content: '#fafafa', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#0a0a0a', media: '(prefers-color-scheme: dark)' },
      ],
    },
  },

  content: {
    experimental: { sqliteConnector: 'native' },
    build: {
      markdown: {
        highlight: {
          theme: { default: 'github-light', dark: 'github-dark' },
          langs: ['ts', 'js', 'vue', 'bash', 'json', 'sql'],
        },
      },
    },
  },

  i18n: {
    baseUrl: siteUrl,
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'uz', language: 'uz-UZ', name: 'O‘zbekcha', file: 'uz.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
    ],
    // The site is pre-rendered, so the locale comes from the URL only. Client-side
    // redirects would hydrate English HTML with another locale and mismatch.
    detectBrowserLanguage: false,
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },

  fonts: {
    families: [
      { name: 'Geist', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Geist Mono', provider: 'google', weights: [400, 500] },
    ],
  },

  icon: {
    // Bundle every icon referenced in source (including data files) so the static
    // site never needs the runtime icon API.
    clientBundle: {
      scan: { globInclude: ['app/**/*.{vue,ts}'], globExclude: ['node_modules', '.nuxt'] },
    },
    serverBundle: 'local',
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/robots.txt'],
    },
  },

  typescript: {
    strict: true,
    tsConfig: {
      vueCompilerOptions: {
        // Fail type-checking on components that don't resolve.
        checkUnknownComponents: true,
      },
    },
  },
})
