
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function FAQ() {
  const faqs = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "We typically ship orders within 1-2 business days. Standard shipping takes 3-7 business days, while expedited shipping options are available for 1-3 business days delivery."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship worldwide. International shipping times vary by location, typically 7-21 business days. Additional customs fees may apply depending on your country."
        },
        {
          question: "Can I track my order?",
          answer: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account on our website."
        }
      ]
    },
    {
      category: "Products & Quality",
      questions: [
        {
          question: "Are your crystals authentic?",
          answer: "Yes, all our crystals are 100% authentic natural stones. We source directly from trusted suppliers and each crystal is hand-selected for quality. We never sell synthetic or treated stones without clear disclosure."
        },
        {
          question: "How do I care for my crystals?",
          answer: "Crystal care varies by type, but generally: cleanse with moonlight, sage, or running water (avoid salt water for soft stones); charge under moonlight or sunlight; store in a safe place away from direct sunlight to prevent fading."
        },
        {
          question: "What if my crystal arrives damaged?",
          answer: "While we package carefully, accidents can happen during shipping. Contact us within 48 hours with photos of the damage, and we'll arrange a replacement or full refund immediately."
        }
      ]
    },
    {
      category: "Spiritual Guidance",
      questions: [
        {
          question: "How do I choose the right crystal?",
          answer: "Trust your intuition! Browse our collection and see which crystals you're drawn to. You can also choose based on specific intentions - check our crystal guides for properties and uses of each stone."
        },
        {
          question: "Do you offer spiritual consultations?",
          answer: "We offer basic crystal guidance through our blog and customer service. For detailed spiritual consultations, we recommend connecting with certified practitioners in your area."
        },
        {
          question: "Can crystals really help with healing?",
          answer: "Crystals are used for spiritual and emotional support, not medical treatment. While many people find them beneficial for meditation and spiritual practices, they should not replace medical care. Always consult healthcare providers for medical concerns."
        }
      ]
    },
    {
      category: "Account & Payment",
      questions: [
        {
          question: "Do I need an account to make a purchase?",
          answer: "No, you can check out as a guest. However, creating an account allows you to track orders, save favorites, earn rewards points, and enjoy faster checkout."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Shop Pay for convenient and secure checkout."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your credit card details on our servers - all payments are processed securely through our payment providers."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Frequently Asked Questions</CardTitle>
            <p className="text-muted-foreground text-center">Find answers to common questions about our products and services</p>
          </CardHeader>
          <CardContent className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary border-b pb-2">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
