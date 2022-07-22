import Footer from './Footer'
import Navbar from './Navbar'

import Head from 'next/dist/shared/lib/head'

export default function Layout({children}) {
  return (
    <>
    <Head>
        <link rel="shortchut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
    </Head>
        <Navbar />
        <main className="main-container">{children}</main>
        <Footer />
    </>
  )
}
