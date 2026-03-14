import { news } from '@/data/news'

export function Recent() {
  const items = news.slice(0, 6)
  return (
    <section id="recent" style={{ padding: '6rem 3rem', borderTop: '1px solid var(--border)' }}>
      <p className="section-label">Recent</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '120px 1fr', gap: '2rem',
            padding: '1.2rem 0', borderBottom: '1px solid var(--border)',
            alignItems: 'start',
          }}>
            <span style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.05em', fontFamily: 'var(--mono)', paddingTop: '2px' }}>
              {item.date}
            </span>
            <span style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
