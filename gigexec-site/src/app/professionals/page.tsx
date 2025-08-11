import { Button } from '@/components/ui/button'

export default function ProfessionalsPage() {
  return (
    <main className="bg-[#012E46] text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">
          Before You Join GigExecs
        </h1>
        <p className="text-lg text-white/80 max-w-xl">
          GigExecs is for seasoned professionals ready to offer their expertise and flexibility to leading businesses around the world.
        </p>
        <Button className="bg-[#DAAA00] text-black font-semibold">Apply to Join</Button>
      </section>

      {/* Benefits Section */}
      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Enjoy the Lifestyle and Freedom of Being a Freelancer</h2>
            <p className="text-lg text-gray-700">
              With GigExecs, you get to choose when, where, and how you work. Focus on meaningful projects while we handle the logistics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold">The New Way of Work</h3>
              <p className="text-gray-600 text-sm">
                GigExecs supports a modern, digital-first approach that matches your expertise with top-tier business needs — no intermediaries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Unleashing Wisdom and Experience</h3>
              <p className="text-gray-600 text-sm">
                We believe your 15+ years of experience is your greatest asset. GigExecs was designed to empower you to lead again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-[#E6EDF4] text-black py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-semibold text-xl mb-2">Submit Bid</h4>
              <p className="text-sm">Browse jobs and submit proposals that align with your interests and experience.</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-2">Narrow Down Your Search</h4>
              <p className="text-sm">Use advanced filters and alerts to find the most relevant opportunities.</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-2">Provide Feedback</h4>
              <p className="text-sm">Collaborate, complete the work, and receive feedback to build your profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#DAAA00] text-black text-center py-20 px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Unlock Your Freelance Potential Today
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Join GigExecs and thrive in the gig economy. We're redefining how experienced professionals work.
        </p>
        <Button className="bg-black text-white px-8 py-4 text-lg">Apply to Join</Button>
      </section>
    </main>
  )
}

