import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import { projects } from '@/data/projects'

import PortfolioSection from '../PortfolioSection.vue'

describe('PortfolioSection', () => {
  it('shows featured projects first and all projects after toggling', async () => {
    const wrapper = mount(PortfolioSection)
    const featuredCount = projects.filter((project) => project.featured).length

    expect(wrapper.findAll('.project')).toHaveLength(featuredCount)

    await wrapper.get('.portfolio__toggle').trigger('click')
    expect(wrapper.findAll('.project')).toHaveLength(projects.length)
  })
})
