import { Box, Flex, Grid, Text } from '@chakra-ui/core'
import { Follow } from 'components/follow'
import { InternalLink } from 'components/internal-link'
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <Box backgroundColor="gray.900" height="100%">
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        maxWidth="1280px"
        height="inherit"
        py="8"
        mx="auto">
        <Flex alignItems="center" justifyContent="flex-start">
          <Follow />
        </Flex>
        <Flex alignItems="center" justifyContent="flex-start">
          <Text color="gray.400" textAlign="center" width="100%">
            &copy; Cezar Neaga e.U - {year}
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="flex-end">
          <InternalLink href="/imprint" color="gray.400">
            Imprint
          </InternalLink>
        </Flex>
      </Grid>
    </Box>
  )
}
