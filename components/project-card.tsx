import Image from 'next/image'
import { Box, Flex, Text } from '@chakra-ui/core'
import { Project } from '../lib/contentTypes'
import { InternalLink as Link } from 'components/internal-link'
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Box p="5" maxW="320px" borderWidth="1px" key={project.slug}>
      <Image
        src={project.image.url}
        alt={project.image.description}
        width={500}
        height={500}
      />
      <Flex align="baseline" mt={2}>
        {project.stack.map((stack) => (
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
            key={stack}>
            {stack}
          </Text>
        ))}
      </Flex>
      <Link
        href={`/projects/${project.slug}`}
        mt={2}
        fontSize="xl"
        fontWeight="semibold"
        lineHeight="short">
        {project.title}
      </Link>
    </Box>
  )
}
