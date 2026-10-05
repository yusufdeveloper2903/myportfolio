import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import ReadMore from '../ReadMore.vue'

describe('ReadMore', () => {
  it('renders no toggle when there is no extra text', () => {
    const wrapper = mount(ReadMore, { props: { text: 'Short' } })
    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('reveals and hides the extra text', async () => {
    const wrapper = mount(ReadMore, {
      props: { text: 'Short', more: 'Long tail' },
      attachTo: document.body,
    })
    const button = wrapper.get('button')
    const more = wrapper.get(`#${button.attributes('aria-controls')}`)

    expect(more.isVisible()).toBe(false)
    expect(button.attributes('aria-expanded')).toBe('false')

    await button.trigger('click')
    expect(more.isVisible()).toBe(true)
    expect(button.attributes('aria-expanded')).toBe('true')
    expect(button.text()).toBe('Hide')
  })
})
