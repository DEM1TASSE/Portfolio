'use client'

const researchItems = [
  {
    featured: true,
    badge: 'ICLR 2025 · Oral',
    title: 'UGround — Universal Visual Grounding',
    desc: 'A unified model for GUI grounding across web, mobile, and desktop. Trained on large-scale synthetic data. SOTA on all major GUI grounding benchmarks.',
    tags: ['Multimodal', 'GUI', 'Grounding'],
    links: { Paper: 'https://arxiv.org/abs/2410.05243', Code: 'https://github.com/OSU-NLP-Group/UGround' },
    stat: { value: '200+', label: 'Citations' },
  },
  {
    featured: false,
    badge: 'Current · MSRA',
    title: 'RLVR for LLM Reasoning',
    desc: 'Exploring efficient and effective LLM reasoning with reinforcement learning from verifiable rewards. Microsoft Research Asia.',
    tags: ['RLVR', 'Reasoning', 'LLM'],
    links: {} as Record<string, string>,
    stat: undefined,
  },
  {
    featured: false,
    badge: 'ByteDance · 2024',
    title: 'LLM-based Violation Detection',
    desc: 'Enhancing e-commerce content moderation with large language models. Production-scale deployment.',
    tags: ['LLM', 'Industry'],
    links: {} as Record<string, string>,
    stat: undefined,
  },
]

export function Research() {
  return (
    <section id="research" style={{ padding: '6rem 3rem', borderTop: '1px solid var(--border)' }}>
      <p className="section-label">Research</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
        {researchItems.map((item, i) => (
          <div key={i}
            style={{
              background: 'var(--bg)',
              padding: '2.5rem',
              gridColumn: item.featured ? '1 / -1' : undefined,
              display: item.featured ? 'grid' : 'block',
              gridTemplateColumns: item.featured ? '1fr 1fr' : undefined,
              gap: item.featured ? '3rem' : undefined,
              alignItems: item.featured ? 'start' : undefined,
            }}
            onMouseOver={e => (e.currentTarget.style.background = 'var(--bg2)')}
            onMouseOut={e => (e.currentTarget.style.background = 'var(--bg)')}
          >
            <div>
              <span style={{
                display: 'inline-block', fontSize: '9px', letterSpacing: '0.15em',
                textTransform: 'uppercase', background: 'var(--accent)', color: 'var(--bg)',
                padding: '3px 8px', marginBottom: '1.2rem',
              }}>
                {item.badge}
              </span>
              <h2 style={{
                fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 300,
                lineHeight: 1.25, color: 'var(--text)', marginBottom: '1rem',
              }}>
                {item.title}
              </h2>
              <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.8 }}>{item.desc}</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {item.tags.map(t => (
                  <span key={t} style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--accent-dim)', textTransform: 'uppercase' }}>{t}</span>
                ))}
              </div>
              {Object.keys(item.links).length > 0 && (
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                  {Object.entries(item.links).map(([name, url]) => (
                    <a key={name} href={url} target="_blank" rel="noreferrer" className="accent-link">{name}</a>
                  ))}
                </div>
              )}
            </div>
            {item.stat && (
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '4rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1 }}>
                  {item.stat.value}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.3rem' }}>
                  {item.stat.label}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
