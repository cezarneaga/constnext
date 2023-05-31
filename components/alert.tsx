import { Zap } from 'react-feather'
import { Link } from '@chakra-ui/next-js'

export function Alert({ preview }: { preview: boolean }) {
  return <>{preview && <Link href='/api/exit-preview'>Click here</Link>}</>
}
