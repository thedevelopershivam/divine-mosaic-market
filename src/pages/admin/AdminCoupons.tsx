import { AdminLayout } from '@/components/admin/AdminLayout'
import { CouponManager } from '@/components/admin/CouponManager'

const AdminCoupons = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <CouponManager />
      </div>
    </AdminLayout>
  )
}

export default AdminCoupons