import { Heading, useColorModeValue } from '@chakra-ui/react'
import type { HeadingProps } from '@chakra-ui/react'
type Props = HeadingProps & { text: string; firstLineColor: string }

export const NewlineText = ({ text, firstLineColor, ...rest }: Props) => {
  const [one, two] = text.split('\n')
  const opositeColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <>
      <Heading {...rest} color={firstLineColor}>
        {one}
      </Heading>
      <Heading
        {...rest}
        color={firstLineColor === 'white' ? opositeColor : 'white'}>
        {two}
      </Heading>
    </>
  )
}
