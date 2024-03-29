export const projectListDoc = `
query ProjectList($limit: Int!) {
    projectCollection(limit: $limit) {
      items {
        sys{
          id
          publishedAt
          firstPublishedAt
        }
        title
        description
        slug
        stack
        image {
          url
          fileName
          title
          width
          height
        }
      }
    }
  }`
export const projectsBySlugDoc = `
query ProjectBySlug($slug: String!, $preview: Boolean!) {
    projectCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
      items {
        sys{
          id
          publishedAt
          firstPublishedAt
        }
        title
        type
        description
        numbers
        details
        stack
        slug
        image {
          url
          fileName
          title
          width
          height
        }
        mozaicCollection {
          items {
            title
            description
            url
            width
            height
          }
        }
        featuresCollection {
          items {
            heading
            image {
              url
              title
              description
              width
              height
            }
            imageLeft
            bottomSpacer
            backgroundColor
            description
          }
        }
      }
    }
  }
`
export const moreProjectsDoc = `
  query MoreProjects($slug: String!, $limit: Int!) {
    projectCollection(
      where: { slug_not_in: [$slug] }
      order: sys_publishedAt_DESC
      limit: $limit
    ) {
      items {
        sys {
          id
          publishedAt
          firstPublishedAt
        }
        title
        slug
        stack
        image {
          url
          fileName
          title
          width
          height
        }
      }
    }
  }
`
export const allProjectsWithSlugsDoc = `
  query AllProjectsWithSlugs {
    projectCollection(
      where: { slug_exists: true }
      order: sys_publishedAt_DESC
    ) {
      items {
        slug
      }
    }
  }
`
