// server/api/projects.get.ts
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
  
    // 1. Security Check: Ensure token exists
    if (!config.githubToken) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Missing GITHUB_TOKEN in runtimeConfig'
      })
    }
  
    // 2. The GraphQL Query
    // We fetch your top 3 latest repositories
    const query = `
      query {
        viewer {
          repositories(first: 3, orderBy: { field: CREATED_AT, direction: DESC }) {
            nodes {
              id
              name
              description
              url
              stargazers {
                totalCount
              }
              forks {
                totalCount
              }
            }
          }
        }
      }
    `
  
    try {
      // 3. Send Request to GitHub (Server-to-Server)
      const response: any = await $fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${config.githubToken}`,
          'Content-Type': 'application/json',
        },
        body: { query }
      })
  
      // 4. Handle GitHub Errors (e.g., Bad Token)
      if (response.errors) {
        console.error('GitHub API Error:', response.errors)
        throw createError({
          statusCode: 500,
          statusMessage: response.errors[0].message
        })
      }
  
      // 5. Return only the clean list of projects
      return response.data.viewer.repositories.nodes
  
    } catch (err: any) {
      console.error('Server Fetch Error:', err)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch projects from GitHub'
      })
    }
  })