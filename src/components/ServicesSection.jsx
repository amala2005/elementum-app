import styles from './ServicesSection.module.css'

const services = [
  {
    tag: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
  },
  {
    tag: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    tag: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
]

export default function ServicesSection() {
  return (
    <section className={styles.services}>

      <h2 className={styles.heading}>
        What we <span className="pill-green">can</span>
        <br />
        <span className={styles.underlineYellow}>offer</span> you!
      </h2>

      <div className={styles.list}>
        {services.map((s, i) => (
          <div key={i} className={styles.row}>
            <p className={`${styles.tag} services-tag`}>{s.tag}</p>
            <p className={styles.title}>{s.title}</p>
            <div className={styles.arrow}>→</div>
          </div>
        ))}
      </div>

    </section>
  )
}
