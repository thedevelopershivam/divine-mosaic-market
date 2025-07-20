import { useState } from 'react'
import { Heart, Share2, ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
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
  currency?: 'INR' | 'USD'
}

const ProductCard = ({ 
  id, 
  name, 
  category, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  isNew, 
  discount,
  currency = 'INR'
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isSharing, setIsSharing] = useState(false)

  const formatPrice = (amount: number) => {
    return currency === 'INR' ? `₹${amount.toLocaleString()}` : `$${amount}`
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  const handleShare = async () => {
    setIsSharing(true)
    if (navigator.share) {
      try {
        await navigator.share({
          title: name,
          text: `Check out this ${category.toLowerCase()}: ${name}`,
          url: window.location.origin + `/product/${id}`
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.origin + `/product/${id}`)
    }
    setTimeout(() => setIsSharing(false), 1000)
  }

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-spiritual transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-spiritual-teal text-white">New</Badge>
          )}
          {discount && (
            <Badge className="bg-destructive text-destructive-foreground">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/90 hover:bg-white"
            onClick={handleWishlist}
          >
            <Heart 
              className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/90 hover:bg-white"
            onClick={handleShare}
            disabled={isSharing}
          >
            <Share2 className={`w-4 h-4 text-gray-600 ${isSharing ? 'animate-pulse' : ''}`} />
          </Button>
        </div>

        {/* Quick Add to Cart (appears on hover) */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button variant="spiritual" className="w-full" size="sm">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </div>

        {/* Product Name (2 lines) */}
        <h3 className="font-semibold text-sm mb-2 line-clamp-2 h-10 leading-5">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(rating) 
                    ? 'fill-spiritual-gold text-spiritual-gold' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-primary">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard