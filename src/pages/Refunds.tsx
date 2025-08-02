import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Refunds() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Refund Policy</CardTitle>
            <p className="text-muted-foreground text-center">Last updated: January 2024</p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none space-y-6">
            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertDescription>
                Due to the spiritual and energetic nature of our products, refunds are limited 
                and subject to specific conditions outlined below.
              </AlertDescription>
            </Alert>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Refund Eligibility</h2>
              <p>Refunds may be considered under the following circumstances:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Product arrived damaged or defective</li>
                <li>Wrong item was shipped</li>
                <li>Item significantly differs from description</li>
                <li>Item was not delivered within the specified timeframe</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Non-Refundable Items</h2>
              <p>The following items are not eligible for refunds:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Items purchased more than 30 days ago</li>
                <li>Used or activated crystals and gemstones</li>
                <li>Personalized or custom-made spiritual items</li>
                <li>Digital products (e-books, audio files, courses)</li>
                <li>Incense, oils, and other consumable products that have been opened</li>
                <li>Items damaged by misuse or normal wear</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Spiritual Item Considerations</h2>
              <p>
                As a seller of spiritual items, we believe that each crystal, gemstone, and 
                spiritual tool chooses its owner. Once an item has been handled and its energy 
                has been activated by the buyer, it cannot be returned as it has formed an 
                energetic bond.
              </p>
              <p>
                Natural variations in color, size, and appearance are normal for crystals and 
                gemstones and do not qualify for refunds unless the item is significantly 
                different from what was advertised.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Contact our customer service within 30 days of purchase</li>
                <li>Provide your order number and reason for refund request</li>
                <li>Wait for approval before returning any items</li>
                <li>Return items in original condition and packaging</li>
                <li>Refunds will be processed within 5-10 business days after we receive the returned item</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Partial Refunds</h2>
              <p>Partial refunds may be granted for:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Items returned more than 30 days after purchase</li>
                <li>Items not in original condition or missing parts</li>
                <li>Items damaged by customer misuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Shipping Costs</h2>
              <p>
                Original shipping costs are non-refundable unless the return is due to our error. 
                Customers are responsible for return shipping costs unless the item was damaged 
                or defective upon arrival.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
              <p>
                We offer exchanges for defective or damaged items only. If you need to exchange 
                an item, please contact us within 30 days of purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact for Refunds</h2>
              <p>
                To request a refund, please contact us at returns@spiritualshop.com or 
                call us at +1 (555) 123-4567. Please have your order number ready.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}