// Step 1: Import React
import * as React from "react"
import "./../components/global.css"
import Navbar from "../components/navbar/navbar"
import Home from "../components/home/home"
import Work from "../components/work/work"
import Contact from "../components/contact/contact"
import About from "../components/about/about"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => {
  return (
    <>
      <title>Welcome to Akshay's portfolio</title>
      <meta
        name="description"
        content="Welcome to Akshay's portfolio, showcasing my expertise in frontend development. Explore my projects, skills and get in touch to collaborate on exciting opportunities."
      />
    </>
  )
}

// Step 3: Export your component
export default IndexPage
