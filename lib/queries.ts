export const operationsDoc = `
  query projectList($limit: Int!) {
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

  query ProjectBySlug($slug: String!) {
    projectCollection(limit: 1, where: {slug: $slug}) {
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
`
