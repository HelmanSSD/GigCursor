import { Button } from '@/components/ui/button'

export default function ClientsPage() {
  return (
    <main className="bg-[#012E46] text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 gap-6">
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">
          Experienced Skills at Your Fingertips with GigExecs
        </h1>
        <p className="text-lg text-white/80 max-w-xl">
          Whether you're a startup or enterprise, access experienced professionals on demand. Post jobs, review bids, and hire with confidence.
        </p>
        <Button className="bg-[#DAAA00] text-black font-semibold" asChild>
          <a href="https://gigexecs.com/signup">Create a New Gig</a>
        </Button>
      </section>

      {/* How it Works Section */}
      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-2">Create a Job</h3>
              <p className="text-sm text-gray-700">Describe your project, set a budget, and publish it for freelancers to see.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Accept a Bid</h3>
              <p className="text-sm text-gray-700">Review applicants, compare experience, and choose the best match for your needs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Kick-off Meeting</h3>
              <p className="text-sm text-gray-700">Align expectations and begin the project with clear deliverables and timelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#DAAA00] text-black text-center py-20 px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Find the Right Professional</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Start your hiring journey with confidence. Post your job today and gain access to a community of senior-level experts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-black text-white font-semibold px-6 py-3" asChild>
            <a href="https://gigexecs.com/signup">Create a New Gig</a>
          </Button>
          <Button variant="outline" className="border-black text-black px-6 py-3" asChild>
            <a href="mailto:help@gigexecs.com">Book a Call</a>
          </Button>
        </div>
      </section>
    </main>
  )
}

