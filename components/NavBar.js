import styles from './NavBar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();

    return <>
        <nav className={styles.navbar}>
            <Link href="/" className={router.asPath == '/' ? styles.active : null}>
                <span className={styles.icon}>home</span>
                <span className={styles.legend}>Home</span>
            </Link>
            <Link href="/education" className={router.asPath == '/education' ? styles.active : null}>
                <span className={styles.icon}>menu_book</span>
                <span className={styles.legend}>Education</span>
            </Link>
            <Link href="/contact" className={router.asPath == '/contact' ? styles.active : null}>
                <span className={styles.icon}>call</span>
                <span className={styles.legend}>Contact</span>
            </Link>
        </nav>
        <div className={styles.spacer}></div>
    </>
}