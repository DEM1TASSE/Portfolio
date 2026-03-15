import { profile } from '@/data/profile'

export function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: '90vh',
        display: 'grid',
        gridTemplateRows: '1fr auto',
        position: 'relative',
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
          fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem',
          opacity: 0, animation: 'fadeUp 0.5s 0s forwards',
        }}>
          Hi, I&apos;m
        </p>
        <h1 style={{
          fontFamily: 'var(--serif)', fontWeight: 300,
          fontSize: 'clamp(7rem, 18vw, 16rem)', lineHeight: 0.88,
          letterSpacing: '-0.02em', color: 'var(--text)',
          animation: 'revealLR 1.8s 0.4s ease-out both',
          transform: 'translateZ(0)',
          willChange: 'clip-path',
        }}>
          De<em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>mi</em>
        </h1>

        <div className="hero-sub" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginTop: '1rem', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{
            fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 300,
            color: 'var(--muted)', letterSpacing: '0.1em',
            opacity: 0, animation: 'fadeUp 0.7s 0.5s forwards',
          }}>
            王若晗
          </p>
          <p style={{
            maxWidth: '480px', fontSize: '14px', color: 'var(--muted)',
            lineHeight: 1.8, textAlign: 'right',
            opacity: 0, animation: 'fadeUp 0.7s 0.65s forwards',
          }}>
            Researching <span style={{ color: 'var(--text)' }}>LLMs, Agents & Reasoning</span> at CMU LTI.<br />Building toward the agentic future.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hero-bottom" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: '1.5rem',
        opacity: 0, animation: 'fadeUp 0.7s 0.8s forwards',
      }}>
        <div className="hero-links flex" style={{ gap: '1.5rem' }}>
          {[
            { label: 'X', href: `https://twitter.com/${profile.twitter}` },
            { label: 'LinkedIn', href: `https://linkedin.com/in/${profile.linkedin}` },
            { label: 'Scholar', href: profile.gscholar },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="accent-link">{label}</a>
          ))}
          <div style={{ width: '100%' }} />
          {[
            { label: 'GitHub', href: `https://github.com/${profile.github}` },
            { label: 'CV', href: profile.cvUrl },
            { label: '小红书', href: profile.xiaohongshu },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="accent-link">{label}</a>
          ))}
        </div>
        <div className="scroll-hint">Scroll</div>
      </div>
    </section>
  )
}
