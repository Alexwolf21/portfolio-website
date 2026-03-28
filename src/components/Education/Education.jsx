import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import { LuGraduationCap } from 'react-icons/lu'
import styles from './Education.module.css'

const educationData = [
  {
    id: 'masters',
    degree: 'M.Tech — Software Engineering',
    university: 'Birla Institute of Technology and Science, Pilani',
    programme: 'Work Integrated Learning Programmes',
    location: 'Bengaluru, Karnataka, India',
    duration: '2024 – 2026',
    highlight: 'Upcoming',
  },
  {
    id: 'bachelors',
    degree: 'B.Tech — Electronics & Instrumentation',
    university: 'Odisha University of Technology and Research',
    programme: null,
    location: 'Bhubaneswar, Odisha, India',
    duration: '2020 – 2024',
    highlight: null,
  },
]

export default function Education() {
  return (
    <section className="sectionWrapper" id="education">
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionLabel">Education</span>
          <h2 className="sectionTitle">Academic Background</h2>
          <div className="sectionDivider" />
        </div>

        <div className={styles.grid}>
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {edu.highlight && (
                <span className={styles.badge}>{edu.highlight}</span>
              )}

              <div className={styles.iconWrap}>
                <LuGraduationCap />
              </div>

              <div className={styles.info}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.university}>{edu.university}</p>
                {edu.programme && (
                  <p className={styles.programme}>{edu.programme}</p>
                )}
                <div className={styles.meta}>
                  <span className={styles.location}>
                    <FiMapPin /> {edu.location}
                  </span>
                  <span className={styles.duration}>{edu.duration}</span>
                </div>
              </div>

              <div className={styles.decorLine} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
