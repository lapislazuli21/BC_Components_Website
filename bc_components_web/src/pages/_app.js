import '../styles/globals.css'
import Head from 'next/head'
import { Merriweather_Sans } from 'next/font/google'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

const merriweather_sans = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merri",
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${merriweather_sans.variable} font-merri bg-light w-full min-h-screen`}>
        <Navbar />
        <Component key={router.asPath} {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
