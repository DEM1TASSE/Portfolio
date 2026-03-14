import { Profile } from '@/components/sections/Profile'
import { News } from '@/components/sections/News'
import { Education } from '@/components/sections/Education'
import { Experiences } from '@/components/sections/Experiences'
import { Publications } from '@/components/sections/Publications'
import { Services } from '@/components/sections/Services'
import { AboutMe } from '@/components/sections/AboutMe'
import { ClustrMap } from '@/components/sections/ClustrMap'

export default function HomePage() {
  return (
    <div className="py-4">
      <Profile />
      <News />
      <Education />
      <Experiences />
      <Publications />
      <Services />
      <AboutMe />
      <ClustrMap />
    </div>
  )
}
