<script setup>
const config = useRuntimeConfig()

const query = gql`
  query GetProjects {
    viewer {
      login
      repositories(first: 6, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`

// ⚠️ We manually inject the header here
const { data, error } = await useAsyncQuery(query, {
  context: {
    headers: {
      Authorization: `Bearer ${config.githubToken}`,
    },
  },
})

// Debugging
console.error('config.githubToken', config.githubToken)
if (error.value) console.error('Force Auth Error:', error.value)
</script>
