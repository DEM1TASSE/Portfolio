'use client'

const buildingItems = [
  {
    year: '2026', name: 'Cagen', url: undefined,
    desc: 'Agent operating system for organizations and enterprise growth.\nEarly-stage AI startup backed by MiraclePlus and CMU AI Venture Studio.',
    tag: 'Startup', links: { Website: 'https://cagen.ai/' },
  },
  {
    year: '2026', name: 'Wisp', url: undefined,
    desc: 'Natural language workflow automation engine. Explores once, compiles into deterministic workflows, and re-runs in seconds. Built at YC Browser Use Web Agent Hackathon.',
    tag: 'Hackathon',
    links: {
      Demo: 'https://loom.com/share/602f17f53e9c4e3aa010d696a020c78d',
      GitHub: 'http://github.com/Hydral8/wisp',
      Twitter: 'https://x.com/demisama_/status/2028172296419201322',
    },
  },
  {
    year: '2025', name: 'Miko', url: undefined,
    desc: 'AI-native Desktop Pet for Productivity. 2nd place winner at the AdventureX 2025 Hackathon Kimi Track.',
    tag: 'Hackathon',
    links: {
      Demo: 'https://drive.google.com/file/d/1SjDDU3PQ3EVlejGFV0H73DH6EXSCxJe_/view',
      GitHub: 'https://github.com/DEM1TASSE/Miko',
    },
  },
  {
    year: '2023', name: 'LifeBuddy', url: undefined,
    desc: 'Personal lifestyle assistant for budget-friendly living. 2nd place winner at the Baidu & Founder Park AGI Hackathon.',
    tag: 'Hackathon', links: {} as Record<string, string>,
  },
]

export function Building() {
  return (
    <section id="building" style={{ padding: '6rem 3rem' }}>
      <p className="section-label">Building</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {buildingItems.map((item, i) => (
          <div key={i} className="building-item">
            <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.05em', fontFamily: 'var(--mono)', }}>
              {item.year}
            </span>
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: '1.7rem', color: 'var(--text)', marginBottom: '0.3rem' }}>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 0.2s' }}
                    onMouseOver={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--muted)')}
                    onMouseOut={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent')}
                  >{item.name}</a>
                ) : item.name}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{item.desc}</p>
              {Object.keys(item.links).length > 0 && (
                <div style={{ marginTop: '0.6rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {Object.entries(item.links).map(([name, url]) => (
                    <a key={name} href={url} target="_blank" rel="noreferrer" className="building-link">{name}</a>
                  ))}
                </div>
              )}
            </div>
            <span className="building-tag" style={{
              fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase',
              background: 'var(--accent)', color: 'var(--bg)',
              padding: '3px 8px', whiteSpace: 'nowrap',
            }}>
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
