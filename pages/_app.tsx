import type { AppProps /*, AppContext */ } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { customTheme } from 'theme/theme'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  )
}

export default MyApp
