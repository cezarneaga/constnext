import Input from './input'

type Dict = Record<string, any>

const variants = {
  flushed: (props: Dict) => Input.variants.flushed(props).field,
}

const defaultProps = {
  variant: 'flushed',
}

export default {
  variants,
  defaultProps,
}
