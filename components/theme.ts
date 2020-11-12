import { extendTheme } from '@chakra-ui/core'
import { createBreakpoints } from '@chakra-ui/theme-tools'

// Then add your custom breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
})
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2b5d93',
    400: '#4278b3',
    300: '#699acf',
  },
  gray: {
    900: '#353740',
    800: '#212933',
  },
  transparent: {
    black: 'rgba(33, 41, 51, 0.76)',
    white: 'rgba(255,255,255,0.76)',
  },
}
const fonts = {
  body: '"Open Sans", Arial, system-ui, sans-serif',
  heading: '"Montserrat", Helvetica, Arial, Lucida, sans-serif',
}
export const customTheme = extendTheme({ colors, fonts, breakpoints })
