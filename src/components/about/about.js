import * as React from "react"
import * as styles from "./about.module.css"

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutPart1}>
        <div className={styles.aboutImageContainer}>
          <img src={"/dummy.jpg"} alt="About" />
        </div>
      </div>
      <div className={styles.aboutPart2}>
        <h1 className={styles.heading}>About</h1>
        <p className={styles.para}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </section>
  )
}
