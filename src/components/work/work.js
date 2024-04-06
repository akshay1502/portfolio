import * as React from "react"
import * as styles from "./work.module.css"
import IconLink from "../../icons/link"

export default function Work() {
  const projects = [
    {
      id: 0,
      img: "/mai.png",
      alt: "Mai Labs",
      title: "Mai Labs",
      type: "Freelance",
      description:
        "Whole frontend was hanlded by our team, there was no backend integration",
      link: "https://mai.io/",
    },
    {
      id: 1,
      img: "/janakai.png",
      alt: "Janak AI",
      title: "Janak AI",
      type: "Freelance",
      description: "A landing page made in react with little design twicks",
      link: "https://janakai.vercel.app/",
    },
    {
      id: 2,
      img: "/rememberwordlist.png",
      alt: "Remember Word List",
      title: "Remember Word List",
      type: "Personal",
      description: "A landing page made in react with little design twicks",
      link: "https://rememberwordlist.netlify.app/",
    },
    {
      id: 3,
      img: "/youtubeclone.png",
      alt: "Youtube Clone",
      title: "Youtube Clone",
      type: "Personal",
      description: "A landing page made in react with little design twicks",
      link: "https://youtube-clone-developerapi.netlify.app/",
    },
  ]
  return (
    <section className={styles.work} id="work">
      <div className={styles.center}>
        <h1 className={styles.heading}>Work</h1>
      </div>
      {projects.map(project => {
        return (
          <WorkCard
            key={project.id}
            img={project.img}
            alt={project.alt}
            title={project.title}
            type={project.type}
            description={project.description}
            link={project.link}
          />
        )
      })}
    </section>
  )
}

const WorkCard = ({ img, alt, title, type, description, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={img} alt={alt} />
      </div>
      <div className={styles.cardMeta}>
        <div className={styles.pill}>{type}</div>
        <h2>{title}</h2>
        <a href={link} className={styles.link}>
          <IconLink />
          {link}
        </a>
        <p>{description}</p>
      </div>
    </div>
  )
}
