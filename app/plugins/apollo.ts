// plugins/apollo.ts
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
  
    // This hook runs exactly when Apollo is preparing the request headers
    nuxtApp.hook('apollo:auth', ({ client, token }) => {
      // 'token' is a reactive reference that Apollo reads.
      // We overwrite it directly with the server-side key.
      config.githubToken
        token.value = config.githubToken
      
    })
  })