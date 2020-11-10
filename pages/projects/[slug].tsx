import Head from 'next/head'
import { ProjectCard } from 'components/project-card'
import { ProjectsList } from 'components/projects-list'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from 'components/layout'
import { operationsDoc } from 'lib/queries'
import { extractProject, extractProjectEntries } from 'lib/api'
import { Project } from '../../lib/contentTypes'
import { Heading } from '@chakra-ui/core'
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const publicToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const previewToken = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
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
  const { secret, slug } = params
  const entry = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${preview ? previewToken : publicToken}`,
      },
      body: JSON.stringify({
        query: operationsDoc,
        variables: {
          slug: `${slug}`,
          preview,
        },
        operationName: 'ProjectBySlug',
      }),
    }
  )
  const entryJson = await entry.json()

  const entries = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${preview ? previewToken : publicToken}`,
      },
      body: JSON.stringify({
        query: operationsDoc,
        variables: {
          slug: `${slug}`,
          preview,
          limit: 3,
        },
        operationName: 'MoreProjects',
      }),
    }
  )
  const entriesJson = await entries.json()

  if (!!entryJson.errors) {
    console.warn(
      `Errors in GraphQL for ProjectBySlug:`,
      entryJson.errors.map((m: any) => m.message)
    )
  }
  if (!!entriesJson.errors) {
    console.warn(
      `Errors in GraphQL for MoreProjects:`,
      entriesJson.errors.map((m: any) => m.message)
    )
  }

  const project = entryJson?.data?.projectCollection?.items?.[0]
  const moreProjects = entriesJson?.data?.projectCollection?.items

  return {
    props: {
      preview,
      project,
      moreProjects,
    },
  }
}

export async function getStaticPaths() {
  const projects = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${publicToken}`,
      },
      body: JSON.stringify({
        query: operationsDoc,
        operationName: 'AllProjectsWithSlugs',
      }),
    }
  )
  const projectsJson = await projects.json()
  const allProjects: Project[] = projectsJson?.data?.projectCollection?.items
  return {
    paths: allProjects?.map(({ slug }) => `/projects/${slug}`) ?? [],
    fallback: true,
  }
}
