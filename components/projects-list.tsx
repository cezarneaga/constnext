import Image from 'next/image'
import { Box, Flex } from '@chakra-ui/core'
import { Project } from 'lib/api'
import { ProjectCard } from 'components/project-card'

export function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <Flex width="100%">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.slug} />
      ))}
    </Flex>
  )
}
