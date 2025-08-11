import { Button } from '@/components/ui/button'
import { AnimationExample } from '@/components/AnimationExample'

export default function HomePage() {
  return (
    <main className="bg-[#012E46] text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
          GigExecs: The Premier Freelance Hub for Top Professionals
        </h1>
        <p className="max-w-xl text-lg text-white/80">
          Join a growing network of experienced talent and innovative companies. GigExecs connects senior professionals with projects that need their expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-[#DAAA00] text-black font-semibold" asChild>
            <a href="https://gigexecs.com/signup">Join GigExecs</a>
          </Button>
          <Button variant="outline" className="text-white border-white" asChild>
            <a href="/about-us">Learn More</a>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose GigExecs</h2>
          <p className="text-lg text-gray-700">
            We make it easier to hire, manage and pay senior professionals in a trusted freelance ecosystem.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold">Transparent and Easy Pricing</h3>
            <p className="text-sm text-gray-600">All pricing is upfront and visible to both professionals and clients.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Give and Receive Feedback and Ratings</h3>
            <p className="text-sm text-gray-600">Track your performance and build your credibility in the community.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Direct Communication</h3>
            <p className="text-sm text-gray-600">Engage directly with clients or professionals using our built-in chat.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Verified Profiles</h3>
            <p className="text-sm text-gray-600">All users go through a vetting process to maintain a trusted space.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#DAAA00] py-20 text-black text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Sign up today and join a platform built for experienced professionals and the businesses that need them.
        </p>
        <Button className="bg-black text-white px-8 py-4 text-lg" asChild>
          <a href="https://gigexecs.com/signup">Sign Up</a>
        </Button>
      </section>

      {/* Animation Examples */}
      <AnimationExample />
    </main>
  )
}

