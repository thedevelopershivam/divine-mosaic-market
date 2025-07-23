import { useState } from 'react'
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
    const settings = formData[page]
    if (!settings) return

    try {
      await updateSEOSettings({
        id: settings.id,
        data: {
          title: settings.title,
          description: settings.description,
          keywords: settings.keywords,
          ogTitle: settings.ogTitle,
          ogDescription: settings.ogDescription,
          ogImage: settings.ogImage
        }
      }).unwrap()
      toast({ title: `SEO settings updated for ${page} page` })
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to update SEO settings', variant: 'destructive' })
    }
  }

  const updateFormData = (page: string, field: keyof SEOSettings, value: string) => {
    setFormData(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        [field]: value
      }
    }))
  }

  if (isLoading) {
    return <div>Loading SEO settings...</div>
  }

  const pages = [
    { key: 'home', label: 'Home Page', icon: '🏠' },
    { key: 'products', label: 'Products', icon: '🛍️' },
    { key: 'categories', label: 'Categories', icon: '📂' },
    { key: 'about', label: 'About Us', icon: 'ℹ️' },
    { key: 'contact', label: 'Contact', icon: '📞' }
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            <div>
              <CardTitle>SEO Management</CardTitle>
              <CardDescription>Manage SEO settings for different pages</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="home" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              {pages.map(page => (
                <TabsTrigger key={page.key} value={page.key} className="flex items-center gap-2">
                  <span>{page.icon}</span>
                  <span className="hidden sm:inline">{page.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {pages.map(page => {
              const settings = formData[page.key]
              if (!settings) return null

              return (
                <TabsContent key={page.key} value={page.key} className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span>{page.icon}</span>
                        {page.label} SEO Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor={`${page.key}-title`}>Page Title</Label>
                        <Input
                          id={`${page.key}-title`}
                          value={settings.title}
                          onChange={(e) => updateFormData(page.key, 'title', e.target.value)}
                          placeholder="Enter page title"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Recommended: 50-60 characters
                        </p>
                      </div>

                      <div>
                        <Label htmlFor={`${page.key}-description`}>Meta Description</Label>
                        <Textarea
                          id={`${page.key}-description`}
                          value={settings.description}
                          onChange={(e) => updateFormData(page.key, 'description', e.target.value)}
                          placeholder="Enter meta description"
                          rows={3}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Recommended: 150-160 characters
                        </p>
                      </div>

                      <div>
                        <Label htmlFor={`${page.key}-keywords`}>Keywords</Label>
                        <Input
                          id={`${page.key}-keywords`}
                          value={settings.keywords}
                          onChange={(e) => updateFormData(page.key, 'keywords', e.target.value)}
                          placeholder="keyword1, keyword2, keyword3"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Comma-separated keywords
                        </p>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-4">Open Graph Settings</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor={`${page.key}-og-title`}>OG Title</Label>
                            <Input
                              id={`${page.key}-og-title`}
                              value={settings.ogTitle || ''}
                              onChange={(e) => updateFormData(page.key, 'ogTitle', e.target.value)}
                              placeholder="Open Graph title (optional)"
                            />
                          </div>

                          <div>
                            <Label htmlFor={`${page.key}-og-description`}>OG Description</Label>
                            <Textarea
                              id={`${page.key}-og-description`}
                              value={settings.ogDescription || ''}
                              onChange={(e) => updateFormData(page.key, 'ogDescription', e.target.value)}
                              placeholder="Open Graph description (optional)"
                              rows={2}
                            />
                          </div>

                          <div>
                            <Label htmlFor={`${page.key}-og-image`}>OG Image URL</Label>
                            <Input
                              id={`${page.key}-og-image`}
                              value={settings.ogImage || ''}
                              onChange={(e) => updateFormData(page.key, 'ogImage', e.target.value)}
                              placeholder="https://example.com/image.jpg"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end pt-4">
                        <Button 
                          onClick={() => handleSubmit(page.key)}
                          className="flex items-center gap-2"
                        >
                          <Save className="h-4 w-4" />
                          Save {page.label} SEO
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )
            })}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}