import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'

const CategoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const categories = [
    {
      id: 1,
      name: 'Crystals & Gems',
      description: 'Healing crystals and gemstones',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      count: 150
    },
    {
      id: 2,
      name: 'Aromatherapy',
      description: 'Essential oils and incense',
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop',
      count: 89
    },
    {
      id: 3,
      name: 'Spiritual Books',
      description: 'Wisdom and guidance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      count: 210
    },
    {
      id: 4,
      name: 'Sacred Art',
      description: 'Mandalas and spiritual art',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      count: 75
    },
    {
      id: 5,
      name: 'Candles & Rituals',
      description: 'Sacred candles and tools',
      image: 'https://images.unsplash.com/photo-1602827114299-e122dc78e8b5?w=400&h=300&fit=crop',
      count: 120
    },
    {
      id: 6,
      name: 'Meditation',
      description: 'Meditation accessories',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      count: 95
    },
    {
      id: 7,
      name: 'Yoga & Wellness',
      description: 'Yoga mats and accessories',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      count: 67
    },
    {
      id: 8,
      name: 'Healing Herbs',
      description: 'Natural herbs and teas',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop',
      count: 143
    }
  ]

  const itemsPerView = {
    mobile: 2,
    tablet: 3,
    desktop: 4
  }

  const nextSlide = () => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.children[0]?.clientWidth || 0
      const gap = 24 // 1.5rem in pixels
      sliderRef.current.scrollBy({ left: itemWidth + gap, behavior: 'smooth' })
    }
  }

  const prevSlide = () => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.children[0]?.clientWidth || 0
      const gap = 24 // 1.5rem in pixels
      sliderRef.current.scrollBy({ left: -(itemWidth + gap), behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collection of spiritual products to enhance your journey
          </p>
        </div>

        {/* Categories Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Slider Container */}
          <div 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative bg-card rounded-xl overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2 cursor-pointer min-w-[280px] flex-shrink-0"
              >
                {/* Category Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Count Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                      {category.count} items
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-spiritual opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection