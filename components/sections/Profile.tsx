'use client'

import Image from 'next/image'
import { Github, Twitter, Linkedin, Mail, FileText, BookOpen } from 'lucide-react'
import { profile } from '@/data/profile'

export function Profile() {
  const bioParagraphs = profile.bio.split('\n\n').filter(Boolean)

  return (
    <section className="pt-16 pb-12">
      <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
        {/* Left: text */}
        <div className="flex-1">
          <h1
            className="font-serif font-bold leading-tight mb-2"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 3.75rem)', color: '#4A3327' }}
          >
            {profile.name}
          </h1>
          <p className="text-lg mb-6" style={{ color: '#8C5B3C' }}>
            {profile.position}
          </p>
          <div className="space-y-3 max-w-xl" style={{ fontSize: '0.95rem', color: '#8C5B3C', lineHeight: '1.7' }}>
            {bioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
              { href: profile.gscholar, icon: BookOpen, label: 'Scholar' },
              { href: `https://github.com/${profile.github}`, icon: Github, label: 'GitHub' },
              { href: `https://twitter.com/${profile.twitter}`, icon: Twitter, label: 'Twitter' },
              { href: `https://linkedin.com/in/${profile.linkedin}`, icon: Linkedin, label: 'LinkedIn' },
              { href: profile.cvUrl, icon: FileText, label: 'CV' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                className="flex items-center gap-1.5 text-sm transition-colors"
                style={{ color: '#8C5B3C' }}
                onMouseOver={e => (e.currentTarget.style.color = '#B68C6B')}
                onMouseOut={e => (e.currentTarget.style.color = '#8C5B3C')}
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: portrait */}
        <div className="flex-shrink-0 self-start md:self-center">
          <div
            className="overflow-hidden"
            style={{
              width: '176px',
              height: '176px',
              borderRadius: '50%',
              border: '2px solid rgba(182,140,107,0.35)',
            }}
          >
            <Image
              src={profile.portraitUrl}
              alt={profile.name}
              width={176}
              height={176}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12" style={{ height: '1px', backgroundColor: 'rgba(182,140,107,0.2)' }} />
    </section>
  )
}
