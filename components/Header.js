import Logo from "../public/dia_trade.svg";

import styles from './../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header_container}>
      <nav className={styles.navigation_menu}>
        <a href="#">
          <Logo className="logo" />
        </a>

        <ul className={styles.nav_list}>
          <li className={styles.nav_item}><a className={styles.nav_link} href="">About</a></li>
          <li className={styles.nav_item}><a className={styles.nav_link} href="">Services</a></li>
          <li className={styles.nav_item}><a className={styles.nav_link} href="">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}