"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaRegStar, FaStar, FaRegClock, FaBath, FaWalking, FaRegLightbulb } from 'react-icons/fa'
import { MdBed } from 'react-icons/md'
import { MapPin, CheckCircle, FileText, Flag, Shield, Users, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import WishlistBtn from '@/app/components/global/Buttons/WishlistBtn'
import ShareButton from '@/app/components/global/Buttons/ShareButton'
import LeaseAgreement from '@/app/components/properties/LeaseAgreement'
import ReportListing from '@/app/components/properties/ReportListing'
import SafetyTipsModal from '@/app/components/properties/SafetyTipsModal'
import ReviewsModal from '@/app/components/global/ReviewsModal'

const PropertyDetails = ({ propertyId = "1" }) => {
    const router = useRouter()
    const [showLease, setShowLease] = useState(false)
    const [showReport, setShowReport] = useState(false)
    const [showSafety, setShowSafety] = useState(false)
    const [showReviews, setShowReviews] = useState(false)
    const propertyData = {
        id: propertyId,
        propertyId: propertyId,
        title: "Marble Lodge",
        location: "North Gate, Akure",
        category: "Single Room",
        price: 200000,
        rating: 4.0,
        reviews: 45,
        verified: true,
        availability: "Available Now",
        bedrooms: 2,
        bathrooms: 1,
        electricity: "10h",
        walkingDistance: "3 mins",
        postedDate: "3 hours ago",
        roommatesNeeded: 2,
        currentRoommates: 1,
        totalCapacity: 3,
        description: `Spacious and well-furnished single room apartment located in the heart of North Gate. 
        Perfect for students with easy access to campus. Features include modern amenities, reliable power supply, 
        and a peaceful environment. Walking distance to the main gate and close to local shops and eateries.`,
        image: '/listing1.png'
    };

    return (
        <div className='w-full lg:w-1/2 mt-3'>
            {/* Verified Badge, Wishlist, and Compare */}
            <div className='flex-itc-jub w-full relative'>
                <div className='flex items-center gap-2'>
                    <div className='w-fit bg-secondary text-white px-4 py-1 rounded-full text-sm flex items-center gap-2'>
                        <CheckCircle size={16} />
                        Verified Property
                    </div>
                    <div className='w-fit bg-green-50 text-green-700 px-4 py-1 rounded-full text-sm'>
                        {propertyData.availability}
                    </div>
                </div>

                <div className='relative'>
                    <WishlistBtn 
                        item={propertyData} 
                        itemType="apartment" 
                        background='bg-secondary'
                    />
                </div>
            </div>

            {/* Property Title */}
            <h2 className='mt-4 font-bold text-3xl lg:text-4xl'>
                {propertyData.title}
            </h2>

            {/* Category */}
            <h3 className='mt-2 text-xl text-tertiary font-medium'>
                {propertyData.category}
            </h3>

            {/* Location & Rating */}
            <div className='mt-4 flex flex-wrap items-center gap-4'>
                <div className='flex-itc gap-2'>
                    <MapPin strokeWidth={1.5} size={20} color='var(--secondary)'/>
                    <p className='text-base'>
                        {propertyData.location}
                    </p>
                </div>

                        <button 
                            onClick={() => setShowReviews(true)}
                            className='flex-itc gap-2 hover:opacity-80 transition-opacity cursor-pointer'
                        >
                            <div className='flex-itc gap-1'>
                                {[...Array(5)].map((_, i) => (
                                    i < Math.floor(propertyData.rating) ? (
                                        <FaStar key={i} size={16} color='var(--secondary)'/>
                                    ) : (
                                        <FaRegStar key={i} size={16} color='var(--secondary)'/>
                                    )
                                ))}
                            </div>
                            <p className='text-base font-medium'>
                                {propertyData.rating} ({propertyData.reviews} reviews)
                            </p>
                        </button>
            </div>

            {/* Price */}
            <div className='mt-6 bg-grayBg p-4 rounded-lg'>
                <p className='text-sm text-gray-600'>Rent per annum</p>
                <p className='text-2xl font-bold text-primary mt-1'>
                    ₦ {propertyData.price.toLocaleString()}
                </p>
                <p className='text-xs text-gray-500 mt-1'>*Service charge may apply</p>
            </div>

            {/* Description */}
            <div className='mt-6'>
                <h3 className='text-xl font-bold mb-3'>Property Description</h3>
                <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                    {propertyData.description}
                </p>
            </div>
            
            <hr className="my-6 border-t border-black33" />

            {/* Property Details */}
            <div className='space-y-3'>
                <h3 className='text-xl font-bold'>
                    Property Details
                </h3>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='flex items-center gap-3 bg-grayBg p-3 rounded-lg'>
                        <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                            <MdBed className="text-primary" size={20} /> 
                        </div>
                        <div>
                            <p className='text-xs text-gray-500'>Bedrooms</p>
                            <p className='font-semibold'>{propertyData.bedrooms}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 bg-grayBg p-3 rounded-lg'>
                        <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                            <FaBath className="text-primary" size={18} /> 
                        </div>
                        <div>
                            <p className='text-xs text-gray-500'>Bathrooms</p>
                            <p className='font-semibold'>{propertyData.bathrooms}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 bg-grayBg p-3 rounded-lg'>
                        <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                            <FaRegLightbulb className="text-primary" size={18} /> 
                        </div>
                        <div>
                            <p className='text-xs text-gray-500'>Electricity</p>
                            <p className='font-semibold'>{propertyData.electricity}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 bg-grayBg p-3 rounded-lg'>
                        <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                            <FaWalking className="text-primary" size={18} /> 
                        </div>
                        <div>
                            <p className='text-xs text-gray-500'>To Gate</p>
                            <p className='font-semibold'>{propertyData.walkingDistance}</p>
                        </div>
                    </div>
                    {propertyData.roommatesNeeded && (
                        <div className='flex items-center gap-3 bg-grayBg p-3 rounded-lg'>
                            <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                                <Users className="text-primary" size={18} /> 
                            </div>
                            <div>
                                <p className='text-xs text-gray-500'>Roommates Needed</p>
                                <p className='font-semibold'>{propertyData.roommatesNeeded} of {propertyData.totalCapacity}</p>
                                <p className='text-xs text-gray-400'>{propertyData.currentRoommates} current</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className='flex items-center gap-2 mt-4 text-sm text-gray-600'>
                    <FaRegClock size={16} color='var(--secondary)'/>
                    <span>Posted {propertyData.postedDate}</span>
                </div>
            </div>

            
            {/* Action Buttons */}
            <div className='mt-6 space-y-4'>

                <div className='grid grid-cols-2 gap-3'>
                    <Button
                        onClick={() => setShowLease(true)}
                        variant="outline"
                        className='h-12 flex items-center justify-center gap-2'
                    >
                        <FileText className="w-4 h-4" />
                        View Lease
                    </Button>
                    <Button
                        onClick={() => setShowSafety(true)}
                        variant="outline"
                        className='h-12 flex items-center justify-center gap-2'
                    >
                        <Shield className="w-4 h-4" />
                        Safety Tips
                    </Button>
                    <ShareButton 
                        shareUrl={`/sp/${propertyId}`}
                        className='w-full h-12 rounded-md'
                        variant="outline"   
                        buttonText="Share Property"
                    />
                    <Button
                        onClick={() => setShowReport(true)}
                        variant="outline"
                        className='h-12 flex items-center justify-center gap-2 border-red-200 text-red-600 hover:bg-red-50'
                    >
                        <Flag className="w-4 h-4" />
                        Report
                    </Button>

                </div>

                
            </div>

            {/* Modals */}
            <LeaseAgreement
                propertyId={propertyId}
                propertyTitle={propertyData.title}
                isOpen={showLease}
                onClose={() => setShowLease(false)}
            />
            <ReportListing
                propertyId={propertyId}
                propertyTitle={propertyData.title}
                isOpen={showReport}
                onClose={() => setShowReport(false)}
            />
            <SafetyTipsModal
                isOpen={showSafety}
                onClose={() => setShowSafety(false)}
            />
            <ReviewsModal
                isOpen={showReviews}
                onClose={() => setShowReviews(false)}
                rating={propertyData.rating}
                title={`Reviews for ${propertyData.title}`}
            />
        </div>
    );
};

export default PropertyDetails;
