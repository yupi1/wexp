import Image from 'next/image'
import Lumber from '../public/lumber.svg'

import styles from "../styles/Services.module.css"

export default function Services({ forwardedRef }) {

  return (
    <section className={styles.services} ref={forwardedRef}>
      <div className={styles.services_container}>
        {/* <div className={styles.services_header}>
          <h2><span className={styles.text_gradient}>Softwood</span> and <span className={styles.text_gradient}>hardwood</span> timber for carpentry, <br />  building and construction industry.</h2>
          <Lumber className={styles.img_lumber} />
        </div> */}

        <div className={styles.section_production}>
          <h3>Production Capacity</h3>

          <div className={styles.wrapper}>
            <div className={styles.image_container}>
              <Image
                src="/timber_3.jpg"
                width={370}
                height={550}
                objectFit="contain"
              />
              <Image
                className={styles.image_hero}
                src="/timber_4.jpg"
                width={240}
                height={400}
                objectFit="contain"
              />
            </div>
            <div className={styles.text_container}>
              <h4>Wide range of products:</h4>
              <p>From parquet building boards to edged and unedged boards.</p>
            </div>
          </div>
        </div>

        <div className={styles.section_devilery}>
          <h3>Packaging & Delivery</h3>

          <div className={styles.wrapper}>
            <ul className={styles.list_item}>
              <li className={styles.item}>Pre-packaging timber treatment</li>
              <li className={styles.item}>Careful packaging</li>
              <li className={styles.item}>Delivery (by ship/vehicle)</li>
            </ul>

            <Image
              src="/timber_5.jpg"
              alt="Packaging & Delivery"
              width={260}
              height={380}
            />
            <Image
              src="/timber_1.jpg"
              alt="Packaging & Delivery"
              width={260}
              height={380}
            />
          </div>
        </div>

        <blockquote className={styles.quote_wrap}>
          <p className={styles.quote}>When you need to innovate, you need <span className={styles.highlight}>collaboration</span>.</p>
          <cite className={styles.author}>&ndash; Marissa Mayer</cite>
        </blockquote>

      </div>
    </section >
  )
}