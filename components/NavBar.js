import styles from './NavBar.module.css';
import Link from 'next/link';

export default function NavBar() {
    return <><nav className={styles.navbar}>
        <Link href="/"><span>Marcelo Vogt</span></Link>
        <div className={styles.space}></div>
        <Link href="/education"><span>Education</span></Link>
        <Link href="/contact"><span>Contact</span></Link>
    </nav>
    <div className={styles.spacer}></div>
    </>
}