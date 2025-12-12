'use client'
import { useState, useEffect } from 'react'
import { Briefcase, Wallet, TrendingUp, AlertCircle, User } from 'lucide-react'
import StatsCard from '../admin/components/StatsCard'
import { useArtisan } from './context/ArtisanContext'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const mockStats = {
  totalServices: 0,
  activeServices: 0,
  pendingPayments: '₦0.00',
  completedPayments: '₦0.00',
}

export default function ArtisanDashboard() {
  const { artisanProfile, isProfileComplete, canManageServices, isNinUploaded, isNinApproved } = useArtisan()
  const [stats, setStats] = useState(mockStats)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load stats from localStorage
    if (typeof window !== 'undefined') {
      const services = JSON.parse(localStorage.getItem('services') || '[]')
      
      // Filter by artisan ID (in real app, this would be from auth)
      const artisanServices = services.filter(s => s.artisanId === 'artisan-1' || !s.artisanId)
      
      setStats({
        totalServices: artisanServices.length,
        activeServices: artisanServices.filter(s => s.status === 'Active').length,
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
        {(!isProfileComplete || !canManageServices) && (
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
                {!isNinUploaded && isProfileComplete && (
                  <p className="text-sm text-orange-700 mb-2">
                    Upload your NIN (National Identification Number) document to create service listings.
                  </p>
                )}
                {!isNinApproved && isNinUploaded && (
                  <p className="text-sm text-orange-700 mb-2">
                    Your NIN is pending admin approval. You'll be able to create service listings once approved.
                  </p>
                )}
                <Link href="/artisan/profile">
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
            title="Total Services"
            value={stats.totalServices}
            color="blue"
            icon={Briefcase}
            change={0}
          />
          <StatsCard
            title="Active Services"
            value={stats.activeServices}
            color="green"
            icon={TrendingUp}
            change={0}
          />
          <StatsCard
            title="Pending Payments"
            value={stats.pendingPayments}
            color="blue"
            icon={Wallet}
            change={0}
          />
          <StatsCard
            title="Completed Payments"
            value={stats.completedPayments}
            color="green"
            icon={TrendingUp}
            change={0}
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {canManageServices ? (
            <Link href="/artisan/services/add">
              <div className="bg-white border border-black10 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                <Briefcase className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Create New Service</h3>
                <p className="text-sm text-gray-600">List a new service offering</p>
              </div>
            </Link>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 opacity-60 cursor-not-allowed">
              <Briefcase className="w-8 h-8 text-gray-400 mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-gray-500">Create New Service</h3>
              <p className="text-sm text-gray-500">Complete profile and NIN verification required</p>
            </div>
          )}
          
          <Link href="/artisan/services">
            <div className="bg-white border border-black10 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
              <Briefcase className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">View My Services</h3>
              <p className="text-sm text-gray-600">Manage your service listings</p>
            </div>
          </Link>
          
          <Link href="/artisan/profile">
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

