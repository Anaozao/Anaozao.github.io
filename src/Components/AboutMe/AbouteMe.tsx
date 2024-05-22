import { TiHtml5 } from 'react-icons/ti';
import styles from './AboutMe.module.css'
import { FaCss3, FaGitAlt, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import { VscVscodeInsiders } from 'react-icons/vsc';

function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <h1 className={styles.title}>Quem sou eu?</h1>
      <div className={styles.paragraphDiv}>
        <p className={styles.paragraph}>Me chamo Túlio, 23 anos, atualmente estudante de Desenvolvimento Web Full Stack pela Trybe.</p>
        <p className={styles.paragraph}>No momento estou estou no módulo de Frontend e na sequencia iniciarei o Backend.</p>
        <p className={styles.paragraph}>Na seção de "Projetos", poderão conferir alguns dos projetos que desenvolvi até o momento.</p>
      </div>
      <div className={styles.skillsDiv}>
        <h2>Skills</h2>
        <ul className={styles.skillsList}>
          <li className={styles.skills}
          >
            <p>HTML5</p>
            <TiHtml5 className={styles.html}/>
          </li>
          <li className={styles.skills}
          >
            <p>CSS</p>
            <FaCss3 className={styles.css}/>
          </li>
          <li className={styles.skills}
          >
            <p>React</p>
            <FaReact className={styles.react}/>
          </li>
          <li className={styles.skills}>
            <p>Vite</p>
            <img  className={styles.vite} src="Vite.js.svg" alt="vite logo" />
          </li>
          <li className={styles.skills}
          >
            <p>Node</p>
            <FaNodeJs className={styles.node}/>
          </li>
          <li
            className={styles.skills}
          >
            <p>VS Code</p>
            <VscVscodeInsiders className={styles.vscode}/>
          </li>
          <li
            className={styles.skills}
          >
            <p>Git</p>
            <FaGitAlt className={styles.git}/>
          </li>
          <li className={styles.skills}
          >
            <p>GitHub</p>
            <FaGithub className={styles.gitHub}/>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutMe;