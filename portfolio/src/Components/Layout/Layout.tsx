import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import styles from './Layout.module.css'

function Layout() {
  return (
    <section className={styles.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
    </section>
  )
}

export default Layout;