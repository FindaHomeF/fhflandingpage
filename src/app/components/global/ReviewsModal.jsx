"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FaStar, FaRegStar } from 'react-icons/fa'
import Image from 'next/image'

const ReviewsModal = ({ isOpen, onClose, reviews = [], rating = 0, title = "Reviews" }) => {
  // Mock reviews data if none provided
  const mockReviews = reviews.length > 0 ? reviews : [
    {
      id: 1,
      userName: "Sarah Johnson",
      userAvatar: "/declutter1.png",
      rating: 5,
      comment: "Excellent service! Very professional and responsive. Highly recommended.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      userName: "Michael Chen",
      userAvatar: "/declutter1.png",
      rating: 4,
      comment: "Great experience overall. Fast response time and quality work.",
      date: "1 month ago"
    },
    {
      id: 3,
      userName: "Emily Rodriguez",
      userAvatar: "/declutter1.png",
      rating: 5,
      comment: "Amazing service provider! Exceeded my expectations.",
      date: "2 months ago"
    },
    {
      id: 4,
      userName: "David Williams",
      userAvatar: "/declutter1.png",
      rating: 4,
      comment: "Good quality service at reasonable prices. Would use again.",
      date: "3 months ago"
    }
  ]

  const displayReviews = reviews.length > 0 ? reviews : mockReviews

  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                i < Math.floor(rating) ? (
                  <FaStar key={i} size={18} className="text-secondary" />
                ) : (
                  <FaRegStar key={i} size={18} className="text-secondary" />
                )
              ))}
            </div>
            <span className="text-lg font-semibold">{rating}</span>
            <span className="text-gray-600">({displayReviews.length} reviews)</span>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {displayReviews.map((review) => (
            <div key={review.id} className="border-b border-black33 pb-6 last:border-0">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-lighterGray overflow-hidden flex-shrink-0">
                  <Image
                    src={review.userAvatar || "/declutter1.png"}
                    alt={review.userName}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-base">{review.userName}</h4>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          i < review.rating ? (
                            <FaStar key={i} size={14} className="text-secondary" />
                          ) : (
                            <FaRegStar key={i} size={14} className="text-secondary" />
                          )
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-2">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ReviewsModal

