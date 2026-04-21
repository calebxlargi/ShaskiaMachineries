import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent} animate-on-load`}>
          <h1 className={styles.heroTitle}>
            Engineering <span className="text-gradient">Excellence</span> <br/>
            in Every Machine.
          </h1>
          <p className={styles.heroText}>
            Shaskia Machineries delivers premium injection molding machines, reconditioned equipment, and comprehensive factory solutions to elevate your production capabilities.
          </p>
          <div className={styles.heroBtns}>
            <Link href="/catalog" className="btn btn-primary">View Products</Link>
            <Link href="/services" className="btn btn-secondary">Our Services</Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <div className="grid grid-cols-3">
            <div className={styles.featureCard + " glass"}>
              <h3>Premium Machinery</h3>
              <p>Top-tier new and reconditioned injection molding machines tailored to your specs.</p>
            </div>
            <div className={styles.featureCard + " glass"}>
              <h3>Expert Maintenance</h3>
              <p>Comprehensive repairing, servicing, and system upgrades by seasoned engineers.</p>
            </div>
            <div className={styles.featureCard + " glass"}>
              <h3>Factory Relocation</h3>
              <p>Seamless, localized machine shifting and factory setup in the Klang Valley.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox + " glass"}>
            <h2>Ready to Upgrade Your Production?</h2>
            <p>Contact our experts today for a free consultation or quotation.</p>
            <Link href="/contact" className="btn btn-primary">Contact Us Now</Link>
          </div>
        </div>
      </section>
    </>
  )
}
