export interface BlogPost {
  id: string
  title: string
  description: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  image?: string
  slug: string
}

export const blogData: BlogPost[] = [
  {
    id: '1',
    title: 'How to Find the Perfect Professional for Your Project',
    description: 'Learn the best practices for identifying and hiring top-tier professionals for your business needs.',
    content: 'Full article content would go here...',
    author: 'Sarah Johnson',
    publishedAt: '2024-01-15',
    tags: ['hiring', 'professionals', 'tips'],
    slug: 'how-to-find-perfect-professional',
  },
  {
    id: '2',
    title: 'The Future of Remote Work: Trends to Watch',
    description: 'Explore the latest trends in remote work and how they impact professional services.',
    content: 'Full article content would go here...',
    author: 'Mike Chen',
    publishedAt: '2024-01-10',
    tags: ['remote-work', 'trends', 'future'],
    slug: 'future-of-remote-work-trends',
  },
  {
    id: '3',
    title: 'Building Trust in Professional Relationships',
    description: 'Essential strategies for building and maintaining trust with your professional partners.',
    content: 'Full article content would go here...',
    author: 'Emily Rodriguez',
    publishedAt: '2024-01-05',
    tags: ['trust', 'relationships', 'communication'],
    slug: 'building-trust-professional-relationships',
  },
]

