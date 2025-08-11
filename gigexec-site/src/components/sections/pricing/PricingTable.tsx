import { PricingCard } from './PricingCard'
import { pricingData } from '@/data/pricing'
import { Badge } from '@/components/ui/badge'

export function PricingTable() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-primary-50 text-primary border-primary">
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the plan that works best for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center space-y-8">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              What's Included in All Plans?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="font-semibold text-primary">Security</div>
                <div className="text-muted-foreground">SSL encryption, secure payments</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-primary">Support</div>
                <div className="text-muted-foreground">24/7 customer support</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-primary">Quality</div>
                <div className="text-muted-foreground">Vetted professionals, quality guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
