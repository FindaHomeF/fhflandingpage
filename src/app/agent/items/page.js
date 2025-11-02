'use client'
import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search, Plus, AlertCircle, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import AdminTableWithBulk from '../../admin/components/AdminTableWithBulk'
import { toast } from 'sonner'
import { useAgent } from '../context/AgentContext'
import Link from 'next/link'

export default function AgentItemsPage() {
  const router = useRouter()
  const { canManageItems, isProfileComplete, isIdUploaded, isIdApproved } = useAgent()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)
  const [items, setItems] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const allItems = JSON.parse(localStorage.getItem('items') || '[]')
      // Filter by agent ID
      const agentItems = allItems.filter(i => i.agentId === 'agent-1' || !i.agentId)
      setItems(agentItems)
    }
  }, [])

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = (item.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (item.category || '').toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter
      const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter
      
      return matchesSearch && matchesStatus && matchesCategory
    })
  }, [items, searchTerm, statusFilter, categoryFilter])

  const paginationData = useMemo(() => {
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = filteredItems.slice(startIndex, endIndex)
    
    return {
      totalPages,
      startIndex,
      endIndex,
      currentItems,
      totalItems: filteredItems.length
    }
  }, [filteredItems, currentPage, itemsPerPage])

  const columns = useMemo(() => [
    { key: 'id', label: 'ID', width: 'w-20' },
    { key: 'title', label: 'Title', width: 'w-32', truncate: true },
    { key: 'category', label: 'Category', width: 'w-28', truncate: true },
    { key: 'price', label: 'Price', width: 'w-24' },
    { key: 'condition', label: 'Condition', width: 'w-24' },
    { key: 'inventory', label: 'Inventory', width: 'w-24' },
    { key: 'status', label: 'Status', width: 'w-24' }
  ], [])

  const statusBadgeStyles = useMemo(() => ({
    'Active': 'bg-[#4EC50E] text-white',
    'Pending': 'bg-[#C5B60E] text-white',
    'Inactive': 'bg-[#E01A1A] text-white'
  }), [])

  const getStatusBadge = useCallback((status) => {
    const className = statusBadgeStyles[status] || 'bg-gray-100 text-gray-800'
    return (
      <Badge className={className}>
        {status}
      </Badge>
    )
  }, [statusBadgeStyles])

  const handleRowClick = useCallback((item) => {
    router.push(`/agent/items/${item.id}`)
  }, [router])

  const pageNumbers = useMemo(() => {
    const pages = []
    const { totalPages } = paginationData
    
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }
    }
    
    return pages
  }, [paginationData.totalPages, currentPage])

  const handleBulkAction = useCallback((action, selectedIds) => {
    try {
      const allItems = JSON.parse(localStorage.getItem('items') || '[]')
      
      switch (action) {
        case 'delete':
          const remaining = allItems.filter(i => !selectedIds.includes(i.id))
          localStorage.setItem('items', JSON.stringify(remaining))
          setItems(remaining.filter(i => i.agentId === 'agent-1' || !i.agentId))
          toast.success(`${selectedIds.length} item(s) deleted successfully`)
          break
          
        case 'activate':
          allItems.forEach(i => {
            if (selectedIds.includes(i.id)) {
              i.status = 'Active'
            }
          })
          localStorage.setItem('items', JSON.stringify(allItems))
          setItems(allItems.filter(i => i.agentId === 'agent-1' || !i.agentId))
          toast.success(`${selectedIds.length} item(s) activated`)
          break
          
        case 'deactivate':
          allItems.forEach(i => {
            if (selectedIds.includes(i.id)) {
              i.status = 'Inactive'
            }
          })
          localStorage.setItem('items', JSON.stringify(allItems))
          setItems(allItems.filter(i => i.agentId === 'agent-1' || !i.agentId))
          toast.success(`${selectedIds.length} item(s) deactivated`)
          break
          
        case 'export':
          const selectedItems = allItems.filter(i => selectedIds.includes(i.id))
          const csvContent = [
            ['ID', 'Title', 'Category', 'Price', 'Condition', 'Status', 'Inventory'].join(','),
            ...selectedItems.map(i => [
              i.id,
              i.title,
              i.category,
              i.price,
              i.condition,
              i.status,
              i.inventory || 0
            ].join(','))
          ].join('\n')
          
          const blob = new Blob([csvContent], { type: 'text/csv' })
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = `items_${new Date().toISOString().split('T')[0]}.csv`
          a.click()
          window.URL.revokeObjectURL(url)
          toast.success(`${selectedIds.length} item(s) exported`)
          break
          
        default:
          toast.error('Unknown action')
      }
    } catch (error) {
      console.error('Bulk action error:', error)
      toast.error('Failed to perform bulk action')
    }
  }, [])

  if (!canManageItems) {
    return (
      <div className="space-y-6 px-6 pb-6">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <Lock className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-orange-900 mb-3">Access Restricted</h2>
              <p className="text-orange-700 mb-4">
                To manage decluttered items, you need to complete the following:
              </p>
              <ul className="space-y-2 mb-6 text-orange-700">
                {!isProfileComplete && (
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Complete your profile (profile picture, description, location)</span>
                  </li>
                )}
                {!isIdUploaded && isProfileComplete && (
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Upload your ID document (Student ID or NIN/Driver's License)</span>
                  </li>
                )}
                {!isIdApproved && isIdUploaded && (
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Wait for admin approval of your ID document</span>
                  </li>
                )}
              </ul>
              <Link href="/agent/profile">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Go to Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">My Decluttered Items</h1>
        <Button 
          className="bg-primary text-white rounded-lg px-6 py-6"
          onClick={() => router.push('/agent/items/add')}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Item
        </Button>
      </div>

      <div className="bg-white rounded-lg">
        <div className="flex gap-2 justify-end items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black33" />
            <Input
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="pl-10 border-black10 border"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32 bg-black10 border-none shadow-none rounded-lg">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-36 bg-black10 border-none shadow-none rounded-lg">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Furniture">Furniture</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Books">Books</SelectItem>
              <SelectItem value="Appliances">Appliances</SelectItem>
              <SelectItem value="Room Decor">Room Decor</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <AdminTableWithBulk
          columns={columns}
          data={paginationData.currentItems}
          currentPage={currentPage}
          handlePageChange={setCurrentPage}
          handlePrevious={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          handleNext={() => currentPage < paginationData.totalPages && setCurrentPage(currentPage + 1)}
          paginationData={{
            currentItems: paginationData.currentItems,
            startIndex: paginationData.startIndex,
            endIndex: paginationData.endIndex,
            totalItems: paginationData.totalItems,
            totalPages: paginationData.totalPages
          }}
          pageNumbers={pageNumbers}
          statusBadgeStyles={statusBadgeStyles}
          getStatusBadge={getStatusBadge}
          onRowClick={handleRowClick}
          bulkActions={['activate', 'deactivate', 'delete', 'export']}
          onBulkAction={handleBulkAction}
        />
      </div>
    </div>
  )
}

