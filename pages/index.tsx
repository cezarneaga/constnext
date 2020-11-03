import Head from 'next/head'
import { getAllProjectsForHome, Project } from '../lib/api'
import Layout from 'components/layout'

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
          <div key={project.slug}>{project.title}</div>
        ))}
      </>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allProjects = await getAllProjectsForHome(preview)
  return {
    props: { preview, allProjects },
  }
}
