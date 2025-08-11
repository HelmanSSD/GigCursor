export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
  type: 'client' | 'professional'
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'GigExec helped us find an exceptional developer who delivered our project ahead of schedule. The quality of professionals is outstanding.',
    rating: 5,
    type: 'client',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Senior Developer',
    company: 'Freelance',
    content: 'I\'ve been working with GigExec for over a year now. The platform is intuitive and the projects are well-defined. Great experience overall.',
    rating: 5,
    type: 'professional',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthCo',
    content: 'The AI matching is incredible. We found the perfect marketing consultant who understood our industry immediately.',
    rating: 5,
    type: 'client',
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'UX Designer',
    company: 'Freelance',
    content: 'GigExec has the best client base I\'ve worked with. Clear communication and fair compensation for quality work.',
    rating: 5,
    type: 'professional',
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Founder',
    company: 'StartupXYZ',
    content: 'We needed a designer quickly and GigExec delivered. The escrow payment system gives us peace of mind.',
    rating: 5,
    type: 'client',
  },
  {
    id: '6',
    name: 'Alex Morgan',
    role: 'Content Strategist',
    company: 'Freelance',
    content: 'The platform makes it easy to showcase my skills and find projects that match my expertise. Highly recommended.',
    rating: 5,
    type: 'professional',
  },
]

