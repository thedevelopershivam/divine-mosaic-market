import { Button } from '@/components/ui/button'

interface BannerProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  backgroundImage?: string
  variant?: 'primary' | 'secondary' | 'accent'
}

const Banner = ({ 
  title, 
  subtitle, 
  description, 
  ctaText, 
  ctaLink, 
  backgroundImage,
  variant = 'primary' 
}: BannerProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gradient-warm text-white'
      case 'accent':
        return 'bg-spiritual-teal/10 text-spiritual-teal border border-spiritual-teal/20'
      default:
        return 'bg-gradient-spiritual text-white'
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div 
          className={`relative rounded-2xl overflow-hidden ${getVariantClasses()}`}
          style={backgroundImage ? {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          } : {}}
        >
          <div className="px-8 md:px-16 py-12 md:py-20 text-center relative z-10">
            <p className="text-lg font-medium mb-2 opacity-90">
              {subtitle}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {title}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
              {description}
            </p>
            <Button 
              variant={variant === 'accent' ? 'spiritual' : 'gold'} 
              size="lg"
              className="text-lg px-8 py-3"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner