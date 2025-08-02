import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Cookies() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Cookie Policy</CardTitle>
            <p className="text-muted-foreground text-center">Last updated: January 2024</p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your computer or mobile device when 
                you visit our website. They help us provide you with a better experience by remembering 
                your preferences and how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable 
                    core functionality such as security, network management, and accessibility.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium">Performance Cookies</h3>
                  <p>
                    These cookies help us understand how visitors interact with our website by 
                    collecting and reporting information anonymously.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium">Functional Cookies</h3>
                  <p>
                    These cookies enable the website to provide enhanced functionality and 
                    personalization, such as remembering your login details and preferences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium">Marketing Cookies</h3>
                  <p>
                    These cookies are used to track visitors across websites to display relevant 
                    and engaging advertisements.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p>We use cookies to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Keep you signed in to your account</li>
                <li>Remember your shopping cart contents</li>
                <li>Understand how you use our website</li>
                <li>Improve our website performance</li>
                <li>Personalize your experience</li>
                <li>Show you relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p>
                We may also use third-party cookies from trusted partners for analytics, 
                advertising, and social media features. These include:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Google Analytics - for website analytics</li>
                <li>Facebook Pixel - for advertising</li>
                <li>Stripe - for payment processing</li>
                <li>Social media platforms - for sharing features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies 
                that are already on your computer and you can set most browsers to prevent them 
                from being placed. However, if you do this, you may have to manually adjust some 
                preferences every time you visit a site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us at 
                privacy@spiritualshop.com or +1 (555) 123-4567.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}