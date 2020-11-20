import { Image } from './generic'
import { Feature } from './Feature'
export interface Numbers {
  absolute: {
    name: string
    value: string
  }[]
  relative: {
    name: string
    value: string
  }[]
}
export interface Project {
  title: string
  slug: string
  description: string
  details: string[]
  stack: string[]
  type: string[]
  numbers?: Numbers
  image: Image
  mozaicCollection: { items: Image[] }
  featuresCollection?: { items: Feature[] }
  sys: {
    id: string
    publishedAt: string
    firstPublishedAt: string
  }
}
