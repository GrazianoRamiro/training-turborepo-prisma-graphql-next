import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

export let apolloClient: ApolloClient<NormalizedCacheObject>

if (process.env.API_GRAPHQL_BASE_URL) {
  apolloClient = new ApolloClient({
    uri: process.env.API_GRAPHQL_BASE_URL || 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  })
} else {
  apolloClient = {
    query: () => Promise.resolve({ data: {} }),
  } as never
}
