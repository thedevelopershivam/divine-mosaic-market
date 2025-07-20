import { useState } from 'react'
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currency, setCurrency] = useState('INR')

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-spiritual transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="search"
                placeholder="Search spiritual products..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
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
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="search"
              placeholder="Search spiritual products..."
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
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
  )
}

export default Header