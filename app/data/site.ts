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
  email: 'yusufdeveloper2903@gmail.com',
  phone: '+998 99 814 29 03',
  phoneHref: 'tel:+998998142903',
  timeZone: 'Asia/Tashkent',
  yearsOfExperience: 5,
  availableForWork: true,
  cvUrl: '/resume/yusuf-yuldashev-cv.pdf',
  avatar: '/images/portrait.jpg',
  socials: [
    { name: 'GitHub', url: 'https://github.com/yusufdeveloper2903', icon: 'simple-icons:github' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yusuf-yuldashev-468a32231/',
      icon: 'simple-icons:linkedin',
    },
    { name: 'Telegram', url: 'https://t.me/yusufnfg', icon: 'simple-icons:telegram' },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/yusuf__0_2/',
      icon: 'simple-icons:instagram',
    },
  ] satisfies SocialLink[],
  companies: [
    'Longhorn Logistics Group',
    'Expensify (open source)',
    'ZK — Zamonaviy Kommunikatsiyalar',
    'Invan · tiin',
    'SQB Bank',
  ],
  stack: [
    {
      key: 'frontend',
      items: [
        { name: 'TypeScript', icon: 'simple-icons:typescript' },
        { name: 'React / Next.js', icon: 'simple-icons:react' },
        { name: 'Vue / Nuxt', icon: 'simple-icons:vuedotjs' },
        { name: 'TanStack Query', icon: 'simple-icons:reactquery' },
        { name: 'WebSocket / WebRTC', icon: 'simple-icons:webrtc' },
      ],
    },
    {
      key: 'backend',
      items: [
        { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
        { name: 'NestJS / Express', icon: 'simple-icons:nestjs' },
        { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
        { name: 'MongoDB', icon: 'simple-icons:mongodb' },
        { name: 'Redis', icon: 'simple-icons:redis' },
      ],
    },
    {
      key: 'devops',
      items: [
        { name: 'Docker', icon: 'simple-icons:docker' },
        { name: 'GitHub Actions', icon: 'simple-icons:githubactions' },
        { name: 'Nginx', icon: 'simple-icons:nginx' },
        { name: 'Vitest', icon: 'simple-icons:vitest' },
        { name: 'Playwright', icon: 'simple-icons:playwright' },
      ],
    },
  ] satisfies StackGroup[],
} as const
