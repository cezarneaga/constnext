import { ReactElement } from 'react'
import Alert from 'components/alert'

export default function Layout({
  preview,
  children,
}: {
  preview: boolean
  children: ReactElement
}) {
  return (
    <>
      <Alert preview={preview} />
      <main>{children}</main>
    </>
  )
}
