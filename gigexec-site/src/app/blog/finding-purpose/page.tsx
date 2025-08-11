import { Button } from '@/components/ui/button'

// SEO Metadata
export const metadata = {
  title: "Finding Purpose in the Second Half of Life: How the Gig Economy Empowers Senior Professionals",
  description: "Discover how the gig economy empowers senior professionals to find purpose, leverage their expertise, and make meaningful impact in the second half of their careers.",
  keywords: [
    "Finding purpose in second half of life",
    "Gig economy for senior professionals",
    "Purpose-driven work for experienced professionals",
    "Senior professionals and gig economy",
    "Career reinvention for senior professionals",
    "Flexible work for experienced professionals",
    "Legacy building through gig work",
    "Senior talent and purpose-driven opportunities",
    "GigExecs for senior professionals",
    "Career transition for experienced professionals"
  ],
  authors: [{ name: "GigExecs Insider" }],
  openGraph: {
    title: "Finding Purpose in the Second Half of Life: How the Gig Economy Empowers Senior Professionals",
    description: "Discover how the gig economy empowers senior professionals to find purpose, leverage their expertise, and make meaningful impact in the second half of their careers.",
    type: "article",
    publishedTime: "2024-07-15T00:00:00.000Z",
    authors: ["GigExecs Insider"],
    images: [
      {
        url: "/images/blog-finding-purpose.jpg",
        width: 1200,
        height: 630,
        alt: "Finding Purpose in the Second Half of Life"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Finding Purpose in the Second Half of Life: How the Gig Economy Empowers Senior Professionals",
    description: "Discover how the gig economy empowers senior professionals to find purpose, leverage their expertise, and make meaningful impact in the second half of their careers.",
    images: ["/images/blog-finding-purpose.jpg"]
  },
  alternates: {
    canonical: "https://gigexecs.com/blog/finding-purpose"
  }
}

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Finding Purpose in the Second Half of Life: How the Gig Economy Empowers Senior Professionals",
  "description": "Discover how the gig economy empowers senior professionals to find purpose, leverage their expertise, and make meaningful impact in the second half of their careers.",
  "image": {
    "@type": "ImageObject",
    "url": "https://gigexecs.com/images/blog-finding-purpose.jpg",
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
    "@id": "https://gigexecs.com/blog/finding-purpose"
  },
  "keywords": "Finding purpose in second half of life, Gig economy for senior professionals, Purpose-driven work for experienced professionals, Senior professionals and gig economy, Career reinvention for senior professionals, Flexible work for experienced professionals, Legacy building through gig work, Senior talent and purpose-driven opportunities, GigExecs for senior professionals, Career transition for experienced professionals"
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

export default function BlogFindingPurpose() {
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
            <p className="text-base sm:text-lg text-white">
              Discover how the gig economy empowers senior professionals to find purpose, leverage their expertise, and make meaningful impact in the second half of their careers.
            </p>
          </header>

          {/* Article Content */}
          <article className="bg-white text-[#012E46] px-4 sm:px-8 py-16 rounded-t-3xl">
            <div className="max-w-4xl mx-auto space-y-6">
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">Redefining Success in the Second Half of Life</h2>
                <p className="text-base sm:text-lg mb-6">
                  As professionals move into the second half of life, their priorities naturally shift. Instead of chasing traditional markers of success—wealth, status, and power—many seek purpose, significance, and impact. Bob Buford's book Half Time explores this transition, emphasizing the shift from personal achievement to making a meaningful difference.
                </p>
                <p className="text-base sm:text-lg mb-6">
                  This phase of life is a time for reflection and reinvention, where seasoned professionals can leverage their wealth of experience to contribute to the greater good. The gig economy has emerged as a powerful pathway to achieving this, offering flexible, purpose-driven <span className="text-[#F6C13D] font-semibold">opportunities</span> for those looking to create lasting impact.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">How the Gig Economy Supports Purpose-Driven Work</h2>
                <p className="text-base sm:text-lg mb-6">
                  The rise of freelancing, consulting, and project-based work provides an alternative to traditional employment, allowing professionals to choose projects that align with their values and aspirations. Here's how:
                </p>
                <ul className="list-disc pl-6 space-y-4 mb-6">
                  <li className="text-base sm:text-lg">
                    <strong>Flexibility & Freedom</strong> – Gig work allows experienced professionals to control their schedules, balancing work with personal pursuits, philanthropy, and lifelong passions.
                  </li>
                  <li className="text-base sm:text-lg">
                    <strong>Leveraging Expertise for Good</strong> – The gig economy provides opportunities to apply decades of experience in mentoring startups, advising non-profits, or consulting on social impact projects.
                  </li>
                  <li className="text-base sm:text-lg">
                    <strong>Continuous Learning & Growth</strong> – Gig work encourages ongoing <span className="text-[#F6C13D] font-semibold">skill development</span>, helping professionals stay relevant and engaged while driving positive change.
                  </li>
                  <li className="text-base sm:text-lg">
                    <strong>Building a Legacy</strong> – By choosing purpose-driven projects, professionals can make a meaningful contribution to causes they care about, from sustainability and education to healthcare and community development.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">How to Navigate the Gig Economy Successfully</h2>
                <p className="text-base sm:text-lg mb-6">
                  For experienced professionals looking to make the most of gig opportunities, here are key strategies:
                </p>
                <ul className="list-disc pl-6 space-y-4 mb-6">
                  <li className="text-base sm:text-lg">
                    <strong>Identify Your Passion & Values</strong> – Choose projects that align with your mission and personal values.
                  </li>
                  <li className="text-base sm:text-lg">
                    <strong>Leverage Your Network</strong> – Tap into your professional connections to discover new opportunities.
                  </li>
                  <li className="text-base sm:text-lg">
                    <strong>Embrace Lifelong Learning</strong> – Stay ahead by adapting to new trends and expanding your skill set.
                  </li>
                  <li className="text-base sm:text-lg">
                    <strong>Seek Purpose-Driven Work</strong> – Prioritize gigs that contribute to positive change in your industry and beyond.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">Conclusion: A New Chapter of Impact and Fulfillment</h2>
                <p className="text-base sm:text-lg mb-6">
                  The second half of life offers a chance to redefine success and make a lasting impact. The gig economy provides a dynamic, flexible way for experienced professionals to continue growing, contributing, and shaping the future. At GigExecs, we're building an open talent marketplace to help senior professionals unlock new opportunities in the gig economy—where experience meets purpose.
                </p>

                {/* Call to Action */}
                <div className="mt-8">
                  <a
                    href="https://www.gigexecs.com/signup"
                    className="text-[#F6C13D] font-semibold hover:underline"
                    aria-label="Join GigExecs platform"
                  >
                    Join GigExecs Now →
                  </a>
                </div>
              </section>
            </div>
          </article>

          {/* Related Articles */}
          <aside className="mt-20">
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <BlogCard
                title="The Future of Senior Work: Flexibility and Freelance Opportunities"
                date="March 25, 2024"
                author="Nuno G. Rodrigues"
                description="Senior professionals are increasingly turning to flexible work models like freelancing and consulting. Learn how businesses and experienced talent benefit from this shift in the workforce."
                href="/blog/flexible-senior-work"
              />
              <BlogCard
                title="Building the Future of Flexible Work for Senior Professionals"
                date="September 13, 2024"
                author="GigExecs Insider"
                description="Discover how flexible work models are reshaping the future for senior professionals and creating new opportunities in the gig economy."
                href="/blog/flexible-work-seniors"
              />
              <BlogCard
                title="The 20% Challenge for 2025: Flexible Work for Senior Professionals"
                date="June 10, 2024"
                author="Nuno G. Rodrigues"
                description="The future of work is changing. Learn why businesses should convert 20% of senior roles to flexible positions, unlocking talent, saving costs, and fostering innovation."
                href="/blog/20-percent-challenge-2025"
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
