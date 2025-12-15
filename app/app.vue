<script setup lang="ts">
const config = useRuntimeConfig()

// Keep your debug logic here so it runs globally on app init
if (process.server) {
  console.log('🖥️ SERVER SIDE CHECK:')
  console.log('   Token exists?', !!config.githubToken)
  console.log('   Token length:', config.githubToken ? config.githubToken.length : 0)
} else {
  console.log('🌐 BROWSER SIDE CHECK:')
  console.log('   Token exists?', !!config.githubToken)
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
