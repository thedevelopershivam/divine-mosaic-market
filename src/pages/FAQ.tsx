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
          answer: "Yes, we ship worldwide. International shipping times vary by location, typically 7-21 business days. Additional customs fees may apply and are the responsibility of the customer."
        },
        {
          question: "Can I track my order?",
          answer: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account on our website."
        },
        {
          question: "What if my package is damaged during shipping?",
          answer: "If your package arrives damaged, please contact us immediately with photos of the damage. We'll work with you to resolve the issue quickly, either through replacement or refund."
        }
      ]
    },
    {
      category: "Products & Authenticity",
      questions: [
        {
          question: "Are your crystals and gemstones authentic?",
          answer: "Yes, all our crystals and gemstones are 100% natural and authentic. We source directly from trusted suppliers and mines around the world. Each crystal comes with information about its origin when available."
        },
        {
          question: "How do you cleanse crystals before shipping?",
          answer: "We cleanse all crystals using sage smoke and moonlight before carefully packaging them. However, we recommend cleansing them again when you receive them to attune them to your personal energy."
        },
        {
          question: "Why do crystal sizes and colors vary?",
          answer: "Crystals are natural formations, so each piece is unique. Variations in size, color, and pattern are normal and part of their natural beauty. This uniqueness is what makes each crystal special."
        },
        {
          question: "Do you provide certificates of authenticity?",
          answer: "For high-value items over $200, we provide certificates of authenticity. For standard crystals and spiritual items, we guarantee their authenticity and natural origin."
        }
      ]
    },
    {
      category: "Spiritual Guidance",
      questions: [
        {
          question: "How do I choose the right crystal for me?",
          answer: "Trust your intuition! Often, the crystal that draws your attention is the one you need. You can also choose based on specific intentions - we provide detailed descriptions of each crystal's properties to help guide you."
        },
        {
          question: "How should I care for my crystals?",
          answer: "Cleanse your crystals regularly using methods like moonlight, sunlight (for most crystals), sage smoke, or sound cleansing. Store them in a safe place where they won't get scratched or damaged."
        },
        {
          question: "Can crystals lose their energy over time?",
          answer: "Crystals don't lose their natural energy, but they can become energetically clouded from absorbing negative energy. Regular cleansing helps maintain their optimal vibration."
        },
        {
          question: "Do you offer spiritual consultations?",
          answer: "While we don't offer formal consultations, our team is knowledgeable about crystal properties and spiritual practices. Feel free to contact us with questions about our products and their uses."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer: "Due to the spiritual nature of our products, returns are limited to defective items, wrong items shipped, or items significantly different from description. Items must be unused and in original packaging within 30 days of purchase."
        },
        {
          question: "Can I return a crystal if it doesn't 'feel right'?",
          answer: "We believe crystals choose their owners. Once a crystal has been handled with intention, it forms an energetic bond and cannot be returned unless it's defective. We encourage trusting the selection process."
        },
        {
          question: "Do you offer exchanges?",
          answer: "Exchanges are available for defective or incorrectly shipped items only. Please contact us within 30 days if you received a damaged or wrong item."
        },
        {
          question: "What items cannot be returned?",
          answer: "Non-returnable items include: used crystals, personalized items, consumables (incense, oils), digital products, and items marked as final sale."
        }
      ]
    },
    {
      category: "Account & Payment",
      questions: [
        {
          question: "Do I need an account to shop?",
          answer: "While you can checkout as a guest, creating an account allows you to track orders, save favorites, access exclusive offers, and manage your spiritual journey with us."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and various buy-now-pay-later options."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard SSL encryption and secure payment processors. We never store your complete payment information on our servers."
        },
        {
          question: "Can I change or cancel my order?",
          answer: "Orders can be modified or cancelled within 2 hours of placement. After that, orders are processed and cannot be changed. Please contact us immediately if you need to make changes."
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
            <p className="text-muted-foreground text-center">
              Find answers to common questions about our spiritual products and services
            </p>
          </CardHeader>
          <CardContent>
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, questionIndex) => (
                    <AccordionItem 
                      key={questionIndex} 
                      value={`${categoryIndex}-${questionIndex}`}
                      className="border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="mt-12 p-6 bg-muted rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                We're here to help! Contact our customer support team for personalized assistance.
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> support@spiritualshop.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Hours:</strong> Monday-Friday, 9 AM - 6 PM PST</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}