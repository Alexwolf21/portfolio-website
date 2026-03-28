import styles from './ImpactStrip.module.css'
import { SiSpringboot, SiApachekafka, SiKubernetes } from 'react-icons/si'
import { FiCloud, FiServer, FiZap, FiCode, FiDatabase } from 'react-icons/fi'

const items = [
  { label: 'Microservices', icon: <FiServer /> },
  { label: 'Kafka', icon: <SiApachekafka /> },
  { label: 'Spring Boot', icon: <SiSpringboot /> },
  { label: 'Cloud Native', icon: <FiCloud /> },
  { label: 'Distributed Systems', icon: <FiZap /> },
  { label: 'Event-Driven', icon: <FiCode /> },
  { label: 'REST APIs', icon: <FiDatabase /> },
  { label: 'Kubernetes', icon: <SiKubernetes /> },
]

export default function ImpactStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.icon}>{item.icon}</span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
