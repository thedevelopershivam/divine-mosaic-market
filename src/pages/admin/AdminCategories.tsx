import { AdminLayout } from '@/components/admin/AdminLayout'
import { CategoryManager } from '@/components/admin/CategoryManager'

const AdminCategories = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <CategoryManager />
      </div>
    </AdminLayout>
  )
}

export default AdminCategories