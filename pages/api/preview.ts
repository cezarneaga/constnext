import { NextApiRequest, NextApiResponse } from 'next'
import { getPreviewProjectBySlug } from 'lib/api'

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  const { secret, slug } = req.query

  if (secret !== process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const project = await getPreviewProjectBySlug(slug as string)

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!project) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched projects
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: `/projects/${project.slug}` })
  const url = `/projects/${project.slug}`
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  )
  res.end()
}
