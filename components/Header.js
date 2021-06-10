import { useEffect, useRef, useState } from "react";
import { useScroll } from "@use-gesture/react";
import Logo from "../public/dia.svg";

import styles from './../styles/Header.module.css';

export default function Header({ servicesRef, aboutRef, footerRef }) {
  const headerEl = useRef(null);
  const [active, setActive] = useState(false);

  const navigateTo = (event, element) => {
    event.preventDefault();
    element.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // console.log(element.current, 'services');
  }, [])

  if (typeof window !== "undefined") {
    useScroll(({ xy: [, y] }) => {
      if (y > (headerEl.current.clientHeight / 2)) {
        setActive(true);
      } else {
        setActive(false);
      }
    }, { target: window });
  }

  return (
    <header ref={headerEl} className={`${styles.header_container} ${active ? styles.active : ''}`}>
      <nav className={styles.navigation_menu}>
        <a href="#">
          <Logo className={styles.logo} />
        </a>

        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <a onClick={event => navigateTo(event, aboutRef)} className={styles.nav_link} href="">About</a>
          </li>
          <li className={styles.nav_item}>
            <a onClick={event => navigateTo(event, servicesRef)} className={styles.nav_link} href="">Services</a>
          </li>
          <li onClick={event => navigateTo(event, footerRef)} className={styles.nav_item}>
            <a className={styles.nav_link} href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header >
  )
}