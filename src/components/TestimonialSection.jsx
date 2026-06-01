import styles from './TestimonialSection.module.css'

const leftAvatars  = [10, 22, 35]
const rightAvatars = [44, 56, 68]

export default function TestimonialSection() {
  return (
    <section className={styles.testimonial}>

      <h2 className={styles.heading}>
        What our customer{' '}
        <span className="pill-green">says</span>{' '}
        <span className={styles.underlineYellow}>About Us</span>
      </h2>

      <div className={styles.layout}>

        {/* Left avatars */}
        <div className={styles.avatarStack}>
          {leftAvatars.map((seed, i) => (
            <img
              key={i}
              src={`https://picsum.photos/seed/${seed}/120/120`}
              alt={`Customer ${i + 1}`}
              className={styles.avatar}
              style={{ width: i === 1 ? 60 : 44, height: i === 1 ? 60 : 44 }}
            />
          ))}
        </div>

        {/* Quote card */}
        <div className={styles.card}>
          <span className={styles.quoteOpen}>"</span>
          <p className={styles.quote}>
            Elementum delivered the site within the timeline as they requested.
            In the end, the client found a 50% increase in traffic within days
            since its launch. They also had an impressive ability to use
            technologies that the company hadn't used, which have also proved
            to be easy to use and reliable.
          </p>
          <span className={styles.quoteClose}>"</span>
        </div>

        {/* Right avatars */}
        <div className={`${styles.avatarStack} ${styles.avatarRight}`}>
          {rightAvatars.map((seed, i) => (
            <img
              key={i}
              src={`https://picsum.photos/seed/${seed}/120/120`}
              alt={`Customer ${i + 4}`}
              className={styles.avatar}
              style={{ width: i === 2 ? 80 : 56, height: i === 2 ? 80 : 56 }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
