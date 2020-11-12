import {
  Heading,
  Button,
  Grid,
  Flex,
  Box,
  useColorModeValue,
} from '@chakra-ui/core'
import { ProjectCard } from 'components/project-card'
import { Project } from '../lib/contentTypes'
import { InternalLink } from './internal-link'
type Props = {
  projects: Project[]
  cols: number
}
export function Projects({ projects, cols }: Props) {
  const bgColor = useColorModeValue('gray.100', 'gray.800')

  return (
    <Flex
      width="100%"
      height="auto"
      m="0"
      alignItems="stretch"
      overflow="hidden"
      backgroundColor={bgColor}>
      <Box
        width="100%"
        py="8"
        px={['4', '4', '4', 'calc(((100% - 1280px) / 2) + 1rem)']}>
        <Heading
          size="xl"
          textTransform="uppercase"
          textAlign="center"
          color="gray.900">
          Projects
        </Heading>
        <Box maxW={['100%', '80%', '50%']} mx="auto" mt="4">
          <Heading
            as="h3"
            textAlign="center"
            color="gray.400"
            lineHeight="1.5em"
            fontSize="xl"
            fontWeight="700">
            Here are some of the ones I have been working on or that are
            currently in progress.
          </Heading>
        </Box>
        <Grid
          templateColumns={['1fr', `repeat(2, 1fr)`, `repeat(${cols}, 1fr)`]}
          gap={6}
          maxWidth="1280px"
          py="8"
          mx="auto">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </Grid>
        <Box maxW={['100%', '80%', '50%']} mx="auto" textAlign="center">
          <InternalLink href="/projects">
            <Button
              variant="outline"
              colorScheme="brand"
              borderWidth="4px"
              size="lg">
              see more
            </Button>
          </InternalLink>
        </Box>
      </Box>
    </Flex>
  )
}
