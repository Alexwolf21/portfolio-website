import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import HeroCanvas from './HeroCanvas'
import styles from './Hero.module.css'

const orbitalSections = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Education', to: 'education' },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* ---- Top: Name + Title ---- */}
      <motion.div
        className={styles.top}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className={styles.greeting}>Hello, I&apos;m</span>
        <h1 className={styles.name}>Auroshree Lenka</h1>
        <h2 className={styles.title}>
          Software Developer{' '}
          <span className={styles.titleAccent}>| Backend &amp; Microservices</span>
        </h2>
      </motion.div>

      {/* ---- Center: Orbital Face ---- */}
      <motion.div
        className={styles.orbitalContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
      >
        {/* Decorative rings */}
        <div className={styles.orbitalRing} />
        <div className={styles.orbitalRingInner} />

        {/* Center pulse glow */}
        <div className={styles.centerGlow} />

        {/* 3D Canvas */}
        <div className={styles.canvasInner}>
          <HeroCanvas />
        </div>

        {/* Orbital section labels */}
        {orbitalSections.map((section, i) => {
          const angle = -90 + (i * 360) / orbitalSections.length
          return (
            <Link
              key={section.to}
              to={section.to}
              smooth
              duration={600}
              offset={-80}
              className={styles.orbitalItem}
              style={{ '--angle': `${angle}deg` }}
            >
              <span className={styles.orbitalDot} />
              {section.name}
            </Link>
          )
        })}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll down</span>
      </motion.div>
    </section>
  )
}
