import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RulerIcon } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function SizeGuide() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Size Guide</CardTitle>
            <p className="text-muted-foreground text-center">Find the perfect fit for your spiritual jewelry and accessories</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <RulerIcon className="h-4 w-4" />
              <AlertDescription>
                Natural crystal and gemstone sizes may vary slightly due to their organic nature. 
                Measurements are approximate and taken at the largest points.
              </AlertDescription>
            </Alert>

            <Tabs defaultValue="rings" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="rings">Rings</TabsTrigger>
                <TabsTrigger value="bracelets">Bracelets</TabsTrigger>
                <TabsTrigger value="necklaces">Necklaces</TabsTrigger>
                <TabsTrigger value="crystals">Crystals</TabsTrigger>
              </TabsList>

              <TabsContent value="rings" className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Ring Sizing Chart</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>US Size</TableHead>
                        <TableHead>Diameter (mm)</TableHead>
                        <TableHead>Circumference (mm)</TableHead>
                        <TableHead>UK Size</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>15.7</TableCell>
                        <TableCell>49.3</TableCell>
                        <TableCell>J</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>6</TableCell>
                        <TableCell>16.5</TableCell>
                        <TableCell>51.9</TableCell>
                        <TableCell>L</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>7</TableCell>
                        <TableCell>17.3</TableCell>
                        <TableCell>54.4</TableCell>
                        <TableCell>N</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>8</TableCell>
                        <TableCell>18.1</TableCell>
                        <TableCell>57.0</TableCell>
                        <TableCell>P</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>9</TableCell>
                        <TableCell>19.0</TableCell>
                        <TableCell>59.5</TableCell>
                        <TableCell>R</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>10</TableCell>
                        <TableCell>19.8</TableCell>
                        <TableCell>62.1</TableCell>
                        <TableCell>T</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">How to Measure Your Ring Size:</h4>
                    <ol className="list-decimal ml-4 space-y-1 text-sm">
                      <li>Wrap a piece of string around your finger</li>
                      <li>Mark where the string overlaps</li>
                      <li>Measure the length with a ruler</li>
                      <li>Compare to the circumference column above</li>
                    </ol>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="bracelets" className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Bracelet Sizing Chart</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Size</TableHead>
                        <TableHead>Wrist Circumference</TableHead>
                        <TableHead>Bracelet Length</TableHead>
                        <TableHead>Fit</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Extra Small</TableCell>
                        <TableCell>5.5" - 6"</TableCell>
                        <TableCell>6.5"</TableCell>
                        <TableCell>Comfortable</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Small</TableCell>
                        <TableCell>6" - 6.5"</TableCell>
                        <TableCell>7"</TableCell>
                        <TableCell>Comfortable</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Medium</TableCell>
                        <TableCell>6.5" - 7"</TableCell>
                        <TableCell>7.5"</TableCell>
                        <TableCell>Comfortable</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Large</TableCell>
                        <TableCell>7" - 7.5"</TableCell>
                        <TableCell>8"</TableCell>
                        <TableCell>Comfortable</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Extra Large</TableCell>
                        <TableCell>7.5" - 8"</TableCell>
                        <TableCell>8.5"</TableCell>
                        <TableCell>Comfortable</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Elastic Bracelets:</h4>
                    <p className="text-sm">Our elastic crystal bracelets are designed to stretch and fit most wrist sizes comfortably. Standard size fits 6" - 7.5" wrists.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="necklaces" className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Necklace Length Guide</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Length</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Best For</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>14" - 16"</TableCell>
                        <TableCell>Choker</TableCell>
                        <TableCell>Close to neck, elegant look</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>16" - 18"</TableCell>
                        <TableCell>Princess</TableCell>
                        <TableCell>Most popular, sits at collarbone</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>18" - 20"</TableCell>
                        <TableCell>Matinee</TableCell>
                        <TableCell>Falls just below collarbone</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>20" - 24"</TableCell>
                        <TableCell>Opera</TableCell>
                        <TableCell>Falls at or below bust line</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>24" - 36"</TableCell>
                        <TableCell>Rope</TableCell>
                        <TableCell>Long, can be worn multiple ways</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Adjustable Necklaces:</h4>
                    <p className="text-sm">Many of our spiritual necklaces feature adjustable lengths with extension chains or sliding knots for a custom fit.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="crystals" className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Crystal Size Reference</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Size Category</TableHead>
                        <TableHead>Approximate Size</TableHead>
                        <TableHead>Best For</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Tumbled Stone</TableCell>
                        <TableCell>0.5" - 1.5"</TableCell>
                        <TableCell>Pocket stones, small grids</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Small Palm Stone</TableCell>
                        <TableCell>1.5" - 2.5"</TableCell>
                        <TableCell>Meditation, healing work</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Medium Palm Stone</TableCell>
                        <TableCell>2.5" - 3.5"</TableCell>
                        <TableCell>Desk display, meditation</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Large Palm Stone</TableCell>
                        <TableCell>3.5" - 4.5"</TableCell>
                        <TableCell>Room energy, large grids</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Sphere</TableCell>
                        <TableCell>1" - 4" diameter</TableCell>
                        <TableCell>Scrying, energy work</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Tower/Point</TableCell>
                        <TableCell>2" - 6" height</TableCell>
                        <TableCell>Directing energy, altars</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Natural Variations:</h4>
                    <p className="text-sm">
                      Each crystal is unique and naturally formed. Sizes, colors, and patterns will vary from piece to piece. 
                      This is part of their natural beauty and spiritual authenticity.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <section className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-muted-foreground">
                If you're unsure about sizing or have questions about our products, please don't hesitate to contact us at 
                <strong> support@spiritualshop.com</strong> or call <strong>+1 (555) 123-4567</strong>. 
                We're here to help you find the perfect spiritual items for your journey.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}