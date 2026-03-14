'use client'

import Image from 'next/image'
import { SectionHeader } from '@/components/SectionHeader'
import { publications } from '@/data/publications'

const OWN_NAME = 'Ruohan Wang'

export function Publications() {
  const selected = publications.filter(p => p.selected)

  return (
    <section className="mb-16">
      <SectionHeader title="Selected Publications" />
      <div className="space-y-8">
        {selected.map((pub, i) => (
          <div key={i} className="flex gap-5 items-start">
            {pub.cover && (
              <div
                className="hidden sm:block shrink-0 overflow-hidden"
                style={{
                  width: '112px',
                  height: '80px',
                  borderRadius: '4px',
                  backgroundColor: '#F7F1E6',
                  border: '1px solid rgba(182,140,107,0.2)',
                }}
              >
                <Image
                  src={pub.cover}
                  alt={pub.title}
                  width={112}
                  height={80}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            )}
            <div className="flex-1">
              <div
                className="font-serif font-medium leading-snug mb-1"
                style={{ color: '#4A3327', fontSize: '0.95rem' }}
              >
                {pub.title}
              </div>
              <div className="mb-1" style={{ fontSize: '0.8rem', color: '#8C5B3C' }}>
                {pub.authors.map((author, j) => (
                  <span key={j}>
                    {author === OWN_NAME || author.includes('Ruohan Wang') ? (
                      <strong style={{ color: '#4A3327' }}>{author}</strong>
                    ) : (
                      author
                    )}
                    {j < pub.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span style={{ color: '#B68C6B', fontSize: '0.8rem', fontWeight: 500 }}>
                  {pub.venue} {pub.year}
                </span>
                {pub.badge && (
                  <span
                    style={{
                      fontSize: '0.7rem',
                      padding: '1px 6px',
                      backgroundColor: 'rgba(74,51,39,0.1)',
                      color: '#4A3327',
                      borderRadius: '4px',
                    }}
                  >
                    {pub.badge}
                  </span>
                )}
              </div>
              <div className="flex gap-3">
                {Object.entries(pub.links).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '0.8rem', color: '#B68C6B', textDecoration: 'underline', textUnderlineOffset: '2px' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#4A3327')}
                    onMouseOut={e => (e.currentTarget.style.color = '#B68C6B')}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
