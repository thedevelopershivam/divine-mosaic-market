import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Filter, Grid, List } from 'lucide-react'
import { useState } from 'react'

const Categories = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')

  const allCategories = [
    {
      id: 1,
      name: 'Crystals & Gems',
      description: 'Healing crystals and gemstones for spiritual wellness',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      count: 150,
      subcategories: ['Amethyst', 'Rose Quartz', 'Clear Quartz', 'Citrine']
    },
    {
      id: 2,
      name: 'Aromatherapy',
      description: 'Essential oils, incense, and aromatic spiritual tools',
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop',
      count: 89,
      subcategories: ['Essential Oils', 'Incense Sticks', 'Sage Bundles', 'Palo Santo']
    },
    {
      id: 3,
      name: 'Spiritual Books',
      description: 'Ancient wisdom and modern spiritual guidance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      count: 210,
      subcategories: ['Meditation Guides', 'Spiritual Philosophy', 'Astrology', 'Chakra Healing']
    },
    {
      id: 4,
      name: 'Sacred Art',
      description: 'Mandalas, spiritual paintings, and sacred geometry',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      count: 75,
      subcategories: ['Mandalas', 'Dream Catchers', 'Sacred Symbols', 'Tapestries']
    },
    {
      id: 5,
      name: 'Candles & Rituals',
      description: 'Sacred candles and ritual tools for ceremonies',
      image: 'https://images.unsplash.com/photo-1602827114299-e122dc78e8b5?w=400&h=300&fit=crop',
      count: 120,
      subcategories: ['Ritual Candles', 'Altar Tools', 'Ceremonial Items', 'Blessing Kits']
    },
    {
      id: 6,
      name: 'Meditation',
      description: 'Tools and accessories for mindful practice',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      count: 95,
      subcategories: ['Singing Bowls', 'Meditation Cushions', 'Prayer Beads', 'Chimes']
    },
    {
      id: 7,
      name: 'Yoga & Wellness',
      description: 'Yoga mats, blocks, and wellness accessories',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      count: 67,
      subcategories: ['Yoga Mats', 'Meditation Blocks', 'Straps', 'Bolsters']
    },
    {
      id: 8,
      name: 'Healing Herbs',
      description: 'Natural herbs, teas, and botanical remedies',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop',
      count: 143,
      subcategories: ['Herbal Teas', 'Healing Herbs', 'Flower Essences', 'Natural Remedies']
    }
  ]

  const filteredCategories = allCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Categories
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our complete range of spiritual products organized by category
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search categories..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Categories Grid/List */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          : "space-y-4"
        }>
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`group bg-card rounded-xl overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                viewMode === 'list' ? 'flex items-center' : ''
              }`}
            >
              {/* Category Image */}
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'h-48'
              }`}>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Count Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-2 py-1 rounded-full">
                    {category.count} items
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                
                {/* Subcategories */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {category.subcategories.slice(0, 3).map((sub) => (
                    <span key={sub} className="text-xs bg-muted px-2 py-1 rounded">
                      {sub}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <span className="text-xs text-muted-foreground">
                      +{category.subcategories.length - 3} more
                    </span>
                  )}
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  Browse Category
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No categories found matching your search.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}

export default Categories