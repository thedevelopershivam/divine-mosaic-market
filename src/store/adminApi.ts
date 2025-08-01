// Simple mock API without RTK Query to avoid TypeScript internal errors
export interface Category {
  id: string
  name: string
  description: string
  image: string
  parentId?: string
  isActive: boolean
  sortOrder: number
  seoTitle?: string
  seoDescription?: string
  createdAt: string
  updatedAt: string
}

export interface Attribute {
  id: string
  name: string
  type: 'text' | 'select'
  values?: string[]
  isRequired: boolean
  isFilterable: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface Coupon {
  id: string
  code: string
  type: 'percentage' | 'fixed'
  value: number
  minOrderValue?: number
  maxDiscount?: number
  usageLimit?: number
  usedCount: number
  isActive: boolean
  validFrom: string
  validTo: string
  createdAt: string
  updatedAt: string
}

export interface SEOSettings {
  id: string
  page: string
  title: string
  description: string
  keywords: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  updatedAt: string
}

// Mock data
const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Crystals & Gemstones',
    description: 'Healing crystals and precious gemstones',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176',
    isActive: true,
    sortOrder: 1,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T15:30:00Z'
  }
]

const mockAttributes: Attribute[] = [
  {
    id: '1',
    name: 'Color',
    type: 'select',
    values: ['Clear', 'Purple', 'Pink'],
    isRequired: false,
    isFilterable: true,
    sortOrder: 1,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T15:30:00Z'
  }
]

const mockCoupons: Coupon[] = [
  {
    id: '1',
    code: 'WELCOME20',
    type: 'percentage',
    value: 20,
    usedCount: 45,
    isActive: true,
    validFrom: '2024-01-01T00:00:00Z',
    validTo: '2024-12-31T23:59:59Z',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T15:30:00Z'
  }
]

const mockSEOSettings: SEOSettings[] = [
  {
    id: '1',
    page: 'home',
    title: 'Spiritual Shop | Premium Crystals & Sacred Items',
    description: 'Discover authentic spiritual products for your journey',
    keywords: 'spiritual shop, healing crystals, meditation tools',
    updatedAt: '2024-01-20T15:30:00Z'
  }
]

// Simple hooks that simulate the RTK Query API
export const useGetCategoriesQuery = () => ({
  data: mockCategories,
  isLoading: false,
  error: null
})

export const useCreateCategoryMutation = () => {
  const mutate = (newCategory: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>) => {
    const category: Category = {
      id: Date.now().toString(),
      ...newCategory,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    mockCategories.push(category)
    return Promise.resolve({ data: category })
  }
  return [mutate, { isLoading: false }]
}

export const useUpdateCategoryMutation = () => {
  const mutate = ({ id, data }: { id: string; data: Partial<Category> }) => {
    const index = mockCategories.findIndex(cat => cat.id === id)
    if (index !== -1) {
      mockCategories[index] = { ...mockCategories[index], ...data, updatedAt: new Date().toISOString() }
      return Promise.resolve({ data: mockCategories[index] })
    }
    return Promise.reject(new Error('Category not found'))
  }
  return [mutate, { isLoading: false }]
}

export const useDeleteCategoryMutation = () => {
  const mutate = (id: string) => {
    const index = mockCategories.findIndex(cat => cat.id === id)
    if (index !== -1) {
      mockCategories.splice(index, 1)
      return Promise.resolve({ data: undefined })
    }
    return Promise.reject(new Error('Category not found'))
  }
  return [mutate, { isLoading: false }]
}

export const useGetAttributesQuery = () => ({
  data: mockAttributes,
  isLoading: false,
  error: null
})

export const useCreateAttributeMutation = () => {
  const mutate = (newAttribute: Omit<Attribute, 'id' | 'createdAt' | 'updatedAt'>) => {
    const attribute: Attribute = {
      id: Date.now().toString(),
      ...newAttribute,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    mockAttributes.push(attribute)
    return Promise.resolve({ data: attribute })
  }
  return [mutate, { isLoading: false }]
}

export const useUpdateAttributeMutation = () => {
  const mutate = ({ id, data }: { id: string; data: Partial<Attribute> }) => {
    const index = mockAttributes.findIndex(attr => attr.id === id)
    if (index !== -1) {
      mockAttributes[index] = { ...mockAttributes[index], ...data, updatedAt: new Date().toISOString() }
      return Promise.resolve({ data: mockAttributes[index] })
    }
    return Promise.reject(new Error('Attribute not found'))
  }
  return [mutate, { isLoading: false }]
}

export const useDeleteAttributeMutation = () => {
  const mutate = (id: string) => {
    const index = mockAttributes.findIndex(attr => attr.id === id)
    if (index !== -1) {
      mockAttributes.splice(index, 1)
      return Promise.resolve({ data: undefined })
    }
    return Promise.reject(new Error('Attribute not found'))
  }
  return [mutate, { isLoading: false }]
}

export const useGetCouponsQuery = () => ({
  data: mockCoupons,
  isLoading: false,
  error: null
})

export const useCreateCouponMutation = () => {
  const mutate = (newCoupon: Omit<Coupon, 'id' | 'usedCount' | 'createdAt' | 'updatedAt'>) => {
    const coupon: Coupon = {
      id: Date.now().toString(),
      usedCount: 0,
      ...newCoupon,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    mockCoupons.push(coupon)
    return Promise.resolve({ data: coupon })
  }
  return [mutate, { isLoading: false }]
}

export const useUpdateCouponMutation = () => {
  const mutate = ({ id, data }: { id: string; data: Partial<Coupon> }) => {
    const index = mockCoupons.findIndex(coupon => coupon.id === id)
    if (index !== -1) {
      mockCoupons[index] = { ...mockCoupons[index], ...data, updatedAt: new Date().toISOString() }
      return Promise.resolve({ data: mockCoupons[index] })
    }
    return Promise.reject(new Error('Coupon not found'))
  }
  return [mutate, { isLoading: false }]
}

export const useDeleteCouponMutation = () => {
  const mutate = (id: string) => {
    const index = mockCoupons.findIndex(coupon => coupon.id === id)
    if (index !== -1) {
      mockCoupons.splice(index, 1)
      return Promise.resolve({ data: undefined })
    }
    return Promise.reject(new Error('Coupon not found'))
  }
  return [mutate, { isLoading: false }]
}

export const useGetSEOSettingsQuery = () => ({
  data: mockSEOSettings,
  isLoading: false,
  error: null
})

export const useUpdateSEOSettingsMutation = () => {
  const mutate = ({ id, data }: { id: string; data: Partial<SEOSettings> }) => {
    const index = mockSEOSettings.findIndex(seo => seo.id === id)
    if (index !== -1) {
      mockSEOSettings[index] = { ...mockSEOSettings[index], ...data, updatedAt: new Date().toISOString() }
      return Promise.resolve({ data: mockSEOSettings[index] })
    }
    return Promise.reject(new Error('SEO settings not found'))
  }
  return [mutate, { isLoading: false }]
}