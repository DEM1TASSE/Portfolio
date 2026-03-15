import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
      <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.05em' }}>
        © 2026 Demi Wang. All rights reserved.
      </span>
      <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.05em' }}>
        Last updated · Mar 2026
      </span>
    </footer>
  )
}
