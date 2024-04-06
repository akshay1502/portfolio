import * as React from "react"
import * as styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.links}>
          <a href="#home">Home</a>
        </li>
        <li className={styles.links}>
          <a href="#about">About</a>
        </li>
        <li className={styles.links}>
          <a href="#work">Work</a>
        </li>
        <li className={styles.links}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
