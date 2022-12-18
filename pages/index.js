import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcelo Vogt</title>
        <meta name="description" content="Marcelo's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.about}>
          <h1>Marcelo Vogt</h1>
          <h2>Control and Automation Engineering at UFSC (Brazil)</h2>
          <h2>Computer Science at ENSEEIHT (France)</h2>
        </div>

        
      </main>

      <NavBar />
    </div>
  )
}
