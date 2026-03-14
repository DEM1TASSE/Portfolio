import { Hero } from '@/components/sections/Hero'
import { Recent } from '@/components/sections/Recent'
import { Research } from '@/components/sections/Research'
import { Building } from '@/components/sections/Building'
import { About } from '@/components/sections/About'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Recent />
      <Research />
      <Building />
      <About />
    </>
  )
}
