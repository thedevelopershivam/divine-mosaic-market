import { AdminLayout } from '@/components/admin/AdminLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Package, Layers, Building2, FileText, Users, ShoppingCart, TrendingUp, DollarSign } from 'lucide-react'

const stats = [
  {
    title: 'Total Products',
    value: '1,234',
    change: '+12%',
    trend: 'up',
    icon: Package,
  },
  {
    title: 'Categories',
    value: '45',
    change: '+3%',
    trend: 'up',
    icon: Layers,
  },
  {
    title: 'Brands',
    value: '89',
    change: '+8%',
    trend: 'up',
    icon: Building2,
  },
  {
    title: 'Blog Posts',
    value: '156',
    change: '+23%',
    trend: 'up',
    icon: FileText,
  },
  {
    title: 'Total Orders',
    value: '2,345',
    change: '+18%',
    trend: 'up',
    icon: ShoppingCart,
  },
  {
    title: 'Revenue',
    value: '$45,678',
    change: '+15%',
    trend: 'up',
    icon: DollarSign,
  },
]

const recentActivity = [
  { action: 'New product added', item: 'Crystal Healing Stone Set', time: '2 minutes ago' },
  { action: 'Category updated', item: 'Meditation Tools', time: '15 minutes ago' },
  { action: 'Blog post published', item: 'Benefits of Crystal Healing', time: '1 hour ago' },
  { action: 'Brand added', item: 'Sacred Stones Co.', time: '2 hours ago' },
  { action: 'Product updated', item: 'Amethyst Cluster', time: '3 hours ago' },
]

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your admin dashboard. Here's an overview of your store.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Badge variant="secondary" className="text-green-600">
                    {stat.change}
                  </Badge>
                  <span>from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest changes and updates in your store.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {activity.action}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.item}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks and shortcuts.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid gap-2">
                <a href="/admin/products" className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted transition-colors">
                  <Package className="h-4 w-4" />
                  <span className="text-sm">Add New Product</span>
                </a>
                <a href="/admin/categories" className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted transition-colors">
                  <Layers className="h-4 w-4" />
                  <span className="text-sm">Manage Categories</span>
                </a>
                <a href="/admin/blogs" className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted transition-colors">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Write Blog Post</span>
                </a>
                <a href="/admin/brands" className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted transition-colors">
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm">Add New Brand</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}