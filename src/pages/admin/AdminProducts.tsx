import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Edit, Trash2, Image, DollarSign } from "lucide-react"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { FileUpload } from "@/components/admin/FileUpload"
import { AdminProduct } from "@/types/admin"

export default function AdminProducts() {
  const [products, setProducts] = useState<AdminProduct[]>([
    {
      id: "1",
      name: "Clear Quartz Crystal Point",
      description: "A beautiful clear quartz crystal point perfect for meditation and energy healing. This natural crystal amplifies energy and promotes clarity of mind.",
      shortDescription: "Clear quartz crystal point for meditation and healing",
      sku: "CQ-001",
      price: 24.99,
      salePrice: 19.99,
      images: ["/api/placeholder/400/400"],
      categoryId: "crystals",
      brandId: "natural-gems",
      tags: ["healing", "meditation", "quartz"],
      attributes: {
        material: "Natural Quartz",
        weight: "50g",
        size: "2-3 inches"
      },
      stock: 15,
      minStock: 5,
      weight: 50,
      dimensions: {
        length: 7.5,
        width: 2.5,
        height: 2.5
      },
      status: "active",
      isFeatured: true,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    }
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<AdminProduct | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    shortDescription: "",
    sku: "",
    price: 0,
    salePrice: 0,
    images: [] as string[],
    categoryId: "",
    subCategoryId: "",
    brandId: "",
    tags: [] as string[],
    attributes: {} as Record<string, any>,
    stock: 0,
    minStock: 0,
    weight: 0,
    dimensions: {
      length: 0,
      width: 0,
      height: 0
    },
    status: "active" as AdminProduct["status"],
    isFeatured: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingProduct) {
      setProducts(products.map(product => 
        product.id === editingProduct.id 
          ? { ...product, ...formData, updatedAt: new Date().toISOString() }
          : product
      ))
    } else {
      const newProduct: AdminProduct = {
        id: Math.random().toString(36).substr(2, 9),
        ...formData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      setProducts([...products, newProduct])
    }
    
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      shortDescription: "",
      sku: "",
      price: 0,
      salePrice: 0,
      images: [],
      categoryId: "",
      subCategoryId: "",
      brandId: "",
      tags: [],
      attributes: {},
      stock: 0,
      minStock: 0,
      weight: 0,
      dimensions: { length: 0, width: 0, height: 0 },
      status: "active",
      isFeatured: false
    })
    setEditingProduct(null)
    setIsDialogOpen(false)
  }

  const handleEdit = (product: AdminProduct) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      shortDescription: product.shortDescription,
      sku: product.sku,
      price: product.price,
      salePrice: product.salePrice || 0,
      images: product.images,
      categoryId: product.categoryId,
      subCategoryId: product.subCategoryId || "",
      brandId: product.brandId || "",
      tags: product.tags,
      attributes: product.attributes,
      stock: product.stock,
      minStock: product.minStock,
      weight: product.weight || 0,
      dimensions: product.dimensions || { length: 0, width: 0, height: 0 },
      status: product.status,
      isFeatured: product.isFeatured
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setProducts(products.filter(product => product.id !== id))
  }

  const addImage = (url: string) => {
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, url]
    }))
  }

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Products Management</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => resetForm()}>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Basic Information</h3>
                    
                    <div>
                      <Label htmlFor="name">Product Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="sku">SKU</Label>
                      <Input
                        id="sku"
                        value={formData.sku}
                        onChange={(e) => setFormData(prev => ({ ...prev, sku: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="shortDescription">Short Description</Label>
                      <Textarea
                        id="shortDescription"
                        value={formData.shortDescription}
                        onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
                        rows={2}
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Full Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Pricing & Inventory */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Pricing & Inventory</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          type="number"
                          step="0.01"
                          value={formData.price}
                          onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="salePrice">Sale Price</Label>
                        <Input
                          id="salePrice"
                          type="number"
                          step="0.01"
                          value={formData.salePrice}
                          onChange={(e) => setFormData(prev => ({ ...prev, salePrice: parseFloat(e.target.value) || 0 }))}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="stock">Stock Quantity</Label>
                        <Input
                          id="stock"
                          type="number"
                          value={formData.stock}
                          onChange={(e) => setFormData(prev => ({ ...prev, stock: parseInt(e.target.value) || 0 }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="minStock">Minimum Stock</Label>
                        <Input
                          id="minStock"
                          type="number"
                          value={formData.minStock}
                          onChange={(e) => setFormData(prev => ({ ...prev, minStock: parseInt(e.target.value) || 0 }))}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select 
                        value={formData.status} 
                        onValueChange={(value: AdminProduct["status"]) => setFormData(prev => ({ ...prev, status: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                          <SelectItem value="draft">Draft</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="isFeatured"
                        checked={formData.isFeatured}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isFeatured: checked }))}
                      />
                      <Label htmlFor="isFeatured">Featured Product</Label>
                    </div>
                  </div>
                </div>

                {/* Images */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Product Images</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative">
                        <img src={image} alt="" className="w-full h-32 object-cover rounded" />
                        <Button
                          type="button"
                          size="sm"
                          variant="destructive"
                          className="absolute top-2 right-2"
                          onClick={() => removeImage(index)}
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                    <FileUpload
                      value=""
                      onChange={addImage}
                      onRemove={() => {}}
                      label=""
                      className="h-32"
                    />
                  </div>
                </div>

                {/* Physical Properties */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Physical Properties</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="weight">Weight (g)</Label>
                      <Input
                        id="weight"
                        type="number"
                        value={formData.weight}
                        onChange={(e) => setFormData(prev => ({ ...prev, weight: parseFloat(e.target.value) || 0 }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="length">Length (cm)</Label>
                      <Input
                        id="length"
                        type="number"
                        step="0.1"
                        value={formData.dimensions.length}
                        onChange={(e) => setFormData(prev => ({ 
                          ...prev, 
                          dimensions: { ...prev.dimensions, length: parseFloat(e.target.value) || 0 }
                        }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="width">Width (cm)</Label>
                      <Input
                        id="width"
                        type="number"
                        step="0.1"
                        value={formData.dimensions.width}
                        onChange={(e) => setFormData(prev => ({ 
                          ...prev, 
                          dimensions: { ...prev.dimensions, width: parseFloat(e.target.value) || 0 }
                        }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input
                        id="height"
                        type="number"
                        step="0.1"
                        value={formData.dimensions.height}
                        onChange={(e) => setFormData(prev => ({ 
                          ...prev, 
                          dimensions: { ...prev.dimensions, height: parseFloat(e.target.value) || 0 }
                        }))}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">
                    {editingProduct ? "Update Product" : "Create Product"}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Products ({products.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        {product.images[0] ? (
                          <img src={product.images[0]} alt="" className="w-12 h-12 object-cover rounded" />
                        ) : (
                          <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                            <Image className="h-6 w-6" />
                          </div>
                        )}
                        <div>
                          <div className="font-medium">{product.name}</div>
                          {product.isFeatured && <Badge className="text-xs">Featured</Badge>}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.sku}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span className={product.salePrice ? "line-through text-muted-foreground" : ""}>
                          {product.price}
                        </span>
                        {product.salePrice && (
                          <span className="text-green-600 font-medium">
                            ${product.salePrice}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={product.stock <= product.minStock ? "destructive" : "secondary"}>
                        {product.stock}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          product.status === "active" ? "default" : 
                          product.status === "inactive" ? "destructive" : 
                          "secondary"
                        }
                      >
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(product.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(product)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(product.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}