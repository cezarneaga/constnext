import { extendTheme } from '@chakra-ui/react'
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2b5d93',
    600: '#4278b3',
    500: '#4278b3',
    400: '#699acf',
    300: '#699acf',
    200: '#699acf',
    100: '#699acf',
  },
  gray: {
    900: '#353740',
    800: '#212933',
    400: '#747d88',
    100: '#f7f7f7;',
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
export const customTheme = extendTheme({ colors, fonts })
