import { Heading, Button, Grid, Flex, Box, useColorModeValue } from '@chakra-ui/react'
import { ProjectCard } from 'components/project-card'
import { Project } from '../lib/contentTypes'
import { Link } from '@chakra-ui/next-js'
type Props = {
  projects: Project[]
  cols: number
}
export function Projects({ projects, cols }: Props) {
  const bgColor = useColorModeValue('gray.100', 'gray.800')
  const headingColor = useColorModeValue('gray.700', 'white')
  const textColor = useColorModeValue('gray.500', 'white')
  return (
    <Flex width='100%' height='auto' m='0' px='4' alignItems='stretch' overflow='hidden' backgroundColor={bgColor}>
      <Box width='100%' py='8' maxW='1280px' mx='auto'>
        <Heading size='xl' textTransform='uppercase' textAlign='center' color={headingColor}>
          Projects
        </Heading>
        <Box maxW={['100%', '80%', '50%']} mx='auto' mt='4'>
          <Heading as='h3' textAlign='center' color={textColor} lineHeight='1.5em' fontSize='xl' fontWeight='700'>
            Here are some of the ones we have been working on or that are currently in progress.
          </Heading>
        </Box>
        <Grid templateColumns={['1fr', `repeat(2, 1fr)`, `repeat(${cols}, 1fr)`]} gap={6} maxWidth='1280px' py='8' mx='auto'>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} cols={cols} />
          ))}
        </Grid>
        <Box maxW={['100%', '80%', '50%']} mx='auto' textAlign='center'>
          <Link href='/projects' title='see all projects'>
            <Button variant='outline' colorScheme='gray.700'>
              All projects
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  )
}
