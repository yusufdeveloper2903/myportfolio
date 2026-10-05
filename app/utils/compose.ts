export interface EmailDraft {
  to: string
  subject: string
  body: string
}

/** Gmail web compose — works in any browser, no mail app required. */
export function gmailComposeUrl({ to, subject, body }: EmailDraft): string {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to, su: subject, body })
  return `https://mail.google.com/mail/?${params}`
}

/** `mailto:` link for the visitor's default mail app (spaces as %20, not "+"). */
export function mailtoUrl({ to, subject, body }: EmailDraft): string {
  const query = new URLSearchParams({ subject, body }).toString().replace(/\+/g, '%20')
  return `mailto:${to}?${query}`
}
