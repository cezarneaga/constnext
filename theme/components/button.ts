import { mode, transparentize } from '@chakra-ui/theme-tools'

type Dict = Record<string, any>

const baseStyle = {
  lineHeight: '1.2',
  borderRadius: 'md',
  fontWeight: 'semibold',
  _focus: {
    boxShadow: 'outline',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  _hover: {
    _disabled: {
      bg: 'initial',
    },
  },
}

function variantGhost(props: Dict) {
  const { colorScheme: c, theme } = props

  if (c === 'gray') {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    }
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme)
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme)

  return {
    // color: mode(`${c}.600`, `${c}.200`)(props),
    bg: 'transparent',
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props),
      color: mode(`${c}.900`, `${c}.200`)(props),
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props),
    },
  }
}

function variantOutline(props: Dict) {
  const { colorScheme: c } = props
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props)
  return {
    borderWidth: '4px',
    borderColor: c === 'gray' ? borderColor : `${c}.700`,
    ...variantGhost(props),
  }
}

const variants = {
  outline: variantOutline,
}

const defaultProps = {
  variant: 'outline',
  size: 'lg',
  colorScheme: 'gray',
}
const sizes = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: 'xl',
    px: 6,
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: 'md',
    px: 4,
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: 'sm',
    px: 3,
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: 'xs',
    px: 2,
  },
}
export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
}
