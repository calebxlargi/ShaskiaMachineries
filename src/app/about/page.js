import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: 'About Us | Shaskia Machineries',
}

export default function About() {
  return (
    <div className="container animate-on-load">
      <div className={styles.header}>
        <h1>About <span className="text-gradient">Shaskia Machineries</span></h1>
        <p className={styles.subtitle}>Your Digital Profile for Industrial Solutions.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.content}>
          <h2>Company History</h2>
          <p>
            Established in the heart of Klang, Selangor, Shaskia Machineries Sdn. Bhd. has been a cornerstone for the manufacturing and plastics sector. We started with a vision to provide robust, reliable, and cost-effective machinery solutions to both local and regional factories.
          </p>
          <p>
            Over the years, our dedication to exceptional after-sales service and high-quality reconditioned injection molding machines has cemented our reputation as industry leaders in Malaysia.
          </p>
          
          <div className={styles.missionVision}>
            <div className={styles.card + ' glass'}>
              <h3>Our Mission</h3>
              <p>To deliver high-performance industrial machinery while ensuring minimal downtime through rapid, expert maintenance and shifting services.</p>
            </div>
            <div className={styles.card + ' glass'}>
              <h3>Our Vision</h3>
              <p>To be the leading one-stop digital and physical hub for factory managers, setting new standards in the reconditioned plastics machinery market.</p>
            </div>
          </div>
        </div>

        <div className={styles.gallery}>
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1565439390116-2ea8a5db0112?auto=format&fit=crop&q=80&w=800" 
              alt="Klang Corporate Office" 
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
              alt="Engineering Workshop" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
