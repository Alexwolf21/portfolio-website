import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ImpactStrip from './components/ImpactStrip/ImpactStrip'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Achievements from './components/Achievements/Achievements'
import Education from './components/Education/Education'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <ImpactStrip />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
      </main>
      <footer className="footer">
        <div className="footerContent">
          <div className="footerSocials">
            <a href="https://github.com/Alexwolf21" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/auroshree-lenka" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:aurolenka2001@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
          <p className="footerText">
            © {new Date().getFullYear()} <span>Auroshree Lenka</span>. Built with React & Three.js
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
