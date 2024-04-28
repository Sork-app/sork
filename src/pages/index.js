import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/homepage/Hero'
import Header from '../components/general/Header'
import Head from "next/head";


import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })


export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/Sork_Logo_GrayBG.png" />
    </Head>
    <main
      className={`${poppins.className}`}

    >
      <Header />

      <Hero />
    </main>
    </>
  )
}
