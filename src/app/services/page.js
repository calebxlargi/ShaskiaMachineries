import styles from './page.module.css'

export const metadata = {
  title: 'Our Services | Shaskia Machineries',
  description: 'Expert repair, reconditioning, system upgrading, and factory shifting services in Klang.',
}

export default function Services() {
  const services = [
    {
      title: "Machinery Repairing",
      desc: "Comprehensive diagnostic and repair services to minimize downtime and ensure your production line is back to full capacity quickly.",
      icon: "⚙️"
    },
    {
      title: "Reconditioning",
      desc: "We bring used injection molding machines back to OEM specifications, extending their lifecycle and improving ROI.",
      icon: "🔄"
    },
    {
      title: "System Upgrading",
      desc: "Modernize legacy systems with advanced controllers, energy-saving servo motors, and automated robotics integration.",
      icon: "⚡"
    },
    {
      title: "Buying & Selling Used Machinery",
      desc: "A trusted marketplace for high-quality, pre-inspected used industrial machinery.",
      icon: "🤝"
    },
    {
      title: "Machine & Factory Shifting",
      desc: "Specialized logistics and engineering teams to safely relocate individual heavy machines or entire factory setups within the Klang Valley.",
      icon: "🏗️"
    }
  ]

  return (
    <div className="container animate-on-load">
      <div className={styles.header}>
        <h1>Our <span className="text-gradient">Services</span></h1>
        <p className={styles.subtitle}>Comprehensive Engineering and Support</p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, idx) => (
          <div key={idx} className={styles.serviceCard + ' glass'}>
            <div className={styles.icon}>{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      <div className={styles.supportBanner}>
        <div className={styles.supportContent}>
          <h2>Dedicated After-Sales Support</h2>
          <p>At Shaskia Machineries, we believe our job starts when you receive your machinery. Our general after-sales maintenance programs ensure you have ongoing technical assistance, spare parts availability, and routine check-ups built on 99.9% reliability.</p>
        </div>
      </div>
    </div>
  )
}
