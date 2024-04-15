import * as React from "react"
import * as styles from "./contact.module.css"
import IconGithub from "../../icons/github"
import IconTwitter from "../../icons/twitter"
import IconMedium from "../../icons/medium"
import IconInstagram from "../../icons/instagram"
import IconLinkedin from "../../icons/linkedin"

export default function Contact() {
  const [email, setEmail] = React.useState("")
  const [errorEmail, setErrorEmail] = React.useState("")
  const [errorMessage, setErrorMessage] = React.useState("")
  const [message, setMessage] = React.useState("")

  const validateEmail = () => {
    if (!email) {
      setErrorEmail("Email is required")
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail("Please enter a valid email address")
    } else {
      setErrorEmail("")
    }
  }

  const validateMessage = () => {
    if (!message) {
      setErrorMessage("Message is required")
    } else if (message.length < 2) {
      setErrorMessage("Message must be at least 2 characters long")
    } else {
      setErrorMessage("")
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    validateEmail()
    validateMessage()

    if (!errorEmail && !errorMessage) {
      // Form is valid, proceed with submission
      // You can proceed with submitting the form data here, e.g., sending email
      try {
        const response = await fetch("/.netlify/functions/sendEmail", {
          method: "POST",
          body: JSON.stringify({ email, message }),
        })

        if (response.ok) {
          console.log("Email sent successfully")
          // Optionally reset form fields here
          setEmail("")
          setMessage("")
        } else {
          console.error("Error sending email")
        }
      } catch (error) {
        console.error("Error sending email:", error)
      }
    } else {
      // Form is not valid, do not submit
      console.log("Form is not valid, please fix errors")
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactFormContainer}>
        <form
          className={styles.contactForm}
          method="POST"
          onSubmit={handleSubmit}
          data-netlify="true"
        >
          <small style={{ marginBottom: "12px" }}>
            Your email is safe with me and will only be used for communication
            purposes.
          </small>
          <div className={styles.email}>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </label>
            <div className={styles.error}>{errorEmail}</div>
          </div>
          <div className={styles.textarea}>
            <label htmlFor="message">
              <textarea
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Enter your text here"
                rows={5}
                style={{ resize: "none" }}
                required
              />
            </label>
            <div className={styles.error}>{errorMessage}</div>
          </div>
          <button type="submit" className={styles.send}>
            Submit
          </button>
        </form>
      </div>
      <div className={styles.socialLinks}>
        <a href="https://github.com/akshay1502/">
          <IconGithub />
        </a>
        <a href="https://twitter.com/Akshay83876756">
          <IconTwitter />
        </a>
        <a href="https://www.linkedin.com/in/akshay-shinde-066b091b5/">
          <IconLinkedin />
        </a>
        <a href="https://medium.com/@akshayshinde7289">
          <IconMedium />
        </a>
        <a href="https://www.instagram.com/akshay260401/">
          <IconInstagram />
        </a>
      </div>
    </section>
  )
}
