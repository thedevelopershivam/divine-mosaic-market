import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

// Simple interfaces to avoid TypeScript complexity
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
  type: string
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
  type: string
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

// Simple mock data
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

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Category', 'Attribute', 'Coupon', 'SEO'],
  endpoints: (builder) => ({
    // Categories
    getCategories: builder.query<Category[], void>({
      queryFn: () => ({ data: mockCategories }),
      providesTags: ['Category'],
    }),
    createCategory: builder.mutation({
      queryFn: (newCategory: any) => {
        const category = {
          id: Date.now().toString(),
          ...newCategory,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
        mockCategories.push(category)
        return { data: category }
      },
      invalidatesTags: ['Category'],
    }),
    updateCategory: builder.mutation({
      queryFn: ({ id, data }: any) => {
        const index = mockCategories.findIndex(cat => cat.id === id)
        if (index !== -1) {
          mockCategories[index] = { ...mockCategories[index], ...data }
          return { data: mockCategories[index] }
        }
        return { error: 'Not found' }
      },
      invalidatesTags: ['Category'],
    }),
    deleteCategory: builder.mutation({
      queryFn: (id: string) => {
        const index = mockCategories.findIndex(cat => cat.id === id)
        if (index !== -1) {
          mockCategories.splice(index, 1)
          return { data: undefined }
        }
        return { error: 'Not found' }
      },
      invalidatesTags: ['Category'],
    }),

    // Attributes
    getAttributes: builder.query<Attribute[], void>({
      queryFn: () => ({ data: mockAttributes }),
      providesTags: ['Attribute'],
    }),
    createAttribute: builder.mutation({
      queryFn: (newAttribute: any) => {
        const attribute = {
          id: Date.now().toString(),
          ...newAttribute,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
        mockAttributes.push(attribute)
        return { data: attribute }
      },
      invalidatesTags: ['Attribute'],
    }),
    updateAttribute: builder.mutation({
      queryFn: ({ id, data }: any) => {
        const index = mockAttributes.findIndex(attr => attr.id === id)
        if (index !== -1) {
          mockAttributes[index] = { ...mockAttributes[index], ...data }
          return { data: mockAttributes[index] }
        }
        return { error: 'Not found' }
      },
      invalidatesTags: ['Attribute'],
    }),
    deleteAttribute: builder.mutation({
      queryFn: (id: string) => {
        const index = mockAttributes.findIndex(attr => attr.id === id)
        if (index !== -1) {
          mockAttributes.splice(index, 1)
          return { data: undefined }
        }
        return { error: 'Not found' }
      },
      invalidatesTags: ['Attribute'],
    }),

    // Coupons
    getCoupons: builder.query<Coupon[], void>({
      queryFn: () => ({ data: mockCoupons }),
      providesTags: ['Coupon'],
    }),
    createCoupon: builder.mutation({
      queryFn: (newCoupon: any) => {
        const coupon = {
          id: Date.now().toString(),
          usedCount: 0,
          ...newCoupon,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
        mockCoupons.push(coupon)
        return { data: coupon }
      },
      invalidatesTags: ['Coupon'],
    }),
    updateCoupon: builder.mutation({
      queryFn: ({ id, data }: any) => {
        const index = mockCoupons.findIndex(coupon => coupon.id === id)
        if (index !== -1) {
          mockCoupons[index] = { ...mockCoupons[index], ...data }
          return { data: mockCoupons[index] }
        }
        return { error: 'Not found' }
      },
      invalidatesTags: ['Coupon'],
    }),
    deleteCoupon: builder.mutation({
      queryFn: (id: string) => {
        const index = mockCoupons.findIndex(coupon => coupon.id === id)
        if (index !== -1) {
          mockCoupons.splice(index, 1)
          return { data: undefined }
        }
        return { error: 'Not found' }
      },
      invalidatesTags: ['Coupon'],
    }),

    // SEO Settings
    getSEOSettings: builder.query<SEOSettings[], void>({
      queryFn: () => ({ data: mockSEOSettings }),
      providesTags: ['SEO'],
    }),
    updateSEOSettings: builder.mutation({
      queryFn: ({ id, data }: any) => {
        const index = mockSEOSettings.findIndex(seo => seo.id === id)
        if (index !== -1) {
          mockSEOSettings[index] = { ...mockSEOSettings[index], ...data }
          return { data: mockSEOSettings[index] }
        }
        return { error: 'Not found' }
      },
      invalidatesTags: ['SEO'],
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAttributesQuery,
  useCreateAttributeMutation,
  useUpdateAttributeMutation,
  useDeleteAttributeMutation,
  useGetCouponsQuery,
  useCreateCouponMutation,
  useUpdateCouponMutation,
  useDeleteCouponMutation,
  useGetSEOSettingsQuery,
  useUpdateSEOSettingsMutation,
} = adminApi