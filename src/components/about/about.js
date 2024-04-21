import * as React from "react"
import * as styles from "./about.module.css"

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutPart1}>
        <div className={styles.aboutImageContainer}>
          <img src={"/img2.jpg"} alt="About" />
        </div>
      </div>
      <div className={styles.aboutPart2}>
        <h1 className={styles.headingDesktop}>About</h1>
        <p className={styles.para}>
          I'm all about making cool stuff happen right in your browser. I like
          playing with CSS and diving deep into developer tools to see what
          magic I can create.
          <br />
          <br />
          Like keeping my code clean and tidy—it's like making sure your room
          feels cozy and welcoming. Catching up with the latest trends and tech?
          Sure. I love knowing what's hot in the frontend world.
          <br />
          <br />
          When I'm not coding, you'll probably find me cracking up at funny
          videos, rooting for my CSK team, or chilling with Doraemon, my
          all-time favorite cartoon pal. And who doesn't love a good laugh with
          "Phir Hera Pheri," right? I'm always up for learning new stuff and
          hearing about how things work. And when I need to unwind, there's
          nothing like finding peace in the simple life of the village. Let's
          chat and swap stories!
        </p>
      </div>
    </section>
  )
}
