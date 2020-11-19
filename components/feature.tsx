import { Box, Heading, useColorModeValue, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { Feature } from 'lib/contentTypes'

export function FeatureView({
  imageLeft,
  backgroundColor,
  image,
  heading,
  description,
  bottomSpacer,
}: Feature) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.700', 'white')
  return (
    <Flex
      flexDirection={['column', 'column', imageLeft ? 'row-reverse' : 'row']}
      height="auto"
      width="100%"
      alignItems="stretch"
      overflow="hidden"
      bgColor={bgColor}>
      <Box
        width={['100%', '100%', '50%']}
        height={['auto', 'auto', '246px', '328px', '460px']}>
        <Image
          src={image.url}
          alt={`${image.title} - ${image.description}`}
          width={720}
          height={460}
          layout="responsive"
        />
      </Box>
      <Flex
        flexDirection="column"
        justifyContent="center"
        textAlign="left"
        my={['4', '4', 0]}
        pr={['4', '4', imageLeft ? '4' : 'calc(((100% - 1280px) / 2) + 1em)']}
        pl={['4', '4', imageLeft ? 'calc(((100% - 1280px) / 2) + 1em)' : '4']}
        width={['100%', '100%', '50%']}>
        <Heading
          fontSize={['4xl', '4xl', '2xl', '4xl']}
          color={color}
          textTransform="uppercase"
          lineHeight="base">
          {heading}
        </Heading>
        <Heading
          fontSize={['lg', 'lg', 'md', 'lg']}
          color={color}
          lineHeight="base">
          {description}
        </Heading>
      </Flex>
      {bottomSpacer && (
        <Box
          bgColor={useColorModeValue('brand.400', 'gray.800')}
          height={[0, 0, '4em']}
        />
      )}
    </Flex>
  )
}
