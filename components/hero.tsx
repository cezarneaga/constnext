import { Box, Button, Flex, Heading, useColorModeValue } from '@chakra-ui/core'
import { InternalLink } from 'components/internal-link'
import { NewlineText } from 'components/new-line'
import { Info } from 'react-feather'
type Props = {
  title: string
  description: string
  actionLink: string
}
export function Hero({ title, description, actionLink }: Props) {
  const bgColor = useColorModeValue('brand.300', 'gray.800')
  const color = useColorModeValue('gray.900', 'white')
  return (
    <Flex
      width="100%"
      height="410px"
      m="0"
      alignItems="stretch"
      overflow="hidden"
      backgroundColor={bgColor}
      backgroundImage="url('/images/logo-black10.svg')"
      backgroundSize="cover"
      backgroundPosition="top left"
      backgroundRepeat="no-repeat">
      <Box
        width={['100%', '100%', '50%', '50%']}
        py="12"
        pl={{
          sm: '4',
          md: '4',
          lg: '4',
          xl: 'calc(((100% - 1280px) / 2) + 1rem)',
        }}
        pr="4">
        <NewlineText text={title} />

        <Heading
          as="h3"
          fontSize="20px"
          color={color}
          lineHeight="1.4em"
          mt="8">
          {description}
        </Heading>
        {actionLink && (
          <InternalLink href={actionLink} title="About constNext">
            <Button
              mt="8"
              leftIcon={<Info size={14} />}
              colorScheme="gray"
              // color="brand.400"
              variant="outline">
              Learn more
            </Button>
          </InternalLink>
        )}
      </Box>
      {/* <Box minHeight="100%" width="50vw" padding="0" /> */}
    </Flex>
  )
}
