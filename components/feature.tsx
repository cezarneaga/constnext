import { Box, Heading, Text, Center, Flex } from '@chakra-ui/react'
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
  return (
    <Flex
      flexDirection={imageLeft ? 'row-reverse' : 'row'}
      height="auto"
      width="100%"
      alignItems="stretch"
      overflow="hidden"
      bgColor={backgroundColor}>
      <Box width="50%" height="460px">
        <Image
          src={image.url}
          alt={image.description}
          width={720}
          height={460}
          layout="responsive"
        />
      </Box>
      <Flex
        flexDirection="column"
        justifyContent="center"
        textAlign="left"
        px={'calc((100% - 1280px) / 2)'}
        color={backgroundColor}
        width="50%">
        <Heading
          fontSize="4xl"
          color="gray.900"
          textTransform="uppercase"
          lineHeight="base">
          {heading}
        </Heading>
        <Heading fontSize="lg" color="gray.900" lineHeight="base">
          {description}
        </Heading>
      </Flex>
      {bottomSpacer && <Box bgColor="brand.400" height="4em" />}
    </Flex>
  )
}
