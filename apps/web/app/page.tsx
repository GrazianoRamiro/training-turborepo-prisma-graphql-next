import { Box } from '@repo/ui'

import { Header } from './shared/header/Header.component'

export default function Home() {
  return (
    <Box
      width="60%"
      margin="0 auto"
      textAlign="center"
    >
      <Header />
    </Box>
  )
}
