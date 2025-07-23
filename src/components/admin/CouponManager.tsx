import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useGetCouponsQuery, useCreateCouponMutation, useUpdateCouponMutation, useDeleteCouponMutation, Coupon } from '@/store/adminApi'
import { Plus, Edit, Trash2, Copy } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function CouponManager() {
  const { data: coupons = [], isLoading } = useGetCouponsQuery()
  const [createCoupon] = useCreateCouponMutation()
  const [updateCoupon] = useUpdateCouponMutation()
  const [deleteCoupon] = useDeleteCouponMutation()
  const { toast } = useToast()

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null)
  const [formData, setFormData] = useState({
    code: '',
    type: 'percentage' as const,
    value: 0,
    minOrderValue: 0,
    maxDiscount: 0,
    usageLimit: 0,
    isActive: true,
    validFrom: '',
    validTo: ''
  })

  const resetForm = () => {
    const now = new Date()
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000)
    const nextMonth = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)
    
    setFormData({
      code: '',
      type: 'percentage',
      value: 0,
      minOrderValue: 0,
      maxDiscount: 0,
      usageLimit: 0,
      isActive: true,
      validFrom: tomorrow.toISOString().split('T')[0],
      validTo: nextMonth.toISOString().split('T')[0]
    })
    setEditingCoupon(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const couponData = {
        ...formData,
        validFrom: new Date(formData.validFrom).toISOString(),
        validTo: new Date(formData.validTo).toISOString()
      }

      if (editingCoupon) {
        await updateCoupon({
          id: editingCoupon.id,
          data: couponData
        }).unwrap()
        toast({ title: 'Coupon updated successfully' })
      } else {
        await createCoupon(couponData).unwrap()
        toast({ title: 'Coupon created successfully' })
      }
      
      setIsDialogOpen(false)
      resetForm()
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save coupon', variant: 'destructive' })
    }
  }

  const handleEdit = (coupon: Coupon) => {
    setEditingCoupon(coupon)
    setFormData({
      code: coupon.code,
      type: coupon.type,
      value: coupon.value,
      minOrderValue: coupon.minOrderValue || 0,
      maxDiscount: coupon.maxDiscount || 0,
      usageLimit: coupon.usageLimit || 0,
      isActive: coupon.isActive,
      validFrom: new Date(coupon.validFrom).toISOString().split('T')[0],
      validTo: new Date(coupon.validTo).toISOString().split('T')[0]
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this coupon?')) {
      try {
        await deleteCoupon(id).unwrap()
        toast({ title: 'Coupon deleted successfully' })
      } catch (error) {
        toast({ title: 'Error', description: 'Failed to delete coupon', variant: 'destructive' })
      }
    }
  }

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    toast({ title: 'Coupon code copied to clipboard' })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  if (isLoading) {
    return <div>Loading coupons...</div>
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Coupon Management</CardTitle>
              <CardDescription>Create and manage discount coupons</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={resetForm} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Coupon
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>
                    {editingCoupon ? 'Edit Coupon' : 'Create New Coupon'}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="code">Coupon Code</Label>
                      <Input
                        id="code"
                        value={formData.code}
                        onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                        placeholder="e.g., SAVE20"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">Discount Type</Label>
                      <Select value={formData.type} onValueChange={(value: any) => setFormData({ ...formData, type: value })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="percentage">Percentage</SelectItem>
                          <SelectItem value="fixed">Fixed Amount</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="value">
                        {formData.type === 'percentage' ? 'Percentage (%)' : 'Amount (₹)'}
                      </Label>
                      <Input
                        id="value"
                        type="number"
                        min="0"
                        max={formData.type === 'percentage' ? 100 : undefined}
                        value={formData.value}
                        onChange={(e) => setFormData({ ...formData, value: Number(e.target.value) })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="minOrderValue">Min Order Value (₹)</Label>
                      <Input
                        id="minOrderValue"
                        type="number"
                        min="0"
                        value={formData.minOrderValue}
                        onChange={(e) => setFormData({ ...formData, minOrderValue: Number(e.target.value) })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="maxDiscount">Max Discount (₹)</Label>
                      <Input
                        id="maxDiscount"
                        type="number"
                        min="0"
                        value={formData.maxDiscount}
                        onChange={(e) => setFormData({ ...formData, maxDiscount: Number(e.target.value) })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="usageLimit">Usage Limit</Label>
                      <Input
                        id="usageLimit"
                        type="number"
                        min="0"
                        value={formData.usageLimit}
                        onChange={(e) => setFormData({ ...formData, usageLimit: Number(e.target.value) })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="validFrom">Valid From</Label>
                      <Input
                        id="validFrom"
                        type="date"
                        value={formData.validFrom}
                        onChange={(e) => setFormData({ ...formData, validFrom: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="validTo">Valid To</Label>
                      <Input
                        id="validTo"
                        type="date"
                        value={formData.validTo}
                        onChange={(e) => setFormData({ ...formData, validTo: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="isActive"
                      checked={formData.isActive}
                      onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                    />
                    <Label htmlFor="isActive">Active</Label>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingCoupon ? 'Update' : 'Create'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Valid Period</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coupons.map((coupon) => (
                <TableRow key={coupon.id}>
                  <TableCell className="font-mono">
                    <div className="flex items-center gap-2">
                      {coupon.code}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopyCode(coupon.code)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {coupon.type === 'percentage' ? 'Percentage' : 'Fixed'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {coupon.type === 'percentage' ? `${coupon.value}%` : `₹${coupon.value}`}
                  </TableCell>
                  <TableCell>
                    {coupon.usedCount}/{coupon.usageLimit || '∞'}
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{formatDate(coupon.validFrom)}</div>
                      <div className="text-muted-foreground">to {formatDate(coupon.validTo)}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={coupon.isActive ? 'default' : 'secondary'}>
                      {coupon.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(coupon)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(coupon.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}