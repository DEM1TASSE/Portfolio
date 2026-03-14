import type { Metadata } from 'next'
import { blogs } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing by Demi Wang on AI, research, and life.',
}

export default function BlogPage() {
  return (
    <div style={{ padding: '8rem 3rem 6rem' }}>
      <p className="section-label">Blog</p>
      {blogs.length === 0 ? (
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>No posts yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {blogs.map((post, i) => (
            <div
              key={i}
              style={{
                display: 'grid', gridTemplateColumns: '120px 1fr', gap: '2rem',
                padding: '1.2rem 0', borderBottom: '1px solid var(--border)',
                alignItems: 'start',
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.05em', fontFamily: 'var(--mono)', paddingTop: '2px' }}>
                {post.date}
              </span>
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="accent-link"
                style={{ fontSize: '13px', textTransform: 'none', letterSpacing: 'normal' }}
              >
                {post.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
