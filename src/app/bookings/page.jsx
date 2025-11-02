'use client'
import { useState } from 'react'
import { Calendar, Clock, MapPin, User, Phone, X, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { toast } from 'sonner'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'

// Mock bookings data
const mockBookings = {
  upcoming: [
    {
      id: 'BK-001',
      serviceName: 'Professional Cleaning',
      providerName: 'Elite Cleaners',
      providerPhone: '08012345678',
      date: '2024-12-20',
      time: '10:00 AM',
      duration: '2 hours',
      address: '123 Campus Road, North Gate',
      status: 'confirmed',
      amount: '₦5,000'
    },
    {
      id: 'BK-002',
      serviceName: 'Plumbing Service',
      providerName: 'Flow Plumbers',
      providerPhone: '08023456789',
      date: '2024-12-22',
      time: '02:00 PM',
      duration: '3 hours',
      address: '456 Student Hall, South Gate',
      status: 'pending',
      amount: '₦7,000'
    }
  ],
  past: [
    {
      id: 'BK-003',
      serviceName: 'Moving Service',
      providerName: 'Swift Movers',
      providerPhone: '08034567890',
      date: '2024-11-15',
      time: '09:00 AM',
      duration: '4 hours',
      address: '789 Hostel Block, West Gate',
      status: 'completed',
      amount: '₦15,000',
      rating: 5
    }
  ]
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState(mockBookings)
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState(null)

  const handleCancel = (bookingId) => {
    setSelectedBooking(bookingId)
    setCancelDialogOpen(true)
  }

  const confirmCancel = () => {
    setBookings({
      ...bookings,
      upcoming: bookings.upcoming.filter(b => b.id !== selectedBooking)
    })
    toast.success('Booking cancelled successfully')
    setCancelDialogOpen(false)
    setSelectedBooking(null)
  }

  const handleReschedule = (bookingId) => {
    toast.info('Reschedule feature coming soon')
  }

  const BookingCard = ({ booking, isUpcoming }) => (
    <div className="border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-lg mb-1">{booking.serviceName}</h3>
              <p className="text-gray-600">with {booking.providerName}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
              booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {booking.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span>{new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <span>{booking.time} ({booking.duration})</span>
            </div>
            <div className="flex items-center gap-2 md:col-span-2">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">{booking.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-400" />
              <span>{booking.providerPhone}</span>
            </div>
            <div>
              <span className="font-semibold">Amount: </span>
              <span className="text-primary">{booking.amount}</span>
            </div>
          </div>
        </div>

        {isUpcoming && (
          <div className="flex flex-col gap-2 md:w-32">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleReschedule(booking.id)}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Reschedule
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCancel(booking.id)}
              className="flex items-center gap-2 text-red-600 border-red-200 hover:bg-red-50"
            >
              <X className="h-4 w-4" />
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">Manage your service bookings</p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-2">
            <TabsTrigger value="upcoming">
              Upcoming ({bookings.upcoming.length})
            </TabsTrigger>
            <TabsTrigger value="past">
              Past ({bookings.past.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4 mt-6">
            {bookings.upcoming.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">No upcoming bookings</p>
              </div>
            ) : (
              bookings.upcoming.map((booking) => (
                <BookingCard key={booking.id} booking={booking} isUpcoming={true} />
              ))
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-4 mt-6">
            {bookings.past.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">No past bookings</p>
              </div>
            ) : (
              bookings.past.map((booking) => (
                <BookingCard key={booking.id} booking={booking} isUpcoming={false} />
              ))
            )}
          </TabsContent>
        </Tabs>

        {/* Cancel Confirmation Dialog */}
        <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cancel Booking?</DialogTitle>
            </DialogHeader>
            <p className="text-gray-600 mb-4">
              Are you sure you want to cancel this booking? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setCancelDialogOpen(false)}>
                Keep Booking
              </Button>
              <Button onClick={confirmCancel} className="bg-red-600 hover:bg-red-700">
                Cancel Booking
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  )
}

