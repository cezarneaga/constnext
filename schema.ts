import gql from 'graphql-tag'
const ImageFragment = gql`
  fragment ImageFragment {
    url
    fileName
    description
    width
    height
  }
`
const ProjectCardFragment = gql`
  fragment ProjectCardFragment on Project {
    sys {
      id
      publishedAt
    }
    title
    slug
    stack
    image {
      ...
    }
  }
`
