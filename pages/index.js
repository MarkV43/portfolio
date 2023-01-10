import Head from 'next/head'
import NavBar from '../components/NavBar'
import { useIntl } from '../lib/intl-context';
import styles from '../styles/Home.module.css'

export default function Home() {
    const intl = useIntl();

    return (
        <>
            <Head>
                <title>{intl.get("home.title")}</title>
                <meta name="description" content="Marcelo's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.video}>
                        <video controls>
                            <source src="https://youtu.be/dQw4w9WgXcQ" />
                            {intl.get("video-not-supported")}
                        </video>
                    </div>
                    <div className={styles.about}>
                        <h2>{intl.get("home.about-me")}</h2>
                        <p>{intl.get("home.description")}</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.name}>{intl.get("first-name")}<br/>{intl.get("last-name")}</div>
                    <div className={styles.photo}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.2 2.75 2.614">
                            <mask id="photo-mask">
                                <path d="m 2.75 1.01 c 0 -1 -1 -1 -2 -1 s -1 1 0 2 s 2 0 2 -1 z" fill="#ffffff"/>
                                <path d="M 0 1 L 0 -0.2 L 2.75 -0.2 L 2.75 1 Z" fill="#ffffff"/>
                            </mask>
                            <path d="m 2.75 1 c 0 -1 -1 -1 -2 -1 s -1 1 0 2 s 2 0 2 -1 z" fill="#000000"/>
                            <image href='/photo.png' x="-0.5" y="-1.5" height="4" width="4" mask="url(#photo-mask)"></image>
                        </svg>
                    </div>
                </div>

                
            </main>

            <NavBar />
        </>
    )
}
