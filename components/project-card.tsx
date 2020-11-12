import Image from 'next/image'
import { ArrowRightCircle } from 'react-feather'
import { Box, Flex, Heading } from '@chakra-ui/core'
import { Project } from '../lib/contentTypes'
import { InternalLink } from 'components/internal-link'
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Flex
      key={project.slug}
      position="relative"
      minH={['281px', '220px', '260px', '320px']}
      role="group">
      <InternalLink
        href={`/projects/${project.slug}`}
        height="100%"
        flex="1"
        title={project.title}
        position="relative">
        <Image
          src={project.image.url}
          alt={project.image.description}
          layout="fill"
        />
        <Flex
          position="absolute"
          top="0"
          left="0"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          background="rgba(105, 154, 207, 0.75)"
          text-align="center"
          height="100%"
          width="100%"
          opacity="0"
          transition="opacity 0.25s ease"
          _groupHover={{ opacity: 1 }}>
          <ArrowRightCircle
            color="#fff"
            size={50}
            style={{ margin: '10px 0' }}
          />
          <Heading
            fontSize={['20px', '20px', '28px', '28px']}
            textTransform="uppercase"
            // marginBottom={30}
            center
            color="#fff">
            {project.title}
          </Heading>
        </Flex>
      </InternalLink>
    </Flex>
  )
}
