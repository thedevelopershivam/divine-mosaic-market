import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, InfoIcon } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Returns() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Returns Policy</CardTitle>
            <p className="text-muted-foreground text-center">Last updated: January 2024</p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none space-y-6">
            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertDescription>
                Due to the spiritual nature of our products, returns are only accepted under 
                specific conditions. Please read our policy carefully before making a purchase.
              </AlertDescription>
            </Alert>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Return Window</h2>
              <p>
                You have <strong>30 days</strong> from the date of delivery to initiate a return. 
                Returns requested after this period will not be accepted except in cases of 
                defective products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptable Return Conditions</h2>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <Badge variant="outline" className="mb-2">Defective Items</Badge>
                    <p>Items that arrive damaged, broken, or with manufacturing defects</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <Badge variant="outline" className="mb-2">Wrong Item</Badge>
                    <p>We shipped an incorrect item that differs from your order</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <Badge variant="outline" className="mb-2">Significant Difference</Badge>
                    <p>Item is significantly different from the description or photos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <Badge variant="outline" className="mb-2">Unopened Items</Badge>
                    <p>Items that remain unopened and in original packaging</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <Badge variant="destructive" className="mb-2">Activated Crystals</Badge>
                    <p>Crystals that have been handled, cleansed, or energetically activated</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <Badge variant="destructive" className="mb-2">Custom Items</Badge>
                    <p>Personalized jewelry, custom engravings, or made-to-order items</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <Badge variant="destructive" className="mb-2">Consumables</Badge>
                    <p>Incense, oils, herbs, candles, and other consumable items once opened</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <Badge variant="destructive" className="mb-2">Digital Products</Badge>
                    <p>E-books, audio files, digital courses, and downloadable content</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <Badge variant="destructive" className="mb-2">Final Sale</Badge>
                    <p>Items marked as "Final Sale" or purchased during clearance events</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Return Process</h2>
              <ol className="list-decimal ml-6 space-y-4">
                <li>
                  <strong>Contact Us First</strong>
                  <p>Email returns@spiritualshop.com with your order number and reason for return</p>
                </li>
                <li>
                  <strong>Await Authorization</strong>
                  <p>We'll review your request and provide a return authorization if approved</p>
                </li>
                <li>
                  <strong>Package Items</strong>
                  <p>Pack items in original packaging with all included accessories</p>
                </li>
                <li>
                  <strong>Ship Returns</strong>
                  <p>Ship to the address provided in your return authorization</p>
                </li>
                <li>
                  <strong>Processing</strong>
                  <p>Returns are processed within 5-10 business days after we receive them</p>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Spiritual Item Considerations</h2>
              <p>
                We believe that spiritual items, especially crystals and gemstones, form energetic 
                connections with their owners. Once an item has been handled with intention or used 
                in spiritual practice, it cannot be returned as it has absorbed your energy.
              </p>
              <p>
                Natural variations in crystal formations, colors, and sizes are normal and not 
                grounds for return unless the item is significantly different from what was described.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Return Shipping</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Customers pay return shipping unless item was defective or incorrect</li>
                <li>We recommend using trackable shipping methods</li>
                <li>Original shipping costs are non-refundable</li>
                <li>Items lost in return shipping are customer's responsibility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>
                For return requests or questions, contact us at:
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> returns@spiritualshop.com</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                <li><strong>Hours:</strong> Monday-Friday, 9 AM - 6 PM PST</li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}