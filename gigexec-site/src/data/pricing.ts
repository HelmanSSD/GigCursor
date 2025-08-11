export interface PricingPlan {
  id: string
  name: string
  description: string
  price: number
  billingCycle: 'free' | 'monthly' | 'yearly' | 'custom'
  features: string[]
  popular?: boolean
  cta: string
  ctaLink: string
  target: 'professionals' | 'businesses' | 'enterprise'
}

export const pricingData: PricingPlan[] = [
  {
    id: 'professionals',
    name: 'Professionals',
    description: 'Perfect for freelancers and independent professionals',
    price: 0,
    billingCycle: 'free',
    features: [
      'Registration: Free',
      'Bid for Projects: Free',
      'Commission: 10% on earned revenue',
      'Access to all project categories',
      'Portfolio showcase',
      'Direct client communication',
      'Payment protection',
      '24/7 support'
    ],
    cta: 'Get Started',
    ctaLink: '/professionals',
    target: 'professionals'
  },
  {
    id: 'businesses',
    name: 'Small and Medium Businesses',
    description: 'Ideal for growing businesses and startups',
    price: 0,
    billingCycle: 'free',
    features: [
      'Registration: Free',
      'Post Projects: Free',
      'Service Fee: 10% on amount invoiced',
      'AI-powered matching',
      'Quality guarantee',
      'Milestone payments',
      'Project management tools',
      'Priority support'
    ],
    popular: true,
    cta: 'Get Started',
    ctaLink: '/clients',
    target: 'businesses'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 0,
    billingCycle: 'custom',
    features: [
      'Registration: Free',
      'Post Projects: Free',
      'Fees: Customized based on needs',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced analytics',
      'White-label options',
      'SLA guarantees'
    ],
    cta: 'Book a Call',
    ctaLink: '/contact',
    target: 'enterprise'
  },
]

