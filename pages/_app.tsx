import type { AppProps /*, AppContext */ } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo.config'
import { customTheme } from 'components/theme'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
