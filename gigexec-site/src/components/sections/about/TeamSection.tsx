import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function TeamSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="/avatars/ceo.jpg" />
                <AvatarFallback className="bg-primary text-white">JD</AvatarFallback>
              </Avatar>
              <CardTitle className="text-primary">John Doe</CardTitle>
              <CardDescription>CEO & Founder</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Former tech executive with 15+ years experience in professional services.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="/avatars/cto.jpg" />
                <AvatarFallback className="bg-primary text-white">SJ</AvatarFallback>
              </Avatar>
              <CardTitle className="text-primary">Sarah Johnson</CardTitle>
              <CardDescription>CTO</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI/ML expert leading our matching algorithm development.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="/avatars/cpo.jpg" />
                <AvatarFallback className="bg-primary text-white">MC</AvatarFallback>
              </Avatar>
              <CardTitle className="text-primary">Mike Chen</CardTitle>
              <CardDescription>Chief Product Officer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Product leader focused on user experience and platform growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}



