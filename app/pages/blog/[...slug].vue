<script setup>
const route = useRoute()

// 1. Fetch the data using the collection name 'content' defined in your config
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
</script>

<template>
  <p class="text-sm text-gray-500 mb-4">Current Slug: {{ route.params.slug }}</p>

  <ContentRenderer :value="page" class="prose" />
  <div class="my-8">
    <a
      v-for="tag in page.tags"
      :key="tag"
      :href="`/blog/tags/${tag}`"
      class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase last:mr-0 mr-4"
    >
      <Icon name="pajamas:label" size="1.5rem" class="text-gray-100 mr-2" /> {{ tag }}
    </a>
  </div>

  <!-- <div v-else>
      <h1 class="text-2xl font-bold text-red-600">Page not found</h1>
      <p>Could not find a file for path: {{ route.path }}</p>
    </div> -->
</template>
