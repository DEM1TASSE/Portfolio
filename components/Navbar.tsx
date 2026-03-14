'use client'

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center"
      style={{ padding: '1.4rem 3rem' }}
    >
      <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', letterSpacing: '0.15em', color: '#6b6660', textTransform: 'uppercase' }}>
        DW ✦ 2025
      </span>
      <ul className="flex" style={{ listStyle: 'none', gap: '2.5rem' }}>
        {[
          { href: '#recent', label: 'Recent' },
          { href: '#research', label: 'Research' },
          { href: '#building', label: 'Building' },
          { href: '#about', label: 'About' },
        ].map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="nav-link">{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
