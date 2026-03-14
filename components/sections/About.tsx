export function About() {
  return (
    <div id="about" style={{
      borderTop: '1px solid var(--border)',
      padding: '5rem 3rem',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '5rem',
      alignItems: 'center',
    }}>
      <h2 style={{
        fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 300, lineHeight: 1.15, fontStyle: 'italic', color: 'var(--text)',
      }}>
        Researcher.<br />Builder.<br /><span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Human.</span>
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9, maxWidth: '480px' }}>
          MS student at <strong style={{ color: 'var(--text)', fontWeight: 400 }}>CMU Language Technologies Institute</strong>, graduating December 2026.
          I&apos;m obsessed with making AI agents that actually work on the open web —
          and quietly plotting my own startup on the side.<br /><br />
          Before CMU: RLVR optimization at <strong style={{ color: 'var(--text)', fontWeight: 400 }}>MSRA</strong>,
          multimodal ML at <strong style={{ color: 'var(--text)', fontWeight: 400 }}>ByteDance</strong>,
          and grounding research at <strong style={{ color: 'var(--text)', fontWeight: 400 }}>OSU NLP Group</strong>.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['Skiing', 'Street Dance', 'Climbing', 'Poker', 'Math olympiad', '小红书'].map(interest => (
            <span key={interest} style={{
              fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
              border: '1px solid var(--border)', color: 'var(--muted)',
              padding: '5px 12px',
            }}>
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
