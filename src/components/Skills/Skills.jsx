import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiPython,
  SiSpringboot,
  SiReact,
  SiApachekafka,
  SiPostgresql,
  SiJunit5,
  SiJest,
  SiKubernetes,
  SiDocker,
  SiJenkins,
  SiGit,
  SiApachemaven,
  SiGrafana,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import {
  FiDatabase,
  FiCloud,
  FiServer,
  FiZap,
  FiCode,
  FiCpu,
  FiLayers,
  FiActivity,
} from 'react-icons/fi'
import { FiBox } from 'react-icons/fi'
import styles from './Skills.module.css'

const skillGroups = [
  {
    title: 'Languages',
    icon: <FiCode />,
    color: '#6c63ff',
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'SQL', icon: <FiDatabase /> },
      { name: 'Python', icon: <SiPython /> },
    ],
  },
  {
    title: 'Frameworks',
    icon: <FiLayers />,
    color: '#00d4aa',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'ReactJS', icon: <SiReact /> },
      { name: 'Kafka', icon: <SiApachekafka /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'JUnit', icon: <SiJunit5 /> },
      { name: 'Jest', icon: <SiJest /> },
      { name: 'SAPUI5', icon: <FiBox /> },
    ],
  },
  {
    title: 'Tools',
    icon: <FiCpu />,
    color: '#ff6b9d',
    skills: [
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Jenkins', icon: <SiJenkins /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'Maven', icon: <SiApachemaven /> },
      { name: 'Dynatrace', icon: <FiActivity /> },
      { name: 'Kibana', icon: <FiActivity /> },
      { name: 'Grafana', icon: <SiGrafana /> },
    ],
  },
  {
    title: 'Concepts',
    icon: <FiZap />,
    color: '#f59e0b',
    skills: [
      { name: 'Microservices', icon: <FiServer /> },
      { name: 'Event-Driven Architecture', icon: <FiZap /> },
      { name: 'Distributed Systems', icon: <FiCpu /> },
      { name: 'REST APIs', icon: <FiCode /> },
      { name: 'AWS', icon: <FiCloud /> },
      { name: 'OOP', icon: <FiLayers /> },
      { name: 'Agile', icon: <FiActivity /> },
    ],
  },
]

export default function Skills() {
  return (
    <section className="sectionWrapper" id="skills">
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionLabel">Skills</span>
          <h2 className="sectionTitle">Tech Stack</h2>
          <p className="sectionSubtitle">
            Technologies and concepts I work with daily to build reliable backend systems.
          </p>
          <div className="sectionDivider" />
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              className={styles.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div
                className={styles.groupHeader}
                style={{ '--group-color': group.color }}
              >
                <span className={styles.groupIcon}>{group.icon}</span>
                <h3 className={styles.groupTitle}>{group.title}</h3>
              </div>

              <div className={styles.pills}>
                {group.skills.map((skill) => (
                  <span key={skill.name} className={styles.pill}>
                    <span className={styles.pillIcon}>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
