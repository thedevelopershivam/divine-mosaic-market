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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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
import { Plus, MoreHorizontal, Edit, Trash2, Eye } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { SubCategory, Category } from '@/types/admin'

const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Crystals & Gemstones',
    description: 'Healing crystals and precious gemstones',
    isActive: true,
    sortOrder: 1,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T15:30:00Z'
  }
]

const mockSubCategories: SubCategory[] = [
  {
    id: '1',
    name: 'Healing Crystals',
    description: 'Crystals for healing and wellness',
    categoryId: '1',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176',
    isActive: true,
    sortOrder: 1,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T15:30:00Z'
  }
]

interface SubCategoryFormData {
  name: string
  description: string
  categoryId: string
  image: string
  isActive: boolean
  sortOrder: number
}

const initialFormData: SubCategoryFormData = {
  name: '',
  description: '',
  categoryId: '',
  image: '',
  isActive: true,
  sortOrder: 0
}

export default function AdminSubCategories() {
  const [subCategories, setSubCategories] = useState<SubCategory[]>(mockSubCategories)
  const [categories] = useState<Category[]>(mockCategories)
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isViewOpen, setIsViewOpen] = useState(false)
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null)
  const [formData, setFormData] = useState<SubCategoryFormData>(initialFormData)
  const { toast } = useToast()

  const handleCreate = () => {
    const newSubCategory: SubCategory = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    setSubCategories([...subCategories, newSubCategory])
    setFormData(initialFormData)
    setIsCreateOpen(false)
    toast({
      title: "Success",
      description: "Sub category created successfully",
    })
  }

  const handleEdit = () => {
    if (!selectedSubCategory) return
    
    const updatedSubCategories = subCategories.map(subCat => 
      subCat.id === selectedSubCategory.id 
        ? { ...subCat, ...formData, updatedAt: new Date().toISOString() }
        : subCat
    )
    setSubCategories(updatedSubCategories)
    setIsEditOpen(false)
    setSelectedSubCategory(null)
    toast({
      title: "Success",
      description: "Sub category updated successfully",
    })
  }

  const handleDelete = (subCategoryId: string) => {
    setSubCategories(subCategories.filter(subCat => subCat.id !== subCategoryId))
    toast({
      title: "Success",
      description: "Sub category deleted successfully",
    })
  }

  const openEdit = (subCategory: SubCategory) => {
    setSelectedSubCategory(subCategory)
    setFormData({
      name: subCategory.name,
      description: subCategory.description,
      categoryId: subCategory.categoryId,
      image: subCategory.image || '',
      isActive: subCategory.isActive,
      sortOrder: subCategory.sortOrder
    })
    setIsEditOpen(true)
  }

  const openView = (subCategory: SubCategory) => {
    setSelectedSubCategory(subCategory)
    setIsViewOpen(true)
  }

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category?.name || 'Unknown'
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Sub Categories</h1>
            <p className="text-muted-foreground">
              Manage your product sub categories
            </p>
          </div>
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Sub Category
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Sub Category</DialogTitle>
                <DialogDescription>
                  Add a new sub category under an existing category.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Sub category name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Parent Category</Label>
                  <Select value={formData.categoryId} onValueChange={(value) => setFormData({ ...formData, categoryId: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Sub category description"
                    rows={3}
                  />
                </div>
                <FileUpload
                  value={formData.image}
                  onChange={(url) => setFormData({ ...formData, image: url })}
                  onRemove={() => setFormData({ ...formData, image: '' })}
                  label="Sub Category Image"
                />
                <div className="flex items-center space-x-2">
                  <Switch
                    id="isActive"
                    checked={formData.isActive}
                    onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                  />
                  <Label htmlFor="isActive">Active</Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sortOrder">Sort Order</Label>
                  <Input
                    id="sortOrder"
                    type="number"
                    value={formData.sortOrder}
                    onChange={(e) => setFormData({ ...formData, sortOrder: parseInt(e.target.value) || 0 })}
                    placeholder="0"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreate}>Create Sub Category</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Sub Categories</CardTitle>
            <CardDescription>
              A list of all sub categories in your store.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Parent Category</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Sort Order</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subCategories.map((subCategory) => (
                  <TableRow key={subCategory.id}>
                    <TableCell>
                      {subCategory.image ? (
                        <img
                          src={subCategory.image}
                          alt={subCategory.name}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-muted rounded-md" />
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{subCategory.name}</TableCell>
                    <TableCell>{getCategoryName(subCategory.categoryId)}</TableCell>
                    <TableCell className="max-w-xs truncate">{subCategory.description}</TableCell>
                    <TableCell>
                      <Badge variant={subCategory.isActive ? "default" : "secondary"}>
                        {subCategory.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>{subCategory.sortOrder}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => openView(subCategory)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => openEdit(subCategory)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(subCategory.id)}
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

        {/* Edit and View dialogs - similar structure to categories */}
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Sub Category</DialogTitle>
            </DialogHeader>
            {/* Edit form content similar to create form */}
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditOpen(false)}>Cancel</Button>
              <Button onClick={handleEdit}>Update Sub Category</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Sub Category Details</DialogTitle>
            </DialogHeader>
            {/* View content */}
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsViewOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  )
}