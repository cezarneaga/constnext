import Head from 'next/head'
import { fetchContent } from '../lib/fetchContent'
import { Project } from '../lib/contentTypes'
import Layout from 'components/layout'
import { ProjectCard } from 'components/project-card'

export default function Home({
  preview,
  allProjects,
}: {
  preview: boolean
  allProjects: Project[]
}) {
  return (
    <Layout preview={preview}>
      <>
        <Head>
          <title>Cezar Neaga - Simplify, Create, Amaze</title>
          <link rel="icon" href="images/favicon.ico" />
        </Head>
        {allProjects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const query = `
    {
      projectCollection(limit: 3) {
        items {
          sys{
            id
            publishedAt
          }
          title
          slug
          stack
          image {
            url
            fileName
            description
            width
            height
          }
        }
      }
    }
  `
  const { projectCollection } = await fetchContent(query)
  return {
    props: {
      preview,
      allProjects: projectCollection.items,
    },
  }
}
