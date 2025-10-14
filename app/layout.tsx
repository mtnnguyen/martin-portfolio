import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Martin Nguyen — Developer & Athlete',
  description: 'Computer Science student, developer, and athlete at University of Toronto',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen pt-20 pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}