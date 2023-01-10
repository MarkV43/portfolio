import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/NavBar";
import { useIntl } from "../lib/intl-context";
import styles from "../styles/Contact.module.css";


export default function Contact() {
    const intl = useIntl();

    return <>
        <Head>
            <title>{intl.get("contact.title")}</title>
        </Head>

        <div className={styles.container}>
            <h1 className={styles.title}>{intl.get("contact.title")}</h1>
            <div className={styles.social}>
                <Link href="https://github.com/MarkV43">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                </Link>
                <Link href="https://www.linkedin.com/in/marcelo-vogt/">
                    <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" />
                </Link>
                <Link href="https://wa.me/33766720854">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" />
                </Link>
                <Link href="mailto:marcelovogt43@gmail.com">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" />
                </Link>
            </div>

            <h2 className={styles.hesitate}>{intl.get("contact.hesitate")}</h2>

            <div className={styles.languages}>
                <div className={styles.flag}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg" />
                    <label>Native</label>
                </div>
                <div className={styles.flag}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" />
                    <label>Fluent</label>
                </div>
                <div className={styles.flag}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Flag_of_France_%28lighter_variant%29.svg" />
                    <label>B2</label>
                </div>
                <div className={styles.flag}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" />
                    <label>A2</label>
                </div>
                <div className={styles.flag}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg" />
                    <label>A2</label>
                </div>
            </div>
        </div>
        
        <NavBar />
    </>
}