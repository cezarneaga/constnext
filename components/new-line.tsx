import { Heading } from '@chakra-ui/react'
import type { HeadingProps } from '@chakra-ui/react'
type Props = HeadingProps & { text: string; firstLineColor: string }

export const NewlineText = ({ text, firstLineColor, ...rest }: Props) => {
  const [one, two] = text.split('\n')
  return (
    <>
      <Heading {...rest} color={firstLineColor}>
        {one}
      </Heading>
      <Heading
        {...rest}
        color={firstLineColor === 'white' ? 'gray.900' : 'white'}>
        {two}
      </Heading>
    </>
  )
}
