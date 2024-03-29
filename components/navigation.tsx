import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Flex, Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import Image from 'next/image'
import { Menu, Moon, Sun, X } from 'react-feather'

export function Navigation() {
  const router = useRouter()
  const activeRoute = router.pathname
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(Moon, Sun)
  const bgColor = useColorModeValue('transparent', 'gray.800')
  const color = useColorModeValue('brand.900', 'brand.100')

  // when active route changes, we probably clicked on a nav link
  // in this case, collapse the nav dropdown for mobile users
  useEffect(() => {
    setShow(false)
  }, [activeRoute])

  return (
    <Flex
      alignItems='center'
      maxWidth='1280px'
      mx='auto'
      height={show ? '100%' : '60px'}
      bgColor={show ? bgColor : 'transparent'}
      py={'10px'}
      align='center'
      justify='space-between'
      px='4'
      wrap='wrap'
      color={color}>
      <Flex align='center' flexGrow={1}>
        <Link href='/' className='logo' marginRight='auto'>
          <Image src='/images/nav-logo.png' alt='const NEXT - Click to go back home' width={70} height={40} />
        </Link>
      </Flex>

      <Box display={['block', 'block', 'none']} onClick={handleToggle}>
        {!show ? <Menu size={30} strokeWidth={3} /> : <X size={30} strokeWidth={3} />}
      </Box>
      <Box
        display={[show ? 'block' : 'none', show ? 'block' : 'none', 'flex']}
        height={[show ? '100vh' : 'none', show ? '100vh' : 'none', 'auto']}
        alignItems='center'
        textAlign='right'
        width={['full', 'full', 'auto']}>
        <Link
          my={[20, 12, 0]}
          ml={6}
          fontSize={['4xl', '2xl', 'md', 'md']}
          fontWeight='semibold'
          display='block'
          borderBottom={activeRoute === '/projects' ? '4px' : '0'}
          borderColor='brand.400'
          href='/projects'>
          Projects
        </Link>
        <IconButton
          ml={6}
          size='md'
          borderWidth='0'
          aria-label='Switch color mode'
          float={[show ? 'right' : 'none', show ? 'right' : 'none']}
          onClick={() => {
            handleToggle()
            toggleColorMode()
          }}
          icon={<SwitchIcon />}
        />
      </Box>
    </Flex>
  )
}
