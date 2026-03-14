import { Profile } from '@/components/sections/Profile'
import { News } from '@/components/sections/News'

export default function HomePage() {
  return (
    <div className="py-4">
      <Profile />
      <News />
    </div>
  )
}
