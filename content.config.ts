import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      // Define the schema here
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        cover: z.string(),
        tags: z.array(z.string()),
      })
    }),
    // 2. ADD THIS: A collection for general pages (like uses.md)
    pages: defineCollection({
      type: 'page',
      source: '*.md', // Matches files in the root of /content
      schema: z.object({
        title: z.string(),
        description: z.string()
      })
    })
  },
})

