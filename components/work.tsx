import { Box, Flex, Heading, Text, Button, Center } from '@chakra-ui/react'
import Image from 'next/image'
import { InternalLink } from 'components/internal-link'
import { Project } from 'lib/contentTypes'
import { twoDigits } from 'utils/two-digits'
type Props = {
  index: number
  project: Project
}
export function Work({ index, project }: Props) {
  return (
    <Flex
      px="4"
      flexDirection={[
        'column',
        'column',
        index % 2 === 0 ? 'row-reverse' : 'row',
      ]}
      maxW="1280px"
      width="100%"
      mx="auto"
      height={['auto', 'auto', 'auto', '397px', '500px']}>
      <Center
        flexDirection="column"
        width={['100%', '100%', '50%', '50%', '50%']}
        alignItems="left"
        paddingRight={['0', '0', index % 2 === 0 ? '0' : '4']}
        paddingLeft={['0', '0', index % 2 === 0 ? '4' : '0']}
        height="100%">
        <Heading
          as="h3"
          fontSize="52px"
          lineHeight="1.5em"
          color="brand.400"
          mt={[8, 8, 0]}>
          {twoDigits(index + 1)}
        </Heading>
        <Heading as="h2" fontSize="22px" lineHeight="1.5em" color="brand.400">
          {project.title}
        </Heading>
        <Text fontSize="18px" lineHeight="1.5em" color="gray.400">
          {project.description}
        </Text>
        <InternalLink
          href={`/projects/${project.slug}`}
          my={['4', '4', '4', '12']}>
          <Button colorScheme="brand" variant="outline">
            View Project
          </Button>
        </InternalLink>
      </Center>
      <Box width={['100%', '100%', '50%', '50%', '50%']} height="100%">
        <Image
          src={project.image.url}
          alt={project.image.description}
          width={624}
          height={500}
          layout="responsive"
        />
      </Box>
    </Flex>
  )
}
