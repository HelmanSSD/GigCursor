import { Button } from '@/components/ui/button'

// SEO Metadata
export const metadata = {
  title: "Finding Purpose in the Second Half of Life: How the Gig Economy Empowers Senior Professionals",
  description: "Explore how gig work allows professionals to utilize their skills, mentor, consult, and engage in meaningful projects. Discover strategies for successfully navigating this shift with networking, continuous learning, and purpose-driven work.",
  keywords: [
    "senior professionals gig economy",
    "purpose-driven work",
    "second half of life career",
    "experienced professionals consulting",
    "mentoring opportunities",
    "flexible work for seniors",
    "legacy building through work",
    "continuous learning for professionals",
    "social impact consulting",
    "GigExecs for senior talent"
  ],
  authors: [{ name: "GigExecs Insider" }],
  openGraph: {
    title: "Finding Purpose in the Second Half of Life: How the Gig Economy Empowers Senior Professionals",
    description: "Explore how gig work allows professionals to utilize their skills, mentor, consult, and engage in meaningful projects. Discover strategies for successfully navigating this shift with networking, continuous learning, and purpose-driven work.",
    type: "article",
    publishedTime: "2024-07-15T00:00:00.000Z",
    authors: ["GigExecs Insider"],
    images: [
      {
        url: "/images/blog-senior-professionals.jpg",
        width: 1200,
        height: 630,
        alt: "Finding Purpose in the Second Half of Life - Senior Professionals"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Finding Purpose in the Second Half of Life: How the Gig Economy Empowers Senior Professionals",
    description: "Explore how gig work allows professionals to utilize their skills, mentor, consult, and engage in meaningful projects. Discover strategies for successfully navigating this shift with networking, continuous learning, and purpose-driven work.",
    images: ["/images/blog-senior-professionals.jpg"]
  },
  alternates: {
    canonical: "https://gigexecs.com/blog/senior-professionals"
  }
}

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Finding Purpose in the Second Half of Life: How the Gig Economy Empowers Senior Professionals",
  "description": "Explore how gig work allows professionals to utilize their skills, mentor, consult, and engage in meaningful projects. Discover strategies for successfully navigating this shift with networking, continuous learning, and purpose-driven work.",
  "image": {
    "@type": "ImageObject",
    "url": "https://gigexecs.com/images/blog-senior-professionals.jpg",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@type": "Person",
    "name": "GigExecs Insider"
  },
  "publisher": {
    "@type": "Organization",
    "name": "GigExecs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://gigexecs.com/images/logo.png"
    }
  },
  "datePublished": "2024-07-15T00:00:00.000Z",
  "dateModified": "2024-07-15T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://gigexecs.com/blog/senior-professionals"
  },
  "keywords": "senior professionals gig economy, purpose-driven work, second half of life career, experienced professionals consulting, mentoring opportunities, flexible work for seniors, legacy building through work, continuous learning for professionals, social impact consulting, GigExecs for senior talent"
}

function BlogCard({ title, date, author, description, href }: { title: string; date: string; author: string; description: string; href: string }) {
  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col justify-between min-h-[320px]">
      <div>
        <h3 className="text-lg font-semibold text-[#B8860B] leading-snug mb-2">{title}</h3>
        <p className="text-sm text-[#012E46] mb-4">{description}</p>
      </div>
      <div>
        <p className="text-sm font-semibold text-[#012E46] mb-1">{author}  |  {date}</p>
        <a href={href} className="text-[#012E46] font-semibold text-sm inline-flex items-center hover:underline">
          Read More <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>
    </div>
  )
}

export default function BlogSeniorProfessionals() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="w-full bg-[#012E46] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-sm text-white/80 mb-4">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-white/60">Finding Purpose in the Second Half of Life</span>
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex items-center space-x-4 mb-4">
              <time dateTime="2024-07-15" className="text-sm font-semibold">
                GigExecs Insider  |  July 15, 2024
              </time>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif mb-6 text-white">
              Finding Purpose in the Second Half of Life: How the Gig Economy Empowers Senior Professionals
            </h1>
            <p className="text-base sm:text-lg text-white/80">
              Explore how gig work allows professionals to utilize their skills, mentor, consult, and engage in meaningful projects. 
              It offers strategies for successfully navigating this shift, such as networking, continuous learning, and more…
            </p>
          </header>

          {/* Article Content */}
          <article className="bg-white text-[#012E46] px-4 sm:px-8 py-16 rounded-t-3xl">
            <div className="max-w-4xl mx-auto">
              <section>
                <h3 className="font-bold text-xl mb-4">Redefining Success in the Second Half of Life</h3>
                <p className="mb-6">
                  As professionals move into the second half of life, their priorities naturally shift. Instead of chasing traditional markers of success—wealth, status, and power—many seek purpose, significance, and impact. Bob Buford's book Half Time explores this transition, emphasizing the shift from personal achievement to making a meaningful difference.
                </p>
                <p className="mb-6">
                  This phase of life is a time for reflection and reinvention, where seasoned professionals can leverage their wealth of experience to contribute to the greater good. The gig economy has emerged as a powerful pathway to achieving this, offering flexible, purpose-driven <span className="text-[#F6C13D] font-semibold">opportunities</span> for those looking to create lasting impact.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-xl mb-4">How the Gig Economy Supports Purpose-Driven Work</h3>
                <ul className="list-disc list-inside mb-6">
                  <li><strong>Flexibility & Freedom</strong> – Gig work allows experienced professionals to control their schedules, balancing work with personal pursuits, philanthropy, and lifelong passions.</li>
                  <li><strong>Leveraging Expertise for Good</strong> – The gig economy provides opportunities to apply decades of experience in mentoring startups, advising non-profits, or consulting on social impact projects.</li>
                  <li><strong>Continuous Learning & Growth</strong> – Gig work encourages ongoing <span className="text-[#F6C13D] font-semibold">skill development</span>, helping professionals stay relevant and engaged while driving positive change.</li>
                  <li><strong>Building a Legacy</strong> – By choosing purpose-driven projects, professionals can make a meaningful contribution to causes they care about, from sustainability and education to healthcare and community development.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-bold text-xl mb-4">How to Navigate the Gig Economy Successfully</h3>
                <ul className="list-disc list-inside mb-6">
                  <li><strong>Identify Your Passion & Values</strong> – Choose projects that align with your mission and personal values.</li>
                  <li><strong>Leverage Your Network</strong> – Tap into your professional connections to discover new opportunities.</li>
                  <li><strong>Embrace Lifelong Learning</strong> – Stay ahead by adapting to new trends and expanding your skill set.</li>
                  <li><strong>Seek Purpose-Driven Work</strong> – Prioritize gigs that contribute to positive change in your industry and beyond.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-bold text-xl mb-4">Conclusion: A New Chapter of Impact and Fulfillment</h3>
                <p className="mb-6">
                  The second half of life offers a chance to redefine success and make a lasting impact. The gig economy provides a dynamic, flexible way for experienced professionals to continue growing, contributing, and shaping the future. At GigExecs, we're building an open talent marketplace to help senior professionals unlock new opportunities in the gig economy—where experience meets purpose.
                </p>
              </section>

              {/* Call to Action */}
              <div className="pt-6">
                <a
                  href="https://www.gigexecs.com/signup"
                  className="text-[#F6C13D] font-semibold hover:underline"
                  aria-label="Join GigExecs platform"
                >
                  Join GigExecs Now →
                </a>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <aside className="mt-20">
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <BlogCard
                title="Remote Work vs. Hybrid vs. In-Office: Which Work Model is Right for You?"
                date="March 25, 2024"
                author="Nuno G. Rodrigues"
                description="Is remote work the future, or is hybrid the best balance? Discover insights from 23 years of global experience on how work models impact career growth, flexibility, and the evolving job market."
                href="/blog/remote-hybrid-in-office"
              />
              <BlogCard
                title="Remote Work vs. Hybrid vs. In-Office: Which Work Model is Right for You?"
                date="March 25, 2024"
                author="Nuno G. Rodrigues"
                description="Is remote work the future, or is hybrid the best balance? Discover insights from 23 years of global experience on how work models impact career growth, flexibility, and the evolving job market."
                href="/blog/remote-hybrid-in-office"
              />
              <BlogCard
                title="Remote Work vs. Hybrid vs. In-Office: Which Work Model is Right for You?"
                date="March 25, 2024"
                author="Nuno G. Rodrigues"
                description="Is remote work the future, or is hybrid the best balance? Discover insights from 23 years of global experience on how work models impact career growth, flexibility, and the evolving job market."
                href="/blog/remote-hybrid-in-office"
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
