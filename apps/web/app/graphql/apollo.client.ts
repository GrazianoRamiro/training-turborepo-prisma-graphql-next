import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: process.env.API_GRAPHQL_BASE_URL || 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})
