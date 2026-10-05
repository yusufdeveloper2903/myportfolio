export function useCommandPalette() {
  const isOpen = useState('command-palette-open', () => false)

  return {
    isOpen: readonly(isOpen),
    open: () => (isOpen.value = true),
    close: () => (isOpen.value = false),
    toggle: () => (isOpen.value = !isOpen.value),
  }
}
