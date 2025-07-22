export interface Product {
  id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  isNew?: boolean
  discount?: number
  description?: string
  inStock?: boolean
  tags?: string[]
}

export interface Category {
  id: string
  name: string
  image: string
  description: string
  productCount: number
}

export interface Review {
  id: string
  productId: string
  userName: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Amethyst Crystal Cluster Premium Grade',
    category: 'Crystals',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 124,
    isNew: true,
    description: 'Premium grade amethyst crystal cluster perfect for meditation and energy healing. This beautiful specimen radiates calming energy and promotes spiritual growth.',
    inStock: true,
    tags: ['meditation', 'healing', 'chakra']
  },
  {
    id: '2',
    name: 'Himalayan Singing Bowl Set with Mallet',
    category: 'Meditation',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 89,
    isNew: true,
    description: 'Authentic Himalayan singing bowl handcrafted by artisans. Perfect for meditation, sound healing, and creating peaceful atmospheres.',
    inStock: true,
    tags: ['meditation', 'sound-healing', 'authentic']
  },
  {
    id: '3',
    name: 'Sacred Sage Smudge Bundle - White Sage',
    category: 'Aromatherapy',
    price: 899,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 256,
    isNew: true,
    description: 'Premium white sage bundle for cleansing and purification rituals. Ethically sourced and hand-tied with natural cotton.',
    inStock: true,
    tags: ['cleansing', 'ritual', 'natural']
  },
  {
    id: '4',
    name: 'Ganesha Statue - Hand Carved Marble',
    category: 'Sacred Art',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 67,
    isNew: false,
    description: 'Beautiful hand-carved marble Ganesha statue, perfect for home temple and spiritual decoration. Symbol of wisdom and remover of obstacles.',
    inStock: true,
    tags: ['ganesha', 'marble', 'handcrafted', 'hindu']
  },
  {
    id: '5',
    name: 'Rose Quartz Heart Stone Large Premium',
    category: 'Crystals',
    price: 1599,
    originalPrice: 2399,
    image: 'https://images.unsplash.com/photo-1583266519132-9c31daad4bc9?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 89,
    discount: 33,
    description: 'Beautiful rose quartz heart stone for love and emotional healing.',
    inStock: true,
    tags: ['love', 'healing', 'heart-chakra']
  }
]

export const mockCategories: Category[] = [
  {
    id: 'crystals',
    name: 'Crystals',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    description: 'Healing crystals and gemstones for spiritual growth',
    productCount: 45
  },
  {
    id: 'meditation',
    name: 'Meditation',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    description: 'Meditation accessories and spiritual tools',
    productCount: 32
  },
  {
    id: 'aromatherapy',
    name: 'Aromatherapy',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop',
    description: 'Essential oils, incense, and aromatic products',
    productCount: 28
  },
  {
    id: 'sacred-art',
    name: 'Sacred Art',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    description: 'Spiritual artwork, statues, and decorative items',
    productCount: 19
  }
]

export const mockReviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userName: 'Sarah M.',
    rating: 5,
    comment: 'Absolutely beautiful amethyst! The energy is incredible and it looks stunning in my meditation space.',
    date: '2024-01-15',
    verified: true
  },
  {
    id: '2',
    productId: '1',
    userName: 'Mike R.',
    rating: 4,
    comment: 'Great quality crystal, exactly as described. Fast shipping too!',
    date: '2024-01-10',
    verified: true
  },
  {
    id: '3',
    productId: '4',
    userName: 'Priya S.',
    rating: 5,
    comment: 'Beautiful Ganesha statue! The craftsmanship is exceptional and it brings positive energy to our home.',
    date: '2024-01-12',
    verified: true
  },
  {
    id: '4',
    productId: '2',
    userName: 'David L.',
    rating: 5,
    comment: 'The singing bowl has an amazing sound quality. Perfect for my daily meditation practice.',
    date: '2024-01-08',
    verified: true
  },
  {
    id: '5',
    productId: '3',
    userName: 'Maria C.',
    rating: 4,
    comment: 'High quality sage with a beautiful aroma. Ethically sourced as promised.',
    date: '2024-01-05',
    verified: true
  }
]