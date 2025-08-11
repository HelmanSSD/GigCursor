import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function HowItWorks() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="text-4xl mb-4">1</div>
              <CardTitle className="text-primary">Create Your Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Sign up and create a detailed profile showcasing your skills, experience, and portfolio.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="text-4xl mb-4">2</div>
              <CardTitle className="text-primary">Get Matched</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our AI algorithm matches you with projects that fit your expertise and preferences.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="text-4xl mb-4">3</div>
              <CardTitle className="text-primary">Deliver & Earn</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Complete projects, receive secure payments, and build your reputation.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}



