import styles from "./../styles/Footer.module.css"

export default function Footer({ forwardedRef }) {
  return (
    <footer className={styles.footer} ref={forwardedRef}>
      <div className={styles.footer_menu_wrap}>
        <h3>Contact us for more information and partnership!</h3>

        <div className={styles.contacts_wrapper}>
          <div className={styles.menu_item}>
            <p>
              <strong>Visit us</strong>
              <br />
              Head office: Ukraine
              <br />
              Cherkasy City
              <br />
              <a href="https://www.google.com.ua/maps/place/%D0%9E%D1%84%D0%B8%D1%81+%22%D0%AE%D0%BD%D0%B8%D0%B0%D0%B3%D1%80%D0%BE%22/@49.4199075,32.1039892,538m/data=!3m1!1e3!4m5!3m4!1s0x40d14bab275d666d:0x6f65f440203a05d7!8m2!3d49.4199051!4d32.1055824?hl=ru" target="_blank">Dobrovolsky Str. 3</a>
            </p>
          </div>

          <div className={styles.menu_item}>
            <p><strong>Contact us</strong></p>
            <a href="mailto:diatradeua@gmail.com" target="_blank">diatradeua@gmail.com</a>
          </div>

          <div className={styles.menu_item}>
            <p><strong>Call us</strong></p>
            <a href="tel:+380937435939" target="_blank">+38 (093) 74 35 939</a>
          </div>
        </div>
      </div>
    </footer>
  )
}