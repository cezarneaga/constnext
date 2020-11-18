import { ReactElement } from 'react'
import { useHasScrolledDown } from 'lib/useHasScrolledDown'

import { Box, Flex, Grid, useColorModeValue } from '@chakra-ui/react'
import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'

export default function Layout({
  preview,
  children,
}: {
  preview: boolean
  children: ReactElement
}) {
  const hasScrolledDown = useHasScrolledDown()
  const borderColor = useColorModeValue('gray.100', 'gray.700')
  const bgColor = useColorModeValue(
    hasScrolledDown ? 'translucid.white' : 'white',
    hasScrolledDown ? 'translucid.black' : 'gray.800'
  )
  const boxShadow = useColorModeValue(
    '0 0 7px rgba(0, 0, 0, 0.1)',
    '0 0 7px rgba(22, 31, 41, 0.9)'
  )
  return (
    <Grid
      gap="0"
      templateRows="auto auto 110px"
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
        <Flex width="100%" flexDirection="column" minH="80vh">
          {children}
        </Flex>
      </Box>
      <Box as="footer" gridArea="footer">
        <Footer preview={preview} />
      </Box>
    </Grid>
  )
}
