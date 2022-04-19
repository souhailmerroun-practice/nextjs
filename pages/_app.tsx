import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import Navigation from '../src/components/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  const onClickButtonLogout = () => {
    console.log('im logging out')
  }
  return <Layout>
    <Navigation onClickButtonLogout={onClickButtonLogout} />
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
