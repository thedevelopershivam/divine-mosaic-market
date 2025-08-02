import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Edit, Trash2 } from "lucide-react"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { FileUpload } from "@/components/admin/FileUpload"
import { Language } from "@/types/admin"

export default function AdminLanguages() {
  const [languages, setLanguages] = useState<Language[]>([
    {
      id: "1",
      name: "English",
      code: "en",
      flag: "🇺🇸",
      isDefault: true,
      isActive: true,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    },
    {
      id: "2",
      name: "Spanish",
      code: "es",
      flag: "🇪🇸",
      isDefault: false,
      isActive: true,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z"
    }
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingLanguage, setEditingLanguage] = useState<Language | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    flag: "",
    isDefault: false,
    isActive: true
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingLanguage) {
      setLanguages(languages.map(lang => 
        lang.id === editingLanguage.id 
          ? { ...lang, ...formData, updatedAt: new Date().toISOString() }
          : lang
      ))
    } else {
      const newLanguage: Language = {
        id: Math.random().toString(36).substr(2, 9),
        ...formData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      setLanguages([...languages, newLanguage])
    }
    
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      name: "",
      code: "",
      flag: "",
      isDefault: false,
      isActive: true
    })
    setEditingLanguage(null)
    setIsDialogOpen(false)
  }

  const handleEdit = (language: Language) => {
    setEditingLanguage(language)
    setFormData({
      name: language.name,
      code: language.code,
      flag: language.flag || "",
      isDefault: language.isDefault,
      isActive: language.isActive
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setLanguages(languages.filter(lang => lang.id !== id))
  }

  const handleSetDefault = (id: string) => {
    setLanguages(languages.map(lang => ({
      ...lang,
      isDefault: lang.id === id
    })))
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Languages Management</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => resetForm()}>
                <Plus className="mr-2 h-4 w-4" />
                Add Language
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingLanguage ? "Edit Language" : "Add New Language"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Language Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g., English"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="code">Language Code</Label>
                  <Input
                    id="code"
                    value={formData.code}
                    onChange={(e) => setFormData(prev => ({ ...prev, code: e.target.value.toLowerCase() }))}
                    placeholder="e.g., en, es, fr"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="flag">Flag Emoji</Label>
                  <Input
                    id="flag"
                    value={formData.flag}
                    onChange={(e) => setFormData(prev => ({ ...prev, flag: e.target.value }))}
                    placeholder="e.g., 🇺🇸, 🇪🇸, 🇫🇷"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="isDefault"
                      checked={formData.isDefault}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isDefault: checked }))}
                    />
                    <Label htmlFor="isDefault">Default Language</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="isActive"
                      checked={formData.isActive}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isActive: checked }))}
                    />
                    <Label htmlFor="isActive">Active</Label>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">
                    {editingLanguage ? "Update Language" : "Add Language"}
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
            <CardTitle>All Languages ({languages.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Language</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Flag</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {languages.map((language) => (
                  <TableRow key={language.id}>
                    <TableCell className="font-medium">{language.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{language.code}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-xl">{language.flag}</span>
                    </TableCell>
                    <TableCell>
                      {language.isDefault ? (
                        <Badge>Default</Badge>
                      ) : (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleSetDefault(language.id)}
                        >
                          Set Default
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={language.isActive ? "default" : "secondary"}>
                        {language.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(language.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(language)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => handleDelete(language.id)}
                          disabled={language.isDefault}
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
    </AdminLayout>
  )
}