import { Button } from '@/components/ui/button'

export default function PricingPage() {
  return (
    <main className="min-h-screen w-full bg-[#012E46] text-white">
      <section className="w-full px-6 sm:px-10 lg:px-32 py-16">
        <h1 className="text-white text-4xl sm:text-5xl font-semibold mb-4">
          <span className="inline-block w-3 h-3 bg-[#FFCC2A] rounded-full mr-2"></span>
          Pricing
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-[#FFB800] mb-6">
          Flexible Pricing to Access World-Class Freelance Talent
        </h2>
        <p className="text-base sm:text-lg leading-relaxed max-w-4xl mb-6">
          At GigExecs, we connect businesses with highly experienced professionals and senior freelancers across industries. Whether you need strategic leadership, specialized project expertise, or flexible contractor support, our transparent pricing ensures you get top talent without unnecessary overheads.
        </p>
        <p className="text-base sm:text-lg leading-relaxed max-w-4xl">
          <span className="font-semibold">Why Choose GigExecs Over Traditional Freelance Platforms?</span>
          <br />
          While general freelance platforms offer broad talent pools, GigExecs specializes in expert talent for leadership, transformation, and specialized projects. Our pricing is competitive for premium expertise, ensuring you access the right skills at the right time. Enterprises looking for strategic leadership on a flexible basis can benefit from tailored pricing structures that align with their specific needs—ensuring they get high-impact expertise without the long-term overhead.{' '}
          <a
            href="#"
            className="underline text-white hover:text-[#FFB800] transition-colors"
          >
            Explore what we can offer to Client Organizations.
          </a>
        </p>
      </section>

      <section className="w-full px-6 sm:px-10 lg:px-32 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Professionals */}
          <div className="bg-white text-[#012E46] rounded-3xl p-6 flex flex-col items-center text-center shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#D29B2B]">P</span>
            </div>
            <h3 className="text-xl font-semibold text-[#D29B2B] mb-2">Professionals</h3>
            <p className="text-sm mb-2">Registration</p>
            <p className="text-2xl font-semibold mb-4">Free</p>
            <p className="text-sm mb-2">Bid for Projects</p>
            <p className="text-2xl font-semibold mb-4">Free</p>
            <p className="text-sm mb-2">Commission</p>
            <p className="text-2xl font-semibold mb-1">10%</p>
            <p className="text-xs text-gray-500 mb-6">on earned revenue</p>
            <Button className="bg-[#D29B2B] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#c09029]" asChild>
              <a href="https://gigexecs.com/signup">Get Started</a>
            </Button>
          </div>

          {/* Small and Medium Businesses */}
          <div className="bg-white text-[#012E46] rounded-3xl p-6 flex flex-col items-center text-center shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#D29B2B]">S</span>
            </div>
            <h3 className="text-xl font-semibold text-[#D29B2B] mb-2">Small and Medium Businesses</h3>
            <p className="text-sm mb-2">Registration</p>
            <p className="text-2xl font-semibold mb-4">Free</p>
            <p className="text-sm mb-2">Post Projects</p>
            <p className="text-2xl font-semibold mb-4">Free</p>
            <p className="text-sm mb-2">Service fee</p>
            <p className="text-2xl font-semibold mb-1">10%</p>
            <p className="text-xs text-gray-500 mb-6">on amount invoiced by professionals</p>
            <Button className="bg-[#D29B2B] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#c09029]" asChild>
              <a href="https://gigexecs.com/signup">Get Started</a>
            </Button>
          </div>

          {/* Enterprise */}
          <div className="bg-white text-[#012E46] rounded-3xl p-6 flex flex-col items-center text-center shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#D29B2B]">E</span>
            </div>
            <h3 className="text-xl font-semibold text-[#D29B2B] mb-2">Enterprise</h3>
            <p className="text-sm mb-2">Registration</p>
            <p className="text-2xl font-semibold mb-4">Free</p>
            <p className="text-sm mb-2">Post Projects</p>
            <p className="text-2xl font-semibold mb-4">Free</p>
            <p className="text-sm mb-2">Fees</p>
            <p className="text-2xl font-semibold mb-1">Customized</p>
            <p className="text-xs text-gray-500 mb-6">to fit your needs</p>
            <Button className="bg-[#D29B2B] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#c09029]" asChild>
              <a href="mailto:help@gigexecs.com">Book a Call</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

