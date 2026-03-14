import Image from 'next/image'
import { SectionHeader } from '@/components/SectionHeader'
import { education } from '@/data/profile'

export function Education() {
  return (
    <section className="mb-16">
      <SectionHeader title="Education" />
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="shrink-0 flex items-center justify-center" style={{ width: '40px', height: '40px' }}>
              <Image
                src={edu.logo}
                alt={edu.school}
                width={36}
                height={36}
                className="object-contain"
                unoptimized
              />
            </div>
            <div>
              <div className="font-serif font-medium" style={{ color: '#4A3327', fontSize: '1rem' }}>
                {edu.school}
              </div>
              <div style={{ color: '#8C5B3C', fontSize: '0.875rem' }}>{edu.degree}</div>
              {edu.dept && (
                <div style={{ color: '#8C5B3C', fontSize: '0.8rem', opacity: 0.75 }}>{edu.dept}</div>
              )}
              <div style={{ color: '#B68C6B', fontSize: '0.8rem', marginTop: '2px' }}>{edu.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
