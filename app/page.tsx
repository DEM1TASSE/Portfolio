import { Profile } from '@/components/sections/Profile'
import { News } from '@/components/sections/News'
import { Education } from '@/components/sections/Education'
import { Experiences } from '@/components/sections/Experiences'
import { Publications } from '@/components/sections/Publications'
import { Services } from '@/components/sections/Services'
import { AboutMe } from '@/components/sections/AboutMe'
import { ClustrMap } from '@/components/sections/ClustrMap'
import { FadeIn } from '@/components/FadeIn'

export default function HomePage() {
  return (
    <div className="py-4">
      <FadeIn delay={0}><Profile /></FadeIn>
      <FadeIn delay={0.08}><News /></FadeIn>
      <FadeIn delay={0.12}><Education /></FadeIn>
      <FadeIn delay={0.16}><Experiences /></FadeIn>
      <FadeIn delay={0.2}><Publications /></FadeIn>
      <FadeIn delay={0.24}><Services /></FadeIn>
      <FadeIn delay={0.28}><AboutMe /></FadeIn>
      <FadeIn delay={0.32}><ClustrMap /></FadeIn>
    </div>
  )
}
