
import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import CategoriesSection from '@/components/CategoriesSection'
import ProductsSection from '@/components/ProductsSection'
import Banner from '@/components/Banner'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'

const Index = () => {
  // Sample product data
  const newArrivals = [
    {
      id: '1',
      name: 'Amethyst Crystal Cluster Premium Grade',
      category: 'Crystals',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 124,
      isNew: true
    },
    {
      id: '2',
      name: 'Himalayan Singing Bowl Set with Mallet',
      category: 'Meditation',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 89,
      isNew: true
    },
    {
      id: '3',
      name: 'Sacred Sage Smudge Bundle - White Sage',
      category: 'Aromatherapy',
      price: 899,
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 256,
      isNew: true
    },
    {
      id: '4',
      name: 'Chakra Balancing Essential Oil Set',
      category: 'Aromatherapy',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 78,
      isNew: true
    },
    {
      id: '5',
      name: 'Dream Catcher - Handwoven Natural Feathers',
      category: 'Sacred Art',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 145,
      isNew: true
    }
  ]

  const discountedProducts = [
    {
      id: '6',
      name: 'Rose Quartz Heart Stone Large Premium',
      category: 'Crystals',
      price: 1599,
      originalPrice: 2399,
      image: 'https://images.unsplash.com/photo-1583266519132-9c31daad4bc9?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 89,
      discount: 33
    },
    {
      id: '7',
      name: 'Mandala Tapestry - Sacred Geometry Design',
      category: 'Sacred Art',
      price: 2199,
      originalPrice: 2999,
      image: 'https://images.unsplash.com/photo-1578063564796-d4b32dc75e5b?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 156,
      discount: 27
    },
    {
      id: '8',
      name: 'Meditation Cushion Zafu - Organic Cotton',
      category: 'Meditation',
      price: 2999,
      originalPrice: 3999,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 234,
      discount: 25
    },
    {
      id: '9',
      name: 'Palo Santo Sacred Wood Sticks Set of 10',
      category: 'Aromatherapy',
      price: 1299,
      originalPrice: 1899,
      image: 'https://images.unsplash.com/photo-1603884009154-ad16f738c2a0?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 312,
      discount: 32
    },
    {
      id: '10',
      name: 'Crystal Grid Template - Sacred Geometry',
      category: 'Sacred Art',
      price: 899,
      originalPrice: 1299,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 67,
      discount: 31
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSlider />
        
        <CategoriesSection />
        
        <ProductsSection 
          title="New Arrivals"
          subtitle="Fresh additions to enhance your spiritual journey"
          products={newArrivals}
        />
        
        <Banner 
          title="Transform Your Space"
          subtitle="Sacred Home Collection"
          description="Create a sanctuary of peace and positive energy with our carefully curated home collection"
          ctaText="Shop Home Collection"
          ctaLink="/home-collection"
          variant="secondary"
        />
        
        <ProductsSection 
          title="Special Offers"
          subtitle="Limited time discounts on premium spiritual products"
          products={discountedProducts}
        />
        
        <Banner 
          title="Join Our Spiritual Community"
          subtitle="Weekly Insights & Exclusive Offers"
          description="Get access to spiritual guidance, meditation tips, and be the first to know about new arrivals and special promotions"
          ctaText="Subscribe Now"
          ctaLink="/newsletter"
          variant="accent"
        />
        
        <BlogSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
