import { Box, Flex, Grid, Text } from '@chakra-ui/core'
import { Follow } from 'components/follow'
import { InternalLink } from 'components/internal-link'
import { Alert } from 'components/alert'
export function Footer({ preview }: { preview: boolean }) {
  const year = new Date().getFullYear()
  return (
    <Box backgroundColor="gray.900" px="4">
      <Grid
        templateColumns={['1fr', '1fr', 'repeat(3, minmax(220px, 1fr))']}
        gap={6}
        maxWidth="1280px"
        py="8"
        mx="auto">
        <Flex
          alignItems="center"
          justifyContent={['center', 'center', 'flex-start']}>
          <Follow />
        </Flex>
        <Flex
          alignItems="center"
          justifyContent={['center', 'center', 'flex-start']}>
          <Text color="gray.400" textAlign="center" width="100%">
            &copy; Cezar Neaga e.U - {year}
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent={['center', 'center', 'flex-end']}>
          <InternalLink href="/imprint" color="gray.400">
            Imprint
          </InternalLink>
          {process.env.NODE_ENV === 'development' && (
            <Alert preview={preview} />
          )}
        </Flex>
      </Grid>
    </Box>
  )
}
