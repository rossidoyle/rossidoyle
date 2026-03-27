import { useEffect, useState } from 'react'

export default function Home() {
  const base = import.meta.env.BASE_URL
  const audreyImages = [
    `${base}audrey1.png`,
    `${base}audrey2.png`,
    `${base}audrey3.png`,
    `${base}audrey4.png`,
    `${base}audrey5.png`
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
        <div className="hero-content">
          <img src={`${base}rossi.JPEG`} alt="Rossi Doyle" className="headshot" />
          <div className="hero-text">
            <h1>Rossi Doyle</h1>
            <p>Milwaukee Based Freelance Web Developer • Building product-focused web apps</p>
            <a href="#contact" className="button">Hire me</a>
          </div>
        </div>
      </header>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="cards">
          <article className="card">
            <h3>Domes Reimagined: Sip & Seek</h3>
            <video controls src={`${base}DomesWeb.mp4`} />
            <p>An app built for patrons of the domes to learn how the plants in the different biomes are used to make drinks at the bar while also incorporating scavenger hunts that will keep guest coming back. This app was created for an MSOE Hackathon in partnership with the Milwaukee Domes and received first place. The app was built using TypeScript and Python.</p>
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
