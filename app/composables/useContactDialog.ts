export function useContactDialog() {
  const isOpen = useState('contact-dialog-open', () => false)
  return {
    isOpen,
    open: () => (isOpen.value = true),
    close: () => (isOpen.value = false),
  }
}
