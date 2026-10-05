/** Lower-cases and strips diacritics so "o‘zbek" matches "ozbek". */
export function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[‘’'`]/g, '')
}

/** True when every whitespace-separated term of `query` appears in one of `fields`. */
export function matchesQuery(query: string, fields: readonly string[]): boolean {
  const terms = normalize(query).split(/\s+/).filter(Boolean)
  if (!terms.length) return true
  const haystack = normalize(fields.join(' '))
  return terms.every((term) => haystack.includes(term))
}
