const buildingItems = [
  { year: '2025', name: 'Cagen', desc: 'Early-stage AI startup. Building in stealth with CMU venture studio.', tag: 'Startup' },
  { year: '2025', name: 'Wisp', desc: 'Natural language workflow automation engine — YC Browser Use Hackathon.', tag: 'Hackathon' },
  { year: '2025', name: 'Miko', desc: '2nd place winner at AdventureX 2025 hackathon.', tag: 'Hackathon' },
  { year: '2023', name: 'LifeBuddy', desc: 'Personal lifestyle assistant for budget-friendly living. 2nd place at Baidu AGI Hackathon.', tag: 'Hackathon' },
]

export function Building() {
  return (
    <section id="building" style={{ padding: '6rem 3rem', borderTop: '1px solid rgba(237,233,224,0.08)' }}>
      <p className="section-label">Building</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {buildingItems.map((item, i) => (
          <div key={i} className="building-item">
            <span style={{ fontSize: '11px', color: '#6b6660', letterSpacing: '0.05em', fontFamily: 'var(--font-dm-mono)' }}>
              {item.year}
            </span>
            <div>
              <h3 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '1.3rem', color: '#ede9e0', marginBottom: '0.2rem' }}>
                {item.name}
              </h3>
              <p style={{ fontSize: '11px', color: '#6b6660' }}>{item.desc}</p>
            </div>
            <span className="building-tag" style={{
              fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase',
              border: '1px solid rgba(237,233,224,0.08)', color: '#6b6660',
              padding: '4px 10px', whiteSpace: 'nowrap',
            }}>
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
