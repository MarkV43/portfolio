import Head from "next/head";
import styles from "../styles/Interview.module.css";
import { useIntl } from "../lib/intl-context";
import NavBar from "../components/NavBar";

export default function Interview() {
    const intl = useIntl();

    const paragraphs = intl.get("interview.content").split('\n');

    return <>
        <Head>
            <title>{intl.get("interview.title")}</title>
        </Head>

        <main className={styles.main}>
            <h1>{intl.get("interview.title")}</h1>

            <p>{intl.get("interview.description")}</p>

            <section>{paragraphs.map((p, i) => <p key={i}>{p}</p>)}</section>
        </main>

        <NavBar />
    </>;
}