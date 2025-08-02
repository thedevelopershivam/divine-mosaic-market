import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Terms of Service</CardTitle>
            <p className="text-muted-foreground text-center">Last updated: January 2024</p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using SpiritualShop, you accept and agree to be bound by the terms 
                and provision of this agreement. These terms apply to all visitors, users, and others 
                who access or use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on SpiritualShop for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on our website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
              <p>
                We strive to provide accurate product descriptions and images. However, we do not 
                warrant that product descriptions or other content is accurate, complete, reliable, 
                current, or error-free. Natural crystals and spiritual items may vary in appearance, 
                size, and energy properties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Pricing and Availability</h2>
              <p>
                All prices are subject to change without notice. We reserve the right to modify or 
                discontinue products at any time. Product availability is not guaranteed and is 
                subject to change based on inventory levels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Spiritual Disclaimer</h2>
              <p>
                Our products are intended for spiritual, meditation, and wellness purposes. They are 
                not intended to diagnose, treat, cure, or prevent any medical condition. Always 
                consult with a healthcare professional for medical concerns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password. 
                You agree to accept responsibility for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p>
                In no event shall SpiritualShop or its suppliers be liable for any damages arising 
                out of the use or inability to use our products or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to us at 
                legal@spiritualshop.com or +1 (555) 123-4567.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}