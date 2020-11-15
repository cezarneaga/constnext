import { Image } from './generic'
import { Feature } from './Feature'

export interface Project {
  title: string
  slug: string
  description: string
  details: string[]
  stack: string[]
  type: string[]
  numbers?: {
    absolute: {
      name: string
      value: string
    }[]
    relative: {
      name: string
      value: string
    }[]
  }
  image: Image
  mozaicCollection: { items: Image[] }
  featuresCollection?: { items: Feature[] }
  sys: {
    id: string
    publishedAt: string
    firstPublishedAt: string
  }
}
