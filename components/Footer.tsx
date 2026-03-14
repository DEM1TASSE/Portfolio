import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <span style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 300, color: 'var(--muted)' }}>
        Demi Wang · 王若涵
      </span>
      <div className="flex" style={{ gap: '2rem' }}>
        {[
          { label: 'Email', href: `mailto:${profile.email}` },
          { label: 'Scholar', href: profile.gscholar },
          { label: 'GitHub', href: `https://github.com/${profile.github}` },
          { label: 'X', href: `https://twitter.com/${profile.twitter}` },
        ].map(({ label, href }) => (
          <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="accent-link">
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
