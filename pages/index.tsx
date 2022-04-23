import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const tip = {
    title: "Tip",
    description: "This is a tip",
    author: "John Doe",
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Random tips</title>
        <meta name="description" content="Random tips whenever you refresh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {tip.description}
        </h1>
        <p>{tip.title} by {tip.author}</p>
      </main>
    </div>
  )
}

export default Home
