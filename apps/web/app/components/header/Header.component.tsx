import { Box, Text } from '@repo/ui'

import { HeaderAction } from './HeaderAction.component'
import { HeaderButton } from './HeaderButton.component'

export function Header() {
  return (
    <>
      <Box
        display="flex"
        mb="20px"
      >
        <HeaderButton
          isLeftButton
          text="Ayer"
          flexGrow="1"
        />

        <Box
          flexGrow="2"
          backgroundColor="brand.darkGreenShade6"
          border="1px solid black"
        >
          <Text
            textTransform="uppercase"
            maxW="80px"
            margin="0 auto"
            lineHeight="1"
            textShadow="#000 .1em .1em .1em"
          >
            Partidos Hoy
          </Text>
        </Box>

        <HeaderButton
          isLeftButton={false}
          text="Man."
          flexGrow="1"
        />
      </Box>

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
    </>
  )
}
