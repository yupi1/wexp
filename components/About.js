import BGImage from "./BGAbout";

import styles from '../styles/About.module.css'

export default function About({ forwardedRef }) {
  return (
    <section className={styles.about_section} ref={forwardedRef}>
      <BGImage />
      <div className={styles.text_wrapper}>
        <h1 className={styles.hero_title}>We are exporter</h1>
        <p className={styles.hero_text}>Production and export of sawn timber from <span>Ukraine</span></p>
      </div>
    </section>
  )
}