export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig(event).public
  setResponseHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', siteUrl).href}\n`
})
