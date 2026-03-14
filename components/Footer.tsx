import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(237,233,224,0.08)',
        padding: '2rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1rem', fontWeight: 300, color: '#6b6660' }}>
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
