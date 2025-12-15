<script setup lang="ts">
// 1. FETCH FROM YOUR SERVER (Not GitHub directly)
// This calls the file server/api/projects.get.ts
const { data: projects, status, error } = await useFetch('/api/projects')

useHead({
  title: 'Projects | Qing Zhao',
  meta: [{ name: 'description', content: 'Open source contributions and personal projects.' }],
})
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      <header class="mb-16 max-w-2xl">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Selected <span class="text-indigo-600 dark:text-indigo-400">Projects</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          A collection of my work in Mobile, Web, and Backend engineering. Fetched dynamically from
          GitHub.
        </p>
      </header>

      <div v-if="status === 'pending'" class="py-20 text-center">
        <Icon name="svg-spinners:180-ring" class="w-10 h-10 text-indigo-500 mb-4" />
        <p class="text-gray-500">Loading repositories...</p>
      </div>

      <div
        v-else-if="status === 'error'"
        class="py-10 text-center bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-800"
      >
        <p class="text-red-600 dark:text-red-400 font-bold mb-2">Unable to load projects</p>
        <p class="text-sm text-gray-500">{{ error?.message }}</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="project in projects"
          :key="project.id"
          class="group bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 hover:shadow-xl hover:border-indigo-100 dark:hover:border-indigo-900 transition duration-300 flex flex-col h-full"
        >
          <div class="flex justify-between items-start mb-6">
            <div
              class="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition duration-300"
            >
              <Icon name="ion:code-slash" class="w-6 h-6" />
            </div>
            <a
              :href="project.url"
              target="_blank"
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
            >
              <Icon name="heroicons:arrow-top-right-on-square" class="w-5 h-5" />
            </a>
          </div>

          <h3
            class="text-xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
          >
            {{ project.name }}
          </h3>

          <p class="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed flex-grow">
            {{ project.description || 'No description available.' }}
          </p>

          <div
            class="flex items-center gap-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400"
          >
            <div class="flex items-center gap-1.5">
              <Icon name="heroicons:star-solid" class="w-4 h-4 text-yellow-400" />
              <span>{{ project.stargazers.totalCount }}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <Icon name="octicon:git-branch-16" class="w-4 h-4" />
              <span>{{ project.forks.totalCount }}</span>
            </div>
            <div v-if="project.watchers" class="flex items-center gap-1.5">
              <Icon name="heroicons:eye" class="w-4 h-4" />
              <span>{{ project.watchers.totalCount }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
