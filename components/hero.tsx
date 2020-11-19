import { Info } from 'react-feather'
import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { InternalLink } from 'components/internal-link'
import { NewlineText } from 'components/new-line'
type Props = {
  title: string
  type?: string[]
  description?: string
  actionLink?: string
}
export function Hero({ title, type, description, actionLink }: Props) {
  const bgColor = useColorModeValue('brand.300', 'gray.800')
  const color = useColorModeValue('gray.700', 'white')
  return (
    <Flex
      width="100%"
      minH="280px"
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
        pr="4"
        pl={['4', '4', '4', '4', 'calc(((100% - 1280px) / 2) + 1em)']}>
        {type && (
          <List
            mb="12"
            listStyleType="none"
            fontFamily="heading"
            fontWeight="500"
            fontSize="14px"
            letterSpacing="2px"
            textTransform="uppercase">
            {type.map((tag, index) => (
              <ListItem key={tag} display="inline-block" mr="4px">
                {index !== type.length - 1 ? `${tag},` : tag}
              </ListItem>
            ))}
          </List>
        )}
        <NewlineText
          text={title}
          textTransform="uppercase"
          fontSize="42px"
          lineHeight="1.5em"
          firstLineColor="white"
        />
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
            <Button mt="8" leftIcon={<Info size={14} />} variant="outline">
              Learn more
            </Button>
          </InternalLink>
        )}
      </Box>
      {/* <Box minHeight="100%" width="50vw" padding="0" /> */}
    </Flex>
  )
}
