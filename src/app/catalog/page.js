import Link from 'next/link'
import Image from 'next/image'
import { getMachines } from '@/data/products'
import styles from './page.module.css'

export const metadata = {
  title: 'Machinery Catalog | Shaskia Machineries',
  description: 'Browse our extensive catalog of new and reconditioned injection molding and industrial machinery.',
}


export default async function Catalog() {
  const machines = await getMachines()

  return (
    <div className="container animate-on-load">
      <div className={styles.header}>
        <h1>Our <span className="text-gradient">Machinery Catalog</span></h1>
        <p className={styles.subtitle}>High-performance plastics and industrial machinery solutions.</p>
      </div>

      {machines.length === 0 ? (
        <div className={styles.emptyState + " glass"}>
          <h2>No machinery listed yet.</h2>
          <p>Please check back later or contact us directly.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {machines.map((machine) => {
            let image = "https://images.unsplash.com/photo-1565439390116-2ea8a5db0112?auto=format&fit=crop&q=80&w=600" // Default placeholder
            try {
              if (Array.isArray(machine.images) && machine.images.length > 0) {
                image = machine.images[0]
              }
            } catch (e) {
              // Ignore
            }

            return (
              <Link href={`/catalog/${machine.slug}`} key={machine.id} className={styles.card + " glass"}>
                <div className={styles.imageWrapper}>
                  <img src={image} alt={machine.title} className={styles.image} />
                  <span className={styles.categoryBadge}>{machine.category}</span>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{machine.title || 'Untitled'}</h3>
                  <p className={styles.desc}>{(machine.description || '').substring(0, 100)}...</p>
                  <span className={styles.viewBtn}>View Details &rarr;</span>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
