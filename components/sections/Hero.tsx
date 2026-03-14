import { profile } from '@/data/profile'

export function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: '1fr auto',
        padding: '0 3rem 3rem',
        position: 'relative',
        overflow: 'hidden',
        borderTop: 'none',
      }}
    >
      {/* Subtle radial bg */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '40vw', height: '40vw',
        background: 'radial-gradient(ellipse at top right, rgba(198,241,53,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Main content — bottom-aligned */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '2rem' }}>
        <p style={{
          fontFamily: 'var(--font-dm-mono)', fontSize: '12px', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: '#c6f135', marginBottom: '0.5rem',
          opacity: 0, animation: 'fadeUp 0.8s 0.1s forwards',
        }}>
          Hi, I&apos;m
        </p>
        <h1 style={{
          fontFamily: 'var(--font-cormorant)', fontWeight: 300,
          fontSize: 'clamp(7rem, 18vw, 16rem)', lineHeight: 0.88,
          letterSpacing: '-0.02em', color: '#ede9e0',
          opacity: 0, animation: 'fadeUp 0.9s 0.2s forwards',
        }}>
          De<em style={{ fontStyle: 'italic', color: '#c6f135' }}>mi</em>
        </h1>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '2.5rem', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{
            fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: 300,
            color: '#6b6660', letterSpacing: '0.1em',
            opacity: 0, animation: 'fadeUp 0.9s 0.35s forwards',
          }}>
            王若涵
          </p>
          <p style={{
            maxWidth: '320px', fontSize: '12px', color: '#6b6660',
            lineHeight: 1.8, textAlign: 'right',
            opacity: 0, animation: 'fadeUp 0.9s 0.45s forwards',
          }}>
            Researching <span style={{ color: '#ede9e0' }}>web agents</span> at CMU LTI.<br />
            Building things that matter.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderTop: '1px solid rgba(237,233,224,0.08)', paddingTop: '1.5rem',
        opacity: 0, animation: 'fadeUp 0.9s 0.6s forwards',
      }}>
        <div className="flex" style={{ gap: '1.5rem' }}>
          {[
            { label: 'Research', href: '#research' },
            { label: 'Scholar', href: profile.gscholar },
            { label: 'GitHub', href: `https://github.com/${profile.github}` },
            { label: 'X', href: `https://twitter.com/${profile.twitter}` },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              target={href.startsWith('#') ? undefined : '_blank'}
              rel={href.startsWith('#') ? undefined : 'noreferrer'}
              className="accent-link"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="scroll-hint">Scroll</div>
      </div>
    </section>
  )
}
