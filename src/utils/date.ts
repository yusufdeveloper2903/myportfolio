const formatter = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

/** Formats an ISO date (`YYYY-MM-DD`) as e.g. "05 Jun 2021". */
export function formatDate(isoDate: string): string {
  return formatter.format(new Date(`${isoDate}T00:00:00`))
}
