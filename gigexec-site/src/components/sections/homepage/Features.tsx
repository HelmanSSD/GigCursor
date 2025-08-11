import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const features = [
  {
    icon: "🎯",
    title: "AI-Powered Matching",
    description: "Our intelligent algorithm matches you with the perfect professional based on skills, experience, and project requirements.",
    highlight: "95% accuracy rate"
  },
  {
    icon: "⚡",
    title: "Quick Project Setup",
    description: "Post your project in minutes. Get matched with qualified professionals within 24 hours.",
    highlight: "24-hour matching"
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    description: "Built-in escrow system ensures both parties are protected. Pay only when you're satisfied.",
    highlight: "100% secure"
  },
  {
    icon: "📊",
    title: "Quality Assurance",
    description: "All professionals are vetted and rated. View portfolios and past work before hiring.",
    highlight: "Vetted professionals"
  },
  {
    icon: "💬",
    title: "24/7 Support",
    description: "Round-the-clock support to help you succeed with every project and resolve any issues.",
    highlight: "Always available"
  },
  {
    icon: "📈",
    title: "Performance Tracking",
    description: "Monitor project progress, track milestones, and ensure timely delivery with our dashboard.",
    highlight: "Real-time updates"
  }
]

export function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30 dark:bg-muted/10" role="region" aria-labelledby="features-heading">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <Badge variant="outline" className="bg-primary-50 text-primary border-primary dark:bg-primary-900/20 dark:text-primary-300">
            How It Works
          </Badge>
          <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Why Choose GigExec?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            We've built the platform that makes professional connections seamless, secure, and successful.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm h-full" role="article">
              <CardHeader className="text-center pb-4">
                <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {feature.icon}
                </div>
                <CardTitle className="text-primary text-lg sm:text-xl">{feature.title}</CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs">
                  {feature.highlight}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">10,000+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">50,000+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Professionals</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">100,000+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">4.9/5</div>
            <div className="text-sm sm:text-base text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

