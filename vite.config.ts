import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Design tokens and mixins are available in every <style lang="scss"> block.
        additionalData: `@use "@/assets/styles/abstracts" as *;\n`,
      },
    },
  },
})
