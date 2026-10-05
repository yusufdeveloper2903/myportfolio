import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export const LOCALES = ['en', 'uz', 'ru'] as const
export type ContentLocale = (typeof LOCALES)[number]

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  year: z.number(),
  role: z.string(),
  stack: z.array(z.string()),
  cover: z.string(),
  featured: z.boolean().default(false),
  order: z.number().default(100),
  /** Commercial work whose source can't be published (company policy / NDA). */
  confidential: z.boolean().default(false),
  /** Organisation the work was done for, shown next to the role. */
  company: z.string().optional(),
  gallery: z
    .array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
        /** Tall shots (phones, photos) render at 3:4 instead of 16:10. */
        portrait: z.boolean().optional(),
      }),
    )
    .default([]),
  links: z
    .object({
      live: z.string().url().optional(),
      source: z.string().url().optional(),
    })
    .default({}),
  metrics: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
})

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
})

const experienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  url: z.string().url().optional(),
  location: z.string(),
  start: z.string(),
  end: z.string().optional(),
  order: z.number(),
  highlights: z.array(z.string()),
  stack: z.array(z.string()).default([]),
})

/** One collection per locale, e.g. `projects_en`, sourced from `content/en/projects/*.md`. */
function localized<T extends Parameters<typeof defineCollection>[0]>(
  name: string,
  build: (locale: ContentLocale) => T,
) {
  return Object.fromEntries(
    LOCALES.map((locale) => [`${name}_${locale}`, defineCollection(build(locale))]),
  ) as Record<`${typeof name}_${ContentLocale}`, ReturnType<typeof defineCollection>>
}

export default defineContentConfig({
  collections: {
    ...localized('projects', (locale) => ({
      type: 'page',
      source: { include: `${locale}/projects/*.md`, prefix: '/work' },
      schema: projectSchema,
    })),
    ...localized('blog', (locale) => ({
      type: 'page',
      source: { include: `${locale}/blog/*.md`, prefix: '/blog' },
      schema: postSchema,
    })),
    ...localized('experience', (locale) => ({
      type: 'data',
      source: `${locale}/experience/*.yml`,
      schema: experienceSchema,
    })),
  },
})
