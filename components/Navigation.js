import styles from './../styles/Navigation.module.css';

console.log(styles);

export default function Navigation() {
  return (
    <nav className={styles.navigation_menu}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}><a className={styles.nav_link} href="">About</a></li>
        <li className={styles.nav_item}><a className={styles.nav_link} href="">Services</a></li>
        <li className={styles.nav_item}><a className={styles.nav_link} href="">Contact</a></li>
      </ul>
    </nav>
  )
}