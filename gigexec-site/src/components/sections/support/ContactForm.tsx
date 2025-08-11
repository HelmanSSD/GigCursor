import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ContactForm() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Contact Support</CardTitle>
            <CardDescription>
              Need help? Our support team is here to assist you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Subject" />
            <textarea 
              className="w-full p-3 border border-border rounded-md resize-none"
              rows={5}
              placeholder="Your message..."
            />
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}



