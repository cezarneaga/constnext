import type { ReactNode } from 'react'
import { forwardRef } from 'react'
import type { LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import type { LinkProps as NextLinkProps } from 'next/dist/client/link'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
export type WithChildren<Props = {}> = Props & {
  children: ReactNode
}
export type InternalLinkProps =
  // enforce having children
  WithChildren &
    // `href` is included in `NextLinkProps`, `children` are taken care of
    Omit<ChakraLinkProps, 'href' | 'children'> &
    // `passHref` must be passed, `as` is proxied to not collide with chakras as
    Omit<NextLinkProps, 'passHref' | 'as'> & {
      linkAs?: NextLinkProps['as']
    }

export const InternalLink = forwardRef<HTMLAnchorElement, InternalLinkProps>(
  ({ href, shallow, children, prefetch, replace, scroll, linkAs, ...rest }, forwardRef) => {
    const linkProps: NextLinkProps = {
      as: linkAs,
      href,
      prefetch,
      replace,
      scroll,
      shallow,
    }

    const { pathname } = useRouter()
    const isActive = pathname === href

    return (
      <NextLink {...linkProps} passHref>
        <ChakraLink {...rest} ref={forwardRef} aria-current={isActive ? 'page' : undefined} _hover={{ textDecoration: 'none' }}>
          {children}
        </ChakraLink>
      </NextLink>
    )
  }
)
