// nuxt.config.ts
export default defineNuxtConfig({
  // This enables the Nuxt 4 directory structure
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/content',  '@nuxtjs/apollo'],

  // This fixes the hydration error for the Headless UI menu
  build: {
    transpile: ['@headlessui/vue']
  },

  content: {
    build: {
      markdown: {
        highlight: {
          // The theme you want to use (e.g., 'nord', 'dracula', 'github-dark')
          theme: 'nord',
          
          // Languages you want to highlight
          langs: ['ts', 'js', 'css', 'java', 'json', 'bash', 'vue']
        }
      }
    }
  },

  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN
  },
  
  // apollo: {
  //   clients: {
  //     default: {
  //       httpEndpoint: process.env.GQL_HOST || 'https://api.github.com/graphql',
  //       tokenStorage: 'cookie',
  //       authHeader: 'Authorization',
  //       authType: 'Bearer',
  //       tokenName: 'github_token',

  //       // --- ADD THESE LINES TO FIX THE WARNING ---
  //       connectToDevTools: false,    // Disable the deprecated method
  //       devtools: { enabled: true }  // Enable the new method
  //       // ------------------------------------------
  //     } as any
  //   },
  // },
  apollo: {
    clients: {
      default: {
        tokenName: 'github_token',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    }
  }
})