import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div style={{ padding: "40px" }}>
    <h1>Oops! 404 Page Not Found</h1>
    <p style={{ margin: "20px 0" }}>
      Looks like you've stumbled upon a page that doesn't exist. Hey, it happens
      to the best of us, right? But fear not, I'm here to guide you back on
      track!
    </p>
    <p>
      Let's <Link to="/">return to my portfolio page</Link> and continue our
      journey together!
    </p>
  </div>
)

export default NotFoundPage
