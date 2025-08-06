import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroCrystals from '@/assets/hero-crystals.jpg'
import heroMeditation from '@/assets/hero-meditation.jpg'
import heroCards from '@/assets/hero-cards.jpg'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: heroCrystals,
      title: "Crystal Collection",
      subtitle: "Harness the Power of Nature",
      description: "Discover our premium crystal collection sourced from sacred locations worldwide",
      cta: "Shop Crystals",
      bgPosition: "center"
    },
    {
      id: 2,
      image: heroMeditation,
      subtitle: "Find Your Inner Peace",
      title: "Meditation Essentials",
      description: "Everything you need for a transformative meditation practice",
      cta: "Explore Now",
      bgPosition: "center"
    },
    {
      id: 3,
      image: heroCards,
      title: "Oracle & Tarot",
      subtitle: "Divine Guidance Awaits",
      description: "Unlock spiritual insights with our curated card collections",
      cta: "Discover Cards",
      bgPosition: "center"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center relative"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: slide.bgPosition 
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-hero"></div>
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <p className="text-spiritual-gold font-medium mb-2 tracking-wide text-sm md:text-base">
                  {slide.subtitle}
                </p>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                  {slide.description}
                </p>
                <Button variant="spiritual" size="lg" className="text-lg px-8 py-3">
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-2 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-2 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-spiritual-gold scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider