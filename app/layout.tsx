import type { Metadata, Viewport } from 'next'
import { EB_Garamond } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-garamond',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Demi Ruohan Wang',
    template: '%s | Demi Ruohan Wang',
  },
  description: "Master's student at CMU LTI, AI researcher and developer.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={garamond.variable}>
      <body className="antialiased" style={{ backgroundColor: '#F2E6D6', color: '#8C5B3C', minHeight: '100vh' }}>
        <Navbar />
        <main className="max-w-4xl mx-auto px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
