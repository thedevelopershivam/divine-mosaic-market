import { NavLink, useLocation } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import {
  LayoutDashboard,
  Package,
  FolderTree,
  Tags,
  Search,
  Ticket,
  CreditCard,
  Users,
  Settings,
  BarChart3
} from 'lucide-react'

const adminMenuItems = [
  { title: 'Dashboard', url: '/admin', icon: LayoutDashboard },
  { title: 'Products', url: '/admin/products', icon: Package },
  { title: 'Categories', url: '/admin/categories', icon: FolderTree },
  { title: 'Attributes', url: '/admin/attributes', icon: Tags },
  { title: 'SEO Settings', url: '/admin/seo', icon: Search },
  { title: 'Coupons', url: '/admin/coupons', icon: Ticket },
  { title: 'Orders', url: '/admin/orders', icon: CreditCard },
  { title: 'Customers', url: '/admin/customers', icon: Users },
  { title: 'Analytics', url: '/admin/analytics', icon: BarChart3 },
  { title: 'Settings', url: '/admin/settings', icon: Settings },
]

export function AdminSidebar() {
  const { collapsed } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => {
    if (path === '/admin') {
      return currentPath === '/admin'
    }
    return currentPath.startsWith(path)
  }

  const getNavClassName = (path: string) => {
    return isActive(path) 
      ? 'bg-primary text-primary-foreground font-medium' 
      : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
  }

  return (
    <Sidebar className={collapsed ? 'w-16' : 'w-64'} collapsible>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-semibold">
            {!collapsed && 'Admin Panel'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavClassName(item.url)}
                      end={item.url === '/admin'}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}