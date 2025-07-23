import { useLocation } from 'react-router-dom'
import Stepper from '@/components/ui/stepper'

interface PageStepperProps {
  className?: string
}

const PageStepper = ({ className }: PageStepperProps) => {
  const location = useLocation()
  
  // Define the main customer journey steps
  const steps = [
    { id: 'home', title: 'Explore', description: 'Discover products' },
    { id: 'categories', title: 'Browse', description: 'Find what you need' },
    { id: 'products', title: 'Select', description: 'Choose products' },
    { id: 'product', title: 'Review', description: 'Product details' },
    { id: 'wishlist', title: 'Save', description: 'Wishlist items' },
    { id: 'payment', title: 'Purchase', description: 'Complete order' }
  ]

  // Map current path to step
  const getCurrentStep = () => {
    const path = location.pathname
    
    if (path === '/') return 0
    if (path.startsWith('/categories')) return 1
    if (path.startsWith('/products')) return 2
    if (path.startsWith('/product/')) return 3
    if (path.startsWith('/wishlist')) return 4
    if (path.startsWith('/payment')) return 5
    if (path.startsWith('/profile')) return 5
    
    return 0
  }

  const currentStep = getCurrentStep()

  // Don't show stepper on admin pages, about, contact, etc.
  if (location.pathname.startsWith('/admin') || 
      location.pathname === '/about' || 
      location.pathname === '/contact') {
    return null
  }

  return (
    <div className={className}>
      <div className="container mx-auto px-4 py-4">
        <Stepper 
          steps={steps} 
          currentStep={currentStep} 
          orientation="horizontal"
          className="max-w-4xl mx-auto"
        />
      </div>
    </div>
  )
}

export default PageStepper