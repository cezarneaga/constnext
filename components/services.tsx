import React from 'react'
import { Compass, Code as CodeIcon, Server } from 'react-feather'
import { Heading, Link, Code, Grid, Flex, Box, useTheme } from '@chakra-ui/core'
export function Services() {
  const theme = useTheme()
  return (
    <Box
      width="100%"
      py="8"
      px={['4', '4', '4', 'calc(((100% - 1280px) / 2) + 1rem)']}>
      <Heading
        size="xl"
        textTransform="uppercase"
        textAlign="center"
        color="gray.900">
        What I do
      </Heading>
      <Box maxW={['100%', '80%', '68%']} mx="auto" mt="4">
        <Heading
          as="h3"
          textAlign="center"
          color="gray.400"
          lineHeight="1.5em"
          fontSize="xl"
          fontWeight="700">
          I spend most working days exploring the latest technologies in web
          development, working and learning together with an{' '}
          <Link
            href="https://www.meetup.com/ReactVienna/"
            isExternal
            color="brand.400"
            title="React Vienna">
            amazing community
          </Link>{' '}
          of software developers. I give back by contributing to open source
          projects.
        </Heading>
      </Box>
      <Grid
        templateColumns={['1fr', '1fr', 'repeat(3, minmax(220px, 1fr))']}
        gap={6}
        maxWidth="1280px"
        py="8"
        mx="auto">
        <Flex
          flexDirection="column"
          alignItems="center"
          p="6"
          mb="8"
          borderWidth="1px"
          borderRadius="md">
          <Compass size={50} color={theme.colors.brand['300']} />
          <Heading
            fontSize="22px"
            lineHeight="1.5em"
            margin={30}
            textAlign="center"
            textTransform="uppercase">
            Strategy Consulting & Assessments
          </Heading>
          <p>
            We grew wiser along with the web. Mistakes were replaced by
            learnings. If you are in the process of planning your web strategy
            we can share our{' '}
            <a
              title="definition: knowledge of a subject gained through involvement in or exposure to it"
              href="/">
              experience
            </a>
            .{' '}
          </p>
          <Code borderWidth="1px" width="100%" p="2" mt="4">
            const experience = (!brag) =&gt; <br />
            learn(applyFix(mistakes))
          </Code>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          p="6"
          mb="8"
          borderWidth="1px"
          borderRadius="md">
          <CodeIcon size={50} color={theme.colors.brand['300']} />
          <Heading
            fontSize="22px"
            lineHeight="1.5em"
            margin={30}
            textAlign="center"
            textTransform="uppercase">
            Custom Web Design & Development
          </Heading>
          <p>
            Small website or a community platform? We love simple, effective
            designs and of course, offering a great content management
            experience for you.
          </p>
          <Code borderWidth="1px" width="100%" p="2" mt="4">
            const pride = (effort) =&gt;
            <br /> clean(design, code)
          </Code>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          p="6"
          mb="8"
          borderWidth="1px"
          borderRadius="md">
          <Server size={50} color={theme.colors.brand['300']} />
          <Heading
            fontSize="22px"
            lineHeight="1.5em"
            margin={30}
            textAlign="center"
            textTransform="uppercase">
            Scalable & Performant Hosting
          </Heading>
          <p>
            50% of visitors expect pages to load in 2 seconds or less. I offer
            bespoke server configurations and management to deliver this and
            more.
          </p>
          <Code borderWidth="1px" width="100%" p="2" mt="4">
            &gt;_ ssh secure@nginx
            <br /> -i scalable.pem
          </Code>
        </Flex>
      </Grid>
    </Box>
  )
}
