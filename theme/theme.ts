import { extendTheme } from '@chakra-ui/react'
import Input from './components/input'
import Textarea from './components/textarea'
import Button from './components/button'
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2b5d93',
    600: '#4278b3',
    500: '#4278b3',
    400: '#699acf',
    300: '#93C5FD',
    200: '#BFDBFE',
    100: '#DBEAFE',
    50: '#EFF6FF',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  translucid: {
    black: 'rgba(33, 41, 51, 0.76)',
    white: 'rgba(255,255,255,0.76)',
  },
}
const fonts = {
  body: '"Open Sans", Arial, system-ui, sans-serif',
  heading: '"Montserrat", Helvetica, Arial, Lucida, sans-serif',
}
export const customTheme = extendTheme({
  colors,
  fonts,
  components: {
    Input,
    Textarea,
    Button,
  },
})
