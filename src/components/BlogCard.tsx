import { Calendar, User, Share2, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BlogCardProps {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  image: string
  category: string
}

const BlogCard = ({ id, title, excerpt, author, date, readTime, image, category }: BlogCardProps) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: excerpt,
          url: window.location.origin + `/blog/${id}`
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      navigator.clipboard.writeText(window.location.origin + `/blog/${id}`)
    }
  }

  return (
    <article className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-spiritual transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-spiritual-purple text-white px-2 py-1 rounded text-xs font-medium">
            {category}
          </span>
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/90 hover:bg-white"
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4 text-gray-600" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 leading-relaxed">
          {excerpt}
        </p>

        {/* Read More */}
        <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary-glow">
          Read More →
        </Button>
      </div>
    </article>
  )
}

export default BlogCard