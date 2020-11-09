import Head from 'next/head'
import { operationsDoc } from '../lib/queries'
import { Project } from '../lib/contentTypes'
import Layout from 'components/layout'
import { ProjectCard } from 'components/project-card'
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
function Home({ preview, items }: { preview: boolean; items: Project[] }) {
  return (
    <Layout preview={preview}>
      <>
        <Head>
          <title>Cezar Neaga - Simplify, Create, Amaze</title>
          <link rel="icon" href="images/favicon.ico" />
        </Head>
        {items.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: operationsDoc,
        variables: {
          limit: 3,
          preview,
        },
        operationName: 'projectList',
      }),
    }
  )
  const json = await result.json()

  if (!!json.errors) {
    console.warn(
      `Errors in GraphQL for "projectList":`,
      json.errors.map((m: any) => m.message)
    )
  }

  const { projectCollection } = json.data
  return {
    props: {
      preview,
      items: projectCollection.items,
    },
  }
}
export default Home
