import instagramIcon from '@/assets/images/icons/instagram.png'
import linkedinIcon from '@/assets/images/icons/linkedin.png'
import telegramIcon from '@/assets/images/icons/telegram.svg'
import testimonialAvatar from '@/assets/images/hero/testimonial-avatar.png'
import type { Profile, SocialLink, Testimonial } from '@/types'

const email = 'yusufyuldashev2903@gmail.com'
const phone = '+998 (99) 814-29-03'

export const profile: Profile = {
  name: 'Yusuf Yuldashev',
  firstName: 'Yusuf',
  monogram: 'Y.',
  headline: 'Building Digital Products, Brands & Experience.',
  intro:
    'A Product Dev and Visual Dev. I create web pages and use them dynamically with a backend, responsive web design, and visual development.',
  about:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  email,
  phone,
  phoneHref: 'tel:+998998142903',
  location: 'Tashkent, Uzbekistan',
  cvUrl: `${import.meta.env.BASE_URL}resume/yusuf-yuldashev-cv.pdf`,
  facts: [
    { label: 'Name', value: 'Yusuf Yuldashev' },
    { label: 'Date of birth', value: 'March 29, 2002' },
    { label: 'Address', value: 'Tashkent, Uzbekistan' },
    { label: 'Zip code', value: '100015' },
    { label: 'Email', value: email, href: `mailto:${email}` },
    { label: 'Phone', value: phone, href: 'tel:+998998142903' },
  ],
}

export const socialLinks: readonly SocialLink[] = [
  { name: 'Telegram', url: 'https://t.me/yusufyuldashev', icon: telegramIcon },
  { name: 'Instagram', url: 'https://www.instagram.com/yusuf__0_2/', icon: instagramIcon },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yusuf-yuldashev-468a32231/',
    icon: linkedinIcon,
  },
]

export const testimonial: Testimonial = {
  quote:
    'Yusuf has been an outstanding contributor to our team’s web dev needs. Highly recommended.',
  author: 'Muhammadjon Masayev',
  role: 'Web Developer at Tujjor',
  avatar: testimonialAvatar,
}
