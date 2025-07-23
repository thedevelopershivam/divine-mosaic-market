import { ReactNode } from 'react'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'

// This would normally come from environment variables
// For demo purposes, we'll show the integration structure
const PUBLISHABLE_KEY = "pk_test_demo_key" // Replace with actual key

interface ClerkAuthProviderProps {
  children: ReactNode
}

export function ClerkAuthProvider({ children }: ClerkAuthProviderProps) {
  // In production, you would get the actual key from environment
  if (!PUBLISHABLE_KEY) {
    return <div>Missing Clerk Publishable Key</div>
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  )
}

// Auth components for use in your app
export function AuthButton() {
  return (
    <>
      <SignedOut>
        <SignInButton fallbackRedirectUrl="/" forceRedirectUrl="/">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <LogIn className="h-4 w-4" />
            Sign In with Gmail
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
  )
}

export function ProtectedRoute({ children }: { children: ReactNode }) {
  return (
    <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold mb-4">Authentication Required</h2>
          <p className="text-muted-foreground mb-6">Please sign in to access this page</p>
          <SignInButton fallbackRedirectUrl="/" forceRedirectUrl="/">
            <Button className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              Sign In with Gmail
            </Button>
          </SignInButton>
        </div>
      </SignedOut>
    </>
  )
}