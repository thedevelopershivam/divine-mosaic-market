export interface Category {
  id: string
  name: string
  description: string
  image?: string
  parentId?: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface SubCategory {
  id: string
  name: string
  description: string
  image?: string
  categoryId: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface Brand {
  id: string
  name: string
  description: string
  logo?: string
  website?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Tag {
  id: string
  name: string
  color: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Attribute {
  id: string
  name: string
  type: 'text' | 'select' | 'number' | 'boolean'
  values?: string[]
  isRequired: boolean
  isFilterable: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface Language {
  id: string
  name: string
  code: string
  flag?: string
  isDefault: boolean
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Blog {
  id: string
  title: string
  content: string
  excerpt: string
  image?: string
  slug: string
  status: 'draft' | 'published' | 'archived'
  authorId: string
  categoryId?: string
  tags: string[]
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

export interface Country {
  id: string
  name: string
  code: string
  flag?: string
  dialCode: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Currency {
  id: string
  name: string
  code: string
  symbol: string
  exchangeRate: number
  isDefault: boolean
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Unit {
  id: string
  name: string
  abbreviation: string
  type: 'weight' | 'length' | 'volume' | 'area' | 'other'
  baseUnit?: string
  conversionFactor?: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface AdminProduct {
  id: string
  name: string
  description: string
  shortDescription: string
  sku: string
  price: number
  salePrice?: number
  images: string[]
  categoryId: string
  subCategoryId?: string
  brandId?: string
  tags: string[]
  attributes: Record<string, any>
  stock: number
  minStock: number
  weight?: number
  dimensions?: {
    length: number
    width: number
    height: number
  }
  status: 'active' | 'inactive' | 'draft'
  isFeatured: boolean
  createdAt: string
  updatedAt: string
}