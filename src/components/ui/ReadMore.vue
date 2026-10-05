<script setup lang="ts">
import { ref, useId } from 'vue'

defineProps<{
  text: string
  more?: string
}>()

const expanded = ref(false)
const moreId = useId()
</script>

<template>
  <p class="read-more">
    {{ text }}
    <template v-if="more">
      <span v-show="expanded" :id="moreId">{{ more }}</span>
      <button
        type="button"
        class="read-more__toggle"
        :aria-expanded="expanded"
        :aria-controls="moreId"
        @click="expanded = !expanded"
      >
        {{ expanded ? 'Hide' : 'Read more…' }}
      </button>
    </template>
  </p>
</template>

<style scoped lang="scss">
.read-more__toggle {
  margin-left: 4px;
  padding: 0;
  border: none;
  background: none;
  color: #beb9b9;
  cursor: pointer;
  @include focus-ring;

  &:hover {
    text-decoration: underline;
  }
}
</style>
