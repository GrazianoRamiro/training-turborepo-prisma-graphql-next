import { ArrowLeftIcon, ArrowRightIcon, Icon, Link, LinkProps, Text } from '@repo/ui'

type HeaderButtonProps = {
  isLeftButton?: boolean
  text: string
} & LinkProps

export function HeaderButton({ isLeftButton = true, text, ...props }: HeaderButtonProps) {
  return (
    <Link
      backgroundColor="brand.mediumGreenShade2"
      borderRadius={isLeftButton ? '1em 0 0 1em' : '0 1em 1em 0'}
      border="1px solid black"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      lineHeight="1"
      {...props}
    >
      <Icon
        as={isLeftButton ? ArrowLeftIcon : ArrowRightIcon}
        color="black"
      />
      <Text>{text}</Text>
    </Link>
  )
}
