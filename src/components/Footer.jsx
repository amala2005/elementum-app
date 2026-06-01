import styles from './Footer.module.css'

const footerColumns = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
  },
]

export default function Footer() {
  return (
    <>
      {/* ── Subscribe Banner ── */}
      <section className={styles.subscribe}>

        {/* Arrow decoration */}
        <div className={styles.arrowDeco}>
          <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
            <path
              d="M10 10 Q30 0 50 20 Q60 30 55 50"
              stroke="#e9738d" strokeWidth="2" fill="none" strokeLinecap="round"
            />
            <path
              d="M48 52 L55 50 L50 44"
              stroke="#e9738d" strokeWidth="2" strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Purple shape */}
        <div className={`${styles.purpleShape} float`}>
          <svg width="60" height="80" viewBox="0 0 60 80">
            <path d="M55 5 Q65 40 30 78 Q-5 40 5 5 Z" fill="#7c3aed" />
          </svg>
        </div>

        <h2 className={styles.subscribeTitle}>
          Subscribe to<br />our newsletter
        </h2>
        <p className={styles.subscribeSubtitle}>
          To make your stay special and even more memorable
        </p>
        <button className={styles.subscribeBtn}>Subscribe Now</button>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={`${styles.footerGrid} footer-grid`}>

          {footerColumns.map((col, i) => (
            <div key={i}>
              <p className={styles.colTitle}>{col.title}</p>
              {col.links.map((link, j) => (
                <a key={j} href="#" className={styles.footerLink}>{link}</a>
              ))}
            </div>
          ))}

          {/* Contact column */}
          <div>
            <p className={styles.colTitle}>Terms & Policies</p>
            <p className={styles.contactText}>
              1498w Fluton ste, STE<br />
              2D Chicago, IL 63867.
            </p>
            <p className={styles.contactText} style={{ marginTop: 10 }}>
              (123) 456789000
            </p>
            <p className={styles.contactText} style={{ marginTop: 6 }}>
              info@elementum.com
            </p>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>©2023 Elementum. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}
