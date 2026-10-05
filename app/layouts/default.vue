<script setup lang="ts">
const { toggle } = useCommandPalette()

// Fetched during prerender so it ships in the page payload; the palette (client-only)
// then never needs to load the content database in the browser.
const { data: projects } = await useProjects()

// ⌘K / Ctrl+K opens the command palette from anywhere.
useEventListener('keydown', (event: KeyboardEvent) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    toggle()
  }
})
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <a
      href="#main"
      class="sr-only z-50 rounded-full bg-fg px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
    >
      {{ $t('nav.skipToContent') }}
    </a>
    <SiteHeader />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <SiteFooter />
    <ClientOnly>
      <CommandPalette :projects="projects" />
    </ClientOnly>
  </div>
</template>
