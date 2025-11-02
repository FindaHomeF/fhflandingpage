'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Edit, Trash2, MoreVertical } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

// Mock reviews data
const mockReviews = {
  published: [
    {
      id: '1',
      type: 'property',
      itemId: '1',
      itemName: 'Modern 2-Bedroom Apartment',
      itemImage: '/declutter1.png',
      rating: 5,
      title: 'Excellent property',
      review: 'This is an amazing apartment in a great location. Highly recommended!',
      date: '2024-01-15',
      helpfulCount: 12
    },
    {
      id: '2',
      type: 'service',
      itemId: '2',
      itemName: 'Professional Cleaning Service',
      itemImage: '/declutter1.png',
      rating: 4,
      title: 'Good service',
      review: 'The cleaning service was thorough and professional. Would use again.',
      date: '2024-01-10',
      helpfulCount: 5
    }
  ],
  pending: [
    {
      id: '3',
      type: 'item',
      itemId: '3',
      itemName: 'Wooden Bed Frame',
      itemImage: '/declutter1.png',
      rating: 4,
      title: '',
      review: 'Great quality for the price',
      date: '2024-01-20'
    }
  ]
}

export default function MyReviewsPage() {
  const [reviews, setReviews] = useState(mockReviews)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedReview, setSelectedReview] = useState(null)

  const handleDelete = (reviewId) => {
    setSelectedReview(reviewId)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    // Remove from all tabs
    setReviews({
      published: reviews.published.filter(r => r.id !== selectedReview),
      pending: reviews.pending.filter(r => r.id !== selectedReview)
    })
    setDeleteDialogOpen(false)
    setSelectedReview(null)
  }

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  const ReviewCard = ({ review }) => (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex gap-4 mb-4">
        <Link
          href={`/${review.type}/${review.itemId}`}
          className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100"
        >
          <Image
            src={review.itemImage}
            alt={review.itemName}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <Link
            href={`/${review.type}/${review.itemId}`}
            className="font-semibold text-lg hover:text-primary transition-colors"
          >
            {review.itemName}
          </Link>
          <div className="flex items-center gap-4 mt-2">
            {renderStars(review.rating)}
            <span className="text-sm text-gray-500">{review.date}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            <Edit className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleDelete(review.id)}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {review.title && (
        <h3 className="font-semibold text-lg mb-2">{review.title}</h3>
      )}
      <p className="text-gray-700 mb-4">{review.review}</p>

      {review.helpfulCount !== undefined && (
        <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
          <span>👍 {review.helpfulCount} people found this helpful</span>
        </div>
      )}
    </div>
  )

  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-8 md:py-12">
        <div className="w-[90%] mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Reviews</h1>

          <Tabs defaultValue="published" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="published">
                Published ({reviews.published.length})
              </TabsTrigger>
              <TabsTrigger value="pending">
                Pending ({reviews.pending.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="published" className="space-y-4">
              {reviews.published.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No published reviews yet</p>
                  <Link href="/decluttering">
                    <Button variant="outline">Browse Items</Button>
                  </Link>
                </div>
              ) : (
                reviews.published.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))
              )}
            </TabsContent>

            <TabsContent value="pending" className="space-y-4">
              {reviews.pending.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No pending reviews</p>
                </div>
              ) : (
                reviews.pending.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Review?</DialogTitle>
          </DialogHeader>
          <p className="text-gray-600 mb-4">
            Are you sure you want to delete this review? This action cannot be undone.
          </p>
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={confirmDelete}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
