import { Gem, Flower, Book, Palette, Flame, Heart } from 'lucide-react'

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: 'Crystals & Gems',
      icon: Gem,
      description: 'Healing crystals and gemstones',
      color: 'spiritual-purple',
      count: 150
    },
    {
      id: 2,
      name: 'Aromatherapy',
      icon: Flower,
      description: 'Essential oils and incense',
      color: 'spiritual-teal',
      count: 89
    },
    {
      id: 3,
      name: 'Spiritual Books',
      icon: Book,
      description: 'Wisdom and guidance',
      color: 'spiritual-gold',
      count: 210
    },
    {
      id: 4,
      name: 'Sacred Art',
      icon: Palette,
      description: 'Mandalas and spiritual art',
      color: 'earth-brown',
      count: 75
    },
    {
      id: 5,
      name: 'Candles & Rituals',
      icon: Flame,
      description: 'Sacred candles and tools',
      color: 'sage-green',
      count: 120
    },
    {
      id: 6,
      name: 'Meditation',
      icon: Heart,
      description: 'Meditation accessories',
      color: 'spiritual-purple',
      count: 95
    }
  ]

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.id}
                className="group relative bg-card rounded-xl p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${category.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 text-${category.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {category.description}
                </p>
                <span className="text-xs bg-muted rounded-full px-2 py-1">
                  {category.count} items
                </span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-spiritual opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection