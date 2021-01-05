import { ArticleJsonLd, NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import { Flex, Box, List, ListItem, Heading, Text, Grid, GridItem } from '@chakra-ui/react'
import { Projects } from 'components/projects'
import { FeatureView } from 'components/feature'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from 'components/layout'

import { getProjectBySlug, getAllProjectsWithSlugs } from 'lib/api'
import { Project } from '../../lib/contentTypes'
import { Hero } from 'components/hero'
import { NumbersView } from 'components/numbers'
type Props = {
  project: Project
  moreProjects: Project[]
  preview: boolean
}
export default function Post({ project, moreProjects, preview }: Props) {
  const router = useRouter()

  if (!router.isFallback && !project) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <>
          <NextSeo
            title={`${project?.title} - Simplify, Create, Amaze`}
            description={project?.description}
            canonical={`https://constnext.com/projects/${project?.slug}`}
            openGraph={{
              url: `https://constnext.com/projects/${project?.slug}`,
              title: `${project?.title} - Simplify, Create, Amaze`,
              description: project?.description,
              images: project?.mozaicCollection?.items.map((img) => {
                return { ...img, alt: img.description }
              }),
            }}
          />
          <ArticleJsonLd
            url={`https://constnext.com/projects/${project?.slug}`}
            title={project?.title}
            images={project?.mozaicCollection?.items.map((img) => img.url)}
            datePublished={project?.sys.firstPublishedAt}
            dateModified={project?.sys.publishedAt}
            authorName={['Cezar Neaga']}
            publisherName='const NEXT'
            publisherLogo='https://constnext.com/images/nav-logo.png'
            description={project?.description}
          />
          <article>
            <Head>
              <title>{project.title} | Cezar Neaga</title>
              <meta property='og:image' content={project?.image.url} />
            </Head>
            <Hero title={project?.title} type={project?.type} />
            <Flex width='100%' height='auto' m='0' alignItems='stretch' overflow='hidden'>
              <Flex width='100%' maxW='1280px' mx='auto' py='8' flexWrap='wrap' px='4'>
                <Box width={['100%', '100%', '50%', '60%', '60%']} pr={['0', '0', '4', '32']}>
                  <Text fontFamily='heading' fontSize='20px' fontWeight='700'>
                    {project?.description}
                  </Text>
                </Box>
                <Box width={['50%', '50%', '25%', '20%', '20%']} mt={['6', '6', '0']}>
                  <Heading size='sm'>Stack</Heading>
                  <List>
                    {project?.stack.map((s) => (
                      <ListItem
                        color='gray.500'
                        fontFamily='heading'
                        fontWeight='500'
                        fontSize={['14px', '14px', '16px', '18px']}
                        key={s}>
                        {s}
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box width={['50%', '50%', '25%', '20%', '20%']} mt={['6', '6', '0']}>
                  <Heading size='sm'>Details</Heading>
                  <List>
                    {project?.details.map((s) => (
                      <ListItem
                        color='gray.500'
                        fontFamily='heading'
                        fontWeight='500'
                        fontSize={['14px', '14px', '16px', '18px']}
                        key={s}>
                        {s}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Flex>
            </Flex>
            {project?.mozaicCollection && (
              <Grid
                templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(4, 1fr)', 'repeat(4, 1fr)']}
                templateRows={[
                  'repeat(2, 232px)',
                  'repeat(2, 232px)',
                  'repeat(2, 130px)',
                  'repeat(2, 180px)',
                  'repeat(2, 232px)',
                ]}
                gap={6}
                maxWidth='1280px'
                py='8'
                px='4'
                mx='auto'>
                <GridItem colSpan={2} rowSpan={[1, 1, 2]} overflow='hidden'>
                  <Image
                    alt={project?.mozaicCollection.items[0]?.title}
                    src={project?.mozaicCollection.items[0]?.url}
                    width={620}
                    height={496}
                    layout='responsive'
                  />
                </GridItem>
                <GridItem colSpan={2} rowSpan={1} overflow='hidden'>
                  <Image
                    alt={project?.mozaicCollection.items[1]?.title}
                    src={project?.mozaicCollection.items[1]?.url}
                    width={620}
                    height={496}
                    layout='responsive'
                  />
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} overflow='hidden'>
                  <Image
                    alt={project?.mozaicCollection.items[2]?.title}
                    src={project?.mozaicCollection.items[2]?.url}
                    width={620}
                    height={496}
                    layout='responsive'
                  />
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} overflow='hidden'>
                  <Image
                    alt={project?.mozaicCollection.items[3]?.title}
                    src={project?.mozaicCollection.items[3]?.url}
                    width={620}
                    height={496}
                    layout='responsive'
                  />
                </GridItem>
              </Grid>
            )}
            {project?.featuresCollection && (
              <Box height='auto' my='8'>
                {project?.featuresCollection.items.map((feature) => (
                  <FeatureView {...feature} key={feature.heading} />
                ))}
              </Box>
            )}
          </article>

          {moreProjects && moreProjects.length > 0 && <Projects projects={moreProjects} cols={4} />}
          <NumbersView numbers={project?.numbers} />
        </>
      )}
    </Layout>
  )
}

export async function getStaticProps({
  params,
  preview = false,
}: {
  params: { slug: string; secret: string }
  preview: boolean
}) {
  const { secret, slug } = params
  const { project, moreProjects } = await getProjectBySlug(slug, 4, preview)

  return {
    props: {
      preview,
      project,
      moreProjects,
    },
  }
}

export async function getStaticPaths() {
  const allProjects: Project[] = await getAllProjectsWithSlugs()
  return {
    paths: allProjects?.map(({ slug }) => `/projects/${slug}`),
    fallback: true,
  }
}
