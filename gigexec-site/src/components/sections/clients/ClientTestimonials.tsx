import { testimonialsData } from '@/data/testimonials'
import { Card, CardContent } from '@/components/ui/card'

export function ClientTestimonials() {
  const clientTestimonials = testimonialsData.filter(t => t.type === 'client')

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTestimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

