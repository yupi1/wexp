import Head from 'next/head'
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>          
      <title>Wood export from UA</title>
      <Component {...pageProps} />
    </>
  )
}