import Image from 'next/image'
import { SectionHeader } from '@/components/SectionHeader'
import { experience } from '@/data/profile'

export function Experiences() {
  return (
    <section className="mb-16">
      <SectionHeader title="Experiences" />
      <div className="space-y-6">
        {experience.map((exp, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="shrink-0 flex items-center justify-center" style={{ width: '40px', height: '40px' }}>
              <Image
                src={exp.logo}
                alt={exp.company}
                width={36}
                height={36}
                className="object-contain"
                unoptimized
              />
            </div>
            <div>
              <div className="font-serif font-medium" style={{ color: '#4A3327', fontSize: '1rem' }}>
                {exp.company}
              </div>
              <div style={{ color: '#8C5B3C', fontSize: '0.875rem' }}>{exp.position}</div>
              <div style={{ color: '#8C5B3C', fontSize: '0.8rem', opacity: 0.75 }}>{exp.brief}</div>
              <div style={{ color: '#B68C6B', fontSize: '0.8rem', marginTop: '2px' }}>{exp.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
