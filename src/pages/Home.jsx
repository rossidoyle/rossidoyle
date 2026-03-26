import { useEffect, useState } from 'react'

export default function Home() {
  const audreyImages = [
    '/audrey1.png',
    '/audrey2.png',
    '/audrey3.png',
    '/audrey4.png',
    '/audrey5.png'
  ]

  const [audreyIndex, setAudreyIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAudreyIndex(prev => (prev + 1) % audreyImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <header className="hero">
        <img src="/rossi.JPEG" alt="Rossi Doyle" className="headshot" />
        <h1>Rossi Doyle</h1>
        <p>Milwaukee Freelance Web Developer • Building product-focused web apps</p>
        <a href="#contact" className="button">Hire me</a>
      </header>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="cards">
          <article className="card">
            <h3>Domes Reimagined: Sip and Seek</h3>
            <video controls src="/DomesWeb.mp4" />
            <p>An app built for patrons of the domes to learn how the plants in the different biomes are used to make drinks at the bar while also incorperating scavenger hunts that will keep guest coming back. This app was created for an MSOE Hackathon in partnership with the Milwaukee Domes and recieved first place. The app was built using TypeScript and Python.</p>
            <p>Take a look at the repository <a href="https://github.com/xDazld/HacksGiving-2025" target="_blank" rel="noopener noreferrer">here</a>.</p>
          </article>
          <article className="card">
            <h3>Hello Audrey</h3>
            <div className="audrey-carousel-wrap">
              <img
                className="audrey-carousel"
                src={audreyImages[audreyIndex]}
                alt={`Audrey ${audreyIndex + 1}`}
              />
            </div>
            <p>Hello Audrey is a speech therapy tool designed to assist speech pathologists by introducing game based learning experiences for their patients. This app also includes customizable learning plans and progress tracking features for parents and professionals to keep their kids on track. This app was built in collaboration with TRT Speech Labs and used React, Phaser, AntDesign, Python, MySQL, Docker, and TailScale.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Want a quote? Email me at <a href="mailto:rossidoyle0@gmail.com">rossidoyle0@gmail.com</a>.</p>
      </section>
    </>
  )
}
