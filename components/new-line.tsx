import { Heading } from '@chakra-ui/core'

export function NewlineText({ text }: { text: string }) {
  const [one, two] = text.split('\n')
  return (
    <>
      <Heading
        textTransform="uppercase"
        fontSize="42px"
        lineHeight="1.5em"
        color="white">
        {one}
      </Heading>
      <Heading textTransform="uppercase" fontSize="42px" lineHeight="1.5em">
        {two}
      </Heading>
    </>
  )
}
