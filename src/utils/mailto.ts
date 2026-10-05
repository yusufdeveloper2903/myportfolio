import type { ContactMessage } from '@/types'

interface MailtoOptions {
  subject?: string
  body?: string
}

/** Builds a `mailto:` URL with properly encoded subject and body. */
export function buildMailto(to: string, { subject, body }: MailtoOptions = {}): string {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)

  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  const query = params.toString().replace(/\+/g, '%20')
  return `mailto:${to}${query ? `?${query}` : ''}`
}

export function buildContactMailto(to: string, message: ContactMessage): string {
  return buildMailto(to, {
    subject: `Project inquiry from ${message.name}`,
    body: `${message.message}\n\n— ${message.name} <${message.email}>`,
  })
}
