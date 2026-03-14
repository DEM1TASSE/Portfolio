import { SectionHeader } from '@/components/SectionHeader'
import { services } from '@/data/profile'

export function Services() {
  return (
    <section className="mb-16">
      <SectionHeader title="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.reviewer.length > 0 && (
          <div>
            <h3
              className="uppercase tracking-widest mb-3"
              style={{ fontSize: '0.7rem', color: '#B68C6B', letterSpacing: '0.12em' }}
            >
              Reviewer
            </h3>
            <ul className="space-y-1.5">
              {services.reviewer.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="service-link"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {services.volunteer.length > 0 && (
          <div>
            <h3
              className="uppercase tracking-widest mb-3"
              style={{ fontSize: '0.7rem', color: '#B68C6B', letterSpacing: '0.12em' }}
            >
              Volunteer
            </h3>
            <ul className="space-y-1.5">
              {services.volunteer.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="service-link"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
