import styles from './NavBar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import langs from '../lang/langs.json';

export default function NavBar() {
    const router = useRouter();
    const { locale } = router;

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
                <Link href="/interview" className={router.asPath == '/interview' ? styles.active : null}>
                    <span className={styles.icon}>support_agent</span>
                    <span className={styles.legend}>Interview</span>
                </Link>
            </div>
            <div className={styles.languageSelect}>
                <Image src={`/icons/${locale}.png`} alt={locale} width={500} height={500} />
                <div className={styles.popup}>
                    {langs.map((x) => 
                        <Link key={x} href={router.basePath} locale={x}>
                            <Image className={x == locale ? styles.active : null}
                                src={`/icons/${x}.png`}
                                alt={x}
                                width={500} height={500} />
                        </Link>
                    )}
                </div>
            </div>
            
        </nav>
        <div className={styles.spacer}></div>
    </>
}