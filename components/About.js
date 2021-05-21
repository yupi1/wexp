import BGImage from "./BGAbout";

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <section className={styles.about_section}>
      <BGImage />
      <div className={styles.text_wrapper}>
        <h1 className={styles.hero_title}>We are exporter</h1>
        <p className={styles.hero_text}>Our goal to complite your job</p>
      </div>
    </section>
  )
}