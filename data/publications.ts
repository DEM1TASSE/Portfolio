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
    title:
      'Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents',
    authors: [
      'Boyu Gou',
      'Ruohan Wang',
      'Boyuan Zheng',
      'Yanan Xie',
      'Cheng Chang',
      'Yiheng Shu',
      'Huan Sun',
      'Yu Su',
    ],
    venue: 'ICLR',
    year: '2025',
    badge: 'Oral (1.8%)',
    cover: '/assets/images/covers/uground.png',
    abstract:
      'We present SeeAct-V, a human-like, vision-only GUI agent framework, and UGround, a SOTA GUI visual grounding model trained on cost-effective synthetic data, marking the first practical demonstration of SOTA performance for vision-only GUI agents.',
    links: {
      Paper: 'https://arxiv.org/abs/2410.05243',
      Code: 'https://github.com/OSU-NLP-Group/UGround',
      Homepage: 'https://osu-nlp-group.github.io/UGround/',
      Twitter: 'https://x.com/ysu_nlp/status/1844186560901808328',
    },
    selected: true,
  },
]
