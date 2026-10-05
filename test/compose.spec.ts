import { describe, expect, it } from 'vitest'

import { gmailComposeUrl, mailtoUrl } from '../app/utils/compose'

const draft = { to: 'me@example.com', subject: 'Hi & bye', body: 'Line 1\nLine 2' }

describe('gmailComposeUrl', () => {
  it('builds a Gmail compose link with encoded fields', () => {
    const url = new URL(gmailComposeUrl(draft))
    expect(url.origin + url.pathname).toBe('https://mail.google.com/mail/')
    expect(url.searchParams.get('to')).toBe('me@example.com')
    expect(url.searchParams.get('su')).toBe('Hi & bye')
    expect(url.searchParams.get('body')).toBe('Line 1\nLine 2')
  })
})

describe('mailtoUrl', () => {
  it('encodes spaces as %20 for mail clients', () => {
    expect(mailtoUrl(draft)).toBe(
      'mailto:me@example.com?subject=Hi%20%26%20bye&body=Line%201%0ALine%202',
    )
  })
})
