import { describe, expect, it } from 'vitest'

import { buildContactMailto, buildMailto } from '../mailto'

describe('buildMailto', () => {
  it('returns a bare mailto link without options', () => {
    expect(buildMailto('me@example.com')).toBe('mailto:me@example.com')
  })

  it('encodes spaces as %20 and escapes special characters', () => {
    expect(buildMailto('me@example.com', { subject: 'Hi & bye', body: 'a\nb' })).toBe(
      'mailto:me@example.com?subject=Hi%20%26%20bye&body=a%0Ab',
    )
  })
})

describe('buildContactMailto', () => {
  it('puts sender details into subject and body', () => {
    const url = buildContactMailto('me@example.com', {
      name: 'Ali',
      email: 'ali@example.com',
      message: 'Need a site',
    })
    const params = new URLSearchParams(url.split('?')[1])

    expect(params.get('subject')).toBe('Project inquiry from Ali')
    expect(params.get('body')).toBe('Need a site\n\n— Ali <ali@example.com>')
  })
})
