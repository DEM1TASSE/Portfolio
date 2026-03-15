export const profile = {
  name: 'Demi Ruohan Wang',
  position: "Master's Student @ CMU LTI",
  email: 'demiw@andrew.cmu.edu',
  github: 'DEM1TASSE',
  twitter: 'demisama_',
  linkedin: 'demi-ruohanwang',
  xiaohongshu: 'https://www.xiaohongshu.com/user/profile/5bf92dd76f880b00017e778e',
  gscholar: 'https://scholar.google.com/citations?user=Lz9tCVsAAAAJ&hl=zh-CN&authuser=2',
  cvUrl: '/assets/materials/CV_Demi Wang.pdf',
  portraitUrl: '/assets/images/photos/portrait.jpg',
  bio: `Hi there! I'm Demi Ruohan Wang, a Master's student at Carnegie Mellon University's Language Technologies Institute.

In the short term, I focus on research in large language models (LLMs), while also working toward becoming a full-stack independent developer. In the long run, I hope to build a startup and contribute to the development of AGI.

My research interests include building more robust general agents that can better understand and execute tasks, as well as enhancing models' reasoning abilities. At CMU, I am fortunate to work with Prof. Graham Neubig on self-evolving web agents. Previously, I conducted research internships at Microsoft Research Asia and the OSU NLP Group (supervised by Prof. Yu Su), and worked as a Machine Learning Engineer Intern at ByteDance.

I am seeking Summer 2026 internships as a Machine Learning Engineer or Research Scientist. Feel free to reach out if you have relevant opportunities!`,
}

export type EducationItem = {
  school: string
  degree: string
  dept?: string
  logo: string
  date: string
}

export const education: EducationItem[] = [
  {
    school: 'Carnegie Mellon University',
    degree: "Master's degree, Intelligent Information Systems",
    dept: 'School of Computer Science, Language Technologies Institute',
    logo: '/assets/images/badges/cmu_logo.png',
    date: 'Aug. 2025 - Dec. 2026 (Expected)',
  },
  {
    school: 'Tongji University',
    degree: 'Bachelor of Software Engineering',
    logo: '/assets/images/badges/tongji_logo.png',
    date: 'Sept. 2020 - Jun. 2025',
  },
  {
    school: 'University of California, Berkeley',
    degree: 'Visiting Student',
    dept: 'Electrical Engineering and Computer Sciences',
    logo: '/assets/images/badges/berkeley_logo.png',
    date: 'Jan. 2023 - Aug. 2023',
  },
]

export type ExperienceItem = {
  company: string
  position: string
  date: string
  logo: string
  brief: string
}

export const experience: ExperienceItem[] = [
  {
    company: 'Microsoft Research Asia',
    position: 'Research Intern',
    date: 'Mar. 2025 - Jul. 2025',
    logo: '/assets/images/badges/microsoft_logo.png',
    brief: 'Exploring efficient and effective LLM reasoning with RLVR',
  },
  {
    company: 'The Ohio State University',
    position: 'Research Intern',
    date: 'Apr. 2024 - Oct. 2024',
    logo: '/assets/images/badges/ohio_logo.png',
    brief: 'Enhancing grounding toward more generalist GUI agents',
  },
  {
    company: 'ByteDance',
    position: 'Machine Learning Engineer Intern',
    date: 'Oct. 2023 - Feb. 2024',
    logo: '/assets/images/badges/bytedance_logo.png',
    brief: 'Enhancing e-commerce violation detection with LLMs',
  },
]

export type ServiceItem = { name: string; url: string }

export const services: { reviewer: ServiceItem[]; volunteer: ServiceItem[] } = {
  reviewer: [
    { name: 'ICLR 2026', url: 'https://iclr.cc/' },
    { name: 'NeurIPS MTI-LLM Workshop', url: 'https://workshop-multi-turn-interaction.github.io' },
  ],
  volunteer: [
    { name: 'ICLR 2025', url: 'https://iclr.cc/' },
  ],
}

export const aboutMe = {
  content: `Beyond research and coding, I enjoy exploring new cities, photography, and spending time with cats. I believe in building things that are both technically rigorous and genuinely useful to people.`,
}

export type BlogPost = { title: string; url: string; date: string }

export const blogs: BlogPost[] = [
  {
    title: 'My 2025 | From Proving Outward to Building Inward',
    url: 'https://dune-squid-524.notion.site/My-2025-From-Proving-Outward-to-Building-Inward-2e46b110c46f801e9316ffe476c1487a',
    date: 'Jan. 2026',
  },
]
