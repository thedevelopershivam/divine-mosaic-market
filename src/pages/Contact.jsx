import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      details: ['123 Spiritual Lane', 'New Delhi, India 110001'],
      color: 'spiritual-purple'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+1 (555) 123-4567'],
      color: 'spiritual-teal'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@spiritualshop.com', 'support@spiritualshop.com'],
      color: 'spiritual-gold'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 7:00 PM', 'Sat-Sun: 10:00 AM - 6:00 PM'],
      color: 'sage-green'
    }
  ]

  const faqs = [
    {
      question: 'How do I know if the crystals are authentic?',
      answer: 'All our crystals are sourced directly from trusted miners and certified suppliers. We provide authenticity certificates for premium stones.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship worldwide! Shipping costs and delivery times vary by location. Free shipping is available for orders over $75 in select countries.'
    },
    {
      question: 'Can I return items if I\'m not satisfied?',
      answer: 'We offer a 30-day return policy for unused items in original packaging. Custom or personalized items cannot be returned.'
    },
    {
      question: 'Do you provide spiritual guidance with purchases?',
      answer: 'Yes! Our team includes certified spiritual advisors who can help you choose the right products for your journey.'
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our products or need spiritual guidance? 
              We're here to help you on your journey.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="text-center hover:shadow-card transition-shadow">
                    <CardHeader className="pb-4">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-${info.color}/10 rounded-full flex items-center justify-center`}>
                        <Icon className={`w-8 h-8 text-${info.color}`} />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name</label>
                          <Input placeholder="Enter your first name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name</label>
                          <Input placeholder="Enter your last name" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="Enter your email" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                        <Input type="tel" placeholder="Enter your phone number" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Subject</label>
                        <Input placeholder="What is this regarding?" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <Textarea 
                          placeholder="Tell us how we can help you..."
                          className="min-h-[120px]"
                        />
                      </div>
                      
                      <Button className="w-full bg-gradient-spiritual text-white" size="lg">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-3 text-primary">
                          {faq.question}
                        </h4>
                        <p className="text-muted-foreground">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Additional Help */}
                <Card className="mt-8 bg-gradient-to-br from-spiritual-purple/5 to-spiritual-teal/5">
                  <CardContent className="p-6 text-center">
                    <Heart className="w-12 h-12 text-spiritual-purple mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-3">
                      Need Personal Guidance?
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Our spiritual advisors are available for one-on-one consultations 
                      to help you find the perfect products for your journey.
                    </p>
                    <Button variant="outline" className="border-spiritual-purple text-spiritual-purple hover:bg-spiritual-purple hover:text-white">
                      Book a Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visit Our Store
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience our products in person at our beautiful flagship store in New Delhi
              </p>
            </div>
            
            {/* Map Placeholder */}
            <div className="relative bg-muted rounded-xl overflow-hidden h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-spiritual-purple mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    Map integration would be implemented here<br />
                    123 Spiritual Lane, New Delhi, India 110001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-spiritual text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for spiritual tips, new product announcements, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Contact