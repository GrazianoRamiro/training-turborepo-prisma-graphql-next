import Image from 'next/image'

import { Box } from '@repo/ui'

export function Logo() {
  return (
    <Box
      mt="2em"
      mb="0.5em"
      width="45%"
      position="relative"
      maxW="398"
      _before={{
        content: '""',
        display: 'block',
        paddingBottom: '13%',
      }}
    >
      <Image
        src="/logo.jpg"
        alt="Logo"
        objectFit="contain"
        layout="fill"
        priority
      />
    </Box>
  )
}
