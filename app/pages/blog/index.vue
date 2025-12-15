<script setup lang="ts">
// 1. Fetch all blog posts, sorted by newest first
const { data: posts } = await useAsyncData('blog-page', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

// 2. SEO Meta Tags
useHead({
  title: 'Blog | Qing Zhao',
  meta: [
    {
      name: 'description',
      content: 'Technical articles, tutorials, and thoughts on software engineering.',
    },
  ],
})
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      <header class="text-center max-w-3xl mx-auto mb-16">
        <p class="text-indigo-600 dark:text-indigo-400 font-bold tracking-wide uppercase mb-3">
          The Blog
        </p>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Writing &
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
            >Reflections</span
          >
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          I write about the technologies I'm working with, new tools that interest me, and the
          lessons I learn along the way.
        </p>

        <div class="flex items-center justify-center gap-4 text-sm font-medium">
          <a
            href="#"
            class="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition"
          >
            <Icon name="logos:twitter" class="w-4 h-4" />
            Connect on Twitter
          </a>
          <span class="text-gray-300 dark:text-gray-700">|</span>
          <a
            href="/rss.xml"
            class="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition"
          >
            <Icon name="heroicons:rss" class="w-4 h-4" />
            RSS Feed
          </a>
        </div>
      </header>

      <section v-if="posts && posts.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink v-for="post in posts" :key="post.path" :to="post.path" class="group block h-full">
          <article
            class="h-full bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 shadow-sm hover:shadow-xl hover:border-indigo-100 dark:hover:border-indigo-900 transition duration-300 flex flex-col"
          >
            <time class="text-xs font-bold text-indigo-500 mb-4 block uppercase tracking-wider">
              {{
                new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              }}
            </time>

            <h2
              class="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
            >
              {{ post.title }}
            </h2>

            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3 flex-grow">
              {{ post.description }}
            </p>

            <div
              class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:translate-x-1 transition-transform mt-auto"
            >
              Read article
              <Icon name="heroicons:arrow-right" class="w-4 h-4" />
            </div>
          </article>
        </NuxtLink>
      </section>

      <div
        v-else
        class="text-center py-20 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl"
      >
        <Icon name="heroicons:pencil-square" class="w-12 h-12 text-gray-300 mb-4 mx-auto" />
        <h3 class="text-lg font-medium text-gray-900 dark:text-white">No posts yet</h3>
        <p class="text-gray-500">Check back soon for new articles.</p>
      </div>
    </div>
  </div>
</template>
