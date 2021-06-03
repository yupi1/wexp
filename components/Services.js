import Image from 'next/image'

import styles from "../styles/Services.module.css"

export default function Services({ forwardedRef }) {

  return (
    <section className={styles.services} ref={forwardedRef}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.Nihil possimus voluptates error facere quae odit quos harum ? Placeat, exercitationem in assumenda et omnis ea culpa perferendis possimus mollitia praesentium rerum ?
      <Image
        src="/timber_4.jpg"
        width={400}
        height={600}
        objectFit="contain"
        layout="fixed"
      />
    </section >
  )
}