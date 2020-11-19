import { getColor, mode } from '@chakra-ui/theme-tools'
function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props
  return {
    focusBorderColor: fc || mode('brand.500', 'brand.300')(props),
    errorBorderColor: ec || mode('red.500', 'red.300')(props),
  }
}
function variantFlushed(props: Record<string, any>) {
  const { theme } = props
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props)

  return {
    field: {
      boxShadow: 'none',
      borderBottom: '1px solid',
      borderColor: mode('gray.700', 'white')(props),
      borderRadius: 0,
      pl: 0,
      pr: 0,
      bg: 'transparent',
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _focus: {
        borderColor: getColor(theme, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme, fc)}`,
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0px 1px 0px 0px ${getColor(theme, ec)}`,
      },
      _placeholder: {
        color: mode('gray.900', 'white')(props),
        fontWeight: 600,
      },
    },
    addon: {
      borderBottom: '2px solid',
      borderColor: 'inherit',
      borderRadius: 0,
      paddingX: 0,
      bg: 'transparent',
    },
  }
}
const variants = { flushed: variantFlushed }
const defaultProps = {
  variant: 'flushed',
}
export default {
  variants,
  defaultProps,
}
