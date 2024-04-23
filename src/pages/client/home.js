import Image from 'next/image'
import { Inter } from 'next/font/google'

import Loader from '../../components/general/Loader.js'


import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })


export default function Home() {
  return (
    <main
      className={`${poppins.className}`}
    >
      <Loader />
    </main>
  )
}
