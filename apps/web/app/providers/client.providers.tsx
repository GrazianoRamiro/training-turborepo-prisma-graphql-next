'use client'

import { ReactNode } from 'react'

import { ApolloProvider } from '@apollo/client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import { apolloClient } from '../graphql/apollo.client'

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </ApolloProvider>
  )
}
