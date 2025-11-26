// nuxt.config.ts
export default defineNuxtConfig({
  // This enables the Nuxt 4 directory structure
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],

  // This fixes the hydration error for the Headless UI menu
  build: {
    transpile: ['@headlessui/vue']
  }
})