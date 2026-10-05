/** Copies text and exposes a `copied` flag that resets after a short delay. */
export function useClipboardCopy(resetAfter = 2000) {
  const { copy, copied, isSupported } = useClipboard({ copiedDuring: resetAfter, legacy: true })
  return { copy, copied, isSupported }
}
