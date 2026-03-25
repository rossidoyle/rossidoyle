function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Rossi Doyle</h1>
        <p>Milwaukee Freelance Web Developer • Building product-focused web apps</p>
        <a href="#contact" className="button">Hire me</a>
      </header>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="cards">
          <article className="card">
            <h3>Domes Reimagined Sip and Seek</h3>
            <p>React + Vite web app with API integration and responsive UI.</p>
          </article>
          <article className="card">
            <h3>Project Two</h3>
            <p>Component library, animation, and accessible experience.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Want a quote? Email me at <a href="mailto:hello@example.com">hello@example.com</a>.</p>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Rossi Doyle</footer>
    </div>
  )
}

export default App
