'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/catalog', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className={styles.navbar + ' glass'}>
        <div className="container">
          <div className={styles.navContainer}>
            <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
              Shaskia<span className={styles.logoAccent}>Machineries</span>
            </Link>

            {/* Desktop links */}
            <div className={styles.navLinks}>
              {links.map((l) => (
                <Link key={l.href} href={l.href} className={styles.navLink}>{l.label}</Link>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              <span className={`${styles.bar} ${menuOpen ? styles.barTopOpen : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barMidOpen : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barBotOpen : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu — rendered outside the nav so it isn't clipped */}
      <div className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ''}`}>
        <div className={styles.mobileMenuInner}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
