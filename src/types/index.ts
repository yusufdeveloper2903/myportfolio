export type SectionId = 'home' | 'about' | 'services' | 'portfolio' | 'blog' | 'contact'

export interface NavLink {
  label: string
  href: `#${SectionId}`
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface ProfileFact {
  label: string
  value: string
  href?: string
}

export interface Profile {
  name: string
  firstName: string
  monogram: string
  headline: string
  intro: string
  about: string
  email: string
  phone: string
  phoneHref: string
  location: string
  cvUrl: string
  facts: ProfileFact[]
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
}

export interface Service {
  title: string
  icon: string
}

export interface Project {
  title: string
  url: string
  image: string
  summary: string
  /** Extra text revealed by "Read more". */
  details?: string
  /** Featured projects are always visible; the rest sit behind "All Projects". */
  featured?: boolean
}

export interface BlogPost {
  title: string
  excerpt: string
  cover: string
  category: string
  publishedAt: string
}

export interface ContactMessage {
  name: string
  email: string
  message: string
}
