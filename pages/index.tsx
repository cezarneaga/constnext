import Head from 'next/head'
import { getProjects } from '../lib/api'
import { Project } from '../lib/contentTypes'
import Layout from 'components/layout'
import { Hero } from 'components/hero'
import { ProjectCard } from 'components/project-card'

function Home({ preview, items }: { preview: boolean; items: Project[] }) {
  return (
    <Layout preview={preview}>
      <>
        <Head>
          <title>Cezar Neaga - Simplify, Create, Amaze</title>
          <link rel="icon" href="images/favicon.ico" />
        </Head>
        <Hero
          title={`Simplify,\nCreate & Amaze`}
          description="Professional web & app development for people and organisations that have a positive impact in the society."
          actionLink="/about"
        />
        {items.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const items = await getProjects(3, preview)
  return {
    props: {
      preview,
      items,
    },
  }
}
export default Home
