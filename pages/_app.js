import Head from 'next/head'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js integration with Contentful CMS</title>
        <meta name="description" content="Contentful cms integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </div>

  ) 
}

export default MyApp
