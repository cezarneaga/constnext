import { Zap } from 'react-feather'
import { InternalLink } from './internal-link'

export function Alert({ preview }: { preview: boolean }) {
  return (
    <>
      {preview && (
        <InternalLink href="/api/exit-preview">Click here</InternalLink>
      )}
    </>
  )
}
