import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '@/styles/globals.css'
import Hero from '../components/Hero'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Metalmach Mastery - Precision Die-casting & Machining',
  description: 'Leading manufacturer in die-casting and precision machining with 25+ years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 

