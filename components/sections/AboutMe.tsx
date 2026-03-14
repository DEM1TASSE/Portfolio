import { SectionHeader } from '@/components/SectionHeader'
import { aboutMe } from '@/data/profile'

export function AboutMe() {
  return (
    <section className="mb-16">
      <SectionHeader title="About Me" />
      <p
        className="max-w-2xl"
        style={{ fontSize: '0.9rem', color: '#8C5B3C', lineHeight: '1.75' }}
      >
        {aboutMe.content}
      </p>
    </section>
  )
}
