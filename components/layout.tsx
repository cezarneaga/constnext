import { ReactElement } from 'react'

// import Alert from 'components/alert'
import { Box, Grid, useColorModeValue } from '@chakra-ui/core'
import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'

export default function Layout({
  preview,
  children,
}: {
  preview: boolean
  children: ReactElement
}) {
  const borderColor = useColorModeValue('gray.100', 'gray.700')
  const bgColor = useColorModeValue('white', 'gray.800')
  const boxShadow = useColorModeValue(
    '0 0 7px rgba(0, 0, 0, 0.1)',
    '0 0 7px rgba(255, 255, 255, 0.1)'
  )
  return (
    <Grid
      gap="0"
      templateRows="auto auto 150px"
      templateAreas="'navi' 'main' 'footer'">
      <Box
        as="nav"
        gridArea="navi"
        pos="sticky"
        top="0"
        zIndex="2"
        borderBottom="1px"
        borderColor={borderColor}
        bg={bgColor}
        boxShadow={boxShadow}>
        <Navigation />
      </Box>

      <Box as="main" gridArea="main">
        {children}
      </Box>
      <Box as="footer" gridArea="footer">
        <Footer />
        {/* <Alert preview={preview} /> */}
      </Box>
    </Grid>
  )
}
