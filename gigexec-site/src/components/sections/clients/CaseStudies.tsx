import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CaseStudies() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">TechStart Inc.</CardTitle>
              <CardDescription>Web Development Project</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                TechStart needed a complete website redesign and development. 
                We matched them with a senior developer who delivered the project 
                ahead of schedule with exceptional quality.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Timeline: 6 weeks</span>
                <span>•</span>
                <span>Budget: $15,000</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">GrowthCo</CardTitle>
              <CardDescription>Marketing Strategy</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                GrowthCo needed a comprehensive marketing strategy. 
                Our AI matched them with a marketing consultant who 
                increased their leads by 300% in 3 months.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Timeline: 3 months</span>
                <span>•</span>
                <span>Budget: $25,000</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

