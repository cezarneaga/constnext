import Head from 'next/head'
import { ProjectCard } from 'components/project-card'
import { Projects } from 'components/projects'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from 'components/layout'
import { getProjectBySlug, getAllProjectsWithSlugs } from 'lib/api'
import { Project } from '../../lib/contentTypes'
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
            <Projects projects={moreProjects} cols={4} />
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
