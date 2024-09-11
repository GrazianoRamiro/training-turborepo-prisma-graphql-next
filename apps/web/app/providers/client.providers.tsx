'use client'

import { ReactNode } from 'react'

import { ApolloProvider } from '@apollo/client'
import { UIProvider } from '@repo/ui'

import { apolloClient } from '../graphql/apollo.client'

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={apolloClient}>
      <UIProvider>{children}</UIProvider>
    </ApolloProvider>
  )
}
