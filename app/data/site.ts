/**
 * Locale-independent site facts. Translatable copy lives in `i18n/locales/*.json`,
 * long-form content (projects, posts, experience) lives in `content/<locale>/`.
 */
export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface StackGroup {
  /** i18n key under `stack.groups`. */
  key: 'frontend' | 'backend' | 'devops'
  items: { name: string; icon: string }[]
}

export const site = {
  name: 'Yusuf Yuldashev',
  monogram: 'Y.',
  email: 'yusufyuldashev2903@gmail.com',
  timeZone: 'Asia/Tashkent',
  // TODO: set your real number of years in the industry.
  yearsOfExperience: 5,
  availableForWork: true,
  cvUrl: '/resume/yusuf-yuldashev-cv.pdf',
  avatar: '/images/portrait.png',
  socials: [
    { name: 'GitHub', url: 'https://github.com/yusufdeveloper2903', icon: 'simple-icons:github' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yusuf-yuldashev-468a32231/',
      icon: 'simple-icons:linkedin',
    },
    { name: 'Telegram', url: 'https://t.me/yusufyuldashev', icon: 'simple-icons:telegram' },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/yusuf__0_2/',
      icon: 'simple-icons:instagram',
    },
  ] satisfies SocialLink[],
  // TODO: keep only the technologies you actually use in production.
  stack: [
    {
      key: 'frontend',
      items: [
        { name: 'TypeScript', icon: 'simple-icons:typescript' },
        { name: 'Vue', icon: 'simple-icons:vuedotjs' },
        { name: 'Nuxt', icon: 'simple-icons:nuxt' },
        { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
      ],
    },
    {
      key: 'backend',
      items: [
        { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
        { name: 'NestJS', icon: 'simple-icons:nestjs' },
        { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
        { name: 'Redis', icon: 'simple-icons:redis' },
      ],
    },
    {
      key: 'devops',
      items: [
        { name: 'Docker', icon: 'simple-icons:docker' },
        { name: 'GitHub Actions', icon: 'simple-icons:githubactions' },
        { name: 'Linux', icon: 'simple-icons:linux' },
        { name: 'Nginx', icon: 'simple-icons:nginx' },
      ],
    },
  ] satisfies StackGroup[],
} as const
