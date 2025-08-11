// SEO metadata helper functions

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
}

export function generateSEOData(data: SEOData) {
  const {
    title,
    description,
    keywords = [],
    image = '/og-image.jpg',
    url = '',
    type = 'website'
  } = data

  return {
    title: `${title} | GigExec`,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: `${title} | GigExec`,
      description,
      url,
      siteName: 'GigExec',
      images: [{ url: image }],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | GigExec`,
      description,
      images: [image],
    },
  }
}

export const defaultSEO = generateSEOData({
  title: 'Home',
  description: 'Connect with top-tier professionals for your next project. GigExec bridges the gap between businesses and exceptional talent.',
  keywords: ['freelance', 'professionals', 'business', 'projects', 'talent'],
  url: 'https://gigexec.com',
})

export function generatePageSEO(pageData: SEOData) {
  return generateSEOData({
    ...defaultSEO,
    ...pageData,
  })
}

