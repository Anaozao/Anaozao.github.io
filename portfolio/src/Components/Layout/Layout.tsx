import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './Layout.module.css'

function Layout() {
  return (
    <section className={styles.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </section>
  )
}

export default Layout;