import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function AboutUsPage() {
  return (
    <main className="bg-[#012E46] text-white px-4 md:px-12">
      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-20 space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold max-w-4xl">
            About GigExecs – The Freelance Marketplace for Experienced Professionals
          </h1>

          <div className="space-y-4 text-white/90">
            <div>
              <h2 className="text-xl text-[#DAAA00] font-semibold">The Story Behind GigExecs – The Premium Freelance Marketplace</h2>
              <p className="text-base md:text-lg">
                At GigExecs, we connect businesses, startups, and enterprises with a curated network of highly experienced freelancers, senior consultants, and interim executives. Whether you need specialist skills for a high-impact project or fractional leadership to drive change, GigExecs ensures you get access to top-tier professionals with the experience to deliver results. We're not a generic freelance platform. Our focus is senior talent with at least 15 years of proven industry experience in strategy, operations, technology, marketing, finance, and executive leadership across various industries.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-[#DAAA00] font-semibold">Our Mission – Empowering Businesses with Proven Expertise</h2>
              <p className="text-base md:text-lg">
                At GigExecs, our mission is to help businesses thrive by providing on-demand access to the best senior talent globally. We believe experience matters, especially when tackling complex challenges, entering new markets, or delivering critical projects. By using technology to simplify the way businesses access their skills and expertise, we are fostering a global community where experience is valued, ageism is challenged, and impactful work is executed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-white text-black py-20 rounded-t-3xl px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#012E46] mb-12">Meet the Team</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Nuno Card */}
            <div className="bg-white rounded-3xl shadow p-8 space-y-4">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-200 to-blue-200 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">NR</span>
              </div>
              <div className="text-center">
                <h3 className="text-[#DAAA00] font-semibold text-xl">Nuno G. Rodrigues</h3>
                <p className="text-sm font-semibold text-[#012E46]">Co-Founder, Chief Executive Officer</p>
              </div>
              <p className="text-sm text-gray-800">
                With over 20 years of international experience, Nuno has held senior and executive roles in commercial, financial, and strategic leadership across blue-chip companies, mid-tier firms, and startups. He has originated and led deals exceeding $1 billion and has mentored over 60 entrepreneurs worldwide. Holding an MBA from London Business School, he brings a deep understanding of business growth and innovation.
                <br /><br />
                Outside of work, he's a dedicated husband and father of four, passionate about sports, great food, and building businesses that make an impact.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <a 
                  href="https://x.com/NunoG_Rodrigues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl hover:text-[#DAAA00] transition-colors"
                  aria-label="Nuno on Twitter"
                >
                  𝕏
                </a>
                <a 
                  href="https://www.linkedin.com/in/nuno-g-rodrigues-210a59/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl hover:text-[#DAAA00] transition-colors"
                  aria-label="Nuno on LinkedIn"
                >
                  in
                </a>
              </div>
            </div>

            {/* Jaco Card */}
            <div className="bg-white rounded-3xl shadow p-8 space-y-4">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">JH</span>
              </div>
              <div className="text-center">
                <h3 className="text-[#DAAA00] font-semibold text-xl">Jaco van den Heever</h3>
                <p className="text-sm font-semibold text-[#012E46]">Co-Founder, Chief Experience Officer</p>
              </div>
              <p className="text-sm text-gray-800">
                With 19 years of professional experience across multiple industries and continents, Jaco has held senior leadership roles in design, IT, and product management for multinational blue-chips, mid-tier companies, and startups. He holds an MBA from Wits Business School and is a Certified Experience Architect (CXA), bringing a strong blend of strategic thinking and user-centered design expertise.
                <br /><br />
                Outside of work, he is a devoted husband and father of three, passionate about cooking, football, and family time. He finds fulfillment in making a difference through charity work and helping others thrive
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <a 
                  href="https://x.com/jacovdh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl hover:text-[#DAAA00] transition-colors"
                  aria-label="Jaco on Twitter"
                >
                  𝕏
                </a>
                <a 
                  href="https://www.linkedin.com/in/jacovdh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl hover:text-[#DAAA00] transition-colors"
                  aria-label="Jaco on LinkedIn"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

