import { extendTheme } from '@chakra-ui/core'
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  gray: {
    900: '#353740',
  },
}

export const customTheme = extendTheme({ colors })
