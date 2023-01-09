import Image from "next/image";
import NavBar from "../components/NavBar";
import styles from "../styles/Projects.module.css";
import greenGoblinImg from "../public/green-goblin.png";
import Link from "next/link";


export default function Projects() {
    return <>
        <main className={styles.main}>
            <h1>Projects</h1>
            
            <section>
                <h2>Green Goblin</h2>
                
                <p>
                    A tile-based puzzle game designed and developed by me and
                    my girlfriend, where you are attached to a weight and must
                    manage your way to the end of each level, each and everyone
                    with challenges and new things to make your life even harder!
                    <br/><br/>
                    <Link href="https://github.com/GabyV43/green-goblin">GitHub repository</Link>
                </p>

                <Image src={greenGoblinImg} />
            </section>

            <section>
                <h2>Angle controller</h2>
                
                <p>
                    The goal of the "Control Instrumentation" project is to
                    use a motor's voltage to stabilize a pendulum at a desired
                    angle, taking into account any disturbances that may occur.
                    This is achieved by adjusting the voltage based on the
                    desired angle of the pendulum.
                </p>

                <video controls muted>
                    <source src="instrumentation.mp4" type="video/mp4"/>
                </video>
            </section>

            <section>
                <h2>Controller through Network</h2>
                
                <p>
                    The work, implemented in Python, consists of three stations
                    (a simulator, a controller, and a control panel) that communicate
                    with each other. The control panel sends data to change control
                    parameters in the controller through TCP. The controller consists
                    of a discrete control system that interacts with the simulator
                    via UDP. The simulator shows a faithful representation of the
                    real system to the user and also sends the current state to the
                    controller via UDP.

                    <br/><br/>
                    <Link href="https://github.com/MarkV43/tcp-udp">GitHub repository</Link>
                </p>

                <video controls muted>
                    <source src="tcp-udp.mp4" type="video/mp4"/>
                </video>
            </section>
        </main>

        <NavBar />
    </>
}