import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = ['Home', 'Studio', 'Services', 'Contact', 'FAQs']

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <div className={styles.logo}>Elementum</div>

        {/* Desktop Links */}
        <ul className={styles.desktopLinks}>
          {navLinks.map(link => (
            <li key={link}>
              <a href="#" className={styles.navLink}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <a
              key={link}
              href="#"
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
