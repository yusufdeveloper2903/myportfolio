<script setup lang="ts">
interface Shot {
  src: string
  alt: string
  caption?: string
  portrait?: boolean
}

const props = defineProps<{ items: Shot[] }>()

// Wide screenshots and tall shots (phones, photos) are laid out in separate grids so
// a single tall image never leaves a hole next to a wide one. Indices stay global for the lightbox.
const indexed = computed(() => props.items.map((item, index) => ({ item, index })))
const wide = computed(() => indexed.value.filter(({ item }) => !item.portrait))
const tall = computed(() => indexed.value.filter(({ item }) => item.portrait))

const dialog = useTemplateRef<HTMLDialogElement>('dialog')
const activeIndex = ref(0)
const active = computed(() => props.items[activeIndex.value])

function open(index: number) {
  activeIndex.value = index
  dialog.value?.showModal()
}

function step(delta: number) {
  const count = props.items.length
  activeIndex.value = (activeIndex.value + delta + count) % count
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowRight') step(1)
  if (event.key === 'ArrowLeft') step(-1)
}
</script>

<template>
  <section :aria-label="$t('work.gallery')">
    <ul v-if="wide.length" class="grid gap-4 sm:grid-cols-2">
      <li
        v-for="({ item, index }, position) in wide"
        :key="item.src"
        v-reveal
        :class="position === 0 && wide.length % 2 === 1 ? 'sm:col-span-2' : ''"
      >
        <GalleryShot :item="item" @open="open(index)" />
      </li>
    </ul>
    <ul v-if="tall.length" class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
      <li v-for="{ item, index } in tall" :key="item.src" v-reveal>
        <GalleryShot :item="item" @open="open(index)" />
      </li>
    </ul>

    <dialog
      ref="dialog"
      class="m-auto max-h-[92vh] w-[min(96vw,1400px)] bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      @keydown="onKeydown"
      @click.self="dialog?.close()"
    >
      <figure v-if="active" class="relative">
        <img
          :src="active.src"
          :alt="active.alt"
          class="max-h-[84vh] w-full rounded-xl object-contain"
        />
        <figcaption class="mt-3 flex items-center justify-between gap-4 text-sm text-white/80">
          <span>{{ active.caption ?? active.alt }}</span>
          <span class="font-mono text-white/50">{{ activeIndex + 1 }} / {{ items.length }}</span>
        </figcaption>
        <div class="absolute top-3 right-3 flex gap-2">
          <button
            v-if="items.length > 1"
            type="button"
            class="grid size-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
            aria-label="Previous"
            @click="step(-1)"
          >
            <Icon name="lucide:chevron-left" class="size-4" />
          </button>
          <button
            v-if="items.length > 1"
            type="button"
            class="grid size-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
            aria-label="Next"
            @click="step(1)"
          >
            <Icon name="lucide:chevron-right" class="size-4" />
          </button>
          <button
            type="button"
            class="grid size-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
            :aria-label="$t('work.close')"
            @click="dialog?.close()"
          >
            <Icon name="lucide:x" class="size-4" />
          </button>
        </div>
      </figure>
    </dialog>
  </section>
</template>
