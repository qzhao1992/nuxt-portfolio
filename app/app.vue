<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader />
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

// Run this check immediately
if (process.server) {
  console.log('🖥️ SERVER SIDE CHECK:')
  console.log('   Token exists?', !!config.githubToken)
  console.log('   Token length:', config.githubToken ? config.githubToken.length : 0)
} else {
  console.log('🌐 BROWSER SIDE CHECK:')
  console.log('   Token exists?', !!config.githubToken)
}
</script>
