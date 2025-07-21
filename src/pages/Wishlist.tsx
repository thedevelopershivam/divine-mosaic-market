import { useState } from 'react'
import { Heart, ShoppingCart, Trash2, Share2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'

const Wishlist = () => {
  const { toast } = useToast()
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Amethyst Crystal Cluster',
      price: 89.99,
      originalPrice: 120.00,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
      inStock: true,
      category: 'Crystals & Gems',
      addedDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Tibetan Singing Bowl',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      inStock: true,
      category: 'Meditation',
      addedDate: '2024-01-10'
    },
    {
      id: 3,
      name: 'Sacred Sage Bundle',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
      inStock: false,
      category: 'Healing Herbs',
      addedDate: '2024-01-08'
    },
    {
      id: 4,
      name: 'Rose Quartz Heart',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1606984945516-56b41b2e0b21?w=400&h=400&fit=crop',
      inStock: true,
      category: 'Crystals & Gems',
      addedDate: '2024-01-05'
    }
  ])

  const removeFromWishlist = (itemId: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== itemId))
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    })
  }

  const addToCart = (item: any) => {
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    })
  }

  const moveAllToCart = () => {
    const inStockItems = wishlistItems.filter(item => item.inStock)
    toast({
      title: "Added to cart",
      description: `${inStockItems.length} items have been added to your cart.`,
    })
  }

  const shareWishlist = () => {
    toast({
      title: "Wishlist shared",
      description: "Your wishlist link has been copied to clipboard.",
    })
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container mx-auto px-4 py-16 pb-20 lg:pb-16">
          <div className="text-center max-w-md mx-auto">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4">Your Wishlist is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Start building your wishlist by adding items you love!
            </p>
            <Button size="lg" asChild>
              <a href="/products">Browse Products</a>
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 pb-20 lg:pb-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-500 fill-current" />
              My Wishlist
            </h1>
            <p className="text-muted-foreground">
              {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} in your wishlist
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline" onClick={shareWishlist}>
              <Share2 className="w-4 h-4 mr-2" />
              Share Wishlist
            </Button>
            <Button 
              onClick={moveAllToCart}
              disabled={!wishlistItems.some(item => item.inStock)}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add All to Cart
            </Button>
          </div>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-card transition-all duration-300">
              <div className="relative">
                {/* Product Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                </div>

                {/* Remove Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  {/* Category */}
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>

                  {/* Product Name */}
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg">
                      ${item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Added Date */}
                  <p className="text-xs text-muted-foreground">
                    Added on {new Date(item.addedDate).toLocaleDateString()}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      disabled={!item.inStock}
                      onClick={() => addToCart(item)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Heart className="w-4 h-4 fill-current text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/products">Continue Shopping</a>
          </Button>
        </div>

        {/* Wishlist Tips */}
        <Card className="mt-12 bg-muted/30">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Wishlist Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">Save for Later</h4>
                <p>Keep track of items you're interested in and add them to cart when ready.</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Share with Friends</h4>
                <p>Share your wishlist with friends and family for gift ideas.</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Price Tracking</h4>
                <p>We'll notify you when items in your wishlist go on sale.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  )
}

export default Wishlist