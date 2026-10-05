<script setup lang="ts">
import type { ProjectsEnCollectionItem } from '@nuxt/content'

import { site } from '~/data/site'

type Group = 'navigation' | 'projects' | 'actions' | 'language'

interface Command {
  id: string
  group: Group
  label: string
  icon: string
  keywords?: string[]
  run: () => void | Promise<void>
}

const GROUP_ORDER: Group[] = ['navigation', 'projects', 'actions', 'language']

const props = defineProps<{ projects: ProjectsEnCollectionItem[] }>()

const { isOpen, close } = useCommandPalette()
const { t, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const colorMode = useColorMode()
const { copy } = useClipboardCopy()

const query = ref('')
const activeIndex = ref(0)
const inputRef = useTemplateRef<HTMLInputElement>('input')
const listRef = useTemplateRef<HTMLElement>('list')
let previouslyFocused: HTMLElement | null = null

const go = async (path: string) => {
  await navigateTo(localePath(path))
}

const commands = computed<Command[]>(() => [
  {
    id: 'home',
    group: 'navigation',
    label: t('nav.home'),
    icon: 'lucide:house',
    run: () => go('/'),
  },
  {
    id: 'work',
    group: 'navigation',
    label: t('nav.work'),
    icon: 'lucide:layers',
    run: () => go('/work'),
  },
  {
    id: 'experience',
    group: 'navigation',
    label: t('nav.experience'),
    icon: 'lucide:briefcase',
    run: () => go('/#experience'),
  },
  {
    id: 'contact',
    group: 'navigation',
    label: t('nav.contact'),
    icon: 'lucide:mail',
    run: () => go('/#contact'),
  },
  ...props.projects.map<Command>((project) => ({
    id: `project:${project.path}`,
    group: 'projects',
    label: project.title,
    icon: 'lucide:folder-git-2',
    keywords: project.stack,
    run: () => go(project.path),
  })),
  {
    id: 'theme',
    group: 'actions',
    label: t('palette.actions.toggleTheme'),
    icon: 'lucide:sun-moon',
    run: () => {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    },
  },
  {
    id: 'copy-email',
    group: 'actions',
    label: t('palette.actions.copyEmail'),
    icon: 'lucide:copy',
    keywords: [site.email],
    run: () => copy(site.email),
  },
  {
    id: 'cv',
    group: 'actions',
    label: t('palette.actions.downloadCv'),
    icon: 'lucide:file-down',
    run: () => void window.open(site.cvUrl, '_blank', 'noopener'),
  },
  ...site.socials.map<Command>((social) => ({
    id: `social:${social.name}`,
    group: 'actions',
    label: social.name,
    icon: social.icon,
    run: () => void window.open(social.url, '_blank', 'noopener'),
  })),
  ...locales.value.map<Command>((item) => ({
    id: `locale:${item.code}`,
    group: 'language',
    label: item.name ?? item.code,
    icon: 'lucide:languages',
    keywords: [item.code],
    run: async () => {
      await navigateTo(switchLocalePath(item.code))
    },
  })),
])

const results = computed(() =>
  commands.value.filter((command) =>
    matchesQuery(query.value, [command.label, ...(command.keywords ?? [])]),
  ),
)

const sections = computed(() =>
  GROUP_ORDER.map((group) => ({
    group,
    items: results.value
      .map((command, index) => ({ command, index }))
      .filter(({ command }) => command.group === group),
  })).filter((section) => section.items.length > 0),
)

const optionId = (index: number) => `command-option-${index}`

const scrollLocked = useScrollLock(import.meta.client ? document.documentElement : null)

watch(query, () => (activeIndex.value = 0))

watch(isOpen, async (open) => {
  scrollLocked.value = open
  if (open) {
    previouslyFocused = document.activeElement as HTMLElement | null
    query.value = ''
    activeIndex.value = 0
    await nextTick()
    inputRef.value?.focus()
  } else {
    previouslyFocused?.focus()
  }
})

function move(step: number) {
  const count = results.value.length
  if (!count) return
  activeIndex.value = (activeIndex.value + step + count) % count
  nextTick(() =>
    listRef.value
      ?.querySelector(`#${optionId(activeIndex.value)}`)
      ?.scrollIntoView({ block: 'nearest' }),
  )
}

async function execute(command: Command | undefined) {
  if (!command) return
  close()
  await command.run()
}

function onKeydown(event: KeyboardEvent) {
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      move(1)
      break
    case 'ArrowUp':
      event.preventDefault()
      move(-1)
      break
    case 'Enter':
      event.preventDefault()
      execute(results.value[activeIndex.value])
      break
    case 'Escape':
      event.preventDefault()
      close()
      break
    case 'Tab':
      // The input is the only focusable element; keep focus inside the dialog.
      event.preventDefault()
      break
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 pt-[12vh] backdrop-blur-sm"
        @mousedown.self="close"
      >
        <div
          role="dialog"
          aria-modal="true"
          :aria-label="$t('palette.label')"
          class="card w-full max-w-xl overflow-hidden shadow-2xl"
          @keydown="onKeydown"
        >
          <div class="flex items-center gap-3 border-b border-line px-4">
            <Icon name="lucide:search" class="size-4 shrink-0 text-subtle" />
            <input
              ref="input"
              v-model="query"
              type="text"
              role="combobox"
              aria-expanded="true"
              aria-controls="command-list"
              aria-autocomplete="list"
              :aria-activedescendant="results.length ? optionId(activeIndex) : undefined"
              :placeholder="$t('palette.placeholder')"
              class="h-14 w-full bg-transparent text-base outline-none placeholder:text-subtle"
              autocomplete="off"
              spellcheck="false"
            />
            <kbd class="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-subtle">
              ESC
            </kbd>
          </div>

          <div
            id="command-list"
            ref="list"
            role="listbox"
            :aria-label="$t('palette.label')"
            class="max-h-[min(60vh,420px)] overflow-y-auto p-2"
          >
            <p v-if="!results.length" class="px-3 py-10 text-center text-sm text-muted">
              {{ $t('palette.empty') }}
            </p>
            <div v-for="section in sections" :key="section.group" role="group" class="mb-1">
              <p class="eyebrow px-3 pt-3 pb-1.5" aria-hidden="true">
                {{ $t(`palette.groups.${section.group}`) }}
              </p>
              <div
                v-for="{ command, index } in section.items"
                :id="optionId(index)"
                :key="command.id"
                role="option"
                :aria-selected="index === activeIndex"
                class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm"
                :class="index === activeIndex ? 'bg-surface-hover text-fg' : 'text-muted'"
                @mousemove="activeIndex = index"
                @click="execute(command)"
              >
                <Icon :name="command.icon" class="size-4 shrink-0" />
                <span class="truncate">{{ command.label }}</span>
              </div>
            </div>
          </div>

          <div
            class="flex items-center gap-4 border-t border-line px-4 py-2.5 text-xs text-subtle"
            aria-hidden="true"
          >
            <span><kbd class="font-mono">↑↓</kbd> {{ $t('palette.hints.navigate') }}</span>
            <span><kbd class="font-mono">↵</kbd> {{ $t('palette.hints.select') }}</span>
            <span><kbd class="font-mono">esc</kbd> {{ $t('palette.hints.close') }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
