import { Button } from '@/components/ui/button'

// SEO Metadata
export const metadata = {
  title: "From Corporate Leadership to Executive Freelancing: The Story Behind GigExecs",
  description: "Discover the journey behind GigExecs, a platform designed for seasoned professionals seeking flexible, high-value project work. Learn how we're redefining the gig economy for executives and experts.",
  keywords: [
    "executive freelancing",
    "corporate leadership",
    "gig economy for executives",
    "senior professionals",
    "flexible work arrangements",
    "fractional executives",
    "consulting platform",
    "experienced professionals",
    "project-based work",
    "executive marketplace"
  ],
  authors: [{ name: "Nuno G. Rodrigues" }],
  openGraph: {
    title: "From Corporate Leadership to Executive Freelancing: The Story Behind GigExecs",
    description: "Discover the journey behind GigExecs, a platform designed for seasoned professionals seeking flexible, high-value project work.",
    type: "article",
    publishedTime: "2024-05-06T00:00:00.000Z",
    authors: ["Nuno G. Rodrigues"],
    images: [
      {
        url: "/images/blog-gigexecs-story.jpg",
        width: 1200,
        height: 630,
        alt: "GigExecs Story - From Corporate Leadership to Executive Freelancing"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "From Corporate Leadership to Executive Freelancing: The Story Behind GigExecs",
    description: "Discover the journey behind GigExecs, a platform designed for seasoned professionals seeking flexible, high-value project work.",
    images: ["/images/blog-gigexecs-story.jpg"]
  },
  alternates: {
    canonical: "https://gigexecs.com/blog/gigexecs-story"
  }
}

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "From Corporate Leadership to Executive Freelancing: The Story Behind GigExecs",
  "description": "Discover the journey behind GigExecs, a platform designed for seasoned professionals seeking flexible, high-value project work. Learn how we're redefining the gig economy for executives and experts.",
  "image": {
    "@type": "ImageObject",
    "url": "https://gigexecs.com/images/blog-gigexecs-story.jpg",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@type": "Person",
    "name": "Nuno G. Rodrigues"
  },
  "publisher": {
    "@type": "Organization",
    "name": "GigExecs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://gigexecs.com/images/logo.png"
    }
  },
  "datePublished": "2024-05-06T00:00:00.000Z",
  "dateModified": "2024-05-06T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://gigexecs.com/blog/gigexecs-story"
  },
  "keywords": "executive freelancing, corporate leadership, gig economy for executives, senior professionals, flexible work arrangements"
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

export default function GigExecsStory() {
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
                <span className="text-white/60">From Corporate Leadership to Executive Freelancing</span>
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex items-center space-x-4 mb-4">
              <time dateTime="2024-05-06" className="text-sm font-semibold">
                Nuno G. Rodrigues  |  May 6, 2024
              </time>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2 text-white">
              From Corporate Leadership to Executive Freelancing: The Story Behind GigExecs
            </h1>
          </header>

          {/* Article Content */}
          <article className="space-y-6 text-white/90 text-lg">
            <p>
              In a world where the gig economy is often associated with entry-level work and tech-based gigs, seasoned
              professionals have long been overlooked. That gap is what led to the creation of GigExecs—a platform
              designed specifically for experienced executives, consultants, and specialists seeking flexible, high-value
              opportunities.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-10">The Shift to Flexible Work</h2>
              <p>
                When the world went into lockdown in 2020, remote work became the norm. Like many others, I found myself
                searching for ways to stay globally connected while leveraging nearly two decades of corporate experience.
                My goal was clear: to mentor and coach entrepreneurs worldwide, helping them navigate business challenges
                while earning a sustainable income.
              </p>
              <p>
                Turning to online freelance marketplaces seemed like the logical step. I launched a gig titled
                "I will be your Investor, Coach, and Business Mentor", hoping to connect with ambitious business owners in
                need of strategic guidance. The response was overwhelming. Over 18 months, I worked with more than 60
                entrepreneurs across multiple industries, helping them tackle funding challenges, growth strategies, and
                operational roadblocks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-10">The Question That Changed Everything</h2>
              <p>
                During one of my many coaching sessions, a client asked me: "With your experience, why are you offering
                services on a gig platform?". It was a simple question but a powerful one. Most freelance marketplaces
                catered to younger professionals, offering low compensation rates and a heavy focus on tech-based services.
              </p>
              <p>
                There were few—if any—platforms built for executives, seasoned consultants, or industry experts who wanted
                to embrace flexible work without undervaluing their expertise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-10">The Birth of GigExecs</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Find project-based work or fractional executive roles</li>
                <li>Enjoy flexible work arrangements without traditional employment constraints</li>
                <li>Receive fair compensation that reflects their expertise</li>
                <li>Connect with global clients who value high-level experience without the complexity of traditional hiring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-10">More Than a Platform—A Movement</h2>
              <p>
                GigExecs isn't just another marketplace; it's a movement to redefine work for experienced professionals.
                Whether you're an executive, consultant, or specialist looking for greater autonomy, GigExecs gives you the
                tools and opportunities to monetize your expertise and make an impact.
              </p>
              <p>
                The gig economy isn't just for entry-level work anymore—it's time for seasoned professionals to take their
                place in it. Welcome to the future of executive freelancing.
              </p>
            </section>

            {/* Call to Action */}
            <div className="pt-10">
              <a
                href="https://www.gigexecs.com/signup"
                className="inline-flex items-center text-gold font-semibold text-lg hover:underline"
                aria-label="Join GigExecs platform"
              >
                Join GigExecs Now <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </article>

          {/* Related Articles */}
          <aside className="mt-20">
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <BlogCard
                title="The Birth of GigExecs: A Personal Journey"
                date="May 9, 2024"
                author="Nuno G. Rodrigues"
                description="Discover the journey behind GigExecs, a platform designed for seasoned professionals seeking flexible, high-value project work. Learn how we're redefining the gig economy for executives and experts."
                href="/blog/birth-of-gigexecs"
              />
              <BlogCard
                title="Remote Work vs. Hybrid vs. In-Office: Which Work Model is Right for You?"
                date="March 25, 2024"
                author="Nuno G. Rodrigues"
                description="Is remote work the future, or is hybrid the best balance? Discover insights from 23 years of global experience on how work models impact career growth, flexibility, and the evolving job market."
                href="/blog/remote-vs-hybrid"
              />
              <BlogCard
                title="How to Succeed in a Hybrid Work Environment"
                date="March 11, 2024"
                author="Nuno G. Rodrigues"
                description="Explore practical strategies for thriving in a hybrid work setting, from time management to building team trust and optimizing productivity across remote and in-office days."
                href="/blog/hybrid-success"
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
