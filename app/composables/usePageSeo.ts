import { site } from '~/data/site'

interface PageSeo {
  title?: string
  description: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
}

/** Sets title, description, canonical URL and Open Graph / Twitter tags for a page. */
export function usePageSeo(input: MaybeRefOrGetter<PageSeo>) {
  const { siteUrl } = useRuntimeConfig().public
  const route = useRoute()

  const seo = computed(() => toValue(input))
  const absolute = (path: string) => new URL(path, siteUrl).href
  const url = computed(() => absolute(route.path))
  const image = computed(() => absolute(seo.value.image ?? '/og.png'))

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })

  useSeoMeta({
    title: () => seo.value.title,
    description: () => seo.value.description,
    ogTitle: () => seo.value.title ?? site.name,
    ogDescription: () => seo.value.description,
    ogType: () => seo.value.type ?? 'website',
    ogUrl: url,
    ogImage: image,
    ogSiteName: site.name,
    articlePublishedTime: () => seo.value.publishedTime,
    twitterCard: 'summary_large_image',
    twitterImage: image,
  })
}
