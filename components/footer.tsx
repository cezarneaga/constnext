import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { Follow } from 'components/follow'
import { Alert } from 'components/alert'
import { Link } from '@chakra-ui/next-js'
export function Footer({ preview }: { preview: boolean }) {
  const year = new Date().getFullYear()
  return (
    <Box backgroundColor='gray.700' px='4'>
      <Grid templateColumns={['1fr', '1fr', 'repeat(3, minmax(220px, 1fr))']} gap={6} maxWidth='1280px' py='8' mx='auto'>
        <Flex alignItems='center' justifyContent={['center', 'center', 'flex-start']}>
          <Follow />
        </Flex>
        <Flex alignItems='center' justifyContent={['center', 'center', 'flex-start']}>
          <Text color='gray.300' textAlign='center' width='100%'>
            &copy; const NEXT - {year}
          </Text>
        </Flex>
        <Flex alignItems='center' justifyContent={['center', 'center', 'flex-end']}>
          <Link href='/impressum' color='gray.300'>
            Impressum
          </Link>
          {process.env.NODE_ENV === 'development' && <Alert preview={preview} />}
        </Flex>
      </Grid>
    </Box>
  )
}
