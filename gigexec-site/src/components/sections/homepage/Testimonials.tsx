import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { testimonialsData } from '@/data/testimonials'
import { useState } from 'react'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const clientTestimonials = testimonialsData.filter(t => t.type === 'client').slice(0, 3)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % clientTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses say about working with GigExec.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                {/* Rating Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-400">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
                  "{clientTestimonials[currentIndex]?.content}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-primary">
                    {clientTestimonials[currentIndex]?.name}
                  </div>
                  <div className="text-muted-foreground">
                    {clientTestimonials[currentIndex]?.role} at {clientTestimonials[currentIndex]?.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <span className="text-xl">←</span>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <span className="text-xl">→</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {clientTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">24hr</div>
            <div className="text-muted-foreground">Average Response Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}
