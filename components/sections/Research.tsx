'use client'

const researchItems = [
  {
    featured: true,
    badge: 'ICLR 2025 · Oral (1.8%)',
    title: 'UGround — Universal Visual Grounding for GUI Agents',
    desc: 'A universal grounding model for GUI agents across web, mobile, and desktop. Trained on 10M+ synthetic samples. SOTA at the time on major GUI grounding and agent benchmarks.',
    tags: ['Multimodal', 'GUI Agents', 'Computer Use Agents', 'Grounding'],
    links: {
      Homepage: 'https://osu-nlp-group.github.io/UGround/',
      Paper: 'https://arxiv.org/abs/2410.05243',
      Code: 'https://github.com/OSU-NLP-Group/UGround',
      Twitter: 'https://x.com/ysu_nlp/status/1844186560901808328',
    },
    stats: [
      { value: '200K+', label: 'Hugging Face Downloads' },
      { value: '200+', label: 'Citations' },
    ],
  },
  {
    featured: false,
    badge: 'MSRA · 2025',
    title: 'Understanding RLVR for LLM Reasoning',
    desc: 'Exploring efficient and effective LLM reasoning with reinforcement learning from verifiable rewards. Providing a unified perspective on update dynamics and proposing an adaptive clipping method across benchmarks, model scales, and off-policy settings.',
    tags: ['RLVR', 'GRPO', 'LLM', 'Reasoning'],
    links: {} as Record<string, string>,
    status: 'Under Submission',
    stats: [],
  },
  {
    featured: false,
    badge: 'ByteDance · 2024',
    title: 'LLM-based Violation Detection',
    desc: 'Improving e-commerce content moderation with multimodal large language models for violation detection in real-world systems. Production deployment at scale, achieving 30%+ precision improvement and reducing manual review workload by 40%.',
    tags: ['Multimodal LLM', 'In-Context Learning', 'Content Moderation', 'Industry'],
    links: {} as Record<string, string>,
    stats: [],
  },
]

export function Research() {
  return (
    <section id="research" style={{ padding: '6rem 3rem' }}>
      <p className="section-label">Research</p>
      <div className="research-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', alignItems: 'stretch' }}>
        {researchItems.map((item, i) => (
          <div key={i}
            className={item.featured ? 'research-featured' : undefined}
            style={{
              background: 'var(--bg)',
              padding: '2.5rem',
              gridColumn: item.featured ? '1 / -1' : undefined,
              display: item.featured ? 'grid' : 'block',
              gridTemplateColumns: item.featured ? '2fr 1fr' : undefined,
              gap: item.featured ? '3rem' : undefined,
              alignItems: item.featured ? 'start' : undefined,
            }}
            onMouseOver={e => (e.currentTarget.style.background = 'var(--bg2)')}
            onMouseOut={e => (e.currentTarget.style.background = 'var(--bg)')}
          >
            <div>
              <span style={{
                display: 'inline-block', fontSize: '12px', letterSpacing: '0.15em',
                textTransform: 'uppercase', background: 'var(--accent)', color: 'var(--bg)',
                padding: '3px 8px', marginBottom: '1.2rem',
              }}>
                {item.badge}
              </span>
              <h2 style={{
                fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 500,
                lineHeight: 1.25, color: 'var(--text)', marginBottom: '1rem',
              }}>
                {'Homepage' in item.links ? (
                  <a href={item.links.Homepage} target="_blank" rel="noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 0.2s' }}
                    onMouseOver={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--muted)')}
                    onMouseOut={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent')}
                  >{item.title}</a>
                ) : item.title}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8 }}>{item.desc}</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {item.tags.map(t => (
                  <span key={t} style={{ fontSize: '12px', letterSpacing: '0.1em', color: 'var(--accent-dim)', textTransform: 'uppercase' }}>{t}</span>
                ))}
              </div>
              {(Object.keys(item.links).length > 0 || ('status' in item && item.status)) && (
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {Object.entries(item.links).map(([name, url]) => (
                    <a key={name} href={url} target="_blank" rel="noreferrer" className="accent-link">{name}</a>
                  ))}
                  {'status' in item && item.status && (
                    <span className="accent-link" style={{ cursor: 'default' }}>{item.status}</span>
                  )}
                </div>
              )}
            </div>
            {item.stats.length > 0 && (
              <div className="research-stats" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-end' }}>
                {item.stats.map(s => (
                  <div key={s.label} style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '3rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.3rem' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
