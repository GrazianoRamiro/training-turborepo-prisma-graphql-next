import Link from 'next/link'

import { As, Box, ListIcon, ListItem, ListItemProps, Text } from '@repo/ui'

type ItemButtonProps = {
  text: string
  icon: As
  href: string
} & ListItemProps

export function ItemButton({ text, icon, href, ...props }: ItemButtonProps) {
  return (
    <ListItem
      backgroundColor="brand.mediumGreenShade1"
      color="#fff"
      boxShadow="inset 0 1px 0 0 #9acc85"
      bg="linear-gradient(to bottom,#74ad5a 5%,#68a54b 100%)"
      border="1px solid #3b6e22"
      pl="2px"
      {...props}
    >
      <Link href={href}>
        <Box
          display="flex"
          alignItems="center"
        >
          <ListIcon
            mr="5px"
            as={icon}
          />

          <Text>{text}</Text>
        </Box>
      </Link>
    </ListItem>
  )
}
