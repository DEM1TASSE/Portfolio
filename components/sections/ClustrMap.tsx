'use client'
import Script from 'next/script'
import { SectionHeader } from '@/components/SectionHeader'

export function ClustrMap() {
  return (
    <section className="mb-16">
      <SectionHeader title="Visitors" />
      <div className="flex justify-center">
        <div style={{ width: '200px', height: '150px' }}>
          <Script
            id="clstr_globe"
            src="//clustrmaps.com/globe.js?d=XHaXkpOTTE5tc91XdgumuUNVKkhiazgLFtFwzyDAiv4"
            strategy="lazyOnload"
          />
          <div id="clustrmaps-widget" />
        </div>
      </div>
    </section>
  )
}
