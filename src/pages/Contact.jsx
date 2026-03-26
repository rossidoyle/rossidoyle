export default function Contact() {
  return (
    <>
      <section className="section">
        <h1>Contact Me</h1>
        <div className="contact-content">
          <p>
            I'm always interested in discussing new projects, creative ideas, or opportunities to collaborate. 
            Feel free to reach out!
          </p>

          <h2>Get in Touch</h2>
          <div className="contact-info">
            <p>
              <strong>Email:</strong> <a href="mailto:rossidoyle0@gmail.com">rossidoyle0@gmail.com</a>
            </p>
            <p>
              <strong>GitHub:</strong> <a href="https://github.com/rossidoyle" target="_blank" rel="noopener noreferrer">github.com/rossidoyle</a>
            </p>
          </div>

          <h2>What I Can Help With</h2>
          <ul>
            <li>Web Application Development</li>
            <li>UI/UX Design & Implementation</li>
            <li>Full-Stack Development</li>
            <li>React & JavaScript Consultation</li>
            <li>API Integration</li>
            <li>Performance Optimization</li>
          </ul>

          <p style={{ marginTop: '2rem' }}>
            Whether you have a specific project in mind or just want to chat about web development, I'd love to hear from you!
          </p>
        </div>
      </section>
    </>
  )
}
