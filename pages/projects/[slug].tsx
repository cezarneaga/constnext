import Head from 'next/head'
import { ProjectCard } from 'components/project-card'
import { ProjectsList } from 'components/projects-list'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from 'components/layout'
import {
  getAllProjectsWithSlug,
  getProjectAndMoreProjects,
  Project,
} from '../../lib/api'
import { Heading } from '@chakra-ui/core'
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
          <article>
            <Head>
              <title>{project.title} | Cezar Neaga</title>
              <meta property="og:image" content={project.image.url} />
            </Head>
            <ProjectCard project={project} />
          </article>

          {moreProjects && moreProjects.length > 0 && (
            <>
              <Heading>{moreProjects.length} other projects</Heading>
              <ProjectsList projects={moreProjects} />
            </>
          )}
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
  const data = await getProjectAndMoreProjects(params.slug, 3, preview)

  return {
    props: {
      preview,
      project: data?.project ?? null,
      moreProjects: data?.moreProjects ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allProjects: Project[] = await getAllProjectsWithSlug()
  return {
    paths: allProjects?.map(({ slug }) => `/projects/${slug}`) ?? [],
    fallback: true,
  }
}
