import { useState } from 'react'
import { ChevronLeft, Heart, Share2, Star, Minus, Plus, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = {
    id: 1,
    name: 'Premium Amethyst Crystal Cluster',
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    stockCount: 12,
    description: 'This stunning amethyst crystal cluster is perfect for meditation, healing, and spiritual practices. Each piece is naturally formed and unique, bringing powerful energy to your sacred space.',
    longDescription: 'Amethyst is known as the stone of spiritual wisdom and helps to enhance intuition and promote emotional balance. This beautiful cluster has been ethically sourced and carefully selected for its exceptional quality and vibrant purple color. Perfect for meditation rooms, altars, or as a decorative piece that brings positive energy to any space.',
    features: [
      'Natural amethyst crystal formation',
      'Approximately 4-6 inches in height',
      'Ethically sourced from Brazil',
      'Each piece is unique',
      'Includes care instructions',
      'Gift box packaging available'
    ],
    images: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1609301353891-68b5cd05fbd7?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1596910547037-846b1980329f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1607442551413-d18e716da9f9?w=600&h=600&fit=crop'
    ],
    category: 'Crystals & Gems',
    tags: ['amethyst', 'healing', 'meditation', 'crystals', 'spiritual']
  }

  const suggestedProducts = [
    {
      id: 2,
      name: 'Rose Quartz Heart',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1606984945516-56b41b2e0b21?w=300&h=300&fit=crop',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Clear Quartz Point',
      price: 28.99,
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=300&h=300&fit=crop',
      rating: 4.9
    },
    {
      id: 4,
      name: 'Black Tourmaline',
      price: 42.99,
      image: 'https://images.unsplash.com/photo-1596910547280-a5b14b1e5987?w=300&h=300&fit=crop',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Selenite Wand',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1596910546502-c53cf6937d2e?w=300&h=300&fit=crop',
      rating: 4.8
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 pb-20 lg:pb-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <a href="/" className="hover:text-foreground">Home</a>
          <span>/</span>
          <a href="/products" className="hover:text-foreground">Products</a>
          <span>/</span>
          <a href="/categories" className="hover:text-foreground">{product.category}</a>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6 -ml-4" onClick={() => window.history.back()}>
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={isWishlisted ? 'text-red-500' : ''}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current text-yellow-400' : 'text-muted-foreground'}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <Badge variant="secondary">{product.category}</Badge>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <Badge variant="destructive">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm">
                {product.inStock ? `In Stock (${product.stockCount} available)` : 'Out of Stock'}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    disabled={quantity >= product.stockCount}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1" disabled={!product.inStock}>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-primary" />
                <span className="text-sm">30-Day Return</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {product.longDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="outline">#{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="features" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Product Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
                <div className="space-y-6">
                  {/* Reviews would be dynamically loaded here */}
                  <div className="text-center text-muted-foreground py-8">
                    Reviews coming soon...
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Suggested Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedProducts.map((suggestedProduct) => (
              <Card key={suggestedProduct.id} className="group hover:shadow-card transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={suggestedProduct.image} 
                    alt={suggestedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {suggestedProduct.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">${suggestedProduct.price}</span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span>{suggestedProduct.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer Banner */}
        <div className="mt-16 bg-gradient-spiritual text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Free Shipping on Orders Over $75</h3>
          <p className="text-white/90 mb-6">
            Join thousands of satisfied customers who trust us for their spiritual journey
          </p>
          <Button variant="secondary" size="lg">
            Shop More Products
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default ProductDetails