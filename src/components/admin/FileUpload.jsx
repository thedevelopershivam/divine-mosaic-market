
import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Upload, X, Image as ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FileUpload({
  value,
  onChange,
  onRemove,
  accept = "image/*",
  className,
  label = "Upload Image"
}) {
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0])
    }
  }

  const handleFiles = (file) => {
    // In a real application, you would upload the file to your server or cloud storage
    // For now, we'll create a local URL for preview
    const url = URL.createObjectURL(file)
    onChange(url)
  }

  const openFileDialog = () => {
    inputRef.current?.click()
  }

  return (
    <div className={cn("space-y-2", className)}>
      {label && <Label>{label}</Label>}
      
      {value ? (
        <Card className="relative overflow-hidden">
          <CardContent className="p-4">
            <div className="relative">
              <img
                src={value}
                alt="Uploaded file"
                className="w-full h-32 object-cover rounded-md"
              />
              <Button
                type="button"
                onClick={onRemove}
                size="sm"
                variant="destructive"
                className="absolute top-2 right-2"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card
          className={cn(
            "border-2 border-dashed cursor-pointer transition-colors hover:bg-muted/50",
            dragActive && "border-primary bg-primary/10"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={openFileDialog}
        >
          <CardContent className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4">
              <ImageIcon className="h-12 w-12 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-muted-foreground">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
            <Button type="button" variant="outline" className="mt-4">
              <Upload className="mr-2 h-4 w-4" />
              Choose File
            </Button>
          </CardContent>
        </Card>
      )}
      
      <input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        accept={accept}
        className="hidden"
      />
    </div>
  )
}
