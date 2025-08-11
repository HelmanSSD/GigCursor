import { blogData } from '@/data/blog'
import { BlogCard } from '../shared/BlogCard'
import { Badge } from '@/components/ui/badge'

interface BlogListProps {
  posts: typeof blogData
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-primary-50 text-primary border-primary">
            Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Latest Insights & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the GigExec community.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-2xl transition-all duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  )
}

