import { Profile } from '@/components/sections/Profile'
import { News } from '@/components/sections/News'
import { Education } from '@/components/sections/Education'
import { Experiences } from '@/components/sections/Experiences'
import { Publications } from '@/components/sections/Publications'

export default function HomePage() {
  return (
    <div className="py-4">
      <Profile />
      <News />
      <Education />
      <Experiences />
      <Publications />
    </div>
  )
}
