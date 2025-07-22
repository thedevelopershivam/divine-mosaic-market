import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { mockProducts, mockReviews, type Product, type Review } from '@/data/mockData'
import { Plus, Edit, Trash2, Star, Eye, MessageSquare } from 'lucide-react'

const AdminProducts = () => {
  const [products] = useState<Product[]>(mockProducts)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isAddingProduct, setIsAddingProduct] = useState(false)

  // Generate random reviews for each product
  const generateRandomReviews = (productId: string): Review[] => {
    const names = ['Sarah M.', 'Mike R.', 'Priya S.', 'David L.', 'Maria C.', 'John K.', 'Lisa P.', 'Ryan T.', 'Emma W.', 'Alex Z.']
    const comments = [
      'Absolutely amazing quality! Exceeded my expectations.',
      'Perfect for my meditation practice. Highly recommended.',
      'Beautiful craftsmanship and excellent customer service.',
      'Great value for money. Will definitely buy again.',
      'The energy from this product is incredible.',
      'Fast shipping and perfect packaging.',
      'Exactly as described. Very satisfied with my purchase.',
      'This has transformed my spiritual practice.',
      'Outstanding product quality and beautiful design.',
      'Love it! Perfect addition to my sacred space.'
    ]

    const reviewCount = Math.floor(Math.random() * 8) + 3 // 3-10 reviews
    const reviews: Review[] = []

    for (let i = 0; i < reviewCount; i++) {
      reviews.push({
        id: `${productId}-review-${i}`,
        productId,
        userName: names[Math.floor(Math.random() * names.length)],
        rating: Math.floor(Math.random() * 2) + 4, // 4-5 stars
        comment: comments[Math.floor(Math.random() * comments.length)],
        date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        verified: Math.random() > 0.3 // 70% verified
      })
    }

    return reviews
  }

  const getProductReviews = (productId: string) => {
    const existingReviews = mockReviews.filter(r => r.productId === productId)
    if (existingReviews.length === 0) {
      return generateRandomReviews(productId)
    }
    return existingReviews
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-full overflow-x-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-spiritual bg-clip-text text-transparent">
              Product Management
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage your spiritual products and inventory
            </p>
          </div>
          <Dialog open={isAddingProduct} onOpenChange={setIsAddingProduct}>
            <DialogTrigger asChild>
              <Button className="mt-4 lg:mt-0">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogDescription>
                  Create a new product for your spiritual shop
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" placeholder="Enter product name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="crystals">Crystals</SelectItem>
                      <SelectItem value="meditation">Meditation</SelectItem>
                      <SelectItem value="aromatherapy">Aromatherapy</SelectItem>
                      <SelectItem value="sacred-art">Sacred Art</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="price">Price (₹)</Label>
                    <Input id="price" type="number" placeholder="0" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="originalPrice">Original Price (₹)</Label>
                    <Input id="originalPrice" type="number" placeholder="0" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter product description" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input id="image" placeholder="https://..." />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsAddingProduct(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddingProduct(false)}>
                  Create Product
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => {
            const reviews = getProductReviews(product.id)
            const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

            return (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {product.category}
                      </Badge>
                    </div>
                    {product.isNew && (
                      <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold">₹{product.price}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-muted-foreground line-through">
                          ₹{product.originalPrice}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{avgRating.toFixed(1)}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {reviews.length} reviews
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Product Details Dialog */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProduct.name}</DialogTitle>
                  <DialogDescription>Product details and reviews</DialogDescription>
                </DialogHeader>
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name}
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Product Information</h3>
                        <div className="space-y-2 text-sm">
                          <p><strong>Category:</strong> {selectedProduct.category}</p>
                          <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
                          {selectedProduct.originalPrice && (
                            <p><strong>Original Price:</strong> ₹{selectedProduct.originalPrice}</p>
                          )}
                          <p><strong>Stock:</strong> {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}</p>
                          {selectedProduct.tags && (
                            <p><strong>Tags:</strong> {selectedProduct.tags.join(', ')}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Description</h3>
                        <p className="text-sm text-muted-foreground">{selectedProduct.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Reviews Section */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Reviews ({getProductReviews(selectedProduct.id).length})
                    </h3>
                    <div className="space-y-4 max-h-60 overflow-y-auto">
                      {getProductReviews(selectedProduct.id).map((review) => (
                        <div key={review.id} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p className="font-medium">{review.userName}</p>
                              <div className="flex items-center gap-1">
                                {[1,2,3,4,5].map((star) => (
                                  <Star 
                                    key={star} 
                                    className={`h-4 w-4 ${
                                      star <= review.rating 
                                        ? 'fill-yellow-400 text-yellow-400' 
                                        : 'text-gray-300'
                                    }`} 
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground">{review.date}</p>
                              {review.verified && (
                                <Badge variant="outline" className="text-xs">Verified</Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-sm">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default AdminProducts