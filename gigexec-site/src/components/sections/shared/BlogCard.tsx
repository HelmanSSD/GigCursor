import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/format'

interface BlogPost {
  id: string
  title: string
  description: string
  author: string
  publishedAt: string
  tags: string[]
  slug: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 h-full">
      <CardHeader className="pb-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        {/* Title */}
        <CardTitle className="text-lg md:text-xl text-primary group-hover:text-primary-600 transition-colors">
          <a href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </a>
        </CardTitle>
        
        {/* Description */}
        <CardDescription className="text-sm leading-relaxed">
          {post.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>By {post.author}</span>
          <span>{formatDate(post.publishedAt)}</span>
        </div>
        
        {/* Read More Link */}
        <div className="mt-4">
          <a 
            href={`/blog/${post.slug}`}
            className="text-primary hover:text-primary-600 text-sm font-medium group-hover:underline"
          >
            Read more →
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
