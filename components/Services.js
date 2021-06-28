import Image from 'next/image'
import Lumber from '../public/lumber.svg'

const servicesList = [
  "Production and export of Ukrainian sawn timber",
  "Reasonable market prices",
  "Wide range of products to meet your needs",
  "Timber treatment before packaging",
  "Packaging & delivery",
  "Premium quality sawn timber according to your needs and specifications",
  "Successful partnership"
];

import styles from "../styles/Services.module.css"

export default function Services({ forwardedRef }) {

  return (
    <section className={styles.services} ref={forwardedRef}>
      <div className={styles.services_container}>

        <div className={styles.services_item}>
          <h3>Production and export of Ukrainian sawn timber</h3>
          <Image
            src='/timber_3.jpg'
            alt="Production and export of Ukrainian sawn timber"
            width={400}
            height={600}
          />
        </div>

        <div className={styles.services_item}>
          <h3>Reasonable market prices</h3>
          <Image
            style={{ clipPath: "inset(0 0 53% 0)" }}
            src='/timber_2.jpg'
            alt="Reasonable market prices"
            width={400}
            height={600}
          />
        </div>

        <div className={styles.services_item}>
          <h3>Wide range of products to meet your needs</h3>
          <Image
            src='/timber_3.jpg'
            alt="Wide range of products to meet your needs"
            width={400}
            height={600}
          />
        </div>

        <div className={styles.services_item}>
          <h3>Timber treatment before packaging</h3>
          <Image
            src='/timber_4.jpg'
            alt="Timber treatment before packaging"
            width={400}
            height={600}
          />
        </div>

        <div className={styles.services_item}>
          <h3>Packaging & delivery</h3>
          <Image
            src='/timber_1.jpg'
            alt="Packaging & delivery"
            width={400}
            height={600}
          />
        </div>

        <div className={styles.services_item}>
          <h3>Premium quality sawn timber according to your needs and specifications</h3>
          <Image
            src='/timber_2.jpg'
            alt="Premium quality sawn timber according to your needs and specifications"
            width={400}
            height={600}
          />
        </div>

        <blockquote className={styles.quote_wrap}>
          <p className={styles.quote}>When you need to innovate, you need <span className={styles.highlight}>collaboration</span>.</p>
          <cite className={styles.author}>&ndash; Marissa Mayer</cite>
        </blockquote>

      </div>
    </section >
  )
}