export const operationsDoc = `
  query ProjectList($limit: Int!) {
    projectCollection(limit: $limit) {
      items {
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
      }
    }
  }

  query ProjectBySlug($slug: String!, $preview: Boolean!) {
    projectCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
      items {
        sys{
          id
          publishedAt
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
          description
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
  query MoreProjects($slug: String!, $preview: Boolean!, $limit: Int!) {
    projectCollection(
      where: { slug_not_in: [$slug] }
      order: sys_publishedAt_DESC
      preview: $preview
      limit: $limit
    ) {
      items {
        sys {
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
      }
    }
  }
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
