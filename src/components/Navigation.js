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
    <nav className={styles.navbar + ' glass'}>
      <div className="container">
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            Shaskia<span className={styles.logoAccent}>Machineries</span>
          </Link>

          {/* Desktop links */}
          <div className={styles.navLinks}>
            {links.slice(0, -1).map((l) => (
              <Link key={l.href} href={l.href} className={styles.navLink}>{l.label}</Link>
            ))}
          </div>

          {/* Desktop Contact Us button */}
          <Link href="/contact" className={styles.contactBtn + ' btn btn-primary'}>Contact Us</Link>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span className={menuOpen ? styles.barTop + ' ' + styles.barTopOpen : styles.barTop}></span>
            <span className={menuOpen ? styles.barMid + ' ' + styles.barMidOpen : styles.barMid}></span>
            <span className={menuOpen ? styles.barBot + ' ' + styles.barBotOpen : styles.barBot}></span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={styles.mobileMenu + (menuOpen ? ' ' + styles.mobileMenuOpen : '')}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={styles.mobileLink + (l.href === '/contact' ? ' ' + styles.mobileLinkCta : '')}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
