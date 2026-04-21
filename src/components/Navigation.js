import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.navbar + " glass"}>
      <div className="container">
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            Shaskia<span className={styles.logoAccent}>Machineries</span>
          </Link>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/catalog" className={styles.navLink}>Products</Link>
            <Link href="/services" className={styles.navLink}>Services</Link>
          </div>
          <Link href="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}
