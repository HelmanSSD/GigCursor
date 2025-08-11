import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Hero() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 overflow-hidden" role="banner" aria-labelledby="hero-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 opacity-50 dark:from-primary-900/20 dark:to-blue-900/20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
            🚀 Trusted by 10,000+ companies worldwide
          </Badge>

          {/* Main Headline */}
          <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight">
            Connect with
            <span className="block text-yellow-500 dark:text-yellow-400">Top-Tier</span>
            Professionals
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            GigExec bridges the gap between businesses and exceptional professionals. 
            Find the perfect match for your next project with our AI-powered matching system.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button 
              size="lg" 
              className="rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-primary hover:bg-primary-600 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <a href="/pricing" className="flex items-center justify-center">
                Get Started Free
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 hover:bg-primary hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              <a href="/clients" className="flex items-center justify-center">
                How It Works
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 text-muted-foreground">
            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <span className="text-xl sm:text-2xl" aria-hidden="true">⭐</span>
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <span className="text-xl sm:text-2xl" aria-hidden="true">🔒</span>
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <span className="text-xl sm:text-2xl" aria-hidden="true">⚡</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

