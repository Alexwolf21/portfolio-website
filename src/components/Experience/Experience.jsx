import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  FiTrendingUp,
  FiClock,
  FiUsers,
  FiZap,
  FiShield,
  FiActivity,
  FiChevronDown,
} from 'react-icons/fi'
import { SiSap } from 'react-icons/si'
import styles from './Experience.module.css'

/* ---- Dynamic experience duration ---- */
function useExperienceYears() {
  const [years, setYears] = useState(() => {
    const start = new Date(2024, 7, 1) // August 2024
    return Math.max(0, (Date.now() - start) / (365.25 * 24 * 60 * 60 * 1000))
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const start = new Date(2024, 7, 1)
      setYears(Math.max(0, (Date.now() - start) / (365.25 * 24 * 60 * 60 * 1000)))
    }, 60000) // update every minute
    return () => clearInterval(interval)
  }, [])

  return years
}

/* ---- Count-up component ---- */
function CountUp({ end, suffix = '%', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const counted = useRef(false)

  useEffect(() => {
    if (inView && !counted.current) {
      counted.current = true
      const startTime = performance.now()
      const animate = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * end))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className={styles.metricValue}>
      {count}
      {suffix}
    </span>
  )
}

/* =========================================
   Company data — add more entries here
   ========================================= */
const companies = [
  {
    id: 'sap',
    name: 'SAP',
    role: 'Software Developer',
    location: 'Bengaluru, India',
    duration: 'Aug 2024 – Present',
    icon: <SiSap />,
    iconColor: '#0070f2',
    tech: ['Java Spring Boot', 'Javascript', 'SAP UI5', 'Kafka', 'PostgreSQL'],
    product: {
      name: 'SAP Cloud ALM',
      description:
        'SAP Cloud ALM is a cloud-native application lifecycle management (ALM) tool designed to help businesses implement, operate, and manage their SAP and non-SAP solutions. I contributed to Intelligent Event Processing which is a core capability within the SAP Cloud ALM Operations segment that acts as a central hub for handling, routing, and reacting to events and alerts from various sources',
    },
    metrics: [
      {
        icon: <FiTrendingUp />,
        value: 50,
        suffix: '%',
        label: 'Throughput Increase',
        description:
          'Contributed to development and optimization of Spring Boot microservices and REST APIs improving system throughput',
        color: '#6c63ff',
      },
      {
        icon: <FiClock />,
        value: 30,
        suffix: '%',
        label: 'SLA Adherence',
        description:
          'Designed event-driven systems using Kafka and schedulers to automate workflows',
        color: '#00d4aa',
      },
      {
        icon: <FiUsers />,
        value: 40,
        suffix: '%',
        label: 'Usability Improvement',
        description:
          'Developed real-time event tracking, workflow automation, and RBAC features',
        color: '#ff6b9d',
      },
      {
        icon: <FiZap />,
        value: 60,
        suffix: '%',
        label: 'Manual Effort Reduced',
        description:
          'Integrated services with centralized cloud systems reducing manual overhead',
        color: '#f59e0b',
      },
      {
        icon: <FiShield />,
        value: 90,
        suffix: '%',
        label: 'Test Coverage',
        description:
          'Increased test coverage with comprehensive automated testing across services',
        color: '#6c63ff',
      },
      {
        icon: <FiActivity />,
        value: 30,
        suffix: '%',
        label: 'Faster Resolution',
        description:
          'Improved observability using Dynatrace, Kibana, and Grafana dashboards',
        color: '#00d4aa',
      },
    ],
  },
  // ✅ Add more companies here using the same shape
]

export default function Experience() {
  const [expandedId, setExpandedId] = useState(null)
  const experienceYears = useExperienceYears()

  const toggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  // Format years: "1.6" etc.
  const formattedYears = experienceYears.toFixed(1)

  return (
    <section className="sectionWrapper" id="experience">
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionLabel">Experience</span>
          <h2 className="sectionTitle">Where I&apos;ve Worked</h2>
          <div className="sectionDivider" />
        </div>

        {/* ---- Experience Years Strip ---- */}
        <motion.div
          className={styles.yearsStrip}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.yearsNumber}>{formattedYears}</span>
          <span className={styles.yearsLabel}>Years of Professional Experience</span>
        </motion.div>

        <div className={styles.companiesList}>
          {companies.map((company) => {
            const isOpen = expandedId === company.id

            return (
              <motion.div
                key={company.id}
                className={`${styles.companyAccordion} ${isOpen ? styles.accordionOpen : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
              >
                {/* ---- Company info row ---- */}
                <div className={styles.companyBar}>
                  <div className={styles.barLeft}>
                    <div
                      className={styles.barLogo}
                      style={{ '--logo-color': company.iconColor }}
                    >
                      {company.icon}
                    </div>
                    <div className={styles.barInfo}>
                      <h3 className={styles.barName}>{company.name}</h3>
                      <p className={styles.barRole}>{company.role}</p>
                    </div>
                    <div className={styles.barTech}>
                      {company.tech.map((t) => (
                        <span key={t} className={styles.barTechPill}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.barRight}>
                    <span className={styles.barLocation}>📍 {company.location}</span>
                    <span className={styles.barDate}>{company.duration}</span>
                  </div>
                </div>

                {/* ---- Centered expand button ---- */}
                <button
                  className={`${styles.expandBtn} ${isOpen ? styles.expandBtnOpen : ''}`}
                  onClick={() => toggle(company.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.expandLine} />
                  <span className={styles.expandPill}>
                    <FiChevronDown className={styles.expandIcon} />
                    {isOpen ? 'Hide Details' : 'View Impact'}
                  </span>
                  <span className={styles.expandLine} />
                </button>

                {/* ---- Expandable content ---- */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className={styles.expandWrapper}
                    >
                      <div className={styles.expandInner}>
                        {/* Product info */}
                        <div className={styles.productCard}>
                          <div
                            className={styles.productLogo}
                            style={{ '--logo-color': company.iconColor }}
                          >
                            {company.icon}
                          </div>
                          <div className={styles.productInfo}>
                            <h4 className={styles.productName}>
                              {company.product.name}
                            </h4>
                            <p className={styles.productDesc}>
                              {company.product.description}
                            </p>
                          </div>
                        </div>

                        {/* Metrics grid */}
                        <div className={styles.metricsGrid}>
                          {company.metrics.map((metric, i) => (
                            <motion.div
                              key={metric.label}
                              className={styles.metricCard}
                              style={{ '--card-color': metric.color }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.35, delay: i * 0.07 }}
                            >
                              <div className={styles.metricHeader}>
                                <span className={styles.metricIcon}>{metric.icon}</span>
                                <CountUp end={metric.value} suffix={metric.suffix} />
                              </div>
                              <h4 className={styles.metricLabel}>{metric.label}</h4>
                              <p className={styles.metricDesc}>{metric.description}</p>
                              <div className={styles.metricBar}>
                                <motion.div
                                  className={styles.metricFill}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${metric.value}%` }}
                                  transition={{
                                    duration: 1,
                                    delay: 0.2 + i * 0.07,
                                    ease: 'easeOut',
                                  }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
