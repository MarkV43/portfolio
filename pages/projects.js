import Image from "next/image";
import NavBar from "../components/NavBar";
import styles from "../styles/Projects.module.css";
import greenGoblinImg from "../public/green-goblin.png";
import Link from "next/link";
import Head from "next/head";
import { useIntl } from "../lib/intl-context";


export default function Projects() {
    const intl = useIntl();

    return <>
        <Head>
            <title>{intl.get("projects.title")}</title>
        </Head>

        <main className={styles.main}>
            <h1>{intl.get("projects.title")}</h1>
            
            <section>
                <h2>{intl.get("projects.green-goblin.title")}</h2>
                
                <p>
                    {intl.get("projects.green-goblin.description")}
                    <br/><br/>
                    <Link href="https://github.com/GabyV43/green-goblin">{intl.get("github-repository")}</Link>
                </p>

                <Image src={greenGoblinImg} />
            </section>

            <section>
                <h2>{intl.get("projects.angle-controller.title")}</h2>
                
                <p>{intl.get("projects.angle-controller.description")}</p>

                <video controls muted>
                    <source src="/videos/instrumentation.mp4" type="video/mp4"/>
                </video>
            </section>

            <section>
                <h2>{intl.get("projects.network-controller.title")}</h2>
                
                <p>
                    {intl.get("projects.network-controller.description")}
                    <br/><br/>
                    <Link href="https://github.com/MarkV43/tcp-udp">{intl.get("github-repository")}</Link>
                </p>

                <video controls muted>
                    <source src="/videos/tcp-udp.mp4" type="video/mp4"/>
                </video>
            </section>
        </main>

        <NavBar />
    </>
}