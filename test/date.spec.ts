import { describe, expect, it } from 'vitest'

import { formatDate, formatPeriod, formatTime, parseCalendarDate } from '../app/utils/date'

describe('parseCalendarDate', () => {
  it('parses year-month as the first day of the month in local time', () => {
    const date = parseCalendarDate('2024-03')
    expect([date.getFullYear(), date.getMonth(), date.getDate()]).toEqual([2024, 2, 1])
  })
})

describe('formatPeriod', () => {
  it('uses the present label for open-ended ranges', () => {
    expect(formatPeriod('2024-01', undefined, 'en', 'Present')).toBe('Jan 2024 — Present')
  })

  it('formats closed ranges', () => {
    expect(formatPeriod('2021-06', '2023-12', 'en', 'Present')).toBe('Jun 2021 — Dec 2023')
  })
})

describe('Uzbek formatting', () => {
  it('uses Uzbek month names instead of ICU placeholders', () => {
    expect(formatDate('2021-06-05', 'uz')).toBe('5-iyun, 2021')
    expect(formatPeriod('2024-01', undefined, 'uz', 'Hozirgacha')).toBe('yan 2024 — Hozirgacha')
  })
})

describe('formatTime', () => {
  it('formats a time in the requested time zone', () => {
    const noonUtc = new Date(Date.UTC(2026, 0, 1, 12, 0))
    expect(formatTime(noonUtc, 'Asia/Tashkent', 'en')).toBe('17:00')
  })
})
