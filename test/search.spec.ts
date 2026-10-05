import { describe, expect, it } from 'vitest'

import { matchesQuery, normalize } from '../app/utils/search'

describe('normalize', () => {
  it('lower-cases and strips apostrophes and diacritics', () => {
    expect(normalize('O‘zbekcha')).toBe('ozbekcha')
    expect(normalize('Pokémon')).toBe('pokemon')
  })
})

describe('matchesQuery', () => {
  it('matches everything for an empty query', () => {
    expect(matchesQuery('   ', ['Work'])).toBe(true)
  })

  it('requires every term to match across fields', () => {
    expect(matchesQuery('nuxt type', ['Portfolio', 'Nuxt 4', 'TypeScript'])).toBe(true)
    expect(matchesQuery('nuxt react', ['Portfolio', 'Nuxt 4'])).toBe(false)
  })
})
