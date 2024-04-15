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
        "For our client, Mai Labs, we led frontend development using Next.js, implementing CSS transitions and emphasizing on component reusability. Integrated dynamic job filtering on the career page, facilitating seamless exploration of opportunities. Additionally, added a contact form to enhance user engagement and communication.",
      link: "https://mai.io/",
    },
    {
      id: 1,
      img: "/janakai.png",
      alt: "Janak AI",
      title: "Janak AI",
      type: "Freelance",
      description:
        "'Janakai' is a static single-page website designed to resemble a company website, built entirely in React and hosted on Vercel. The site features sections dedicated to showcasing products, highlighting partners, sharing insights about the company in the 'About Us' section, and providing the latest news through articles. Janakai offers visitors a overview of the company's offerings and expertise.",
      link: "https://janakai.vercel.app/",
    },
    {
      id: 2,
      img: "/rememberwordlist.png",
      alt: "Remember Word List",
      title: "Remember Word List",
      type: "Personal",
      description:
        "'Remember Word List' is an engaging memory challenge game where users select a category and difficulty level to test their recall skills. Upon selection, users are presented with a set of words for a limited time. Once the time elapses, users must enter the words they remember. Success is achieved by accurately typing all words within the time limit.",
      link: "https://rememberwordlist.netlify.app/",
    },
    {
      id: 3,
      img: "/youtubeclone.png",
      alt: "Youtube Clone",
      title: "Youtube Clone",
      type: "Personal",
      description:
        "Enjoy the YouTube experience on your desktop with our clone app. Leveraging YouTube's free APIs, the app dynamically populates a feed with 12 random videos. Upon clicking a video, user can see the video description and the 20 latest comments. Additionally, the integrated search API enabling users to discover specific content by querying keywords.",
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
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
