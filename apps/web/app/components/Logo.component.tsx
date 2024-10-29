import Image from 'next/image'

import { Box } from '@repo/ui'

export function Logo() {
  return (
    <Box
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
        fill
        priority
      />
    </Box>
  )
}
