export function About() {
  return (
    <div id="about" className="about-grid" style={{
      padding: '5rem 3rem',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '5rem',
      alignItems: 'center',
    }}>
      <h2 style={{
        fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
        fontWeight: 300, lineHeight: 1.12, fontStyle: 'italic', color: 'var(--text)',
        marginTop: '-1.5rem',
      }}>
        Researcher.<br />Builder.<br /><span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Explorer.</span>
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <p style={{
          fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 300,
          color: 'var(--text)', lineHeight: 1.5, fontStyle: 'italic',
        }}>
          Life is a giant playground — I&apos;m here to unlock every ride:
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {['Snowboard', 'Climb', 'Dance', 'Rave', 'Solo Trip', 'Fashion'].map(interest => (
            <span key={interest} className="hobby-tag">{interest}</span>
          ))}
          <div className="hobby-break" style={{ width: '100%' }} />
          {['Hip-Hop', 'Writing', 'Cocktails', 'Poker', 'Puzzles'].map(interest => (
            <span key={interest} className="hobby-tag">{interest}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
