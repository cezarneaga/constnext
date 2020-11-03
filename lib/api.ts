import { createClient } from 'contentful'
import { IProjectFields } from 'types/generated/contentful'
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: 'preview.contentful.com',
})

const getClient = (preview: boolean) => (preview ? previewClient : client)
export interface Project {
  title: string
  type?: string[]
  slug: string
  description?: string
  image: {
    url: string
    alt: string
  }
  mozaic?: {
    url: string
    alt: string
  }[]
  stack: string[]
  details?: string[]
  createdAt: string
  updatedAt: string
}
function parseProject({
  sys,
  fields,
}: {
  sys: any
  fields: IProjectFields
}): Project {
  return {
    title: fields.title,
    type: fields.type,
    slug: fields.slug,
    description: fields.description,
    image: {
      url: fields.image.fields.file.url,
      alt: fields.image.fields.title,
    },
    mozaic: fields?.mozaic?.map((m) => {
      return { url: m.fields.file.url, alt: m.fields.title }
    }),
    stack: fields.stack,
    details: fields.details,
    createdAt: sys.createdAt,
    updatedAt: sys.updatedAt,
  }
}

function parseProjectEntries(entries: any, cb = parseProject) {
  return entries?.items?.map(cb)
}

export async function getPreviewProjectBySlug(slug: string | string[]) {
  const entries = await getClient(true).getEntries({
    'content_type': 'project',
    'limit': 1,
    'fields.slug[in]': slug,
  })
  return parseProjectEntries(entries)[0]
}

export async function getAllProjectsWithSlug() {
  const entries = await client.getEntries({
    content_type: 'project',
    select: 'fields.slug',
  })
  const returnFields = (project: any) => project.fields
  return parseProjectEntries(entries, returnFields)
}

export async function getAllProjectsForHome(preview: boolean) {
  const entries = await getClient(preview).getEntries({
    content_type: 'project',
  })
  return parseProjectEntries(entries)
}

export async function getProjectAndMoreProjects(
  slug: string,
  preview: boolean
) {
  const entry = await getClient(preview).getEntries({
    'content_type': 'project',
    'limit': 1,
    'fields.slug[in]': slug,
  })
  const entries = await getClient(preview).getEntries({
    'content_type': 'project',
    'limit': 2,
    'order': '-fields.date',
    'fields.slug[nin]': slug,
  })

  return {
    project: parseProjectEntries(entry)[0],
    moreProjects: parseProjectEntries(entries),
  }
}
