import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'FAQ', href: '/faq' }
  ]

  const categories = [
    { name: 'Crystals & Gems', href: '/crystals' },
    { name: 'Meditation Tools', href: '/meditation' },
    { name: 'Aromatherapy', href: '/aromatherapy' },
    { name: 'Spiritual Books', href: '/books' },
    { name: 'Sacred Art', href: '/art' },
    { name: 'Ritual Supplies', href: '/rituals' }
  ]

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refunds' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Connected with Your Spiritual Journey
            </h3>
            <p className="text-primary-foreground/80 mb-8">
              Get weekly insights, exclusive offers, and be the first to know about new arrivals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="gold" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-spiritual-gold rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">S</span>
              </div>
              <h2 className="text-xl font-bold">SpiritualShop</h2>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted companion on the spiritual path. We curate authentic, high-quality spiritual products to support your journey toward inner peace and enlightenment.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-spiritual-gold" />
                <span className="text-sm">hello@spiritualshop.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-spiritual-gold" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-spiritual-gold" />
                <span className="text-sm">123 Spiritual St, Peace City, CA 90210</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-spiritual-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a 
                    href={category.href}
                    className="text-primary-foreground/80 hover:text-spiritual-gold transition-colors duration-200 text-sm"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 mb-8">
              {legal.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-spiritual-gold transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="font-medium mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/80 hover:text-spiritual-gold transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-spiritual-gold transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-spiritual-gold transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-spiritual-gold transition-colors duration-200">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 SpiritualShop. All rights reserved. Made with ❤️ for your spiritual journey.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-primary-foreground/60 text-sm">
                Secure payments powered by Stripe
              </span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-white/20 rounded text-xs flex items-center justify-center">💳</div>
                <div className="w-8 h-5 bg-white/20 rounded text-xs flex items-center justify-center">💳</div>
                <div className="w-8 h-5 bg-white/20 rounded text-xs flex items-center justify-center">💳</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer