import styles from './NavBar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import langs from '../lang/langs.json';

export default function NavBar() {
    const router = useRouter();
    const { locale } = router;

    console.log({langs});

    return <>
        <nav className={styles.navbar}>
            <div className={styles.buttons}>
                <Link href="/" className={router.asPath == '/' ? styles.active : null}>
                    <span className={styles.icon}>home</span>
                    <span className={styles.legend}>Home</span>
                </Link>
                <Link href="/education" className={router.asPath == '/education' ? styles.active : null}>
                    <span className={styles.icon}>school</span>
                    <span className={styles.legend}>Education</span>
                </Link>
                <Link href="/projects" className={router.asPath == '/projects' ? styles.active : null}>
                    <span className={styles.icon}>construction</span>
                    <span className={styles.legend}>Projects</span>
                </Link>
                <Link href="/contact" className={router.asPath == '/contact' ? styles.active : null}>
                    <span className={styles.icon}>call</span>
                    <span className={styles.legend}>Contact</span>
                </Link>
            </div>
            <div className={styles.languageSelect}>
                <img src={`/icons/${locale}.png`} />
                <div className={styles.popup}>
                    {langs.map((x) => 
                        <Link href={router.basePath} locale={x}>
                            <img className={x == locale ? 'active' : null}
                                src={`/icons/${x}.png`} />
                        </Link>
                    )}
                </div>
            </div>
            
        </nav>
        <div className={styles.spacer}></div>
    </>
}