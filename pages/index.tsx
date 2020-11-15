import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { getProjects } from '../lib/api'
import { Project } from '../lib/contentTypes'
import Layout from 'components/layout'
import { Hero } from 'components/hero'
import { Services } from 'components/services'
import { Projects } from 'components/projects'

function Home({
  preview,
  projects,
}: {
  preview: boolean
  projects: Project[]
}) {
  return (
    <Layout preview={preview}>
      <>
        <Head>
          <title>Cezar Neaga - Simplify, Create, Amaze</title>
          <link rel="icon" href="images/favicon.ico" />
        </Head>
        <NextSeo
          title="Cezar Neaga - Simplify, Create, Amaze"
          description="Professional web & app development for people and organisations that have a positive impact in the society."
          canonical="https://constnext.com"
          openGraph={{
            url: 'https://constnext.com',
            title: 'Cezar Neaga - Simplify, Create, Amaze',
            description:
              'Professional web & app development for people and organisations that have a positive impact in the society.',
            images: [
              {
                url:
                  'https://images.ctfassets.net/voxe5faf7baw/15bf3tWfqEWQbHmMqd0Xan/49199ff6464d5c54126c1677a706c99b/cn-home.png',
                width: 1300,
                height: 1041,
                alt: 'const NEXT Homepage',
              },
            ],
          }}
        />
        <Hero
          title={`Simplify,\nCreate & Amaze`}
          description="Professional web & app development for people and organisations that have a positive impact in the society."
          actionLink="/about"
        />
        <Services />
        <Projects projects={projects} cols={3} />
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
export default Home
