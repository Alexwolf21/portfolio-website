import { motion } from 'framer-motion'
import {
  FiGithub,
  FiExternalLink,
  FiServer,
  FiZap,
  FiLock,
  FiLayers,
} from 'react-icons/fi'
import {
  SiSpringboot,
  SiRabbitmq,
  SiPostgresql,
  SiOpensearch,
  SiReact,
  SiPython,
  SiTensorflow,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'EBaazee',
    featured: true,
    tagline: 'Microservices-based auction platform',
    description:
      'A full-featured online auction system built on microservices architecture with event-driven communication, real-time bidding, and enterprise-grade security.',
    tech: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'RabbitMQ', icon: <SiRabbitmq /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'OpenSearch', icon: <SiOpensearch /> },
      { name: 'React', icon: <SiReact /> },
    ],
    highlights: [
      { icon: <FiZap />, text: 'Event-driven architecture with async messaging' },
      { icon: <FiServer />, text: 'Async bidding & real-time notifications' },
      { icon: <FiLock />, text: 'JWT security + Saga orchestration' },
      { icon: <FiLayers />, text: 'API Gateway + centralized logging' },
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Food Vision',
    featured: false,
    tagline: 'Deep learning image classification model',
    description:
      'A high-accuracy image classification model trained on a large food dataset using transfer learning techniques.',
    tech: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
    ],
    highlights: [
      { icon: <FiZap />, text: 'Transfer learning for efficient training' },
      { icon: <FiServer />, text: 'High accuracy classification results' },
      { icon: <FiLayers />, text: 'Large dataset training pipeline' },
    ],
    github: '#',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section className="sectionWrapper" id="projects">
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionLabel">Projects</span>
          <h2 className="sectionTitle">What I&apos;ve Built</h2>
          <p className="sectionSubtitle">
            Selected projects showcasing backend architecture, distributed systems, and ML.
          </p>
          <div className="sectionDivider" />
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`${styles.card} ${project.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {project.featured && (
                <span className={styles.badge}>⭐ Featured</span>
              )}

              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardTagline}>{project.tagline}</p>
              </div>

              <p className={styles.cardDesc}>{project.description}</p>

              {/* Tech stack */}
              <div className={styles.techList}>
                {project.tech.map((t) => (
                  <span key={t.name} className={styles.techPill}>
                    <span className={styles.techIcon}>{t.icon}</span>
                    {t.name}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className={styles.highlights}>
                {project.highlights.map((h) => (
                  <li key={h.text} className={styles.highlight}>
                    <span className={styles.highlightIcon}>{h.icon}</span>
                    {h.text}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className={styles.cardLinks}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={`${project.title} GitHub`}
                  >
                    <FiGithub /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={`${project.title} Live Demo`}
                  >
                    <FiExternalLink /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
