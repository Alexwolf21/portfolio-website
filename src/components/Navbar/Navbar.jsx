import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={styles.container}>
        <Link
          to="hero"
          smooth
          duration={500}
          className={styles.logo}
          onClick={() => setMenuOpen(false)}
        >
          AL<span className={styles.logoDot}>.</span>
        </Link>

        {/* Right side: Socials + Resume */}
        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <a
            href="https://github.com/Alexwolf21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.socialIcon}
            onClick={() => setMenuOpen(false)}
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/auroshree-lenka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialIcon}
            onClick={() => setMenuOpen(false)}
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:aurolenka2001@gmail.com"
            aria-label="Email"
            className={styles.socialIcon}
            onClick={() => setMenuOpen(false)}
          >
            <FiMail />
          </a>

          <span className={styles.divider} />

          <a
            href="https://drive.google.com/file/d/1A23ApcpwrVwva0Kd6P6DyzErmJng8lFa/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
            onClick={() => setMenuOpen(false)}
          >
            <FiDownload /> Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </nav>
  )
}
