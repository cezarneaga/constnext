import { allProjectsWithSlugsDoc, moreProjectsDoc, projectListDoc, projectsBySlugDoc } from 'lib/queries'
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const publicToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const previewToken = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN

export async function fetchGraphQL(query: string, variables?: { [key: string]: string | number | boolean }, preview?: boolean) {
  const result = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${preview ? previewToken : publicToken}`,
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  })
  const json = await result.json()

  if (!!json.errors) {
    console.warn(
      `Errors in GraphQL query ${query}:`,
      json.errors.map((m: any) => m.message)
    )
  }

  return json
}
export function extractProject(fetchResponse: { data: any }) {
  return fetchResponse?.data?.projectCollection?.items?.[0] || null
}

export function extractProjectEntries(fetchResponse: { data: any }) {
  return fetchResponse?.data?.projectCollection?.items || []
}

export async function getProjects(limit: number, preview: boolean) {
  const entries = await fetchGraphQL(projectListDoc, { limit }, preview)
  return extractProjectEntries(entries)
}
export async function getProjectBySlug(slug: string, limit: number, preview: boolean) {
  const entry = await fetchGraphQL(projectsBySlugDoc, { slug, preview }, preview)
  const entries = await fetchGraphQL(moreProjectsDoc, { slug, limit }, preview)
  return {
    project: extractProject(entry),
    moreProjects: extractProjectEntries(entries),
  }
}
export async function getAllProjectsWithSlugs() {
  const entries = await fetchGraphQL(allProjectsWithSlugsDoc)
  return extractProjectEntries(entries)
}
export async function getPreviewProjectBySlug(slug: string) {
  const entry = await fetchGraphQL(
    projectsBySlugDoc,
    {
      slug,
      preview: true,
    },
    true
  )
  return extractProject(entry)
}
