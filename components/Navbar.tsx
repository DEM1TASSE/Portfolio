'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
]

export function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: 'rgba(242,230,214,0.92)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(182,140,107,0.2)' }}>
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg" style={{ color: '#4A3327' }}>
          Demi Ruohan Wang
        </Link>
        <div className="flex gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm tracking-wide transition-colors"
              style={{ color: pathname === href ? '#4A3327' : '#8C5B3C' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
