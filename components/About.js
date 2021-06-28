import { useEffect, useState } from "react";
import BGImage from "./BGAbout";
import { text } from '../data/about-text.js'

import styles from '../styles/About.module.css'

const { log } = console;

export default function About({ forwardedRef }) {
  const [position, setPosition] = useState(["top", "middle", "bottom"]);

  useEffect(() => {
    setInterval(() => {
      setPosition(prevState => {
        const last = prevState.pop();
        const newArr = [last, ...prevState];

        return newArr;
      });
    }, 5 * 1000);
  }, []);

  return (
    <section className={styles.about_section} ref={forwardedRef}>
      <BGImage />
      <div className={styles.text_wrapper}>
        <h1 className={styles.hero_title}>We are</h1>

        <div>
          <h1 className={styles.hero_title}>
            <span className={styles.txt_container}>
              <span className={styles.txt_rotate}>
                {text.map((item, index) => {
                  return (
                    <span className={styles.keyword} key={index} data-position={position[index]}>
                      {item}
                    </span>
                  )
                })}
              </span>
            </span>
          </h1>
        </div>

        <p className={styles.hero_text}>Production and export of sawn timber from <span>Ukraine</span></p>
      </div>
    </section>
  )
}