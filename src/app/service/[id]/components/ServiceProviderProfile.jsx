"use client"
import { useState } from 'react'
import { useWishlist } from '@/contexts/WishlistContext'
import { MapPin, CheckCircle, Calendar, MessageCircle } from 'lucide-react'
import { FaStar, FaRegClock, FaRegStar } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { IoBookmarks, IoBookmarksOutline } from 'react-icons/io5'
import ServiceBookingCalendar from '@/app/components/services/ServiceBookingCalendar'
import ServiceRequestForm from '@/app/components/services/ServiceRequestForm'
import ReviewsModal from '@/app/components/global/ReviewsModal'

const ServiceProviderProfile = ({ serviceId }) => {
    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const [showBooking, setShowBooking] = useState(false)
    const [showRequestForm, setShowRequestForm] = useState(false)
    const [showReviews, setShowReviews] = useState(false)

    const serviceData = {
        id: serviceId,
        serviceId: serviceId,
        name: "John Doe",
        providerName: "John Doe",
        category: "Professional Carpenter",
        specialization: "Custom Furniture & Repairs",
        location: "South Gate, Akure",
        rating: 4.8,
        reviews: 156,
        responseTime: "2 hours",
        yearsExperience: 8,
        completedJobs: 234,
        price: 10000,
        verified: true,
        availability: "Available Now",
        description: `Experienced professional carpenter with over 8 years of expertise in custom furniture making, 
        repairs, and installations. Specialized in student-friendly furniture solutions. Quality work guaranteed 
        with affordable pricing. Available for consultations and quotes. Fast response time and reliable service.`,
        services: [
            "Custom Furniture Making",
            "Furniture Repairs",
            "Furniture Assembly",
            "Cabinet Installation",
            "Door & Window Repairs"
        ],
        workingHours: "Mon-Sat: 8AM - 6PM",
        image: '/declutter1.png'
    };

    const inWishlist = isInWishlist(serviceData.id, 'service');

    const handleWishlistToggle = () => {
        const wishlistItem = {
            ...serviceData,
            type: 'service',
            title: serviceData.name
        };

        if (inWishlist) {
            removeFromWishlist(serviceData.id, 'service');
        } else {
            addToWishlist(wishlistItem);
        }
    };

    return (
        <div className="md:mt-5 w-90p-mx-auto">
            <div className='flex flex-col lg:flex-row gap-x-10 lg:mt-8 gap-y-8'>
                {/* Left Column - Profile Image & Basic Info */}
                <div className='w-full lg:w-2/6'>
                    <div className='sticky top-24'>
                        {/* Profile Image */}
                        <div className='relative w-full aspect-square max-w-md mx-auto bg-lighterGray rounded-2xl overflow-hidden'>
                            <div className='absolute bottom-4 right-4 w-6 h-6 rounded-full bg-primary border-4 border-white'/>
                            {/* Placeholder for actual image */}
                        </div>

                        {/* Quick Stats */}
                        <div className='mt-6 grid grid-cols-2 gap-4'>
                            <div className='bg-grayBg p-4 rounded-lg text-center'>
                                <p className='text-2xl font-bold text-primary'>{serviceData.completedJobs}</p>
                                <p className='text-xs text-gray-600'>Jobs Completed</p>
                            </div>
                            <div className='bg-grayBg p-4 rounded-lg text-center'>
                                <p className='text-2xl font-bold text-primary'>{serviceData.yearsExperience}</p>
                                <p className='text-xs text-gray-600'>Years Experience</p>
                            </div>
                        </div>

                        {/* Wishlist Button */}
                        <button
                            onClick={handleWishlistToggle}
                            className='w-full mt-4 py-3 border-2 border-secondary rounded-lg flex items-center justify-center gap-2 hover:bg-secondary/5 transition-colors'
                        >
                            {inWishlist ? (
                                <>
                                    <IoBookmarks size={24} className='text-secondary' />
                                    <span className='font-semibold text-secondary'>Saved</span>
                                </>
                            ) : (
                                <>
                                    <IoBookmarksOutline size={24} className='text-secondary' />
                                    <span className='font-semibold text-secondary'>Save Provider</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Right Column - Details */}
                <div className='w-full lg:w-4/6'>
                    {/* Verified Badge */}
                    {serviceData.verified && (
                        <div className='w-fit bg-secondary text-white px-4 py-1 rounded-full text-sm flex items-center gap-2'>
                            <CheckCircle size={16} />
                            Verified Provider
                        </div>
                    )}

                    {/* Provider Name & Category */}
                    <h1 className='mt-4 font-bold text-3xl lg:text-4xl'>
                        {serviceData.name}
                    </h1>

                    <h2 className='mt-2 text-xl text-tertiary font-medium'>
                        {serviceData.category}
                    </h2>

                    <p className='text-base text-gray-600'>
                        {serviceData.specialization}
                    </p>

                    {/* Location & Rating */}
                    <div className='mt-4 flex flex-wrap items-center gap-4'>
                        <div className='flex-itc gap-2'>
                            <MapPin strokeWidth={1.5} size={20} color='var(--secondary)'/>
                            <p className='text-base'>
                                {serviceData.location}
                            </p>
                        </div>

                        <button
                            onClick={() => setShowReviews(true)}
                            className='flex-itc gap-2 hover:opacity-80 transition-opacity cursor-pointer'
                        >
                            <div className='flex-itc gap-1'>
                                {[...Array(5)].map((_, i) => (
                                    i < Math.floor(serviceData.rating) ? (
                                        <FaStar key={i} size={16} color='var(--secondary)'/>
                                    ) : (
                                        <FaRegStar key={i} size={16} color='var(--secondary)'/>
                                    )
                                ))}
                            </div>
                            <p className='text-base font-medium'>
                                {serviceData.rating} ({serviceData.reviews} reviews)
                            </p>
                        </button>
                    </div>

                    {/* Availability & Response Time */}
                    <div className='mt-4 flex flex-wrap items-center gap-4 text-sm'>
                        <div className='flex-itc gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full'>
                            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                            <span>{serviceData.availability}</span>
                        </div>
                        <div className='flex-itc gap-2'>
                            <FaRegClock size={16} color='var(--secondary)'/>
                            <span>Responds within {serviceData.responseTime}</span>
                        </div>
                    </div>

                    {/* Starting Price */}
                    <div className='mt-6 bg-grayBg p-4 rounded-lg'>
                        <p className='text-sm text-gray-600'>Starting Price</p>
                        <p className='text-2xl font-bold text-primary mt-1'>
                            ₦ {serviceData.price.toLocaleString()}
                        </p>
                        <p className='text-xs text-gray-500 mt-1'>*Final price may vary based on service requirements</p>
                    </div>

                    {/* Description */}
                    <div className='mt-6'>
                        <h3 className='text-xl font-bold mb-3'>About this Provider</h3>
                        <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                            {serviceData.description}
                        </p>
                    </div>

                    <hr className="my-6 border-t border-black33" />

                    {/* Services Offered */}
                    <div>
                        <h3 className='text-xl font-bold mb-3'>Services Offered</h3>
                        <div className='flex flex-wrap gap-2'>
                            {serviceData.services.map((service, index) => (
                                <div key={index} className='bg-primary/10 text-primary px-4 py-2 rounded-full text-sm'>
                                    {service}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div className='mt-6'>
                        <h3 className='text-xl font-bold mb-3'>Working Hours</h3>
                        <div className='flex items-center gap-2 text-base'>
                            <Calendar size={20} color='var(--secondary)' />
                            <span>{serviceData.workingHours}</span>
                        </div>
                    </div>

                    <hr className="my-6 border-t border-black33" />

                    {/* Action Buttons */}
                    <div className='flex flex-col sm:flex-row gap-3'>
                        <Button 
                            onClick={() => setShowBooking(true)}
                            className='flex-1 bg-primary hover:bg-primary/90 h-12 text-base flex items-center justify-center gap-2'
                        >
                            <Calendar className="w-5 h-5" />
                            Book Service
                        </Button>
                        <Button 
                            onClick={() => setShowRequestForm(true)}
                            variant="outline"
                            className='flex-1 bg-secondary hover:bg-secondary/90 h-12 text-base flex items-center justify-center gap-2 border-secondary text-white'
                        >
                            <MessageCircle className="w-5 h-5" />
                            Request Quote
                        </Button>
                    </div>

                    {/* Service Booking Calendar Modal */}
                    <ServiceBookingCalendar
                        serviceId={serviceId}
                        serviceName={serviceData.name}
                        providerName={serviceData.providerName}
                        isOpen={showBooking}
                        onClose={() => setShowBooking(false)}
                    />

                    {/* Service Request Form Modal */}
                    <ServiceRequestForm
                        serviceId={serviceId}
                        serviceName={serviceData.name}
                        providerName={serviceData.providerName}
                        isOpen={showRequestForm}
                        onClose={() => setShowRequestForm(false)}
                    />

                    {/* Reviews Modal */}
                    <ReviewsModal
                        isOpen={showReviews}
                        onClose={() => setShowReviews(false)}
                        rating={serviceData.rating}
                        title={`Reviews for ${serviceData.name}`}
                    />

                    {/* Trust Badges */}
                    <div className='mt-6 flex flex-wrap gap-4 text-sm'>
                        <div className='flex items-center gap-2 text-gray-600'>
                            <CheckCircle size={18} className='text-green-500' />
                            <span>Background Verified</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-600'>
                            <CheckCircle size={18} className='text-green-500' />
                            <span>Identity Confirmed</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-600'>
                            <CheckCircle size={18} className='text-green-500' />
                            <span>Licensed Professional</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceProviderProfile;

