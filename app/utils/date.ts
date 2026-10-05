const LANGUAGE_TAGS: Record<string, string> = {
  en: 'en-US',
  uz: 'uz-Latn-UZ',
  ru: 'ru-RU',
}

function toTag(locale: string): string {
  return LANGUAGE_TAGS[locale] ?? locale
}

/** Parses `YYYY-MM` or `YYYY-MM-DD` as a local calendar date. */
export function parseCalendarDate(value: string): Date {
  const [year, month = 1, day = 1] = value.split('-').map(Number)
  return new Date(year!, month - 1, day)
}

// ICU data for Uzbek month names is incomplete in most browsers ("M06"), so format it manually.
const UZ_MONTHS = [
  'yan',
  'fev',
  'mar',
  'apr',
  'may',
  'iyun',
  'iyul',
  'avg',
  'sen',
  'okt',
  'noy',
  'dek',
]

export function formatDate(value: string, locale: string): string {
  if (locale === 'uz') {
    const date = parseCalendarDate(value)
    return `${date.getDate()}-${UZ_MONTHS[date.getMonth()]}, ${date.getFullYear()}`
  }
  return new Intl.DateTimeFormat(toTag(locale), {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(parseCalendarDate(value))
}

export function formatMonth(value: string, locale: string): string {
  if (locale === 'uz') {
    const date = parseCalendarDate(value)
    return `${UZ_MONTHS[date.getMonth()]} ${date.getFullYear()}`
  }
  return new Intl.DateTimeFormat(toTag(locale), { year: 'numeric', month: 'short' }).format(
    parseCalendarDate(value),
  )
}

/** "Jan 2022 — Present" style range; `presentLabel` is used when `end` is missing. */
export function formatPeriod(
  start: string,
  end: string | undefined,
  locale: string,
  presentLabel: string,
): string {
  return `${formatMonth(start, locale)} — ${end ? formatMonth(end, locale) : presentLabel}`
}

export function formatTime(date: Date, timeZone: string, locale: string): string {
  return new Intl.DateTimeFormat(toTag(locale), {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone,
  }).format(date)
}
