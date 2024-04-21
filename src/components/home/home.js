import * as React from "react"
import * as styles from "./home.module.css"

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.homePart1}>
        <h1 className={styles.homeHeading}>
          Hello 👋
          <br /> Akshay here!
        </h1>
        <p className={styles.homePara}>
          I am a frontend developer who likes spending time in developer tools
          trying out different css values.
        </p>
      </div>
      <div className={styles.homePart2}>
        <div className={styles.profileImageContainer}>
          <img src={"/img1.jpg"} alt="Profile" />
        </div>
      </div>
    </section>
  )
}
