import { ReactNode } from 'react'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import { sportsStatsTheme } from '../theme'

export default function CustomChakraProvider({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={sportsStatsTheme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
