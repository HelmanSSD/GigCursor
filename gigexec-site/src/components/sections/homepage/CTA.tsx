import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary-600">
      <div className="container mx-auto">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            🚀 Ready to Get Started?
          </Badge>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Join Thousands of
            <span className="block text-yellow-300">Successful Teams</span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Start your first project today and experience the difference that top-tier professionals can make for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="rounded-2xl px-8 py-4 text-lg bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="/pricing">Get Started Free</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-2xl px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              <a href="/clients">Learn More</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-white/80">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⚡</span>
              <span className="text-sm">No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔒</span>
              <span className="text-sm">Secure payments</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💬</span>
              <span className="text-sm">24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

