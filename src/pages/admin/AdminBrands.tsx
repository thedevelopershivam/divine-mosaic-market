import { useState } from 'react'
import { AdminLayout } from '@/components/admin/AdminLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { FileUpload } from '@/components/admin/FileUpload'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Plus, MoreHorizontal, Edit, Trash2, Eye, ExternalLink } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Brand } from '@/types/admin'

const mockBrands: Brand[] = [
  {
    id: '1',
    name: 'Sacred Stones Co.',
    description: 'Premium healing crystals and spiritual tools',
    logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    website: 'https://sacredstones.com',
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T15:30:00Z'
  }
]

interface BrandFormData {
  name: string
  description: string
  logo: string
  website: string
  isActive: boolean
}

const initialFormData: BrandFormData = {
  name: '',
  description: '',
  logo: '',
  website: '',
  isActive: true
}

export default function AdminBrands() {
  const [brands, setBrands] = useState<Brand[]>(mockBrands)
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isViewOpen, setIsViewOpen] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null)
  const [formData, setFormData] = useState<BrandFormData>(initialFormData)
  const { toast } = useToast()

  const handleCreate = () => {
    const newBrand: Brand = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    setBrands([...brands, newBrand])
    setFormData(initialFormData)
    setIsCreateOpen(false)
    toast({
      title: "Success",
      description: "Brand created successfully",
    })
  }

  const handleEdit = () => {
    if (!selectedBrand) return
    
    const updatedBrands = brands.map(brand => 
      brand.id === selectedBrand.id 
        ? { ...brand, ...formData, updatedAt: new Date().toISOString() }
        : brand
    )
    setBrands(updatedBrands)
    setIsEditOpen(false)
    setSelectedBrand(null)
    toast({
      title: "Success",
      description: "Brand updated successfully",
    })
  }

  const handleDelete = (brandId: string) => {
    setBrands(brands.filter(brand => brand.id !== brandId))
    toast({
      title: "Success",
      description: "Brand deleted successfully",
    })
  }

  const openEdit = (brand: Brand) => {
    setSelectedBrand(brand)
    setFormData({
      name: brand.name,
      description: brand.description,
      logo: brand.logo || '',
      website: brand.website || '',
      isActive: brand.isActive
    })
    setIsEditOpen(true)
  }

  const openView = (brand: Brand) => {
    setSelectedBrand(brand)
    setIsViewOpen(true)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Brands</h1>
            <p className="text-muted-foreground">
              Manage product brands and manufacturers
            </p>
          </div>
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Brand
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Brand</DialogTitle>
                <DialogDescription>
                  Add a new brand to your store.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Brand Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Brand name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brand description"
                    rows={3}
                  />
                </div>
                <FileUpload
                  value={formData.logo}
                  onChange={(url) => setFormData({ ...formData, logo: url })}
                  onRemove={() => setFormData({ ...formData, logo: '' })}
                  label="Brand Logo"
                />
                <div className="space-y-2">
                  <Label htmlFor="website">Website URL</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://example.com"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="isActive"
                    checked={formData.isActive}
                    onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                  />
                  <Label htmlFor="isActive">Active</Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreate}>Create Brand</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Brands</CardTitle>
            <CardDescription>
              A list of all brands in your store.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Logo</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Website</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {brands.map((brand) => (
                  <TableRow key={brand.id}>
                    <TableCell>
                      {brand.logo ? (
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">No Logo</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{brand.name}</TableCell>
                    <TableCell className="max-w-xs truncate">{brand.description}</TableCell>
                    <TableCell>
                      {brand.website ? (
                        <a
                          href={brand.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-primary hover:underline"
                        >
                          <span className="truncate max-w-[100px]">{brand.website}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="text-muted-foreground">No website</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={brand.isActive ? "default" : "secondary"}>
                        {brand.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => openView(brand)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => openEdit(brand)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(brand.id)}
                            className="text-destructive"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Edit Dialog */}
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Brand</DialogTitle>
              <DialogDescription>
                Update the brand information.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Brand Name</Label>
                <Input
                  id="edit-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Brand name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brand description"
                  rows={3}
                />
              </div>
              <FileUpload
                value={formData.logo}
                onChange={(url) => setFormData({ ...formData, logo: url })}
                onRemove={() => setFormData({ ...formData, logo: '' })}
                label="Brand Logo"
              />
              <div className="space-y-2">
                <Label htmlFor="edit-website">Website URL</Label>
                <Input
                  id="edit-website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://example.com"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="edit-isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                />
                <Label htmlFor="edit-isActive">Active</Label>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleEdit}>Update Brand</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* View Dialog */}
        <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Brand Details</DialogTitle>
              <DialogDescription>
                View brand information.
              </DialogDescription>
            </DialogHeader>
            {selectedBrand && (
              <div className="space-y-4">
                {selectedBrand.logo && (
                  <div>
                    <Label>Logo</Label>
                    <img
                      src={selectedBrand.logo}
                      alt={selectedBrand.name}
                      className="w-32 h-32 object-cover rounded-md mt-2"
                    />
                  </div>
                )}
                <div>
                  <Label>Name</Label>
                  <p className="mt-1 text-sm">{selectedBrand.name}</p>
                </div>
                <div>
                  <Label>Description</Label>
                  <p className="mt-1 text-sm">{selectedBrand.description}</p>
                </div>
                {selectedBrand.website && (
                  <div>
                    <Label>Website</Label>
                    <a
                      href={selectedBrand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-sm text-primary hover:underline block"
                    >
                      {selectedBrand.website}
                    </a>
                  </div>
                )}
                <div>
                  <Label>Status</Label>
                  <div className="mt-1">
                    <Badge variant={selectedBrand.isActive ? "default" : "secondary"}>
                      {selectedBrand.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                </div>
                <div>
                  <Label>Created At</Label>
                  <p className="mt-1 text-sm">{new Date(selectedBrand.createdAt).toLocaleString()}</p>
                </div>
                <div>
                  <Label>Updated At</Label>
                  <p className="mt-1 text-sm">{new Date(selectedBrand.updatedAt).toLocaleString()}</p>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsViewOpen(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  )
}