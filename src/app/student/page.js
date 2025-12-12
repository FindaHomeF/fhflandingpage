'use client'
import { useState, useEffect } from 'react'
import { Building2, Package, Users, Wallet, TrendingUp, AlertCircle, User } from 'lucide-react'
import StatsCard from '../admin/components/StatsCard'
import { useStudent } from './context/StudentContext'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const mockStats = {
  totalProperties: 0,
  totalItems: 0,
  totalRoommates: 0,
  pendingPayments: '₦0.00',
  completedPayments: '₦0.00',
}

export default function StudentDashboard() {
  const { studentProfile, isProfileComplete, canManageListings, isStudentIdUploaded, isStudentIdApproved } = useStudent()
  const [stats, setStats] = useState(mockStats)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load stats from localStorage
    if (typeof window !== 'undefined') {
      const properties = JSON.parse(localStorage.getItem('properties') || '[]')
      const items = JSON.parse(localStorage.getItem('items') || '[]')
      const roommates = JSON.parse(localStorage.getItem('roommates') || '[]')
      
      // Filter by student ID (in real app, this would be from auth)
      const studentProperties = properties.filter(p => p.studentId === 'student-1' || !p.studentId)
      const studentItems = items.filter(i => i.studentId === 'student-1' || !i.studentId)
      const studentRoommates = roommates.filter(r => r.studentId === 'student-1' || !r.studentId)
      
      setStats({
        totalProperties: studentProperties.length,
        totalItems: studentItems.length,
        totalRoommates: studentRoommates.length,
        pendingPayments: '₦0.00',
        completedPayments: '₦0.00',
      })
    }
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="px-6">  
      <div className="space-y-6 pb-6">
        {/* Alert for incomplete profile */}
        {(!isProfileComplete || !canManageListings) && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-orange-900 mb-1">Profile Setup Required</h3>
                {!isProfileComplete && (
                  <p className="text-sm text-orange-700 mb-2">
                    Complete your profile to unlock all features. Add your profile picture, description, and location.
                  </p>
                )}
                {!isStudentIdUploaded && isProfileComplete && (
                  <p className="text-sm text-orange-700 mb-2">
                    Upload your Student ID card to create listings and use roommate finder.
                  </p>
                )}
                {!isStudentIdApproved && isStudentIdUploaded && (
                  <p className="text-sm text-orange-700 mb-2">
                    Your Student ID is pending admin approval. You'll be able to create listings once approved.
                  </p>
                )}
                <Link href="/student/profile">
                  <Button className="mt-2 bg-orange-600 hover:bg-orange-700">
                    Complete Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="My Properties"
            value={stats.totalProperties}
            color="blue"
            icon={Building2}
            change={0}
          />
          <StatsCard
            title="My Items"
            value={stats.totalItems}
            color="orange"
            icon={Package}
            change={0}
          />
          <StatsCard
            title="Roommate Listings"
            value={stats.totalRoommates}
            color="green"
            icon={Users}
            change={0}
          />
          <StatsCard
            title="Total Payments"
            value={stats.completedPayments}
            color="blue"
            icon={Wallet}
            change={0}
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {canManageListings ? (
            <>
              <Link href="/student/properties/add">
                <div className="bg-white border border-black10 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <Building2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Add Property</h3>
                  <p className="text-sm text-gray-600">List a new apartment or property</p>
                </div>
              </Link>
              
              <Link href="/student/decluttering/add">
                <div className="bg-white border border-black10 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <Package className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Sell Item</h3>
                  <p className="text-sm text-gray-600">List an item for decluttering</p>
                </div>
              </Link>
              
              <Link href="/student/roommate-finder">
                <div className="bg-white border border-black10 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Roommate Finder</h3>
                  <p className="text-sm text-gray-600">Find or offer roommates</p>
                </div>
              </Link>
            </>
          ) : (
            <>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 opacity-60 cursor-not-allowed">
                <Building2 className="w-8 h-8 text-gray-400 mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-gray-500">Add Property</h3>
                <p className="text-sm text-gray-500">Complete profile and Student ID verification required</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 opacity-60 cursor-not-allowed">
                <Package className="w-8 h-8 text-gray-400 mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-gray-500">Sell Item</h3>
                <p className="text-sm text-gray-500">Complete profile and Student ID verification required</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 opacity-60 cursor-not-allowed">
                <Users className="w-8 h-8 text-gray-400 mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-gray-500">Roommate Finder</h3>
                <p className="text-sm text-gray-500">Complete profile and Student ID verification required</p>
              </div>
            </>
          )}
          
          <Link href="/student/payments">
            <div className="bg-white border border-black10 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
              <Wallet className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">View Payments</h3>
              <p className="text-sm text-gray-600">Check payment & transaction history</p>
            </div>
          </Link>
          
          <Link href="/student/profile">
            <div className="bg-white border border-black10 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
              <User className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">Manage Profile</h3>
              <p className="text-sm text-gray-600">Update your profile information</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

