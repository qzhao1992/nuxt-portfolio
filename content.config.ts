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
    })
  },
})




// content/
// ├── blog/
// │   └── hello.md
// └── projects/
//     └── my-app.md

// import { defineContentConfig, defineCollection, z } from '@nuxt/content'

// export default defineContentConfig({
//   collections: {
//     // Collection 1: The Blog
//     blog: defineCollection({
//       type: 'page',
//       source: 'blog/*.md', // Only look in the blog folder
//       schema: z.object({
//         tags: z.array(z.string()),
//         date: z.date()
//       })
//     }),

//     // Collection 2: The Projects
//     projects: defineCollection({
//       type: 'page',
//       source: 'projects/*.md', // Only look in the projects folder
//       schema: z.object({
//         clientUrl: z.string(), // Projects have URLS, blogs don't
//         year: z.number()
//       })
//     })
//   }
// })