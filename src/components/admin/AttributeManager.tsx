import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useGetAttributesQuery, useCreateAttributeMutation, useUpdateAttributeMutation, useDeleteAttributeMutation, Attribute } from '@/store/adminApi'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function AttributeManager() {
  const { data: attributes = [], isLoading } = useGetAttributesQuery()
  const [createAttribute] = useCreateAttributeMutation()
  const [updateAttribute] = useUpdateAttributeMutation()
  const [deleteAttribute] = useDeleteAttributeMutation()
  const { toast } = useToast()

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingAttribute, setEditingAttribute] = useState<Attribute | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    type: 'text' as const,
    values: [] as string[],
    isRequired: false,
    isFilterable: false
  })
  const [valuesInput, setValuesInput] = useState('')

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'text',
      values: [],
      isRequired: false,
      isFilterable: false
    })
    setValuesInput('')
    setEditingAttribute(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const values = formData.type === 'select' 
      ? valuesInput.split(',').map(v => v.trim()).filter(v => v)
      : undefined

    try {
      if (editingAttribute) {
        await updateAttribute({
          id: editingAttribute.id,
          data: { ...formData, values }
        }).unwrap()
        toast({ title: 'Attribute updated successfully' })
      } else {
        await createAttribute({ ...formData, values }).unwrap()
        toast({ title: 'Attribute created successfully' })
      }
      
      setIsDialogOpen(false)
      resetForm()
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save attribute', variant: 'destructive' })
    }
  }

  const handleEdit = (attribute: Attribute) => {
    setEditingAttribute(attribute)
    setFormData({
      name: attribute.name,
      type: attribute.type,
      values: attribute.values || [],
      isRequired: attribute.isRequired,
      isFilterable: attribute.isFilterable
    })
    setValuesInput(attribute.values?.join(', ') || '')
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this attribute?')) {
      try {
        await deleteAttribute(id).unwrap()
        toast({ title: 'Attribute deleted successfully' })
      } catch (error) {
        toast({ title: 'Error', description: 'Failed to delete attribute', variant: 'destructive' })
      }
    }
  }

  if (isLoading) {
    return <div>Loading attributes...</div>
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Attribute Management</CardTitle>
              <CardDescription>Manage product attributes and their properties</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={resetForm} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Attribute
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>
                    {editingAttribute ? 'Edit Attribute' : 'Create New Attribute'}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Attribute Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">Type</Label>
                      <Select value={formData.type} onValueChange={(value: any) => setFormData({ ...formData, type: value })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="text">Text</SelectItem>
                          <SelectItem value="number">Number</SelectItem>
                          <SelectItem value="select">Select</SelectItem>
                          <SelectItem value="boolean">Boolean</SelectItem>
                          <SelectItem value="color">Color</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {formData.type === 'select' && (
                    <div>
                      <Label htmlFor="values">Values (comma-separated)</Label>
                      <Input
                        id="values"
                        value={valuesInput}
                        onChange={(e) => setValuesInput(e.target.value)}
                        placeholder="Option 1, Option 2, Option 3"
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="isRequired"
                        checked={formData.isRequired}
                        onCheckedChange={(checked) => setFormData({ ...formData, isRequired: checked })}
                      />
                      <Label htmlFor="isRequired">Required</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="isFilterable"
                        checked={formData.isFilterable}
                        onCheckedChange={(checked) => setFormData({ ...formData, isFilterable: checked })}
                      />
                      <Label htmlFor="isFilterable">Filterable</Label>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingAttribute ? 'Update' : 'Create'}
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
                <TableHead>Type</TableHead>
                <TableHead>Values</TableHead>
                <TableHead>Required</TableHead>
                <TableHead>Filterable</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attributes.map((attribute) => (
                <TableRow key={attribute.id}>
                  <TableCell className="font-medium">{attribute.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{attribute.type}</Badge>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">
                    {attribute.values?.join(', ') || '-'}
                  </TableCell>
                  <TableCell>
                    <Badge variant={attribute.isRequired ? 'default' : 'secondary'}>
                      {attribute.isRequired ? 'Yes' : 'No'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={attribute.isFilterable ? 'default' : 'secondary'}>
                      {attribute.isFilterable ? 'Yes' : 'No'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(attribute)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(attribute.id)}
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