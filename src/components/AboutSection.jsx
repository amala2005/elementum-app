import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={styles.about}>

      {/* ── Row 1: Text LEFT · Image RIGHT ── */}
      <div className={`${styles.row} section-two-grid`}>

        <div className={styles.textBlock}>
          <h2 className={styles.heading}>
            <span className={styles.underlineYellow}>Tomorrow</span> should
            <br />be better than{' '}
            <span className="pill-green" style={{ fontStyle: 'italic' }}>today</span>
          </h2>
          <p className={styles.body}>
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>
          <span className="read-more">Read more &nbsp; ——</span>
        </div>

        <div className={styles.imageBlock}>
          {/* Pink gradient blob */}
          <div className={styles.blob} />
          {/* Red triangle */}
          <div className={styles.triangleTopRight}>
            <svg width="50" height="50" viewBox="0 0 50 50">
              <polygon points="25,0 50,50 0,50" fill="#e07060" />
            </svg>
          </div>
          <img
            src="https://picsum.photos/seed/meeting1/400/400"
            alt="Team meeting"
            className={styles.circleImg}
          />
        </div>
      </div>

      {/* ── Wavy divider line ── */}
      <div className={styles.waveDivider}>
        <svg width="900" height="60" viewBox="0 0 900 60" fill="none">
          <path
            d="M0 30 Q150 0 300 30 Q450 60 600 30 Q750 0 900 30"
            stroke="#e9738d" strokeWidth="1.5" fill="none"
            strokeDasharray="600"
            style={{ animation: 'drawLine 1.5s ease forwards' }}
          />
        </svg>
      </div>

      {/* ── Row 2: Image LEFT · Text RIGHT ── */}
      <div className={`${styles.row} section-two-grid`}>

        <div className={styles.imageBlock}>
          <div className={styles.triangleBottomLeft}>
            <svg width="50" height="55" viewBox="0 0 50 55">
              <polygon points="25,0 50,55 0,55" fill="#e07060" />
            </svg>
          </div>
          <img
            src="https://picsum.photos/seed/collab1/400/400"
            alt="Collaboration"
            className={styles.circleImg}
          />
        </div>

        <div className={styles.textBlock}>
          <h2 className={styles.heading}>
            <span className="pill-green">See how</span> we can
            <br />help you{' '}
            <span className={styles.underlineYellow}>progress</span>
          </h2>
          <p className={styles.body}>
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <span className="read-more">Read more &nbsp; ——</span>
        </div>
      </div>

    </section>
  )
}
