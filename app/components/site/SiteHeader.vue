<script setup lang="ts">
const { open: openPalette } = useCommandPalette()
const route = useRoute()
const { y } = useWindowScroll()

const isMenuOpen = ref(false)
const isScrolled = computed(() => y.value > 8)

const links = [
  { key: 'nav.work', to: '/work' },
  { key: 'nav.experience', to: '/#experience' },
  { key: 'nav.blog', to: '/blog' },
  { key: 'nav.contact', to: '/#contact' },
] as const

watch(
  () => route.fullPath,
  () => (isMenuOpen.value = false),
)
onKeyStroke('Escape', () => (isMenuOpen.value = false))
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b transition-colors duration-300"
    :class="
      isScrolled || isMenuOpen
        ? 'border-line bg-bg/80 backdrop-blur-xl'
        : 'border-transparent bg-transparent'
    "
  >
    <div class="container-page flex h-16 items-center justify-between gap-4">
      <SiteLogo />

      <nav :aria-label="$t('nav.primary')" class="hidden md:block">
        <ul class="flex items-center gap-1">
          <li v-for="link in links" :key="link.to">
            <NuxtLinkLocale
              :to="link.to"
              class="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
              active-class="text-fg"
            >
              {{ $t(link.key) }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-1.5">
        <button
          type="button"
          class="hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:text-fg sm:flex"
          :aria-label="$t('palette.open')"
          @click="openPalette"
        >
          <Icon name="lucide:search" class="size-3.5" />
          <kbd class="font-mono">⌘K</kbd>
        </button>
        <LocaleSwitcher class="hidden sm:flex" />
        <ThemeToggle />
        <button
          type="button"
          class="grid size-9 place-items-center rounded-full text-muted hover:bg-surface-hover hover:text-fg md:hidden"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          :aria-label="isMenuOpen ? $t('nav.closeMenu') : $t('nav.openMenu')"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" class="size-5" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-show="isMenuOpen"
        id="mobile-menu"
        :aria-label="$t('nav.primary')"
        class="border-t border-line md:hidden"
      >
        <ul class="container-page flex flex-col py-4">
          <li v-for="link in links" :key="link.to">
            <NuxtLinkLocale
              :to="link.to"
              class="block py-3 text-2xl font-medium tracking-tight"
              @click="isMenuOpen = false"
            >
              {{ $t(link.key) }}
            </NuxtLinkLocale>
          </li>
          <li class="flex items-center justify-between pt-4">
            <LocaleSwitcher />
            <button type="button" class="btn-ghost" @click="openPalette">
              <Icon name="lucide:search" class="size-4" />
              {{ $t('palette.label') }}
            </button>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
