import AboutMe from "../../AboutMe/AbouteMe";
import styles from './Home.module.css'

function Home() {
  return (
    <main className={styles.main}>
      <AboutMe />
    </main>
  )
}

export default Home;