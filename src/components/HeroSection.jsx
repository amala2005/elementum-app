import styles from './HeroSection.module.css'

const teamAvatars = [
  { seed: 10, size: 'sm' },
  { seed: 20, size: 'md' },
  { seed: 30, size: 'lg' },
  { seed: 40, size: 'md' },
  { seed: 50, size: 'lg' },
  { seed: 60, size: 'sm' },
  { seed: 70, size: 'md' },
  { seed: 80, size: 'sm' },
]

export default function HeroSection() {
  return (
    <section className={styles.hero}>

      {/* Decorative squiggly lines on the left */}
      <div className={styles.decoLeft}>
        <svg width="60" height="120" viewBox="0 0 60 120">
          <path
            d="M30 10 Q50 40 30 70 Q10 100 30 110"
            fill="none" stroke="#e9738d" strokeWidth="2.5" strokeLinecap="round"
          />
          <path
            d="M20 20 Q40 50 20 80"
            fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Decorative purple teardrop on the right */}
      <div className={`${styles.decoRight} float`}>
        <svg width="70" height="90" viewBox="0 0 70 90">
          <path d="M60 5 Q70 45 35 85 Q0 45 10 5 Z" fill="#7c3aed" />
        </svg>
      </div>

      {/* Main headline */}
      <h1 className={`${styles.title} fade-up`}>
        The thinkers and{' '}
        <span className={styles.underlineYellow}>doers</span>{' '}
        were{' '}
        <span className="pill-pink">changing</span>
        {' '}the{' '}
        <span className="pill-green">status</span>{' '}
        Quo with
      </h1>

      {/* Subheading */}
      <p className={`${styles.subtitle} fade-up`}>
        We are a team of strategists, designers communicators, researchers.
        Together, we believe that progress only happens when you refuse to
        play things safe.
      </p>

      {/* Team avatars */}
      <div className={`${styles.avatarRow} avatar-row fade-up`}>
        {teamAvatars.map((a, i) => (
          <img
            key={i}
            src={`https://picsum.photos/seed/${a.seed}/200/200`}
            alt={`Team member ${i + 1}`}
            className={`${styles.avatar} ${styles[a.size]}`}
            style={{ animationDelay: `${0.05 * i}s`, marginTop: i % 2 === 0 ? 20 : 0 }}
          />
        ))}
      </div>
    </section>
  )
}
