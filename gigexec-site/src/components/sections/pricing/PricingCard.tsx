import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { pricingData } from '@/data/pricing'

interface PricingCardProps {
  plan: typeof pricingData[0]
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card className={`relative h-full transition-all duration-300 hover:shadow-xl ${
      plan.popular 
        ? 'border-primary shadow-lg scale-105' 
        : 'border-border hover:border-primary/50'
    }`}>
      {plan.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl text-primary">{plan.name}</CardTitle>
        <CardDescription className="text-base">{plan.description}</CardDescription>
        
        {/* Pricing Display */}
        <div className="mt-6">
          <div className="text-4xl font-bold text-primary">
            {plan.price === 0 ? 'Free' : `$${plan.price}`}
          </div>
          <div className="text-muted-foreground mt-2">
            {plan.billingCycle === 'free' && 'No hidden fees'}
            {plan.billingCycle === 'custom' && 'Custom pricing'}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Features List */}
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* CTA Button */}
        <Button 
          className={`w-full rounded-2xl py-3 text-lg ${
            plan.popular 
              ? 'bg-primary hover:bg-primary-600 text-white' 
              : 'bg-muted hover:bg-primary hover:text-white border-2'
          } transition-all duration-300`}
          asChild
        >
          <a href={plan.ctaLink}>{plan.cta}</a>
        </Button>
      </CardContent>
    </Card>
  )
}
