import { ReactNode } from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AdminSidebar } from './AdminSidebar'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

interface AdminLayoutProps {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider collapsedWidth={64}>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b bg-card flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-xl font-semibold bg-gradient-spiritual bg-clip-text text-transparent">
                  Spiritual Shop Admin
                </h1>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Shop
                </Link>
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}