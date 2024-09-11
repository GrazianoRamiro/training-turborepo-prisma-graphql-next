import { Box } from '@repo/ui'

import { Header } from './shared/Header.component'
import { HeaderAction } from './shared/HeaderAction.component'

export default function Home() {
  return (
    <Box
      width="60%"
      margin="0 auto"
      textAlign="center"
    >
      <Header />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <HeaderAction
          title="Hora:"
          text="Argentina/Ur/Br"
          mr="3px"
        />

        <HeaderAction
          title="Grito de Gol:"
          text="Activado"
        />
      </Box>
    </Box>
  )
}
