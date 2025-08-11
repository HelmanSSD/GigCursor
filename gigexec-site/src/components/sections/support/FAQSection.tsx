import { faqData } from '@/data/faqs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface FAQSectionProps {
  faqs: typeof faqData
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <Card key={faq.id}>
              <CardHeader>
                <CardTitle className="text-primary text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{faq.answer}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}



