import { useState } from 'react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'

interface ProductsSectionProps {
  title: string
  subtitle?: string
  products: Array<{
    id: string
    name: string
    category: string
    price: number
    originalPrice?: number
    image: string
    rating: number
    reviews: number
    isNew?: boolean
    discount?: number
  }>
  showViewAll?: boolean
}

const ProductsSection = ({ title, subtitle, products, showViewAll = true }: ProductsSectionProps) => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR')

  // Convert prices based on currency (example conversion rate)
  const convertPrice = (price: number) => {
    return currency === 'USD' ? Math.round(price / 80) : price
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Currency Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  currency === 'INR' 
                    ? 'bg-spiritual-gold text-primary font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  currency === 'USD' 
                    ? 'bg-spiritual-gold text-primary font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                $ USD
              </button>
            </div>

            {showViewAll && (
              <Button variant="outline">
                View All
              </Button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              price={convertPrice(product.price)}
              originalPrice={product.originalPrice ? convertPrice(product.originalPrice) : undefined}
              currency={currency}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection