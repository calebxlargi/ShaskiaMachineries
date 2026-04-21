'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    const form = e.target
    const formData = new FormData(form)

    // Using basic Web3forms fetch as requested
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setStatus("Thank you! Your inquiry has been submitted.")
        form.reset()
      } else {
        setStatus("Error submitting form. Please try again.")
      }
    } catch (err) {
      console.error(err)
      setStatus("A connection error occurred.")
    }
  }

  return (
    <div className="container animate-on-load">
      <div className={styles.header}>
        <h1>Contact <span className="text-gradient">Us</span></h1>
        <p className={styles.subtitle}>Get in touch for machinery inquiries and general support.</p>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard + ' glass'}>
            <h3>Office Address</h3>
            <p>Jalan Sungai Jati, Taman Sentosa,<br/>41200 Klang, Selangor, Malaysia</p>
          </div>
          
          <div className={styles.infoCard + ' glass'}>
            <h3>Direct Contact</h3>
            <p>
              <a href="tel:+60123456789" className={styles.link}>📞 +60 12-345 6789</a><br/><br/>
              <a href="mailto:sales@shaskiamachineries.com.my" className={styles.link}>✉️ sales@shaskiamachineries.com.my</a>
            </p>
          </div>

          <div className={styles.mapContainer + ' glass'}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15938.163351336496!2d101.464!3d3.003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDAnMTAuOCJOIDEwMcKwMjcnNTAuNCJF!5e0!3m2!1sen!2smy!4v1650000000000!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className={styles.formContainer + ' glass'}>
          <h2>Send an Inquiry</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input type="hidden" name="subject" value="New Inquiry from Shaskia Machineries Website" />
            <input type="hidden" name="from_name" value="Shaskia Web System" />
            
            <div className={styles.formGroup}>
              <label>Name</label>
              <input type="text" name="name" required placeholder="John Doe" />
            </div>
            
            <div className={styles.formGroup}>
              <label>Company</label>
              <input type="text" name="company" placeholder="Example Manufacturing Sdn Bhd" />
            </div>
            
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input type="tel" name="phone" required placeholder="+60 12 XXX XXXX" />
              </div>
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input type="email" name="email" required placeholder="john@example.com" />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label>Message / Inquiry Details</label>
              <textarea name="message" rows="5" required placeholder="I am looking for a 150T Injection Molding Machine..."></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Submit Inquiry
            </button>
            {status && <p className={styles.statusMessage}>{status}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}
