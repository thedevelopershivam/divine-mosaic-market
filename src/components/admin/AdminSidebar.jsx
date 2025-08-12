
import { Link, useLocation } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Package,
  Layers,
  Tag,
  Settings,
  Search,
  Building2,
  FileText,
  Globe,
  DollarSign,
  Ruler,
  Languages,
  Layers3,
} from 'lucide-react'

const navigation = [
  {
    title: 'Overview',
    items: [
      { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Catalog',
    items: [
      { name: 'Products', href: '/admin/products', icon: Package },
      { name: 'Categories', href: '/admin/categories', icon: Layers },
      { name: 'Sub Categories', href: '/admin/subcategories', icon: Layers3 },
      { name: 'Brands', href: '/admin/brands', icon: Building2 },
      { name: 'Tags', href: '/admin/tags', icon: Tag },
      { name: 'Attributes', href: '/admin/attributes', icon: Settings },
    ],
  },
  {
    title: 'Content',
    items: [
      { name: 'Blogs', href: '/admin/blogs', icon: FileText },
    ],
  },
  {
    title: 'Localization',
    items: [
      { name: 'Languages', href: '/admin/languages', icon: Languages },
      { name: 'Countries', href: '/admin/countries', icon: Globe },
      { name: 'Currencies', href: '/admin/currencies', icon: DollarSign },
      { name: 'Units', href: '/admin/units', icon: Ruler },
    ],
  },
]

export function AdminSidebar() {
  const location = useLocation()

  return (
    <Sidebar className="border-r">
      <div className="p-4 border-b">
        <SidebarTrigger />
        <h2 className="text-lg font-semibold ml-2 inline-block">Admin Panel</h2>
      </div>
      
      <SidebarContent>
        {navigation.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.href}
                    >
                      <Link to={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
