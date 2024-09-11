import { Button, ButtonProps, Text } from '@repo/ui'

type HeaderActionProps = {
  title: string
  text: string
} & ButtonProps

export function HeaderAction({ title, text, ...props }: HeaderActionProps) {
  return (
    <Button
      display="flex"
      flexDirection="column"
      backgroundColor="brand.mediumGreenShade2"
      color="white"
      fontSize=".8em"
      flexShrink="2"
      borderRadius="0"
      boxShadow="inset 0 1px 0 0 #9acc85"
      border="1px solid #3b6e22"
      padding="3px 6px"
      textDecoration="none"
      textShadow="0 2px 2px #000"
      {...props}
    >
      <Text>{title}</Text>
      <Text>{text}</Text>
    </Button>
  )
}
