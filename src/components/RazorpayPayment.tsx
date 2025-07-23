import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { CreditCard, ShoppingCart } from 'lucide-react'

// Note: In production, you would load Razorpay script dynamically
// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

interface RazorpayPaymentProps {
  amount: number
  currency?: string
  productName: string
  description?: string
  onSuccess?: (paymentId: string) => void
  onError?: (error: any) => void
}

export function RazorpayPayment({
  amount,
  currency = 'INR',
  productName,
  description,
  onSuccess,
  onError
}: RazorpayPaymentProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const { toast } = useToast()

  const handlePayment = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all customer details',
        variant: 'destructive'
      })
      return
    }

    setIsLoading(true)

    try {
      // In a real implementation, you would:
      // 1. Call your backend to create an order
      // 2. Get order_id from Razorpay
      // 3. Initialize Razorpay checkout

      // Mock payment simulation for demo
      setTimeout(() => {
        const success = Math.random() > 0.1 // 90% success rate for demo
        
        if (success) {
          const mockPaymentId = `pay_${Date.now()}`
          toast({
            title: 'Payment Successful!',
            description: `Payment ID: ${mockPaymentId}`,
          })
          onSuccess?.(mockPaymentId)
        } else {
          const error = new Error('Payment failed')
          toast({
            title: 'Payment Failed',
            description: 'Please try again or use a different payment method',
            variant: 'destructive'
          })
          onError?.(error)
        }
        setIsLoading(false)
      }, 2000)

      /* Real Razorpay integration would look like this:
      
      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Enter the Key ID generated from the Dashboard
        amount: amount * 100, // Amount in paise
        currency: currency,
        name: 'Spiritual Shop',
        description: description || productName,
        order_id: 'order_id_from_backend', // Generate from backend
        handler: function (response: any) {
          toast({
            title: 'Payment Successful!',
            description: `Payment ID: ${response.razorpay_payment_id}`,
          })
          onSuccess?.(response.razorpay_payment_id)
          setIsLoading(false)
        },
        prefill: {
          name: customerInfo.name,
          email: customerInfo.email,
          contact: customerInfo.phone
        },
        notes: {
          product: productName
        },
        theme: {
          color: '#8B5A2B' // Your brand color
        },
        modal: {
          ondismiss: function() {
            setIsLoading(false)
          }
        }
      }

      if (window.Razorpay) {
        const rzp = new window.Razorpay(options)
        rzp.on('payment.failed', function (response: any) {
          toast({
            title: 'Payment Failed',
            description: response.error.description,
            variant: 'destructive'
          })
          onError?.(response.error)
          setIsLoading(false)
        })
        rzp.open()
      }
      */

    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to initialize payment',
        variant: 'destructive'
      })
      onError?.(error)
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Payment Details
        </CardTitle>
        <CardDescription>
          Secure payment powered by Razorpay
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-muted rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-medium">{productName}</span>
            <span className="font-bold">₹{amount.toLocaleString()}</span>
          </div>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>

        <div className="space-y-3">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={customerInfo.phone}
              onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        <Button 
          onClick={handlePayment} 
          disabled={isLoading}
          className="w-full flex items-center gap-2"
          size="lg"
        >
          {isLoading ? (
            'Processing...'
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              Pay ₹{amount.toLocaleString()}
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Your payment information is secure and encrypted. 
          This is a demo integration.
        </p>
      </CardContent>
    </Card>
  )
}