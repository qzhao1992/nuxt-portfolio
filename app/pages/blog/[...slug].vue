<script setup lang="ts">
const route = useRoute()

// 1. Fetch the specific blog post by path
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

// 2. SEO
useHead({
  title: page.value?.title || 'Blog Post',
  meta: [{ name: 'description', content: page.value?.description || 'Article details' }],
})
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <div class="max-w-3xl mx-auto px-6 py-12 lg:py-20">
      <nav class="mb-8">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <Icon name="heroicons:arrow-left" class="w-4 h-4" />
          Back to Blog
        </NuxtLink>
      </nav>

      <article v-if="page" class="animate-fade-in">
        <header class="mb-10 pb-10 border-b border-gray-100 dark:border-gray-800">
          <time class="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-4 block">
            {{
              new Date(page.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </time>

          <h1
            class="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight"
          >
            {{ page.title }}
          </h1>

          <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ page.description }}
          </p>

          <div v-if="page.tags" class="flex flex-wrap gap-2 mt-6">
            <NuxtLink
              v-for="tag in page.tags"
              :key="tag"
              :to="`/blog/tags/${tag}`"
              class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 transition-colors"
            >
              <Icon name="heroicons:tag" class="w-3 h-3 mr-1 opacity-50" />
              {{ tag }}
            </NuxtLink>
          </div>
        </header>

        <div
          class="prose prose-zinc prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg"
        >
          <ContentRenderer :value="page" />
        </div>
      </article>

      <div
        v-else
        class="py-20 text-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl"
      >
        <h1 class="text-4xl font-bold text-gray-300 dark:text-gray-700 mb-4">404</h1>
        <p class="text-gray-500 dark:text-gray-400">Article not found.</p>
        <NuxtLink to="/blog" class="text-indigo-600 hover:underline mt-4 inline-block"
          >Return to Blog</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Simple animation to make the page load feel smoother */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
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
