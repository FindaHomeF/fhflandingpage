'use client'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Star, ArrowLeft } from 'lucide-react'
import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'
import { toast } from 'sonner'

export default function ReviewSubmissionPage() {
  const params = useParams()
  const router = useRouter()
  const { type, id } = params

  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [review, setReview] = useState('')
  const [title, setTitle] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (rating === 0) {
      toast.error('Please select a rating')
      return
    }

    if (!review.trim()) {
      toast.error('Please write a review')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Review submitted successfully!')
      setIsSubmitting(false)
      router.push(`/${type}/${id}`)
    }, 1000)
  }

  const getTypeLabel = () => {
    switch (type) {
      case 'property': return 'Property'
      case 'service': return 'Service'
      case 'item': return 'Item'
      default: return 'Item'
    }
  }

  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
      <Header />
      <main className="min-h-screen py-8 md:py-12">
        <div className="w-[90%] mx-auto max-w-3xl">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Write a Review</h1>
          <p className="text-gray-600 mb-8">
            Share your experience with this {getTypeLabel().toLowerCase()}
          </p>

          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 space-y-6">
            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Overall Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-10 h-10 ${
                        star <= (hoverRating || rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
                {rating > 0 && (
                  <span className="ml-4 text-lg font-semibold text-gray-700">
                    {rating} {rating === 1 ? 'star' : 'stars'}
                  </span>
                )}
              </div>
            </div>

            {/* Review Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Review Title (Optional)
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give your review a title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Review Text */}
            <div>
              <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
                Your Review <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Share your experience with this item/property/service..."
                rows={8}
                className="resize-none"
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                Minimum 50 characters ({review.length}/50)
              </p>
            </div>

            {/* Guidelines */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-2">Review Guidelines</h3>
              <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                <li>Be honest and specific about your experience</li>
                <li>Focus on facts and avoid personal attacks</li>
                <li>Include details about what you liked or didn't like</li>
                <li>Reviews must be at least 50 characters long</li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={isSubmitting || rating === 0 || review.length < 50}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
