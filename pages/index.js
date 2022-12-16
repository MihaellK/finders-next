import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Finders</title>
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>LorenLorenLorenLorenLorenLorenLoren</p>
        <Link legacyBehavior href={'/localizadores/info'}>
          <a  className={styles.btn}>Equipamento Especifico 1</a>
        </Link>
      </div>
    </>
    
  )
}
