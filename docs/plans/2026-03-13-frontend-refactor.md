# Frontend Refactor: Jekyll → Next.js 15 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild dem1tasse.github.io from Jekyll + Bootstrap 4 to Next.js 15 + Tailwind CSS v4, with an impeccable.style editorial aesthetic using the Sandstone Latte palette.

**Architecture:** Next.js 15 App Router with static export (`output: 'export'`) for GitHub Pages deployment. All content migrated from Jekyll YAML/Markdown to TypeScript data files. Single homepage with all sections (Profile → News → Education → Experiences → Publications → Services → About → ClustrMap) plus a standalone Blog page.

**Tech Stack:** Next.js 15, TypeScript (strict), Tailwind CSS v4, shadcn/ui, lucide-react, next-themes, Framer Motion

---

## Design Tokens (Reference for all tasks)

```
Background:   #F2E6D6  (warm cream)
Alt BG:       #F7F1E6  (lighter cream, for card/section alt)
Heading text: #4A3327  (espresso brown)
Body text:    #8C5B3C  (cocoa)
Accent/links: #B68C6B  (warm tan)
Heading font: EB Garamond (serif)
Body font:    system-ui, sans-serif
```

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Delete: `Gemfile`, `Gemfile.lock`, `_config.yml` (Jekyll root files — keep `_data/`, `_news/`, etc. until Task 3 migrates them)

**Step 1: Initialize Next.js app in the worktree root**

```bash
cd /Users/demi/Documents/dem1tasse.github.io/.claude/worktrees/refactor-frontend
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm
```

Expected: Next.js 15 scaffolded with `app/`, `public/`, `package.json`.

**Step 2: Configure static export for GitHub Pages**

Edit `next.config.ts`:
```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

**Step 3: Install additional dependencies**

```bash
npm install framer-motion next-themes lucide-react
npx shadcn@latest init
```

When shadcn asks for config: style=default, base color=neutral, CSS variables=yes.

**Step 4: Install EB Garamond font**

In `app/layout.tsx`, add Google Fonts import:
```tsx
import { EB_Garamond } from 'next/font/google'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-garamond',
})
```

**Step 5: Set up CSS design tokens in `app/globals.css`**

```css
@import "tailwindcss";

:root {
  --bg-cream: #F2E6D6;
  --bg-cream-alt: #F7F1E6;
  --text-espresso: #4A3327;
  --text-cocoa: #8C5B3C;
  --text-tan: #B68C6B;
}

body {
  background-color: var(--bg-cream);
  color: var(--text-cocoa);
  font-family: system-ui, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-garamond), Georgia, serif;
  color: var(--text-espresso);
}
```

**Step 6: Extend Tailwind config with custom colors**

In `tailwind.config.ts`:
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F2E6D6',
        'cream-alt': '#F7F1E6',
        espresso: '#4A3327',
        cocoa: '#8C5B3C',
        tan: '#B68C6B',
      },
      fontFamily: {
        serif: ['var(--font-garamond)', 'Georgia', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
}

export default config
```

**Step 7: Verify dev server starts**

```bash
npm run dev
```

Expected: Site loads at localhost:3000 with default Next.js page, no errors.

**Step 8: Commit**

```bash
git add package.json next.config.ts tsconfig.json tailwind.config.ts app/ components/ public/
git commit -m "feat: scaffold Next.js 15 app with Tailwind v4 and Sandstone Latte design tokens"
```

---

## Task 2: Data Layer — Migrate Jekyll YAML to TypeScript

**Files:**
- Create: `data/profile.ts`
- Create: `data/publications.ts`
- Create: `data/news.ts`

**Step 1: Create `data/profile.ts`**

Migrate from `_data/profile.yml`. Full content:

```ts
export const profile = {
  name: 'Demi Ruohan Wang',
  position: "Master's Student @ CMU LTI",
  email: 'demiw@andrew.cmu.edu',
  github: 'DEM1TASSE',
  twitter: 'demisama_',
  linkedin: 'demi-ruohanwang',
  gscholar: 'https://scholar.google.com/citations?user=Lz9tCVsAAAAJ&hl=zh-CN&authuser=2',
  cvUrl: '/assets/materials/CV_Demi Wang.pdf',
  portraitUrl: '/assets/images/photos/portrait.jpg',
  bio: `Hi there! I'm Demi Ruohan Wang, a Master's student at Carnegie Mellon University's Language Technologies Institute. I focus on research in large language models (LLMs), while also working toward becoming a full-stack independent developer. In the long run, I hope to build a startup and contribute to the development of AGI.

My research interests include building more robust general agents that can better understand and execute tasks, as well as enhancing models' reasoning abilities. At CMU, I work with Prof. Graham Neubig on self-evolving web agents. Previously, I conducted research internships at Microsoft Research Asia and the OSU NLP Group (supervised by Prof. Yu Su), and worked as a Machine Learning Engineer Intern at ByteDance.

I am seeking Summer 2026 internships as a Machine Learning Engineer or Research Scientist. Feel free to reach out!`,
}

export const education = [
  {
    school: 'Carnegie Mellon University',
    degree: "Master's, Intelligent Information Systems",
    dept: 'School of Computer Science, Language Technologies Institute',
    logo: '/assets/images/badges/cmu_logo.png',
    date: 'Aug. 2025 – Dec. 2026 (Expected)',
  },
  {
    school: 'Tongji University',
    degree: 'Bachelor of Software Engineering',
    logo: '/assets/images/badges/tongji_logo.png',
    date: 'Sept. 2020 – Jun. 2025',
  },
  {
    school: 'University of California, Berkeley',
    degree: 'Visiting Student, EECS',
    logo: '/assets/images/badges/berkeley_logo.png',
    date: 'Jan. 2023 – Aug. 2023',
  },
]

export const experience = [
  {
    company: 'Microsoft Research Asia',
    position: 'Research Intern',
    date: 'Mar. 2025 – Jul. 2025',
    logo: '/assets/images/badges/microsoft_logo.png',
    brief: 'Exploring efficient and effective LLM reasoning with RLVR',
  },
  {
    company: 'The Ohio State University',
    position: 'Research Intern',
    date: 'Apr. 2024 – Oct. 2024',
    logo: '/assets/images/badges/ohio_logo.png',
    brief: 'Enhancing grounding toward more generalist GUI agents',
  },
  {
    company: 'ByteDance',
    position: 'Machine Learning Engineer Intern',
    date: 'Oct. 2023 – Feb. 2024',
    logo: '/assets/images/badges/bytedance_logo.png',
    brief: 'Enhancing e-commerce violation detection with LLMs',
  },
]

export const services = {
  reviewer: [
    { name: 'ICLR 2026', url: 'https://iclr.cc/' },
    { name: 'NeurIPS MTI-LLM Workshop', url: 'https://workshop-multi-turn-interaction.github.io' },
  ],
  volunteer: [
    { name: 'ICLR 2025', url: 'https://iclr.cc/' },
  ],
}

export const aboutMe = {
  content: `Beyond research and coding, I'm a cat person (three cats at home), a hobbyist photographer, and someone who enjoys long walks in new cities. I believe in building things that are both technically rigorous and genuinely useful.`,
}
```

**Step 2: Create `data/publications.ts`**

Migrate from `_publications/` directory:

```ts
export type Publication = {
  title: string
  authors: string[]
  venue: string
  year: string
  badge?: string
  cover?: string
  abstract: string
  links: Record<string, string>
  selected: boolean
}

export const publications: Publication[] = [
  {
    title: 'Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents',
    authors: ['Boyu Gou', 'Ruohan Wang', 'Boyuan Zheng', 'Yanan Xie', 'Cheng Chang', 'Yiheng Shu', 'Huan Sun', 'Yu Su'],
    venue: 'ICLR',
    year: '2025',
    badge: 'Oral (1.8%)',
    cover: '/assets/images/covers/uground.png',
    abstract: 'We present SeeAct-V, a human-like, vision-only GUI agent framework, and UGround, a SOTA GUI visual grounding model trained on cost-effective synthetic data, marking the first practical demonstration of SOTA performance for vision-only GUI agents.',
    links: {
      Paper: 'https://arxiv.org/abs/2410.05243',
      Code: 'https://github.com/OSU-NLP-Group/UGround',
      Homepage: 'https://osu-nlp-group.github.io/UGround/',
      Twitter: 'https://x.com/ysu_nlp/status/1844186560901808328',
    },
    selected: true,
  },
]
```

**Step 3: Create `data/news.ts`**

Migrate from `_news/` directory (most recent 10):

```ts
export type NewsItem = {
  date: string
  content: string
}

export const news: NewsItem[] = [
  {
    date: 'Aug. 2025',
    content: "Excited to start my master's journey at Carnegie Mellon University!",
  },
  {
    date: 'Jan. 2025',
    content: 'UGround accepted to ICLR 2025 as Oral (Top 1.8%)!',
  },
  // Add remaining items from _news/ files
]
```

**Step 4: Verify TypeScript types compile**

```bash
npm run build 2>&1 | head -30
```

Expected: No type errors.

**Step 5: Commit**

```bash
git add data/
git commit -m "feat: add TypeScript data layer migrated from Jekyll YAML"
```

---

## Task 3: Layout — Navbar + Footer

**Files:**
- Create: `components/Navbar.tsx`
- Create: `components/Footer.tsx`
- Modify: `app/layout.tsx`

**Step 1: Create `components/Navbar.tsx`**

```tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
]

export function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-tan/20">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg text-espresso hover:text-tan transition-colors">
          Demi Ruohan Wang
        </Link>
        <div className="flex gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-wide transition-colors hover:text-tan ${
                pathname === href ? 'text-espresso font-medium' : 'text-cocoa'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
```

**Step 2: Create `components/Footer.tsx`**

```tsx
export function Footer() {
  return (
    <footer className="mt-24 py-8 border-t border-tan/20">
      <div className="max-w-4xl mx-auto px-6 text-center text-sm text-cocoa/60">
        © {new Date().getFullYear()} Demi Ruohan Wang
      </div>
    </footer>
  )
}
```

**Step 3: Update `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-garamond',
})

export const metadata: Metadata = {
  title: 'Demi Ruohan Wang',
  description: "Master's student at CMU LTI, AI researcher and developer.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={garamond.variable}>
      <body className="bg-cream text-cocoa antialiased">
        <Navbar />
        <main className="max-w-4xl mx-auto px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

**Step 4: Verify layout renders**

```bash
npm run dev
```

Visit localhost:3000. Expected: cream background, espresso navbar with "Demi Ruohan Wang" + Home/Blog links, footer.

**Step 5: Commit**

```bash
git add components/Navbar.tsx components/Footer.tsx app/layout.tsx
git commit -m "feat: add Navbar and Footer with Sandstone Latte styling"
```

---

## Task 4: Profile Section

**Files:**
- Create: `components/sections/Profile.tsx`
- Modify: `app/page.tsx`

**Step 1: Create `components/sections/Profile.tsx`**

```tsx
import Image from 'next/image'
import { Github, Twitter, Linkedin, Mail, FileText, GraduationCap } from 'lucide-react'
import { profile } from '@/data/profile'

export function Profile() {
  return (
    <section className="pt-16 pb-12">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Text side */}
        <div className="flex-1">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-espresso leading-tight mb-2">
            {profile.name}
          </h1>
          <p className="text-cocoa text-lg mb-6">{profile.position}</p>
          <div className="prose prose-sm text-cocoa leading-relaxed space-y-3 max-w-xl">
            {profile.bio.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {/* Social links */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 text-sm text-cocoa hover:text-tan transition-colors">
              <Mail size={15} /> Email
            </a>
            <a href={profile.gscholar} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-cocoa hover:text-tan transition-colors">
              <GraduationCap size={15} /> Scholar
            </a>
            <a href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-cocoa hover:text-tan transition-colors">
              <Github size={15} /> GitHub
            </a>
            <a href={`https://twitter.com/${profile.twitter}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-cocoa hover:text-tan transition-colors">
              <Twitter size={15} /> Twitter
            </a>
            <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-cocoa hover:text-tan transition-colors">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-cocoa hover:text-tan transition-colors">
              <FileText size={15} /> CV
            </a>
          </div>
        </div>
        {/* Portrait side */}
        <div className="flex-shrink-0">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-tan/30">
            <Image
              src={profile.portraitUrl}
              alt={profile.name}
              width={208}
              height={208}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Update `app/page.tsx`**

```tsx
import { Profile } from '@/components/sections/Profile'

export default function HomePage() {
  return (
    <div className="py-4">
      <Profile />
    </div>
  )
}
```

**Step 3: Copy portrait image to `public/assets/images/photos/`**

```bash
mkdir -p public/assets/images/photos
cp assets/images/photos/portrait.jpg public/assets/images/photos/
```

**Step 4: Verify profile renders**

```bash
npm run dev
```

Expected: Large serif name, bio text, social icon links, circular portrait on the right.

**Step 5: Commit**

```bash
git add components/sections/Profile.tsx app/page.tsx public/
git commit -m "feat: add Profile section with portrait and social links"
```

---

## Task 5: Section Header Component + News Section

**Files:**
- Create: `components/SectionHeader.tsx`
- Create: `components/sections/News.tsx`
- Modify: `app/page.tsx`

**Step 1: Create reusable `components/SectionHeader.tsx`**

```tsx
export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="font-serif text-2xl text-espresso tracking-wide">{title}</h2>
      <div className="flex-1 h-px bg-tan/30" />
    </div>
  )
}
```

**Step 2: Create `components/sections/News.tsx`**

```tsx
import { SectionHeader } from '@/components/SectionHeader'
import { news } from '@/data/news'

export function News({ limit = 8 }: { limit?: number }) {
  const items = news.slice(0, limit)
  return (
    <section className="mb-16">
      <SectionHeader title="News" />
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4 text-sm">
            <span className="text-tan font-mono shrink-0 w-24">{item.date}</span>
            <span
              className="text-cocoa leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
```

**Step 3: Add News to `app/page.tsx`**

```tsx
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
```

**Step 4: Verify and commit**

```bash
npm run dev
```

Expected: News section with date | content rows under a serif divider heading.

```bash
git add components/SectionHeader.tsx components/sections/News.tsx app/page.tsx
git commit -m "feat: add SectionHeader component and News section"
```

---

## Task 6: Education + Experiences Sections

**Files:**
- Create: `components/sections/Education.tsx`
- Create: `components/sections/Experiences.tsx`
- Modify: `app/page.tsx`

**Step 1: Create `components/sections/Education.tsx`**

```tsx
import Image from 'next/image'
import { SectionHeader } from '@/components/SectionHeader'
import { education } from '@/data/profile'

export function Education() {
  return (
    <section className="mb-16">
      <SectionHeader title="Education" />
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 flex items-center justify-center">
              <Image src={edu.logo} alt={edu.school} width={40} height={40} className="object-contain" unoptimized />
            </div>
            <div>
              <div className="font-serif text-base text-espresso font-medium">{edu.school}</div>
              <div className="text-sm text-cocoa">{edu.degree}</div>
              {edu.dept && <div className="text-xs text-cocoa/70">{edu.dept}</div>}
              <div className="text-xs text-tan mt-0.5">{edu.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

**Step 2: Create `components/sections/Experiences.tsx`**

```tsx
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
            <div className="w-10 h-10 shrink-0 flex items-center justify-center">
              <Image src={exp.logo} alt={exp.company} width={40} height={40} className="object-contain" unoptimized />
            </div>
            <div>
              <div className="font-serif text-base text-espresso font-medium">{exp.company}</div>
              <div className="text-sm text-cocoa">{exp.position}</div>
              <div className="text-xs text-cocoa/70">{exp.brief}</div>
              <div className="text-xs text-tan mt-0.5">{exp.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

**Step 3: Copy badge images**

```bash
mkdir -p public/assets/images/badges
cp assets/images/badges/*.png public/assets/images/badges/
```

**Step 4: Add to `app/page.tsx` and verify**

```bash
npm run dev
```

Expected: Education and Experiences rendered as logo + text rows.

**Step 5: Commit**

```bash
git add components/sections/Education.tsx components/sections/Experiences.tsx app/page.tsx public/assets/images/badges/
git commit -m "feat: add Education and Experiences sections"
```

---

## Task 7: Publications Section

**Files:**
- Create: `components/sections/Publications.tsx`
- Modify: `app/page.tsx`

**Step 1: Create `components/sections/Publications.tsx`**

```tsx
import Image from 'next/image'
import { SectionHeader } from '@/components/SectionHeader'
import { publications } from '@/data/publications'

export function Publications() {
  const selected = publications.filter(p => p.selected)
  return (
    <section className="mb-16">
      <SectionHeader title="Selected Publications" />
      <div className="space-y-8">
        {selected.map((pub, i) => (
          <div key={i} className="flex gap-5 items-start">
            {pub.cover && (
              <div className="shrink-0 w-28 h-20 overflow-hidden rounded bg-cream-alt border border-tan/20">
                <Image src={pub.cover} alt={pub.title} width={112} height={80} className="object-cover w-full h-full" unoptimized />
              </div>
            )}
            <div className="flex-1">
              <div className="font-serif text-base text-espresso font-medium leading-snug mb-1">
                {pub.title}
              </div>
              <div className="text-xs text-cocoa/80 mb-1">
                {pub.authors.map((a, j) => (
                  <span key={j}>
                    {a === 'Ruohan Wang' ? <strong className="text-espresso">{a}</strong> : a}
                    {j < pub.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-tan">{pub.venue} {pub.year}</span>
                {pub.badge && (
                  <span className="text-xs px-2 py-0.5 bg-espresso/10 text-espresso rounded">
                    {pub.badge}
                  </span>
                )}
              </div>
              <div className="flex gap-3">
                {Object.entries(pub.links).map(([name, url]) => (
                  <a key={name} href={url} target="_blank" rel="noreferrer"
                    className="text-xs text-tan hover:text-espresso underline underline-offset-2 transition-colors">
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

**Step 2: Copy cover images**

```bash
mkdir -p public/assets/images/covers
cp assets/images/covers/*.{jpg,png} public/assets/images/covers/
```

**Step 3: Add to `app/page.tsx` and verify**

```bash
npm run dev
```

Expected: Publications with cover thumbnail, bold title, authors (own name in bold), venue badge, links.

**Step 4: Commit**

```bash
git add components/sections/Publications.tsx app/page.tsx public/assets/images/covers/
git commit -m "feat: add Publications section with cover images and links"
```

---

## Task 8: Services + About Me + ClustrMap Sections

**Files:**
- Create: `components/sections/Services.tsx`
- Create: `components/sections/AboutMe.tsx`
- Create: `components/sections/ClustrMap.tsx`
- Modify: `app/page.tsx`

**Step 1: Create `components/sections/Services.tsx`**

```tsx
import { SectionHeader } from '@/components/SectionHeader'
import { services } from '@/data/profile'

export function Services() {
  return (
    <section className="mb-16">
      <SectionHeader title="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xs uppercase tracking-widest text-tan mb-3">Reviewer</h3>
          <ul className="space-y-1">
            {services.reviewer.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noreferrer" className="text-sm text-cocoa hover:text-tan transition-colors">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest text-tan mb-3">Volunteer</h3>
          <ul className="space-y-1">
            {services.volunteer.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noreferrer" className="text-sm text-cocoa hover:text-tan transition-colors">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Create `components/sections/AboutMe.tsx`**

```tsx
import { SectionHeader } from '@/components/SectionHeader'
import { aboutMe } from '@/data/profile'

export function AboutMe() {
  return (
    <section className="mb-16">
      <SectionHeader title="About Me" />
      <p className="text-sm text-cocoa leading-relaxed max-w-2xl">{aboutMe.content}</p>
    </section>
  )
}
```

**Step 3: Create `components/sections/ClustrMap.tsx`**

```tsx
'use client'
import { SectionHeader } from '@/components/SectionHeader'
import Script from 'next/script'

export function ClustrMap() {
  return (
    <section className="mb-16">
      <SectionHeader title="Visitors" />
      <div className="flex justify-center">
        <div className="w-48">
          <Script
            id="clstr_globe"
            src="//clustrmaps.com/globe.js?d=XHaXkpOTTE5tc91XdgumuUNVKkhiazgLFtFwzyDAiv4"
            strategy="lazyOnload"
          />
        </div>
      </div>
    </section>
  )
}
```

**Step 4: Add all three to `app/page.tsx` and verify**

```bash
npm run dev
```

**Step 5: Commit**

```bash
git add components/sections/Services.tsx components/sections/AboutMe.tsx components/sections/ClustrMap.tsx app/page.tsx
git commit -m "feat: add Services, About Me, and ClustrMap sections"
```

---

## Task 9: Blog Page

**Files:**
- Create: `app/blog/page.tsx`
- Modify: `data/profile.ts` (blogs already there)

**Step 1: Create `app/blog/page.tsx`**

```tsx
import { SectionHeader } from '@/components/SectionHeader'
import { profile } from '@/data/profile'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Demi Ruohan Wang',
}

export default function BlogPage() {
  return (
    <div className="py-16">
      <SectionHeader title="Blog" />
      <div className="space-y-6">
        {profile.blogs?.map((post, i) => (
          <div key={i} className="flex gap-4 items-baseline border-b border-tan/20 pb-5">
            <span className="text-tan font-mono text-sm shrink-0 w-20">{post.date}</span>
            <a
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="font-serif text-lg text-espresso hover:text-tan transition-colors leading-snug"
            >
              {post.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
```

**Step 2: Add `blogs` field to `data/profile.ts`**

```ts
export const blogs = [
  {
    title: 'My 2025 | From Proving Outward to Building Inward',
    url: 'https://dune-squid-524.notion.site/My-2025-From-Proving-Outward-to-Building-Inward-2e46b110c46f801e9316ffe476c1487a',
    date: 'Jan. 2026',
  },
]
```

**Step 3: Verify blog page**

```bash
npm run dev
```

Navigate to localhost:3000/blog. Expected: Blog list with date + serif title links.

**Step 4: Commit**

```bash
git add app/blog/ data/profile.ts
git commit -m "feat: add Blog page with external post links"
```

---

## Task 10: Framer Motion Micro-interactions

**Files:**
- Create: `components/FadeIn.tsx`
- Modify: `app/page.tsx` (wrap sections)

**Step 1: Create `components/FadeIn.tsx`**

```tsx
'use client'
import { motion } from 'framer-motion'

export function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
```

**Step 2: Wrap sections in `app/page.tsx`**

```tsx
import { FadeIn } from '@/components/FadeIn'

export default function HomePage() {
  return (
    <div className="py-4">
      <FadeIn delay={0}><Profile /></FadeIn>
      <FadeIn delay={0.1}><News /></FadeIn>
      <FadeIn delay={0.15}><Education /></FadeIn>
      <FadeIn delay={0.2}><Experiences /></FadeIn>
      <FadeIn delay={0.25}><Publications /></FadeIn>
      <FadeIn delay={0.3}><Services /></FadeIn>
      <FadeIn delay={0.35}><AboutMe /></FadeIn>
      <FadeIn delay={0.4}><ClustrMap /></FadeIn>
    </div>
  )
}
```

**Step 3: Verify animations**

```bash
npm run dev
```

Expected: Sections fade up subtly on page load (300–500ms, no jarring motion).

**Step 4: Commit**

```bash
git add components/FadeIn.tsx app/page.tsx
git commit -m "feat: add subtle fade-in animations with Framer Motion"
```

---

## Task 11: Static Export + GitHub Pages Verification

**Files:**
- Modify: `.github/workflows/gh-pages.yml`

**Step 1: Update GitHub Actions workflow**

Replace the Jekyll build workflow with a Next.js static export workflow:

```yaml
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
      - uses: actions/deploy-pages@v4
```

**Step 2: Run local static build**

```bash
npm run build
```

Expected: `out/` directory created with HTML, CSS, JS. No build errors.

**Step 3: Verify output structure**

```bash
ls out/
```

Expected: `index.html`, `blog/`, `_next/`.

**Step 4: Final commit**

```bash
git add .github/workflows/gh-pages.yml
git commit -m "chore: update GitHub Actions to deploy Next.js static export"
```

---

## Task 12: Polish Pass

After all sections are built, do a final review pass:

**Checklist:**
- [ ] All font sizes use `clamp()` or responsive Tailwind classes for mobile
- [ ] Portrait image loads correctly (not broken path)
- [ ] All external links open in `target="_blank"` with `rel="noreferrer"`
- [ ] Navbar active state works for `/` and `/blog`
- [ ] `npm run build` passes with zero TypeScript errors
- [ ] `npm run lint` passes clean
- [ ] Mobile view (375px) looks readable — no overflow, no tiny text
- [ ] ClustrMap globe loads in browser

**Step 1: Run lint + build**

```bash
npm run lint && npm run build
```

Expected: All green, `out/` generated.

**Step 2: Final commit**

```bash
git add -A
git commit -m "polish: final review pass — responsive fixes, lint clean"
```

---

## Summary

| Task | Component | Status |
|------|-----------|--------|
| 1 | Project Scaffold | — |
| 2 | Data Layer (TS) | — |
| 3 | Layout (Navbar + Footer) | — |
| 4 | Profile Section | — |
| 5 | News Section | — |
| 6 | Education + Experiences | — |
| 7 | Publications | — |
| 8 | Services + About + ClustrMap | — |
| 9 | Blog Page | — |
| 10 | Framer Motion | — |
| 11 | Static Export | — |
| 12 | Polish Pass | — |
