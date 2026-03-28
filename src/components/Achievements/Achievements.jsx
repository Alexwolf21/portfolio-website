import { motion } from 'framer-motion'
import { FiAward, FiBookOpen } from 'react-icons/fi'
import { SiCoursera, SiUdemy } from 'react-icons/si'
import styles from './Achievements.module.css'

const achievements = [
  {
    icon: <FiAward />,
    title: 'Sprint Performer Award',
    subtitle: 'SAP',
    color: '#f59e0b',
  },
  {
    icon: <FiAward />,
    title: 'Top 10 — CodeKaze',
    subtitle: 'Coding Competition',
    color: '#6c63ff',
  },
]

const certifications = [
  {
    icon: <SiCoursera />,
    title: 'Introduction to Statistics',
    subtitle: 'Stanford University — Coursera',
    color: '#0056d2',
  },
  {
    icon: <SiUdemy />,
    title: 'Data Science Bootcamp',
    subtitle: 'Udemy',
    color: '#a435f0',
  },
]

export default function Achievements() {
  return (
    <section className="sectionWrapper" id="achievements">
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionLabel">Recognition</span>
          <h2 className="sectionTitle">Achievements & Certifications</h2>
          <div className="sectionDivider" />
        </div>

        <div className={styles.columns}>
          {/* Achievements */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <FiAward /> Achievements
            </h3>
            <div className={styles.list}>
              {achievements.map((item, i) => (
                <motion.div
                  key={item.title}
                  className={styles.card}
                  style={{ '--card-color': item.color }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <span className={styles.icon}>{item.icon}</span>
                  <div>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    <p className={styles.cardSub}>{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <FiBookOpen /> Certifications
            </h3>
            <div className={styles.list}>
              {certifications.map((item, i) => (
                <motion.div
                  key={item.title}
                  className={styles.card}
                  style={{ '--card-color': item.color }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <span className={styles.icon}>{item.icon}</span>
                  <div>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    <p className={styles.cardSub}>{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
