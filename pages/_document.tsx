import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/images/favicon.ico' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Open+Sans:wght@300;400;600&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode='light' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
