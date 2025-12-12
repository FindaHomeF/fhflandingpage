'use client'
import React, { useState, useEffect } from 'react'
import { Search, Users, MapPin, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useStudent } from '../context/StudentContext'
import Link from 'next/link'

const mockRoommates = []

export default function RoommateFinderPage() {
  const { canManageListings } = useStudent()
  const [roommates, setRoommates] = useState(mockRoommates)
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('all')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load properties with roommate finder enabled
      const properties = JSON.parse(localStorage.getItem('properties') || '[]')
      const roommateListings = properties.filter(p => 
        p.roommatesNeeded && p.roommatesNeeded > 0 && p.status === 'Active'
      )
      setRoommates(roommateListings)
    }
  }, [])

  const filteredRoommates = roommates.filter(r => {
    const matchesSearch = 
      r.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.location?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = locationFilter === 'all' || r.location === locationFilter
    return matchesSearch && matchesLocation
  })

  if (!canManageListings) {
    return (
      <div className="px-6">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 text-center">
          <Users className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-orange-900 mb-3">Access Restricted</h2>
          <p className="text-orange-700 mb-4">
            Please complete your profile and verify your Student ID to use Roommate Finder.
          </p>
          <Link href="/student/profile">
            <Button className="bg-orange-600 hover:bg-orange-700">
              Go to Profile
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 px-6 pb-12">
      {/* Header */}
      <div className="bg-white py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Roommate Finder</h1>
            <p className="text-sm text-gray-600 mt-1">Find or offer roommates for shared accommodations</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black33" />
            <Input
              placeholder="Search by property title or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-black10"
            />
          </div>
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-40 bg-black10 border-none">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="North Gate, Akure">North Gate</SelectItem>
              <SelectItem value="South Gate, Akure">South Gate</SelectItem>
              <SelectItem value="East Gate, Akure">East Gate</SelectItem>
              <SelectItem value="West Gate, Akure">West Gate</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Roommate Listings */}
      {filteredRoommates.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No roommate listings found</h3>
          <p className="text-gray-600 mb-6">Be the first to create a roommate finder listing by adding a property with roommate finder enabled</p>
          <Link href="/student/properties/add">
            <Button className="bg-primary hover:bg-primary/90">
              Add Property
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoommates.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-sm border border-black10 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                {listing.images && listing.images[0] && (
                  <img 
                    src={listing.images[0]} 
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-semibold">
                  Roommate Finder
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{listing.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {listing.location}
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Users className="w-4 h-4 mr-1" />
                  {listing.roommatesNeeded} roommate(s) needed
                  {listing.totalCapacity && ` (${listing.currentRoommates || 0}/${listing.totalCapacity} capacity)`}
                </div>
                {listing.roommatePreferences && (
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                    Preferences: {listing.roommatePreferences}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{listing.price}</span>
                  <Link href={`/sp/${listing.id}`}>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

