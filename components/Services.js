import Image from 'next/image'
import Lumber from '../public/lumber.svg'
// import Logo from "../public/dia.svg";

import styles from "../styles/Services.module.css"

export default function Services({ forwardedRef }) {

  return (
    <section className={styles.services} ref={forwardedRef}>
      <div className={styles.services_container}>
        <div className={styles.services_header}>
          <h2><span className={styles.text_gradient}>Softwood</span> and <span className={styles.text_gradient}>hardwood</span> timber for carpentry, building and construction industry</h2>
          <Lumber className={styles.img_lumber} />
        </div>
        {/* <Image
          src="/timber_5.jpg"
          width={320}
          height={500}
          objectFit="contain"
          layout="fixed"
        /> */}
      </div>
    </section >
  )
}