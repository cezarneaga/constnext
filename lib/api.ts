const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const PROJECT_CARD_FIELDS = `
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
`
export async function fetchGraphQL(query: string, preview?: boolean) {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query: query }),
    }
  )
  const json = await result.json()

  if (!!json.errors) {
    console.warn(
      `Errors in GraphQL query:`,
      json.errors.map((m: any) => m.message)
    )
  }

  return json
}
export function extractProject(fetchResponse: { data: any }) {
  return fetchResponse?.data?.projectCollection?.items?.[0]
}

export function extractProjectEntries(fetchResponse: { data: any }) {
  return fetchResponse?.data?.projectCollection?.items
}

export async function getPreviewPostBySlug(slug: string) {
  const entry = await fetchGraphQL(
    `query {
      projectCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${PROJECT_CARD_FIELDS}
        }
      }
    }`,
    true
  )
  return extractProject(entry)
}
export async function getProjects(limit: number, preview: boolean) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(preview: ${
        preview ? 'true' : 'false'
      }, order: sys_publishedAt_DESC,limit: ${limit}) {
        items {
          ${PROJECT_CARD_FIELDS}
        }
      }
    }`
  )
  return extractProjectEntries(entries)
}
