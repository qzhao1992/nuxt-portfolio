<script setup lang="ts">
// Fetch the data
const { data: page } = await useAsyncData('uses-page', () => {
  return queryCollection('pages').path('/uses').first()
})

// SEO
useHead({
  title: page.value?.title || 'Uses',
})

// Helper to format the date nice and clean
const formatDate = (dateString: string) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
}
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
    <div class="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <nav class="mb-12 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <NuxtLink
          to="/"
          class="flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Icon name="heroicons:arrow-left" class="w-4 h-4" />
          Back to Home
        </NuxtLink>
        <span>/</span>
        <span class="text-gray-900 dark:text-white font-medium">Uses</span>
      </nav>

      <article v-if="page" class="animate-fade-in">
        <header class="mb-16 border-b border-gray-100 dark:border-gray-800 pb-10">
          <h1
            class="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            {{ page.title }}
          </h1>

          <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            {{ page.description }}
          </p>

          <div
            v-if="page.date"
            class="mt-6 flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500"
          >
            <Icon name="heroicons:calendar" class="w-4 h-4" />
            <span>Last updated: {{ formatDate(page.date) }}</span>
          </div>
        </header>

        <div
          class="prose prose-zinc prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:underline prose-li:marker:text-gray-300 dark:prose-li:marker:text-gray-600"
        >
          <ContentRenderer :value="page" />
        </div>
      </article>

      <div v-else class="text-center py-32">
        <div
          class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 dark:bg-red-900/20 mb-6"
        >
          <Icon name="heroicons:exclamation-triangle" class="w-8 h-8 text-red-500" />
        </div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Content Not Found</h1>
        <p class="text-gray-500 dark:text-gray-400">
          We couldn't locate the file <code>content/uses.md</code>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Simple fade-in animation for smoother page loads */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
