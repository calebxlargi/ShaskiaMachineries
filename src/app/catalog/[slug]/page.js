import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getMachineBySlug, catalogData } from '@/data/products'
import styles from './page.module.css'

export async function generateMetadata({ params }) {
  const machine = await getMachineBySlug(params.slug)
  if (!machine) return { title: 'Not Found' }
  return {
    title: `${machine.title} | Shaskia Machineries`,
    description: machine.description.substring(0, 160),
  }
}

export async function generateStaticParams() {
  return catalogData.map((machine) => ({ slug: machine.slug }))
}

export default async function ProductDetail({ params }) {
  const machine = await getMachineBySlug(params.slug)

  if (!machine) {
    notFound()
  }

  const images = Array.isArray(machine.images) && machine.images.length > 0
    ? machine.images
    : ['https://images.unsplash.com/photo-1565439390116-2ea8a5db0112?auto=format&fit=crop&q=80&w=800']

  const specsObj = (typeof machine.specs === 'object' && machine.specs !== null)
    ? machine.specs
    : {}

  return (
    <div className="container animate-on-load">
      <Link href="/catalog" className={styles.backLink}>&larr; Back to Catalog</Link>

      <div className={styles.productGrid}>
        <div className={styles.gallery}>
          <div className={styles.mainImageWrapper + ' glass'}>
            <img src={images[0]} alt={machine.title} className={styles.mainImage} />
          </div>
          {images.length > 1 && (
            <div className={styles.thumbnailGrid}>
              {images.slice(1).map((img, i) => (
                <div key={i} className={styles.thumbnailWrapper}>
                  <img src={img} alt={`${machine.title} thumbnail ${i + 1}`} className={styles.thumbnail} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.details}>
          <span className={styles.categoryBadge}>{machine.category}</span>
          <h1 className={styles.title}>{machine.title}</h1>
          <p className={styles.description}>{machine.description}</p>

          <div className={styles.specsCard + ' glass'}>
            <h3>Technical Specifications</h3>
            <table className={styles.specsTable}>
              <tbody>
                {Object.entries(specsObj).map(([key, val]) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.inquireBox + ' glass'}>
            <h3>Interested in this machine?</h3>
            <p>Contact our sales team directly or send an inquiry form.</p>
            <div className={styles.actions}>
              <Link href={`/contact?machine=${encodeURIComponent(machine.title)}`} className="btn btn-primary">
                Inquire Now
              </Link>
              <a
                href={`https://wa.me/60123456789?text=${encodeURIComponent(`Hi, I'm interested in the ${machine.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
