import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const ROTIDER = [
  {
    'time': "2:30",
    'meter': 1250
  },
  {
    'time': "2:10",
    'meter': 1050
  },
  {
    'time': "2:40",
    'meter': 1450
  },  {
    'time': "2:50",
    'meter': 1250
  }
];

export default function Home() {
  const [maxMeter, setMaxMeter] = React.useState(0);

  

  const filteredRowingTimes = () => {
    return ROTIDER.filter(({time,meter}) => meter <= maxMeter)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div>
          <h2>Ro tider</h2>
          <label>Maksmeter </label>
          <input type="text" name="maxMeter" placeholder="Skriv inn meter" 
            onChange={(event) => {
              setMaxMeter(parseInt(event.target.value))
            }}
          />
          <p>Nåværende: {maxMeter} meter</p>
          <ul>
            {filteredRowingTimes().map((roTid) => 
              <li key={roTid.time}>{roTid.time} - {roTid.meter} meter</li>
            )}
          </ul>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
