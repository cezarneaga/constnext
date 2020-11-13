import Image from 'next/image'
import { ArrowRightCircle } from 'react-feather'
import { Flex, Heading } from '@chakra-ui/core'
import { Project } from '../lib/contentTypes'
import { InternalLink } from 'components/internal-link'
export function ProjectCard({
  project,
  cols,
}: {
  project: Project
  cols: number
}) {
  const base = 320 * 0.8
  const sm = 320 * 0.8
  const md = ((768 - 16 * (cols - 1)) / cols) * 0.8
  const lg = ((1024 - 16 * (cols - 1)) / cols) * 0.8
  const xl = ((1280 - 16 * (cols - 1)) / cols) * 0.8
  return (
    <Flex
      key={project.slug}
      position="relative"
      height="100%"
      minH={[base, sm, md, lg, xl]}
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
            textAlign="center"
            color="#fff">
            {project.title}
          </Heading>
        </Flex>
      </InternalLink>
    </Flex>
  )
}
