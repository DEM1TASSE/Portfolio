import type { Metadata } from 'next'
import { SectionHeader } from '@/components/SectionHeader'
import { blogs } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Blog — Demi Ruohan Wang',
  description: 'Writing by Demi Ruohan Wang on AI, research, and life.',
}

export default function BlogPage() {
  return (
    <div className="py-16">
      <SectionHeader title="Blog" />
      {blogs.length === 0 ? (
        <p style={{ color: '#8C5B3C', fontSize: '0.9rem' }}>No posts yet.</p>
      ) : (
        <div className="space-y-6">
          {blogs.map((post, i) => (
            <div
              key={i}
              className="flex gap-4 items-baseline pb-5"
              style={{ borderBottom: '1px solid rgba(182,140,107,0.2)' }}
            >
              <span
                className="shrink-0 font-mono"
                style={{ color: '#B68C6B', fontSize: '0.8rem', width: '5rem' }}
              >
                {post.date}
              </span>
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="font-serif leading-snug blog-link"
                style={{ fontSize: '1.15rem' }}
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
