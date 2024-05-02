import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/homepage/Hero'
import Info from '../components/homepage/Info'
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
      className={`h-screen`}
    >

  <Hero />

<img className="absolute bottom-0 w-full h-1/6 opacity-50 z-0" style={{ pointerEvents: 'none' }} src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='250' preserveAspectRatio='none' viewBox='0 0 1440 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1006%26quot%3b)' fill='none'%3e%3cpath d='M17 250L267 0L526.5 0L276.5 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1007%26quot%3b)'%3e%3c/path%3e%3cpath d='M276.6 250L526.6 0L876.1 0L626.1 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1007%26quot%3b)'%3e%3c/path%3e%3cpath d='M479.20000000000005 250L729.2 0L1050.2 0L800.2 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1007%26quot%3b)'%3e%3c/path%3e%3cpath d='M739.8000000000001 250L989.8000000000001 0L1183.3000000000002 0L933.3000000000001 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1007%26quot%3b)'%3e%3c/path%3e%3cpath d='M1431 250L1181 0L984.5 0L1234.5 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)'%3e%3c/path%3e%3cpath d='M1156.4 250L906.4000000000001 0L796.9000000000001 0L1046.9 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)'%3e%3c/path%3e%3cpath d='M954.8 250L704.8 0L629.8 0L879.8 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)'%3e%3c/path%3e%3cpath d='M680.1999999999999 250L430.19999999999993 0L259.19999999999993 0L509.19999999999993 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)'%3e%3c/path%3e%3cpath d='M1273.9228664887848 250L1440 83.92286648878488L1440 250z' fill='url(%26quot%3b%23SvgjsLinearGradient1007%26quot%3b)'%3e%3c/path%3e%3cpath d='M0 250L166.07713351121512 250L 0 83.92286648878488z' fill='url(%26quot%3b%23SvgjsLinearGradient1008%26quot%3b)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1006'%3e%3crect width='1440' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1007'%3e%3cstop stop-color='rgba(255%2c 189%2c 89%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(255%2c 189%2c 89%2c 1)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1008'%3e%3cstop stop-color='rgba(255%2c 189%2c 89%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(255%2c 189%2c 89%2c 1)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"></img>

<div className='hidden'>
<Header />

<Info />
</div>
    </main>
    </>
  )
}
