import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import './globals.css'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-garamond',
})

export const metadata: Metadata = {
  title: 'Demi Ruohan Wang',
  description: "Master's student at CMU LTI, AI researcher and developer.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={garamond.variable}>
      <body className="antialiased" style={{ backgroundColor: '#F2E6D6', color: '#8C5B3C' }}>
        {children}
      </body>
    </html>
  )
}
