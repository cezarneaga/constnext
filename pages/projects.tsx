import { Box, Flex, Heading } from '@chakra-ui/react'
import Layout from 'components/layout'
import { NextSeo } from 'next-seo'
import { getProjects } from '../lib/api'
import { Project } from '../lib/contentTypes'
import { Work } from 'components/work'
type Props = {
  preview: boolean
  projects: Project[]
}
function Projects({ preview, projects }: Props) {
  return (
    <Layout preview={preview}>
      <>
        <NextSeo
          title="Projects - Simplify, Create, Amaze"
          description="Professional web & app development for people and organisations that have a positive impact in the society."
          canonical="https://constnext.com"
          openGraph={{
            url: 'https://constnext.com',
            title: 'Projects - Simplify, Create, Amaze',
            description:
              'Professional web & app development for people and organisations that have a positive impact in the society.',
            images: [
              {
                url:
                  'https://images.ctfassets.net/voxe5faf7baw/15bf3tWfqEWQbHmMqd0Xan/49199ff6464d5c54126c1677a706c99b/cn-home.png',
                width: 1300,
                height: 1041,
                alt: 'constNEXT Homepage',
              },
            ],
          }}
        />
        <Box
          width="100%"
          backgroundImage="url('/images/logo-sprite.svg')"
          backgroundPosition={[
            'calc(-140px * 12) calc((-79px * 2) + 10px)',
            'calc(-140px * 12) calc((-79px * 2) + 10px)',
            '-2200px -110px',
            '-7700px -510px',
            '-6700px -460px',
          ]}
          backgroundRepeat="no-repeat"
          backgroundSize={['100%', '100%', '400%', '600%', '500%']}
          height={[
            'calc(79px * 2)',
            'calc(79px * 2)',
            '200px',
            '240px',
            '240px',
          ]}>
          <Box
            width={'100%'}
            height="100%"
            py="12"
            pr="4"
            pl={['4', '4', '4', '4', 'calc(((100% - 1280px) / 2) + 1em)']}>
            <Heading
              textTransform="uppercase"
              fontSize="42px"
              lineHeight="1.5em"
              color="gray.900">
              Projects
            </Heading>
            <Box
              display="block"
              backgroundColor="gray.900"
              width="100px"
              height="7px"
            />
          </Box>
        </Box>
        <Box width="100%" height="auto" overflow="hidden" my="12">
          {projects?.map((project, index) => (
            <Work key={project.sys.id} index={index} project={project} />
          ))}
        </Box>
      </>
    </Layout>
  )
}
export async function getStaticProps({ preview = false }) {
  const projects = await getProjects(3, preview)
  return {
    props: {
      preview,
      projects,
    },
  }
}
export default Projects
