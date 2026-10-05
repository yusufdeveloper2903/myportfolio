/**
 * Content is stored per locale (`projects_en`, `projects_uz`, …). These composables
 * query the active locale and fall back to English for entries not translated yet.
 */
type ContentBase = 'projects' | 'blog' | 'experience'

const FALLBACK_LOCALE = 'en'

function collection<B extends ContentBase>(base: B, locale: string) {
  // Every `<base>_<locale>` collection shares one schema, so the English type is representative.
  return `${base}_${locale}` as `${B}_en`
}

async function withFallback<T>(
  locale: string,
  query: (locale: string) => Promise<T>,
  isEmpty: (result: T) => boolean,
): Promise<T> {
  const result = await query(locale)
  return isEmpty(result) && locale !== FALLBACK_LOCALE ? query(FALLBACK_LOCALE) : result
}

const isEmptyList = (items: unknown[]) => items.length === 0

export function useProjects(options: { featured?: boolean; limit?: number } = {}) {
  const { locale } = useI18n()
  return useAsyncData(
    () =>
      `projects:${locale.value}:${options.featured ? 'featured' : 'all'}:${options.limit ?? ''}`,
    () =>
      withFallback(
        locale.value,
        (lang) => {
          let query = queryCollection(collection('projects', lang)).order('order', 'ASC')
          if (options.featured) query = query.where('featured', '=', true)
          if (options.limit) query = query.limit(options.limit)
          return query.all()
        },
        isEmptyList,
      ),
    { default: () => [] },
  )
}

export function useProject(slug: MaybeRefOrGetter<string>) {
  const { locale } = useI18n()
  return useAsyncData(
    () => `project:${locale.value}:${toValue(slug)}`,
    () =>
      withFallback(
        locale.value,
        (lang) =>
          queryCollection(collection('projects', lang))
            .path(`/work/${toValue(slug)}`)
            .first(),
        (project) => !project,
      ),
  )
}

export function usePosts(options: { limit?: number } = {}) {
  const { locale } = useI18n()
  return useAsyncData(
    () => `posts:${locale.value}:${options.limit ?? ''}`,
    () =>
      withFallback(
        locale.value,
        (lang) => {
          let query = queryCollection(collection('blog', lang)).order('date', 'DESC')
          if (options.limit) query = query.limit(options.limit)
          return query.all()
        },
        isEmptyList,
      ),
    { default: () => [] },
  )
}

export function usePost(slug: MaybeRefOrGetter<string>) {
  const { locale } = useI18n()
  return useAsyncData(
    () => `post:${locale.value}:${toValue(slug)}`,
    () =>
      withFallback(
        locale.value,
        (lang) =>
          queryCollection(collection('blog', lang))
            .path(`/blog/${toValue(slug)}`)
            .first(),
        (post) => !post,
      ),
  )
}

export function useExperience() {
  const { locale } = useI18n()
  return useAsyncData(
    () => `experience:${locale.value}`,
    () =>
      withFallback(
        locale.value,
        (lang) => queryCollection(collection('experience', lang)).order('order', 'ASC').all(),
        isEmptyList,
      ),
    { default: () => [] },
  )
}
