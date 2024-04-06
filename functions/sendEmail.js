// functions/sendEmail.js
const nodemailer = require("nodemailer")

exports.handler = async event => {
  const { email, message } = JSON.parse(event.body)

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Your SMTP configuration goes here
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  // Send mail with defined transport object
  await transporter.sendMail({
    from: process.env.FROM, // sender address
    to: process.env.TO, // list of receivers
    subject: "Portfolio", // Subject line
    text: `Email: ${email}\n\nMessage: ${message}`, // plain text body
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent successfully" }),
  }
}
