export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'general' | 'pricing' | 'technical' | 'billing'
}

export const faqData: FAQ[] = [
  {
    id: '1',
    question: 'How does GigExec match me with professionals?',
    answer: 'Our AI-powered algorithm analyzes your project requirements, budget, timeline, and preferences to find the best matching professionals from our curated network.',
    category: 'general',
  },
  {
    id: '2',
    question: 'What happens if I\'m not satisfied with a professional?',
    answer: 'We offer a satisfaction guarantee. If you\'re not happy with the work, we\'ll help you find a replacement or provide a refund according to our terms.',
    category: 'general',
  },
  {
    id: '3',
    question: 'How do payments work?',
    answer: 'We use secure escrow payments. Funds are held until project milestones are completed and approved. This protects both clients and professionals.',
    category: 'billing',
  },
  {
    id: '4',
    question: 'Can I change my pricing plan?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
    category: 'pricing',
  },
  {
    id: '5',
    question: 'What types of professionals are available?',
    answer: 'We have professionals across all industries including developers, designers, marketers, writers, consultants, and many more specialized fields.',
    category: 'general',
  },
  {
    id: '6',
    question: 'How do I get started?',
    answer: 'Simply sign up for an account, choose your plan, and start posting your first project. Our team will guide you through the process.',
    category: 'general',
  },
]

