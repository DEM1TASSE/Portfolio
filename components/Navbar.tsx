import { ThemeToggle } from '@/components/ThemeToggle'

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center"
      style={{ padding: '1.4rem 3rem', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
    >
      <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase' }}>
        Demi Wang ✦ 2026
      </span>
      <div className="flex items-center" style={{ gap: '2rem' }}>
        <ul className="flex" style={{ listStyle: 'none', gap: '2.5rem', margin: 0, padding: 0 }}>
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
        <ThemeToggle />
      </div>
    </nav>
  )
}
