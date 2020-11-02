import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cezar Neaga - Simplify, Create, Amaze</title>
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <footer>
        <a
          href="https://cezarneaga.eu"
          target="_blank"
          rel="noopener noreferrer">
          Powered by next
        </a>
      </footer>
    </div>
  )
}
