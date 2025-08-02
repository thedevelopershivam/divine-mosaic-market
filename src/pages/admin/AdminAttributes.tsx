import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Edit, Trash2, X } from "lucide-react"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { Attribute } from "@/types/admin"

export default function AdminAttributes() {
  const [attributes, setAttributes] = useState<Attribute[]>([
    {
      id: "1",
      name: "Material",
      type: "select",
      values: ["Silver", "Gold", "Rose Gold", "Copper"],
      isRequired: true,
      isFilterable: true,
      sortOrder: 1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    },
    {
      id: "2",
      name: "Weight",
      type: "number", 
      isRequired: false,
      isFilterable: true,
      sortOrder: 2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    }
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingAttribute, setEditingAttribute] = useState<Attribute | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    type: "text" as Attribute["type"],
    values: [] as string[],
    isRequired: false,
    isFilterable: false,
    sortOrder: 1
  })
  const [newValue, setNewValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingAttribute) {
      setAttributes(attributes.map(attr => 
        attr.id === editingAttribute.id 
          ? { ...attr, ...formData, updatedAt: new Date().toISOString() }
          : attr
      ))
    } else {
      const newAttribute: Attribute = {
        id: Math.random().toString(36).substr(2, 9),
        ...formData,
        values: formData.type === "select" ? formData.values : undefined,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      setAttributes([...attributes, newAttribute])
    }
    
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      name: "",
      type: "text",
      values: [],
      isRequired: false,
      isFilterable: false,
      sortOrder: 1
    })
    setNewValue("")
    setEditingAttribute(null)
    setIsDialogOpen(false)
  }

  const handleEdit = (attribute: Attribute) => {
    setEditingAttribute(attribute)
    setFormData({
      name: attribute.name,
      type: attribute.type,
      values: attribute.values || [],
      isRequired: attribute.isRequired,
      isFilterable: attribute.isFilterable,
      sortOrder: attribute.sortOrder
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setAttributes(attributes.filter(attr => attr.id !== id))
  }

  const addValue = () => {
    if (newValue.trim()) {
      setFormData(prev => ({
        ...prev,
        values: [...prev.values, newValue.trim()]
      }))
      setNewValue("")
    }
  }

  const removeValue = (index: number) => {
    setFormData(prev => ({
      ...prev,
      values: prev.values.filter((_, i) => i !== index)
    }))
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Attributes Management</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => resetForm()}>
                <Plus className="mr-2 h-4 w-4" />
                Add Attribute
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>{editingAttribute ? "Edit Attribute" : "Add New Attribute"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Attribute Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="type">Type</Label>
                  <Select 
                    value={formData.type} 
                    onValueChange={(value: Attribute["type"]) => setFormData(prev => ({ ...prev, type: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Text</SelectItem>
                      <SelectItem value="select">Select</SelectItem>
                      <SelectItem value="number">Number</SelectItem>
                      <SelectItem value="boolean">Boolean</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.type === "select" && (
                  <div>
                    <Label>Values</Label>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Input
                          value={newValue}
                          onChange={(e) => setNewValue(e.target.value)}
                          placeholder="Add a value"
                          onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addValue())}
                        />
                        <Button type="button" onClick={addValue}>Add</Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {formData.values.map((value, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center gap-1">
                            {value}
                            <X className="h-3 w-3 cursor-pointer" onClick={() => removeValue(index)} />
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="sortOrder">Sort Order</Label>
                  <Input
                    id="sortOrder"
                    type="number"
                    value={formData.sortOrder}
                    onChange={(e) => setFormData(prev => ({ ...prev, sortOrder: parseInt(e.target.value) || 1 }))}
                    min="1"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="isRequired"
                      checked={formData.isRequired}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isRequired: checked }))}
                    />
                    <Label htmlFor="isRequired">Required</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="isFilterable"
                      checked={formData.isFilterable}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isFilterable: checked }))}
                    />
                    <Label htmlFor="isFilterable">Filterable</Label>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">
                    {editingAttribute ? "Update Attribute" : "Add Attribute"}
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
            <CardTitle>All Attributes ({attributes.length})</CardTitle>
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
                  <TableHead>Sort Order</TableHead>
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
                    <TableCell>
                      {attribute.values && (
                        <div className="flex flex-wrap gap-1">
                          {attribute.values.slice(0, 3).map((value, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {value}
                            </Badge>
                          ))}
                          {attribute.values.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{attribute.values.length - 3} more
                            </Badge>
                          )}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={attribute.isRequired ? "default" : "secondary"}>
                        {attribute.isRequired ? "Yes" : "No"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={attribute.isFilterable ? "default" : "secondary"}>
                        {attribute.isFilterable ? "Yes" : "No"}
                      </Badge>
                    </TableCell>
                    <TableCell>{attribute.sortOrder}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(attribute)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(attribute.id)}>
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