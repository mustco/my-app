import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

// fetch('/api/hello')
//   .then((res) => res.json())
//   .then((data) => console.log(data))

export default function Home() {
  return (
    <div>
      <Head>
        {/* disarankan title di pages masing2 */}
      <title>My App</title> 
      </Head>
    <div>Hello Adnan Developer!</div>
    </div>
  )
}
