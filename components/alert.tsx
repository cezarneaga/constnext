export default function Alert({ preview }: { preview: boolean }) {
  return (
    <div>
      <div>
        {preview ? (
          <>
            This is page is a preview.{' '}
            <a href="/api/exit-preview">Click here</a> to exit preview mode.
          </>
        ) : (
          <>
            The source code for this project is{' '}
            <a href={`https://github.com/cezarneaga`}>available on GitHub</a>.
          </>
        )}
      </div>
    </div>
  )
}
