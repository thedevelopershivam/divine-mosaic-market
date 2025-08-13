import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Heart, Users, Award, Globe } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Satisfaction Rate', icon: Heart }
  ]

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & Spiritual Guide',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b494?w=300&h=300&fit=crop',
      bio: 'With over 15 years in spiritual practice, Priya founded SpiritualShop to make authentic spiritual tools accessible to everyone.'
    },
    {
      name: 'Arjun Patel',
      role: 'Crystal Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      bio: 'Arjun travels worldwide to source the finest crystals and gemstones, ensuring authenticity and quality in every piece.'
    },
    {
      name: 'Maya Singh',
      role: 'Meditation Expert',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'A certified meditation instructor, Maya curates our meditation collection and provides guidance to our community.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-spiritual-purple/10 to-spiritual-teal/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Spiritual Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Founded with love and guided by ancient wisdom, SpiritualShop is your trusted companion 
              on the path to inner peace and spiritual growth.
            </p>
            <Button size="lg" className="bg-gradient-spiritual text-white">
              Join Our Community
            </Button>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p className="mb-4">
                    SpiritualShop began as a small collection of healing crystals and meditation tools 
                    gathered during spiritual journeys across India and Tibet. What started as a personal 
                    practice soon became a calling to share these sacred treasures with fellow seekers.
                  </p>
                  <p className="mb-4">
                    Today, we've grown into a trusted online destination for authentic spiritual products, 
                    serving thousands of customers worldwide. Every item in our collection is carefully 
                    selected for its quality, authenticity, and spiritual significance.
                  </p>
                  <p>
                    We believe that everyone deserves access to tools that support their spiritual journey, 
                    whether you're just beginning or have been walking the path for years.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                  alt="Spiritual journey"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-spiritual opacity-10 rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Impact
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how we've touched lives and spread spiritual wellness across the globe
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-spiritual rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-spiritual-purple">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To provide authentic, high-quality spiritual products that support individuals 
                  on their journey toward inner peace, healing, and enlightenment. We strive to 
                  make spiritual wellness accessible and affordable for everyone.
                </p>
              </div>
              <div className="bg-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-spiritual-teal">
                  Our Vision
                </h3>
                <p className="text-muted-foreground">
                  To create a global community of spiritual seekers who support each other's 
                  growth and transformation. We envision a world where spiritual practices 
                  are integrated into daily life, promoting peace and harmony.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our passionate team of spiritual practitioners and experts are here to guide you
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-card p-6 rounded-xl text-center">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold mb-2">
                    {member.name}
                  </h4>
                  <p className="text-spiritual-teal font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-purple/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-spiritual-purple" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Authenticity</h4>
                <p className="text-muted-foreground">
                  We source only genuine, high-quality products with verified origins and spiritual significance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-teal/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-spiritual-teal" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Community</h4>
                <p className="text-muted-foreground">
                  We foster a supportive community where spiritual seekers can connect and grow together.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-gold/10 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-spiritual-gold" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Sustainability</h4>
                <p className="text-muted-foreground">
                  We're committed to ethical sourcing and supporting communities that preserve spiritual traditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-spiritual text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Spiritual Community
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connect with like-minded seekers, receive spiritual guidance, and be the first to know about new arrivals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button variant="secondary" size="lg" className="flex-1">
                Subscribe to Newsletter
              </Button>
              <Button variant="outline" size="lg" className="flex-1 text-white border-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default About