import { useState } from 'react'
import { Search, ShoppingCart, Heart, User, Menu, X, Home, BookOpen, Phone, Grid3X3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [currency, setCurrency] = useState('INR')

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <>
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 max-w-full overflow-x-hidden">
        {/* Top bar with announcement */}
        <div className="hidden md:block py-2 text-center text-sm bg-gradient-spiritual text-white">
          ✨ Free shipping on orders over $75 • Use code SPIRITUAL20 for 20% off ✨
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-spiritual rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-spiritual bg-clip-text text-transparent">
              SpiritualShop
            </h1>
          </div>


          {/* Search Bar */}
          <div className="flex-1 flex justify-center">
            {isSearchOpen ? (
              <div className="relative w-full max-w-md mx-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="search"
                  placeholder="Search spiritual products..."
                  className="pl-10 pr-4 py-2 w-full"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              </div>
            ) : null}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Currency Toggle */}
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <button 
                onClick={() => setCurrency('INR')}
                className={`px-2 py-1 rounded font-medium transition-colors ${
                  currency === 'INR' 
                    ? 'bg-spiritual-gold text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ₹ INR
              </button>
              <button 
                onClick={() => setCurrency('USD')}
                className={`px-2 py-1 rounded font-medium transition-colors ${
                  currency === 'USD' 
                    ? 'bg-spiritual-gold text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                $ USD
              </button>
            </div>

            {/* Search Icon */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Icons */}
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-spiritual-teal text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="search"
                placeholder="Search spiritual products..."
                className="pl-10 pr-4 py-2 w-full"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <button 
                  onClick={() => setCurrency('INR')}
                  className={`px-3 py-2 rounded font-medium text-sm transition-colors ${
                    currency === 'INR' 
                      ? 'bg-spiritual-gold text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  ₹ INR
                </button>
                <button 
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-2 rounded font-medium text-sm transition-colors ${
                    currency === 'USD' 
                      ? 'bg-spiritual-gold text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  $ USD
                </button>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>

    {/* Enhanced Mobile Footer Navigation */}
    <div className="fixed bottom-0 left-0 right-0 bg-background/98 backdrop-blur-md border-t border-border md:hidden z-50 shadow-spiritual">
      <div className="grid grid-cols-5 items-center h-16">
        <Link 
          to="/" 
          className="flex flex-col items-center justify-center h-full text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-muted/30 group"
        >
          <Home className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">Home</span>
        </Link>
        
        <Link 
          to="/categories" 
          className="flex flex-col items-center justify-center h-full text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-muted/30 group"
        >
          <Grid3X3 className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">Categories</span>
        </Link>
        
        {/* Center Search Button - Highlighted */}
        <button 
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="flex flex-col items-center justify-center h-full bg-gradient-spiritual text-white rounded-t-2xl mx-2 shadow-lg hover:shadow-spiritual transition-all duration-300 group -mt-2"
        >
          <Search className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">Search</span>
        </button>
        
        <Link 
          to="/profile" 
          className="flex flex-col items-center justify-center h-full text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-muted/30 group"
        >
          <User className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">Profile</span>
        </Link>
        
        <Link 
          to="/wishlist" 
          className="flex flex-col items-center justify-center h-full text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-muted/30 group relative"
        >
          <ShoppingCart className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 bg-spiritual-teal text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
          <span className="text-xs font-medium">Cart</span>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Header