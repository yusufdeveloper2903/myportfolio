<script setup lang="ts">
defineProps<{
  item: { src: string; alt: string; caption?: string; portrait?: boolean }
}>()

defineEmits<{ open: [] }>()
</script>

<template>
  <figure>
    <button
      type="button"
      class="group block w-full overflow-hidden rounded-xl border border-line bg-surface"
      :aria-label="item.alt"
      @click="$emit('open')"
    >
      <img
        :src="item.src"
        :alt="item.alt"
        loading="lazy"
        class="w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        :class="item.portrait ? 'aspect-[3/4]' : 'aspect-[16/10]'"
      />
    </button>
    <figcaption v-if="item.caption" class="mt-2 text-sm text-muted">{{ item.caption }}</figcaption>
  </figure>
</template>
