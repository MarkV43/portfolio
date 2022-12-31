import Link from "next/link";
import NavBar from "../components/NavBar";
import styles from "../styles/Education.module.css";


export default function Education() {
    return <>
        <div className={styles.container}>
            <h1>Academic History</h1>

            <div className={styles.timeline}>
                <div className={styles.timeItem}>
                    <div>
                        <label>Web Programming</label>
                        <label>FIESC-SENAI</label>
                        <label>2016 - 2016</label>
                        <label>Course</label>
                    </div>
                    <Link href="https://fiesc.com.br/1">
                        <img src="https://fiesc.com.br/sites/default/files/inline-images/FIESC%20WEB%20big.png" />
                    </Link>
                </div>
                <div className={styles.timeItem}>
                    <div>
                        <label>Digital Games Development</label>
                        <label>FIESC-SENAI</label>
                        <label>2017 - 2018</label>
                        <label>Technical Training</label>
                    </div>
                    <Link href="https://fiesc.com.br/1">
                        <img src="https://fiesc.com.br/sites/default/files/inline-images/FIESC%20WEB%20big.png" />
                    </Link>
                </div>
                <div className={styles.timeItem}>
                    <div>
                        <label>Control and Automation Engineering</label>
                        <label>UFSC</label>
                        <label>2019 - 2023</label>
                        <label>Undergraduation</label>
                    </div>
                    <Link href="https://ufsc.br/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_UFSC_vertical_extenso.svg/1200px-Brasao_UFSC_vertical_extenso.svg.png" />
                    </Link>
                </div>
                <div className={styles.timeItem}>
                    <div>
                        <label>Embedded Programming Scholar</label>
                        <label>Kilobots UFSC</label>
                        <label>2019 - 2019</label>
                        <label>Voluntary Scholarship</label>
                    </div>
                    <Link href="https://kilobots.paginas.ufsc.br/">
                        <img src="https://kilobots.paginas.ufsc.br/files/2018/04/logo.png" />
                    </Link>
                </div>
                <div className={styles.timeItem}>
                    <div>
                        <label>Software Developer Intern</label>
                        <label>INESC</label>
                        <label>2019 - 2021</label>
                        <label>Internship</label>
                    </div>
                    <Link href="http://inescbrasil.org.br/?lang=en">
                        <img src="http://www.fastenmanufacturing.eu/wp-content/uploads/Site-Pictures/Logos/Partners/inescBrasil.png" />
                    </Link>
                </div>
                <div className={styles.timeItem}>
                    <div>
                        <label>Digital Game Developing Internship</label>
                        <label>Plot</label>
                        <label>2022 - 2022</label>
                        <label>Internship</label>
                    </div>
                    <Link href="https://www.plotkids.com/en">
                        <img src="https://www.abragames.org/uploads/5/6/8/0/56805537/explot-logo_1.png" />
                    </Link>
                </div>
                <div className={styles.timeItem}>
                    <div>
                        <label>Computer Networks</label>
                        <label>ENSEEIHT</label>
                        <label>2022 - 2024</label>
                        <label>Master's</label>
                    </div>
                    <Link href="https://www.enseeiht.fr/fr/index.html">
                        <img src="https://upload.wikimedia.org/wikipedia/fr/1/1b/Logo-toulouse-inp-N7.png" />
                    </Link>
                </div>
            </div>
        </div>

        <NavBar />
    </>
}