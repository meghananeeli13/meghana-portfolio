import { useState, useEffect } from "react"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Traits from "./components/Traits"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certifications from "./components/certifications"
import Contact from "./components/Contact"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    }
  }, [loading])

  return (
    <div style={{ backgroundColor: "#0B0F1A" }}>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />

          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <Traits />

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="certifications">
            <Certifications />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </>
      )}
    </div>
  )
}

export default App