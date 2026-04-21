import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <h3 className={styles.footerTitle}>Shaskia Machineries</h3>
            <p className={styles.footerText}>
              Your trusted partner for modern industrial machinery and plastics solutions in Klang, Malaysia.
            </p>
          </div>
          <div>
            <h4 className={styles.footerTitleSm}>Quick Links</h4>
            <div className={styles.footerLinks}>
              <Link href="/catalog">Machinery Catalog</Link>
              <Link href="/services">Our Services</Link>
              <Link href="/about">About Us</Link>
            </div>
          </div>
          <div>
            <h4 className={styles.footerTitleSm}>Contact info</h4>
            <p className={styles.footerText}>
              Jalan Sungai Jati, Taman Sentosa,<br />
              41200 Klang, Selangor, Malaysia
            </p>
            <Link href="/contact" className={styles.footerLinkBold}>Get Directions &rarr;</Link>
          </div>
        </div>
        <div className={styles.footerBottom}>
          &copy; {new Date().getFullYear()} Shaskia Machineries Sdn. Bhd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
