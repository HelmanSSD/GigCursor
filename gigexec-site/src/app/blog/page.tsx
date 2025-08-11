'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const blogPosts = [
    {
      id: 1,
      title: "Crafting a Winning Talent Strategy for 2025",
      description: "Discover how top organizations are redefining their talent strategy to stay competitive in an evolving workforce landscape.",
      image: "/images/blog-1.png",
      category: "Strategy"
    },
    {
      id: 2,
      title: "What is Fractional Leadership?",
      description: "Learn how fractional leadership gives businesses flexibility, reduces costs, and unlocks niche expertise.",
      image: "/images/blog-2.png",
      category: "Leadership"
    },
    {
      id: 3,
      title: "How to Attract Senior Independent Consultants",
      description: "Understand what matters to experienced freelancers and how your organization can become their top choice.",
      image: "/images/blog-3.png",
      category: "Hiring"
    },
    {
      id: 4,
      title: "The Rise of Remote Executive Talent",
      description: "Explore why remote leadership is no longer a compromise, but a competitive advantage.",
      image: "/images/blog-4.png",
      category: "Remote Work"
    },
    {
      id: 5,
      title: "Why Interim Executives are On the Rise",
      description: "See how interim leadership is helping companies scale quickly and fill gaps with confidence.",
      image: "/images/blog-5.png",
      category: "Leadership"
    },
    {
      id: 6,
      title: "Benefits of Project-Based Executives",
      description: "Hiring for high-impact outcomes? Discover the value of project-based leadership.",
      image: "/images/blog-6.png",
      category: "Strategy"
    },
    {
      id: 7,
      title: "How to Build a Freelance-Friendly Culture",
      description: "Company culture matters. Here's how to build an environment freelancers thrive in.",
      image: "/images/blog-7.png",
      category: "Culture"
    },
    {
      id: 8,
      title: "The GigExecs Approach to Vetting Experts",
      description: "Learn about our process for finding the most experienced, trusted, and impactful talent.",
      image: "/images/blog-8.png",
      category: "Process"
    },
    {
      id: 9,
      title: "GigExecs Featured in Business Weekly",
      description: "GigExecs was recently spotlighted as one of the top global platforms reshaping executive talent.",
      image: "/images/blog-9.png",
      category: "News"
    },
    {
      id: 10,
      title: "The Future of Freelance for Senior Talent",
      description: "Where is the freelance world headed for top-tier professionals? Let's look at the trends shaping tomorrow.",
      image: "/images/blog-10.png",
      category: "Future"
    }
  ]

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="min-h-screen w-full bg-[#012E46] text-white py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl">
          Discover expert insights, industry updates, and thought leadership from the GigExecs team.
        </p>

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-md">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20 rounded-xl px-4 py-3"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="w-5 h-5 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            {searchTerm && (
              <p className="text-sm text-white/60 mt-2">
                Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 flex flex-col hover:bg-white/15 transition-all duration-300 group">
              <div className="w-full h-52 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                <span className="text-4xl font-bold text-[#012E46] opacity-60 group-hover:opacity-80 transition-opacity">
                  {post.category.charAt(0)}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-2">
                  <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/80 text-sm flex-1">
                  {post.description}
                </p>
                {post.id === 1 ? (
                  <a href="/blog/remote-hybrid-in-office">
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-white/80 hover:text-white hover:bg-white/10 self-start"
                    >
                      Read More →
                    </Button>
                  </a>
                ) : post.id === 2 ? (
                  <a href="/blog/gigexecs-story">
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-white/80 hover:text-white hover:bg-white/10 self-start"
                    >
                      Read More →
                    </Button>
                  </a>
                ) : post.id === 3 ? (
                  <a href="/blog/navigating-ai-revolution">
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-white/80 hover:text-white hover:bg-white/10 self-start"
                    >
                      Read More →
                    </Button>
                  </a>
                ) : post.id === 4 ? (
                  <a href="/blog/older-talent">
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-white/80 hover:text-white hover:bg-white/10 self-start"
                    >
                      Read More →
                    </Button>
                  </a>
                ) : post.id === 5 ? (
                  <a href="/blog/senior-professionals">
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-white/80 hover:text-white hover:bg-white/10 self-start"
                    >
                      Read More →
                    </Button>
                  </a>
                ) : post.id === 6 ? (
                  <a href="/blog/flexible-work-seniors">
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-white/80 hover:text-white hover:bg-white/10 self-start"
                    >
                      Read More →
                    </Button>
                  </a>
                ) : post.id === 7 ? (
                  <a href="/blog/ai-robots-future-work">
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-white/80 hover:text-white hover:bg-white/10 self-start"
                    >
                      Read More →
                    </Button>
                  </a>
                ) : post.id === 8 ? (
                  <a href="/blog/flexible-senior-work">
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-white/80 hover:text-white hover:bg-white/10 self-start"
                    >
                      Read More →
                    </Button>
                  </a>
                ) : post.id === 9 ? (
                  <a href="/blog/20-percent-challenge-2025">
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-white/80 hover:text-white hover:bg-white/10 self-start"
                    >
                      Read More →
                    </Button>
                  </a>
                ) : post.id === 10 ? (
                  <a href="/blog/finding-purpose">
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-white/80 hover:text-white hover:bg-white/10 self-start"
                    >
                      Read More →
                    </Button>
                  </a>
                ) : (
                  <Button 
                    variant="ghost" 
                    className="mt-4 text-white/80 hover:text-white hover:bg-white/10 self-start"
                  >
                    Read More →
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <div className="text-white/60 text-lg mb-2">No articles found</div>
            <p className="text-white/40 text-sm">
              Try adjusting your search terms or browse all articles
            </p>
            <Button 
              variant="outline" 
              onClick={() => setSearchTerm('')}
              className="mt-4 text-white border-white/20 hover:bg-white/10"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

