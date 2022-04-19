import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import Navigation from '../src/components/Navigation'
import { AuthContextProvider } from '../src/context/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthContextProvider>
    <Layout>
      <Navigation />
      <Component {...pageProps} />
    </Layout>
  </AuthContextProvider>
}

export default MyApp
