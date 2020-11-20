import {
  Flex,
  Box,
  Grid,
  GridItem,
  Heading,
  Progress,
  useColorModeValue,
} from '@chakra-ui/react'
import { ArrowUpRight } from 'react-feather'
import { Numbers } from 'lib/contentTypes'
function Absolute({ value, name }: { value: string; name: string }) {
  return (
    <Box width={['100%', '50%', '50%', '25%']} display="inline-block">
      <Heading fontSize={50} textAlign="center" color="white">
        {value}
      </Heading>
      <Heading fontSize={16} textAlign="center">
        {name}
      </Heading>
    </Box>
  )
}
export function NumbersView({ numbers }: { numbers?: Numbers }) {
  const bgColor = useColorModeValue('brand.500', 'gray.900')
  return (
    <Flex
      flexDirection="column"
      backgroundColor={bgColor}
      width="100%"
      height="auto"
      m="0"
      px="4"
      alignItems="stretch"
      overflow="hidden">
      <Grid
        width="100%"
        maxW="1280px"
        mx="auto"
        py="8"
        flexWrap="wrap"
        templateColumns={'repeat(2, 1fr)'}
        templateRows={'repeat(2, 100px)'}
        gap={6}>
        <GridItem colSpan={1} rowSpan={1}>
          <Heading fontSize={14} lineHeight="1.8">
            Measuring project success is hard to do. Finding relevant indicators
            for each one is even harder. At the beginning of each project I set
            KPIs relating to the challenges tackled, the overall client goals
            and my personal objectives as a developer.
          </Heading>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          {numbers?.relative.map((d) => (
            <Box key={d.name} width="100%">
              <Heading fontSize={12} textTransform="uppercase" lineHeight={1.8}>
                {d.name} -{' '}
                <ArrowUpRight size={14} style={{ display: 'inline-block' }} />{' '}
                {d.value}%
              </Heading>
              <Progress
                width="100%"
                key={d.name}
                colorScheme="darkGray"
                size="xs"
                mb="4"
                value={parseFloat(d.value)}
              />
            </Box>
          ))}
        </GridItem>
        <GridItem colSpan={2} rowSpan={1}>
          {numbers?.absolute.map((number) => (
            <Absolute
              value={number.value}
              name={number.name}
              key={number.name}
            />
          ))}
        </GridItem>
      </Grid>
    </Flex>
  )
}
