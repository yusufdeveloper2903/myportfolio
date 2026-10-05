import { queryCollection } from '@nuxt/content/nitro'

const LOCALES = ['en', 'uz', 'ru'] as const
const DEFAULT_LOCALE = 'en'
const STATIC_PATHS = ['/', '/work']

function localize(path: string, locale: string): string {
  if (locale === DEFAULT_LOCALE) return path
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

export default defineEventHandler(async (event) => {
  const { siteUrl } = useRuntimeConfig(event).public

  const paths = await Promise.all(
    LOCALES.map(async (locale) => {
      const projects = await queryCollection(event, `projects_${locale}` as 'projects_en')
        .select('path')
        .all()
      return [...STATIC_PATHS, ...projects.map((p) => p.path)].map((path) => localize(path, locale))
    }),
  )

  const urls = paths
    .flat()
    .map((path) => `  <url><loc>${new URL(path, siteUrl).href}</loc></url>`)
    .join('\n')

  setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
})
