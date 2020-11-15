import { Compass, Code as CodeIcon, Server } from 'react-feather'
import {
  Heading,
  Link,
  Text,
  Code,
  Grid,
  Flex,
  Box,
  useTheme,
  useColorModeValue,
} from '@chakra-ui/react'
export function Services() {
  const theme = useTheme()
  const headingColor = useColorModeValue('gray.900', 'white')
  const textColor = useColorModeValue('gray.400', 'white')
  return (
    <Flex
      width="100%"
      height="auto"
      m="0"
      px="4"
      alignItems="stretch"
      overflow="hidden">
      <Box width="100%" maxW="1280px" mx="auto" py="8">
        <Heading
          size="xl"
          textTransform="uppercase"
          textAlign="center"
          color={headingColor}>
          What we do
        </Heading>
        <Box maxW={['100%', '80%', '68%']} mx="auto" mt="4">
          <Heading
            as="h3"
            textAlign="center"
            color={textColor}
            lineHeight="1.5em"
            fontSize="xl"
            fontWeight="700">
            We spend most working days exploring the latest technologies in web
            development, working and learning together with an{' '}
            <Link
              href="https://www.meetup.com/ReactVienna/"
              isExternal
              color="brand.400"
              title="React Vienna">
              amazing community
            </Link>{' '}
            of software developers. We give back by building open source
            projects for social entrepreneurs and civil society.
          </Heading>
        </Box>
        <Grid
          templateColumns={['1fr', '1fr', 'repeat(3, minmax(220px, 1fr))']}
          gap={6}
          maxWidth="1280px"
          my="8"
          mx="auto">
          <Flex
            flexDirection="column"
            alignItems="center"
            p="4"
            borderWidth="1px"
            borderRadius="md">
            <Compass size={50} color={theme.colors.brand['300']} />
            <Heading
              fontSize={['xl', 'xl', 'sm', 'xl', 'xl']}
              lineHeight="1.5em"
              margin={30}
              textAlign="center"
              textTransform="uppercase">
              Strategy Consulting & Assessments
            </Heading>
            <Text fontSize={['sm', 'sm', 'sm', 'lg', 'lg']}>
              We grew wiser along with the web. Mistakes were replaced by
              learnings. If you are in the process of planning your web strategy
              we can share our{' '}
              <Link
                color="brand.400"
                title="definition: knowledge of a subject gained through involvement in or exposure to it"
                href="/">
                experience
              </Link>
              .
            </Text>
            <Code
              borderWidth="1px"
              width="100%"
              p="2"
              mt="4"
              fontSize={['sm', 'sm', 'xs', 'sm', 'sm']}>
              const experience = (!brag) =&gt; <br />
              learn(applyFix(mistakes))
            </Code>
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
            p="4"
            borderWidth="1px"
            borderRadius="md">
            <CodeIcon size={50} color={theme.colors.brand['300']} />
            <Heading
              fontSize={['xl', 'xl', 'sm', 'xl', 'xl']}
              lineHeight="1.5em"
              margin={30}
              textAlign="center"
              textTransform="uppercase">
              Custom Web Design & Development
            </Heading>
            <Text fontSize={['sm', 'sm', 'sm', 'lg', 'lg']}>
              Small website or a community platform? We love simple, effective
              designs and of course, offering a great content management
              experience for you.
            </Text>
            <Code
              borderWidth="1px"
              width="100%"
              p="2"
              mt="4"
              fontSize={['sm', 'sm', 'xs', 'sm', 'sm']}>
              const pride = (effort) =&gt;
              <br /> clean(design, code)
            </Code>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            p="4"
            borderWidth="1px"
            borderRadius="md">
            <Server size={50} color={theme.colors.brand['300']} />
            <Heading
              fontSize={['xl', 'xl', 'sm', 'xl', 'xl']}
              lineHeight="1.5em"
              margin={30}
              textAlign="center"
              textTransform="uppercase">
              Scalable & Performant Hosting
            </Heading>
            <Text fontSize={['sm', 'sm', 'sm', 'lg', 'lg']}>
              50% of visitors expect pages to load in 2 seconds or less. I offer
              bespoke server configurations and management to deliver this and
              more.
            </Text>
            <Code
              borderWidth="1px"
              width="100%"
              p="2"
              mt="4"
              fontSize={['sm', 'sm', 'xs', 'sm', 'sm']}>
              &gt;_ ssh secure@nginx
              <br /> -i scalable.pem
            </Code>
          </Flex>
        </Grid>
      </Box>
    </Flex>
  )
}
