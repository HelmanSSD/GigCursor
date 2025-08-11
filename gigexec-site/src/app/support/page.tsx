import GigsFAQs from '@/components/GigsFAQs'

export default function SupportPage() {
  return (
    <main className="bg-[#012E46] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-white">Support Center</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Get help when you need it. We're here to support you with comprehensive resources and assistance.
          </p>
        </div>

        {/* Gigs FAQ Section */}
        <GigsFAQs />
      </div>
    </main>
  )
}

