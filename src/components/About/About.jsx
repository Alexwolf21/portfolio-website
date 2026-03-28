import { motion } from 'framer-motion'
import { FiServer, FiCpu, FiTrendingUp } from 'react-icons/fi'
import styles from './About.module.css'

const highlights = [
  {
    icon: <FiServer />,
    title: 'Backend Systems',
    text: 'Building scalable microservices and distributed systems with Spring Boot & Kafka',
  },
  {
    icon: <FiCpu />,
    title: 'Cloud Native',
    text: 'Experience with Kubernetes, Docker, and cloud-native deployment pipelines',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Performance',
    text: 'Strong focus on system design, performance optimization, and automation',
  },
]

export default function About() {
  return (
    <section className="sectionWrapper" id="about">
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionLabel">About Me</span>
          <h2 className="sectionTitle">Who I Am</h2>
          <div className="sectionDivider" />
        </div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.bio}>
            I&apos;m a <span className={styles.accent}>backend-focused developer</span> working
            on scalable microservices and distributed systems. With hands-on experience
            in <span className={styles.accent}>Java, Spring Boot, Kafka</span>, and
            cloud-native platforms, I build reliable services that power complex workflows
            and handle high-throughput operations.
          </p>
          <p className={styles.bio}>
            I care deeply about <span className={styles.accent}>system design</span>,
            writing clean code, and automating everything that can be automated. Currently
            building impactful backend solutions at <span className={styles.accent}>SAP</span>.
          </p>
        </motion.div>

        <div className={styles.highlights}>
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={styles.iconWrap}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
