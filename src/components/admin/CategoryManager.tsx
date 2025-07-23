import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useGetCategoriesQuery, useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation, Category } from '@/store/adminApi'
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function CategoryManager() {
  const { data: categories = [], isLoading } = useGetCategoriesQuery()
  const [createCategory] = useCreateCategoryMutation()
  const [updateCategory] = useUpdateCategoryMutation()
  const [deleteCategory] = useDeleteCategoryMutation()
  const { toast } = useToast()

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    seoTitle: '',
    seoDescription: '',
    isActive: true
  })

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      image: '',
      seoTitle: '',
      seoDescription: '',
      isActive: true
    })
    setEditingCategory(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (editingCategory) {
        await updateCategory({
          id: editingCategory.id,
          data: formData
        }).unwrap()
        toast({ title: 'Category updated successfully' })
      } else {
        await createCategory(formData).unwrap()
        toast({ title: 'Category created successfully' })
      }
      
      setIsDialogOpen(false)
      resetForm()
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save category', variant: 'destructive' })
    }
  }

  const handleEdit = (category: Category) => {
    setEditingCategory(category)
    setFormData({
      name: category.name,
      description: category.description,
      image: category.image,
      seoTitle: category.seoTitle || '',
      seoDescription: category.seoDescription || '',
      isActive: category.isActive
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await deleteCategory(id).unwrap()
        toast({ title: 'Category deleted successfully' })
      } catch (error) {
        toast({ title: 'Error', description: 'Failed to delete category', variant: 'destructive' })
      }
    }
  }

  const handleToggleActive = async (category: Category) => {
    try {
      await updateCategory({
        id: category.id,
        data: { isActive: !category.isActive }
      }).unwrap()
      toast({ title: `Category ${!category.isActive ? 'activated' : 'deactivated'}` })
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to update category', variant: 'destructive' })
    }
  }

  if (isLoading) {
    return <div>Loading categories...</div>
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Category Management</CardTitle>
              <CardDescription>Manage product categories and their settings</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={resetForm} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Category
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>
                    {editingCategory ? 'Edit Category' : 'Create New Category'}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Category Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="image">Image URL</Label>
                      <Input
                        id="image"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="seoTitle">SEO Title</Label>
                      <Input
                        id="seoTitle"
                        value={formData.seoTitle}
                        onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="seoDescription">SEO Description</Label>
                      <Textarea
                        id="seoDescription"
                        value={formData.seoDescription}
                        onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                        rows={2}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="isActive"
                      checked={formData.isActive}
                      onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                    />
                    <Label htmlFor="isActive">Active</Label>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingCategory ? 'Update' : 'Create'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Sort Order</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell className="max-w-xs truncate">{category.description}</TableCell>
                  <TableCell>
                    <Badge variant={category.isActive ? 'default' : 'secondary'}>
                      {category.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>{category.sortOrder}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleToggleActive(category)}
                      >
                        {category.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(category)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(category.id)}
                      >
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
  )
}