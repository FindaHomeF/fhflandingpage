'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, Eye, Edit, Trash2, TrendingUp, Calendar, Filter } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'

// Mock listings data
const mockListings = {
  active: [
    {
      id: '1',
      title: 'Wooden Study Desk',
      category: 'Furniture',
      price: 15000,
      image: '/declutter1.png',
      views: 245,
      inquiries: 12,
      createdAt: '2024-01-15',
      status: 'active'
    },
    {
      id: '2',
      title: 'Textbook Bundle',
      category: 'Books',
      price: 5000,
      image: '/declutter1.png',
      views: 89,
      inquiries: 5,
      createdAt: '2024-01-20',
      status: 'active'
    }
  ],
  pending: [
    {
      id: '3',
      title: 'Office Chair',
      category: 'Furniture',
      price: 12000,
      image: '/declutter1.png',
      views: 0,
      inquiries: 0,
      createdAt: '2024-01-25',
      status: 'pending'
    }
  ],
  sold: [
    {
      id: '4',
      title: 'Laptop Stand',
      category: 'Electronics',
      price: 8000,
      image: '/declutter1.png',
      views: 156,
      inquiries: 8,
      createdAt: '2023-12-10',
      soldDate: '2024-01-05',
      status: 'sold'
    }
  ]
}

export default function MyListingsPage() {
  const [listings, setListings] = useState(mockListings)

  const ListingCard = ({ listing }) => (
    <div className="border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href={`/decluttering/${listing.id}`}
          className="w-full md:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100"
        >
          <Image
            src={listing.image}
            alt={listing.title}
            width={128}
            height={128}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1 min-w-0">
              <Link
                href={`/decluttering/${listing.id}`}
                className="font-semibold text-lg hover:text-primary transition-colors line-clamp-1"
              >
                {listing.title}
              </Link>
              <p className="text-sm text-gray-500">{listing.category}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${
              listing.status === 'active' ? 'bg-green-100 text-green-800' :
              listing.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {listing.status}
            </span>
          </div>

          <p className="text-2xl font-bold text-primary mb-4">₦{listing.price.toLocaleString()}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600">{listing.views} views</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600">{listing.inquiries} inquiries</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600">{listing.createdAt}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link href={`/decluttering/${listing.id}`}>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View
              </Button>
            </Link>
            <Button variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
            {listing.status === 'active' && (
              <Link href={`/my-listings/${listing.id}/analytics`}>
                <Button variant="outline" size="sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-8 md:py-12">
        <div className="w-[90%] mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Listings</h1>
              <p className="text-gray-600">Manage your marketplace listings</p>
            </div>
            <Link href="/decluttering/post">
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                List New Item
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="active" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="active">
                Active ({listings.active.length})
              </TabsTrigger>
              <TabsTrigger value="pending">
                Pending ({listings.pending.length})
              </TabsTrigger>
              <TabsTrigger value="sold">
                Sold ({listings.sold.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4">
              {listings.active.length === 0 ? (
                <div className="text-center py-12 border border-gray-200 rounded-lg">
                  <p className="text-gray-500 mb-4">No active listings</p>
                  <Link href="/decluttering/post">
                    <Button>Create Your First Listing</Button>
                  </Link>
                </div>
              ) : (
                listings.active.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))
              )}
            </TabsContent>

            <TabsContent value="pending" className="space-y-4">
              {listings.pending.length === 0 ? (
                <div className="text-center py-12 border border-gray-200 rounded-lg">
                  <p className="text-gray-500">No pending listings</p>
                </div>
              ) : (
                listings.pending.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))
              )}
            </TabsContent>

            <TabsContent value="sold" className="space-y-4">
              {listings.sold.length === 0 ? (
                <div className="text-center py-12 border border-gray-200 rounded-lg">
                  <p className="text-gray-500">No sold listings yet</p>
                </div>
              ) : (
                listings.sold.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
