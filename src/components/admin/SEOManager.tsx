import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useGetSEOSettingsQuery, useUpdateSEOSettingsMutation, SEOSettings } from '@/store/adminApi'
import { Save, Search } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function SEOManager() {
  const { data: seoSettings = [], isLoading } = useGetSEOSettingsQuery()
  const [updateSEOSettings] = useUpdateSEOSettingsMutation()
  const { toast } = useToast()

  const [formData, setFormData] = useState<Record<string, SEOSettings>>({})

  // Initialize form data when SEO settings load
  React.useEffect(() => {
    if (seoSettings.length > 0) {
      const data: Record<string, SEOSettings> = {}
      seoSettings.forEach(setting => {
        data[setting.page] = setting
      })
      setFormData(data)
    }
  }, [seoSettings])

  const handleSubmit = async (page: string) => {
    try {
      const settings = formData[page]
      if (settings) {
        await updateSEOSettings({ id: settings.id, data: settings })
        toast({
          title: "Success",
          description: `SEO settings for ${page} updated successfully`,
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update SEO settings",
        variant: "destructive",
      })
    }
  }

  const updateFormData = (page: string, field: keyof SEOSettings, value: string) => {
    setFormData(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        [field]: value,
        updatedAt: new Date().toISOString()
      }
    }))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const pages = ['home', 'categories', 'products', 'about', 'contact']

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">SEO Settings</h2>
          <p className="text-muted-foreground">
            Manage SEO metadata for different pages
          </p>
        </div>
      </div>

      <Tabs defaultValue="home" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          {pages.map(page => (
            <TabsTrigger key={page} value={page} className="capitalize">
              {page}
            </TabsTrigger>
          ))}
        </TabsList>

        {pages.map(page => (
          <TabsContent key={page} value={page}>
            <Card>
              <CardHeader>
                <CardTitle className="capitalize">{page} Page SEO</CardTitle>
                <CardDescription>
                  Configure SEO settings for the {page} page
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`${page}-title`}>Page Title</Label>
                    <Input
                      id={`${page}-title`}
                      value={formData[page]?.title || ''}
                      onChange={(e) => updateFormData(page, 'title', e.target.value)}
                      placeholder="Enter page title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`${page}-description`}>Meta Description</Label>
                    <Textarea
                      id={`${page}-description`}
                      value={formData[page]?.description || ''}
                      onChange={(e) => updateFormData(page, 'description', e.target.value)}
                      placeholder="Enter meta description"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`${page}-keywords`}>Keywords</Label>
                    <Input
                      id={`${page}-keywords`}
                      value={formData[page]?.keywords || ''}
                      onChange={(e) => updateFormData(page, 'keywords', e.target.value)}
                      placeholder="Enter keywords separated by commas"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`${page}-og-title`}>Open Graph Title</Label>
                    <Input
                      id={`${page}-og-title`}
                      value={formData[page]?.ogTitle || ''}
                      onChange={(e) => updateFormData(page, 'ogTitle', e.target.value)}
                      placeholder="Enter Open Graph title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`${page}-og-description`}>Open Graph Description</Label>
                    <Textarea
                      id={`${page}-og-description`}
                      value={formData[page]?.ogDescription || ''}
                      onChange={(e) => updateFormData(page, 'ogDescription', e.target.value)}
                      placeholder="Enter Open Graph description"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`${page}-og-image`}>Open Graph Image URL</Label>
                    <Input
                      id={`${page}-og-image`}
                      value={formData[page]?.ogImage || ''}
                      onChange={(e) => updateFormData(page, 'ogImage', e.target.value)}
                      placeholder="Enter Open Graph image URL"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => handleSubmit(page)}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}