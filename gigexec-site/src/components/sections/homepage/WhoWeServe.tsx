import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const audiences = [
  {
    type: "clients",
    title: "For Businesses",
    subtitle: "Find the perfect professional for your project",
    description: "Post your project requirements and get matched with qualified professionals who can deliver exceptional results.",
    features: [
      "AI-powered matching",
      "Secure milestone payments",
      "Quality guarantee",
      "24/7 project support"
    ],
    cta: "Start Hiring",
    ctaLink: "/clients",
    icon: "🏢",
    color: "primary"
  },
  {
    type: "professionals",
    title: "For Professionals",
    subtitle: "Find high-quality projects that match your skills",
    description: "Join our network of top-tier professionals and access a steady stream of well-paying projects.",
    features: [
      "Curated project opportunities",
      "Competitive compensation",
      "Flexible work schedule",
      "Build your portfolio"
    ],
    cta: "Join as Professional",
    ctaLink: "/professionals",
    icon: "👨‍💼",
    color: "yellow"
  }
]

export function WhoWeServe() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
            Who We Serve
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Built for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a business looking for talent or a professional seeking opportunities, 
            GigExec has you covered.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {audience.icon}
                </div>
                <CardTitle className="text-2xl text-primary">{audience.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {audience.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3">
                  {audience.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full rounded-2xl py-3 text-lg ${
                    audience.color === 'primary' 
                      ? 'bg-primary hover:bg-primary-600' 
                      : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                  }`}
                  asChild
                >
                  <a href={audience.ctaLink}>{audience.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Trusted by leading companies and professionals</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">TechCorp</div>
            <div className="text-2xl font-bold text-muted-foreground">InnovateLab</div>
            <div className="text-2xl font-bold text-muted-foreground">GlobalSoft</div>
            <div className="text-2xl font-bold text-muted-foreground">StartupXYZ</div>
          </div>
        </div>
      </div>
    </section>
  )
}
