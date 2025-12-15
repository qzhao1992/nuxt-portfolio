<script setup lang="ts">
// 1. Fetch Blog Posts
const { data: posts } = await useAsyncData('home-posts', () => {
  return queryCollection('blog').order('date', 'DESC').limit(3).all()
})

// 2. FETCH REAL PROJECTS (This fixes the empty projects issue)
// We limit to 3 for the homepage
const { data: projects } = await useFetch('/api/projects')

useHead({
  title: 'Qing Zhao - Full Stack & Cross-Platform Engineer',
  meta: [
    {
      name: 'description',
      content: 'Senior Software Engineer specializing in Flutter, React, .NET, and Nuxt.',
    },
  ],
})
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden"
  >
    <section class="max-w-7xl mx-auto px-6 py-20 lg:py-28">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1">
          <p class="text-indigo-600 dark:text-indigo-400 font-bold tracking-wide uppercase mb-4">
            Senior Software Engineer
          </p>
          <h1
            class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Engineering
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
              >Mobile</span
            >,
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400"
              >Web</span
            >, &
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500"
              >Backend</span
            >
            solutions.
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            I'm Qing Zhao. A polyglot developer capable of building pixel-perfect Flutter apps,
            robust .NET APIs, and SEO-optimized Nuxt frontends.
          </p>

          <div class="flex flex-wrap gap-4">
            <NuxtLink
              to="#featured-work"
              class="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-lg hover:opacity-90 transition"
            >
              View My Work
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="px-8 py-4 border border-gray-300 dark:border-gray-700 font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              My Story
            </NuxtLink>
          </div>
        </div>

        <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-teal-500 rounded-2xl rotate-6 opacity-20 blur-2xl"
            ></div>
            <img
              src="~/assets/images/pic.png"
              alt="Qing Zhao"
              class="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 rotate-3 hover:rotate-0 transition duration-500 ease-in-out z-10"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
      <div class="max-w-7xl mx-auto px-6 py-12">
        <p class="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Technical Arsenal
        </p>

        <div class="flex flex-wrap justify-center gap-8 md:gap-12 opacity-90">
          <div class="group flex flex-col items-center gap-2">
            <Icon
              name="logos:flutter"
              class="h-10 w-10 md:h-12 md:w-12 filter grayscale group-hover:grayscale-0 transition"
            />
            <span class="text-xs font-mono opacity-0 group-hover:opacity-100 transition"
              >Flutter</span
            >
          </div>
          <div class="group flex flex-col items-center gap-2">
            <Icon
              name="logos:react"
              class="h-10 w-10 md:h-12 md:w-12 filter grayscale group-hover:grayscale-0 transition"
            />
            <span class="text-xs font-mono opacity-0 group-hover:opacity-100 transition"
              >R.Native</span
            >
          </div>

          <div class="group flex flex-col items-center gap-2">
            <Icon
              name="logos:nuxt-icon"
              class="h-10 w-10 md:h-12 md:w-12 filter grayscale group-hover:grayscale-0 transition"
            />
            <span class="text-xs font-mono opacity-0 group-hover:opacity-100 transition">Nuxt</span>
          </div>
          <div class="group flex flex-col items-center gap-2">
            <Icon
              name="logos:angular-icon"
              class="h-10 w-10 md:h-12 md:w-12 filter grayscale group-hover:grayscale-0 transition"
            />
            <span class="text-xs font-mono opacity-0 group-hover:opacity-100 transition"
              >Angular</span
            >
          </div>

          <div class="group flex flex-col items-center gap-2">
            <Icon
              name="logos:c-sharp"
              class="h-10 w-10 md:h-12 md:w-12 filter grayscale group-hover:grayscale-0 transition"
            />
            <span class="text-xs font-mono opacity-0 group-hover:opacity-100 transition">C#</span>
          </div>
          <div class="group flex flex-col items-center gap-2">
            <Icon
              name="logos:dotnet"
              class="h-10 w-10 md:h-12 md:w-12 filter grayscale group-hover:grayscale-0 transition"
            />
            <span class="text-xs font-mono opacity-0 group-hover:opacity-100 transition">.NET</span>
          </div>
          <div class="group flex flex-col items-center gap-2">
            <Icon
              name="logos:nodejs-icon"
              class="h-10 w-10 md:h-12 md:w-12 filter grayscale group-hover:grayscale-0 transition"
            />
            <span class="text-xs font-mono opacity-0 group-hover:opacity-100 transition">Node</span>
          </div>
        </div>
      </div>
    </section>

    <section id="featured-work" class="max-w-7xl mx-auto px-6 py-24">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 class="text-3xl font-bold mb-2">Featured Work</h2>
          <p class="text-gray-500 dark:text-gray-400">
            A mix of cross-platform apps and full-stack web solutions.
          </p>
        </div>
        <NuxtLink
          to="/projects"
          class="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
        >
          View all projects &rarr;
        </NuxtLink>
      </div>

      <div v-if="projects" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects.slice(0, 3)"
          :key="project.id"
          class="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition flex flex-col h-full"
        >
          <div class="flex justify-between items-start mb-4">
            <div class="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-500">
              <Icon name="ion:code-slash" class="w-6 h-6" />
            </div>
            <span class="text-xs font-mono text-gray-500">GitHub</span>
          </div>

          <h3 class="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
            <a :href="project.url" target="_blank">{{ project.name }}</a>
          </h3>

          <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
            {{ project.description || 'No description available.' }}
          </p>

          <div
            class="flex items-center gap-4 text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800"
          >
            <span class="flex items-center gap-1">
              <Icon name="heroicons:star" class="w-4 h-4 text-yellow-500" />
              {{ project.stargazers.totalCount }}
            </span>
            <span class="flex items-center gap-1">
              <Icon name="octicon:git-branch-16" class="w-4 h-4" />
              {{ project.forks.totalCount }}
            </span>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12 text-gray-500">Loading projects...</div>
    </section>

    <section class="max-w-4xl mx-auto px-6 py-24 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-8">Engineered with Discipline & Heart</h2>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
        My code reflects my life: grounded in the discipline of martial arts and the empathy of
        community service.
      </p>

      <div class="grid md:grid-cols-2 gap-8 text-left">
        <div
          class="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800"
        >
          <div
            class="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg text-indigo-600 inline-block mb-4"
          >
            <Icon name="ph:martial-arts-fill" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Persistence</h3>
          <p class="text-gray-600 dark:text-gray-400">
            Black belt discipline applied to code. I don't just fix bugs; I master the system.
          </p>
        </div>

        <div
          class="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800"
        >
          <div
            class="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg text-teal-600 inline-block mb-4"
          >
            <Icon name="ph:heart-fill" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Empathy</h3>
          <p class="text-gray-600 dark:text-gray-400">
            Understanding the human on the other side of the screen is the most important part of
            engineering.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 dark:bg-gray-900/30 border-t border-gray-100 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-6 py-24">
        <div class="flex justify-between items-end mb-12">
          <h2 class="text-3xl font-bold">Latest Writings</h2>
          <NuxtLink
            to="/blog"
            class="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
          >
            Read blog &rarr;
          </NuxtLink>
        </div>

        <div v-if="posts && posts.length" class="grid md:grid-cols-3 gap-8">
          <NuxtLink v-for="post in posts" :key="post.path" :to="post.path" class="group block">
            <article
              class="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition h-full"
            >
              <time class="text-xs text-indigo-500 font-semibold mb-3 block">
                {{ new Date(post.date).toLocaleDateString() }}
              </time>
              <h3
                class="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2"
              >
                {{ post.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                {{ post.description }}
              </p>
            </article>
          </NuxtLink>
        </div>

        <div v-else class="text-center py-12 text-gray-500">
          <p>No blog posts found yet.</p>
        </div>
      </div>
    </section>
  </div>
</template>
