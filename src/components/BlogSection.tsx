import BlogCard from '@/components/BlogCard'
import { Button } from '@/components/ui/button'

const BlogSection = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'The Healing Power of Amethyst: A Complete Guide',
      excerpt: 'Discover how this beautiful purple crystal can enhance your spiritual practice and promote inner peace in your daily life.',
      author: 'Sarah Moonchild',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      category: 'Crystals',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop'
    },
    {
      id: '2',
      title: 'Creating Sacred Space: Essential Tips for Your Meditation Corner',
      excerpt: 'Transform any corner of your home into a peaceful sanctuary for meditation and spiritual practice with these simple yet powerful tips.',
      author: 'David Sage',
      date: 'Dec 12, 2024',
      readTime: '7 min read',
      category: 'Meditation',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      id: '3',
      title: 'Understanding Chakras: A Beginner\'s Journey',
      excerpt: 'Learn about the seven energy centers in your body and how to balance them for optimal physical and spiritual well-being.',
      author: 'Luna Crystal',
      date: 'Dec 10, 2024',
      readTime: '8 min read',
      category: 'Spiritual Growth',
      image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=400&h=300&fit=crop'
    },
    {
      id: '4',
      title: 'Full Moon Rituals: Harnessing Lunar Energy',
      excerpt: 'Explore powerful full moon rituals that can help you release negative energy and manifest your deepest desires.',
      author: 'Isabella Moonlight',
      date: 'Dec 8, 2024',
      readTime: '6 min read',
      category: 'Rituals',
      image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop'
    },
    {
      id: '5',
      title: 'Essential Oils for Spiritual Practice: Top 10 Recommendations',
      excerpt: 'Discover the most powerful essential oils that can enhance your meditation, cleanse your space, and uplift your spirit.',
      author: 'Marcus Sage',
      date: 'Dec 5, 2024',
      readTime: '9 min read',
      category: 'Aromatherapy',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop'
    },
    {
      id: '6',
      title: 'The Art of Smudging: Ancient Wisdom for Modern Times',
      excerpt: 'Learn the traditional practice of smudging with sage and other sacred herbs to purify your space and protect your energy.',
      author: 'Rainbow Spirit',
      date: 'Dec 3, 2024',
      readTime: '5 min read',
      category: 'Rituals',
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop'
    }
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Spiritual Wisdom & Insights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of articles, guides, and insights to deepen your spiritual journey
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="spiritual" size="lg">
            Explore All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BlogSection