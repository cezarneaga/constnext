import { operationsDoc } from 'lib/queries'
import { NextApiRequest, NextApiResponse } from 'next'
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { secret, slug } = req.query

  if (secret !== process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

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
          slug: `${slug}`,
          preview: true,
        },
        operationName: 'ProjectBySlug',
      }),
    }
  )
  const json = await result.json()

  if (!!json.errors) {
    console.warn(
      `Errors in GraphQL for ProjectBySlug:`,
      json.errors.map((m: any) => m.message)
    )
  }

  const { projectCollection } = json.data

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!projectCollection) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched projects
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: `/projects/${projects.slug}` })
  const url = `/projects/${projectCollection.items[0].slug}`
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  )
  res.end()
}
