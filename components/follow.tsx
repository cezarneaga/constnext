import { Link } from '@chakra-ui/core'

import { Facebook, Twitter, Linkedin, GitHub } from 'react-feather'
import { githubUrl, twitterUrl, facebookUrl, linkedinUrl } from 'utils/urls'
const followItems = [
  {
    icon: <GitHub color="#666" size={18} />,
    href: githubUrl,
  },

  {
    icon: <Twitter color="#666" size={18} />,
    href: twitterUrl,
  },

  {
    icon: <Facebook color="#666" size={18} />,
    href: facebookUrl,
  },

  {
    icon: <Linkedin color="#666" size={18} />,
    href: linkedinUrl,
  },
]

export function Follow() {
  return (
    <>
      {followItems.map((followItem, index) => (
        <Link
          key={index}
          href={followItem.href}
          isExternal
          padding="4"
          alignSelf="center">
          {followItem.icon}
        </Link>
      ))}
    </>
  )
}
