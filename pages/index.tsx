import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Tip } from './types'

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/tips')
  const { tips } = await res.json()

  const tip = tips[Math.floor(Math.random() * tips.length)]

  return {
    props: {
      tip: tip
    }
  }
}

interface Props {
  tip: Tip
}

const Home = ({ tip }: Props) => {

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
