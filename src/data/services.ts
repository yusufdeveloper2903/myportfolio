import brandIcon from '@/assets/images/services/brand.png'
import brand2Icon from '@/assets/images/services/brand2.png'
import designIcon from '@/assets/images/services/design.png'
import design2Icon from '@/assets/images/services/design2.png'
import frontendIcon from '@/assets/images/services/frontend.png'
import researchIcon from '@/assets/images/services/research.png'
import type { Service } from '@/types'

export const services: readonly Service[] = [
  { title: 'Web Design', icon: designIcon },
  { title: 'Vue JS', icon: design2Icon },
  { title: 'Web Developer', icon: frontendIcon },
  { title: 'Responsive', icon: researchIcon },
  { title: 'Branding', icon: brandIcon },
  { title: 'Product Strategy', icon: brand2Icon },
]
