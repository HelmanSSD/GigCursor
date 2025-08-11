import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ProfessionalBenefits() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Why Join GigExec?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">High-Quality Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access to well-defined projects with clear requirements and fair compensation.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Secure Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Escrow protection ensures you get paid for your work on time, every time.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Build Your Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Showcase your work and build long-term relationships with top clients.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}



