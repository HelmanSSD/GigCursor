import { Button } from '@/components/ui/button'

// SEO Metadata
export const metadata = {
  title: "GigExecs: The Future of Flexible Work for Senior Professionals",
  description: "GigExecs is redefining flexible work for senior professionals. Join a global network of experienced executives and businesses seeking top-tier talent for consulting, freelancing, and fractional roles.",
  keywords: [
    "GigExecs platform for senior professionals",
    "Flexible work for experienced executives",
    "Consulting and freelancing for senior professionals",
    "Fractional executive roles",
    "Global talent marketplace for professionals",
    "Overcoming ageism in the workplace",
    "On-demand consulting for businesses",
    "Senior professionals in the gig economy",
    "Alternative career paths for executives",
    "Future of work for experienced professionals"
  ],
  authors: [{ name: "GigExecs Insider" }],
  openGraph: {
    title: "GigExecs: The Future of Flexible Work for Senior Professionals",
    description: "GigExecs is redefining flexible work for senior professionals. Join a global network of experienced executives and businesses seeking top-tier talent for consulting, freelancing, and fractional roles.",
    type: "article",
    publishedTime: "2024-09-13T00:00:00.000Z",
    authors: ["GigExecs Insider"],
    images: [
      {
        url: "/images/blog-flexible-work-seniors.jpg",
        width: 1200,
        height: 630,
        alt: "Building the Future of Flexible Work for Senior Professionals"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GigExecs: The Future of Flexible Work for Senior Professionals",
    description: "GigExecs is redefining flexible work for senior professionals. Join a global network of experienced executives and businesses seeking top-tier talent for consulting, freelancing, and fractional roles.",
    images: ["/images/blog-flexible-work-seniors.jpg"]
  },
  alternates: {
    canonical: "https://gigexecs.com/blog/flexible-work-seniors"
  }
}

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "GigExecs: The Future of Flexible Work for Senior Professionals",
  "description": "GigExecs is redefining flexible work for senior professionals. Join a global network of experienced executives and businesses seeking top-tier talent for consulting, freelancing, and fractional roles.",
  "image": {
    "@type": "ImageObject",
    "url": "https://gigexecs.com/images/blog-flexible-work-seniors.jpg",
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
  "datePublished": "2024-09-13T00:00:00.000Z",
  "dateModified": "2024-09-13T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://gigexecs.com/blog/flexible-work-seniors"
  },
  "keywords": "GigExecs platform for senior professionals, Flexible work for experienced executives, Consulting and freelancing for senior professionals, Fractional executive roles, Global talent marketplace for professionals, Overcoming ageism in the workplace, On-demand consulting for businesses, Senior professionals in the gig economy, Alternative career paths for executives, Future of work for experienced professionals"
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

export default function BlogFlexibleWorkSeniors() {
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
                <span className="text-white/60">Building the Future of Flexible Work</span>
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex items-center space-x-4 mb-4">
              <time dateTime="2024-09-13" className="text-sm font-semibold">
                GigExecs Insider  |  September 13, 2024
              </time>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif mb-6 text-white">
              Building the Future of Flexible Work for Senior Professionals
            </h1>
          </header>

          {/* Article Content */}
          <article className="bg-white text-[#012E46] px-4 sm:px-8 py-16 rounded-t-3xl">
            <div className="max-w-4xl mx-auto">
              <p className="mb-6">
                At GigExecs, we've been quietly working behind the scenes over the past few months to build something special.
                Since launching our Beta version, with limited resources and a bootstrapped approach, we're thrilled to share
                the progress we've made. Already, our platform boasts a growing network of highly experienced senior professionals
                from all corners of the globe—from the US to Asia, Europe to Africa. The diversity and depth of expertise across
                industries such as Energy, Finance, Media, Natural Resources, Marketing, and Engineering are nothing short of inspiring.
              </p>

              <section>
                <h2 className="font-semibold text-[#012E46] mb-4">GigExecs: The Go-To Platform for Senior Professionals and Businesses</h2>
                <p className="mb-6">
                  Our mission is clear: GigExecs aims to be the <span className="font-semibold text-[#F4A900]">leading platform</span> where senior professionals and
                  businesses worldwide can connect through flexible work models. Whether it's independent advisory, consulting, fractional
                  roles, freelancing, or other flexible engagements, GigExecs makes it easier for businesses and professionals to collaborate and thrive.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-[#012E46] mb-4">Addressing the Need for Flexible Professional Solutions</h2>
                <p className="mb-6">
                  As global life expectancy increases and careers extend into later years, the demand for flexible professional solutions
                  has never been more urgent. Senior professionals want to remain financially and professionally active well into their 40s,
                  50s, and 60s. However, ageism remains a barrier, especially for those seeking full-time positions later in their careers.
                  This is where GigExecs steps in. By offering flexible work models, we help bridge the gap between experienced professionals
                  and businesses in need of their expertise.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-[#012E46] mb-4">Unlocking Global Talent with GigExecs</h2>
                <p className="mb-6">
                  Through GigExecs, businesses can tap into a <span className="font-semibold text-[#F4A900]">global talent pool</span>, gaining access to high-impact, on-demand
                  professionals who can deliver short-term, specialized work at a cost-effective rate. GigExecs is the solution for businesses
                  seeking top-tier talent without the commitment of traditional, full-time hires.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-[#012E46] mb-4">Exciting Updates Ahead for GigExecs</h2>
                <p className="mb-6">
                  We're continuously working to enhance and expand the features of our Beta version, and we have many exciting improvements
                  on the horizon. As we grow, we appreciate your support and invite you to stay tuned for further updates.
                </p>
              </section>

              <p className="mt-8 mb-6">
                Join us in shaping the future of flexible work for senior professionals worldwide!
              </p>

              {/* Call to Action */}
              <div className="pt-6">
                <a
                  href="https://www.gigexecs.com/signup"
                  className="text-[#F4A900] font-semibold hover:underline"
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
