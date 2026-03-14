import { SectionHeader } from '@/components/SectionHeader'
import { news } from '@/data/news'

export function News({ limit = 8 }: { limit?: number }) {
  const items = news.slice(0, limit)
  return (
    <section className="mb-16">
      <SectionHeader title="News" />
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4" style={{ fontSize: '0.875rem' }}>
            <span
              className="shrink-0 font-mono"
              style={{ color: '#B68C6B', width: '5.5rem' }}
            >
              {item.date}
            </span>
            <span
              style={{ color: '#8C5B3C', lineHeight: '1.6' }}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
