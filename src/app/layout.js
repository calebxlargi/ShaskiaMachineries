import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'

export const metadata = {
  title: 'Shaskia Machineries | Industrial & Plastics Machinery',
  description: 'Leading provider of injection molding machines, reconditioned machinery, and complete factory solutions in Klang, Malaysia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
