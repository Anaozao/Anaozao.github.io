import { NavLink } from "react-router-dom"
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <NavLink to='/' className={styles.homeLink}><p className={styles.name}>Túlio Paris</p></NavLink>
      </div>
      <div className={styles.navConstainer}>
        <NavLink className={styles.navLinks} to='/projects'>Projetos</NavLink>
        <NavLink to='/contact' className={styles.navLinks} >Contato</NavLink>
      </div>
    </header>
  )
}

export default Header