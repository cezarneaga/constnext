import { Compass, Code as CodeIcon, Server } from 'react-feather'
import { Heading, Link, Text, Code, Grid, Flex, Box, useTheme, useColorModeValue } from '@chakra-ui/react'
export function Impressum() {
  const theme = useTheme()
  const headingColor = useColorModeValue('gray.700', 'white')
  const textColor = useColorModeValue('gray.500', 'white')
  return (
    <Flex width='100%' height='auto' m='0' px='4' alignItems='stretch' overflow='hidden'>
      <Box width='100%' maxW='1280px' mx='auto' py='8'>
        <Box maxW={['100%', '80%', '68%']} mx='auto' mt='4'>
          <Heading size='xl' textTransform='uppercase' textAlign='left' color={headingColor}>
            Impressum
          </Heading>
          <Heading as='h3' textAlign='left' color={textColor} lineHeight='1.5em' fontSize='xl' fontWeight='700'>
            Cezar Neaga e.U
          </Heading>
          <Text>Cezar-Valentin Neaga</Text>
          <Text>Eingetragenes Einzelunternehmen</Text>
          <Text>Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik</Text>
          <Text>
            <strong>Tax No.:</strong> 208/7497
          </Text>
          <Text>
            <strong>VAT No.:</strong> ATU66988511
          </Text>
          <Text>
            <strong>Company Reg.:</strong> 104443F18
          </Text>
          <Text>
            <strong>MBA:</strong> 180/002363/2009
          </Text>
          <Text>
            <strong>Address: </strong>Hackenbergweg 51/4, 1190 Vienna
          </Text>
          <Text fontWeight='700' mt={4} fontSize='24'>
            Contact
          </Text>
          <Text>
            <strong>E-Mail: </strong>cezar at constnext.com
          </Text>
          <Text>
            <strong>Web: </strong>constnext.com
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}
