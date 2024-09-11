import Image from 'next/image'

import { ListItem, Text } from '@repo/ui'

export function FacebookAlert() {
  return (
    <ListItem
      mb="1em"
      color="brand.light"
      backgroundColor="brand.darkGreenShade2"
      textDecoration="none"
      textShadow="1px 1px 1px brand.dark"
      lineHeight="1"
      textAlign="center"
      fontSize="0.8em"
      fontWeight="700"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        alt="Facebook"
        src="/logo-facebook.png"
        width={30}
        height={30}
      />
      <Text mt="5px">Login/Registros momentaneamente desactivado, pronto volverá.</Text>
    </ListItem>
  )
}
