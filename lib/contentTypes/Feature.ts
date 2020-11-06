import { Image } from './generic'
export interface Feature {
  heading: string
  image: Image
  imageLeft?: boolean
  bottomSpacer?: boolean
  backgroundColor?: string
  description: string
}
