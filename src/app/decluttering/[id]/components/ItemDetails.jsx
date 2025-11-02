"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ButtonGS } from '@/app/components/global/Buttons/ButtonGS'
import WishlistBtn from '@/app/components/global/Buttons/WishlistBtn'
import { useCart } from '@/contexts/CartContext'
import { MapPin, ShoppingCart, MessageCircle } from 'lucide-react'
import { FaRegStar, FaStar, FaRegClock } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import ReviewsModal from '@/app/components/global/ReviewsModal'

const ItemDetails = ({ itemId }) => {
    const router = useRouter()
    const { addToCart } = useCart();
    const [showReviews, setShowReviews] = useState(false)

    const itemData = {
        id: itemId,
        itemId: itemId,
        title: "Wooden Study Desk",
        category: "Furniture",
        price: 15000,
        condition: "Good",
        location: "North Gate, Akure",
        seller: "John Doe",
        sellerRating: 4.5,
        sellerReviews: 25,
        postedDate: "2 days ago",
        description: `High-quality wooden study desk in excellent condition. Perfect for students. 
        Comes with a spacious drawer and smooth surface. Dimensions: 120cm x 60cm x 75cm. 
        No scratches or damages. Ready for immediate pickup.`,
        image: '/declutter1.png'
    };

    const handleAddToCart = () => {
        addToCart({
            ...itemData,
            type: 'decluttered'
        });
    };

    return (
        <div className='w-full lg:w-3/6 mt-3'>
            {/* Verified Badge and Wishlist */}
            <div className='flex-itc-jub w-full relative'>
                <div className='flex items-center gap-2'>
                    <div className='w-fit bg-secondary text-white px-4 py-1 rounded-full text-sm'>
                        {itemData.condition}
                    </div>
                    <div className='w-fit bg-primary/10 text-primary px-4 py-1 rounded-full text-sm'>
                        Available
                    </div>
                </div>

                <div className='relative'>
                    <WishlistBtn 
                        item={itemData} 
                        itemType="decluttered" 
                        background='bg-secondary'
                    />
                </div>
            </div>

            {/* Item Title */}
            <h2 className='mt-4 font-bold text-3xl lg:text-4xl'>
                {itemData.title}
            </h2>

            {/* Category */}
            <div className='mt-3 flex-itc gap-1'>
                <p className='md:text-lg text-tertiary'>
                    {itemData.category}
                </p>
            </div>

            {/* Price */}
            <div className='mt-5 font-bold text-2xl md:text-3xl text-primary'>
                ₦ {itemData.price.toLocaleString()}
            </div>

            {/* Description */}
            <div className='mt-5'>
                <h3 className='text-xl font-semibold mb-2'>Description</h3>
                <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                    {itemData.description}
                </p>
            </div>
            
            <hr className="my-5 border-t border-black33" />

            {/* Item Details */}
            <div className='space-y-3'>
                <h3 className='text-xl md:text-2xl font-bold'>
                    Item Information
                </h3>

                <div className='grid grid-cols-2 gap-4 text-sm'>
                    <div>
                        <p className='text-gray-500'>Condition</p>
                        <p className='font-semibold'>{itemData.condition}</p>
                    </div>
                    <div>
                        <p className='text-gray-500'>Location</p>
                        <p className='font-semibold'>{itemData.location}</p>
                    </div>
                    <div>
                        <p className='text-gray-500'>Posted</p>
                        <p className='font-semibold'>{itemData.postedDate}</p>
                    </div>
                    <div>
                        <p className='text-gray-500'>Category</p>
                        <p className='font-semibold'>{itemData.category}</p>
                    </div>
                </div>
            </div>

            {/* Seller Profile */}
            <div>
                <h3 className='text-xl md:text-2xl font-bold mt-7'>
                    Seller Information
                </h3>

                <div className='w-full px-3 md:px-5 flex-itc gap-x-3 mt-4'>
                    <div className='relative w-20 h-20 md:w-24 md:h-24 bg-lighterGray rounded-full'>
                        <div className='absolute bottom-0 md:bottom-[0.4rem] right-4 w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary'/>
                    </div>

                    <div>
                        <h3 className='mt-2 font-semibold text-base'>
                            {itemData.seller}
                        </h3>

                        <h3 className='text-xs md:text-sm w-fit text-tertiary'>
                            Individual Seller
                        </h3>

                        <div className='mt-3 w-full flex-itc gap-2 md:gap-3'>
                            <div className="flex-itc gap-1 md:gap-2">
                                <MapPin strokeWidth={1.5} size={20} color='var(--secondary)'/>  
                                <p className="text-black/60 text-sm">
                                    {itemData.location}
                                </p>
                            </div>

                            <button
                                onClick={() => setShowReviews(true)}
                                className="flex-itc gap-1 md:gap-2 hover:opacity-80 transition-opacity cursor-pointer"
                            >
                                <FaStar className="text-secondary" strokeWidth={1.5} size={20} />
                                <p className="text-black/60 text-sm">
                                    {itemData.sellerRating} <span className=''>({itemData.sellerReviews} Reviews)</span>
                                </p>
                            </button>
                        </div>

                        <div className="mt-2 flex-itc gap-1 md:gap-2">
                            <FaRegClock strokeWidth={1.5} size={20} color='var(--secondary)'/>
                            <p className="text-black/60 text-sm max-md:font-medium">
                                Responds within 1 hour
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-5 border-t border-black33" />

            {/* Action Buttons */}
            <div className='flex gap-x-3'>
                <Button
                    onClick={handleAddToCart}
                    className='!w-fit px-7 bg-secondary hover:bg-secondary/90 flex items-center gap-2'
                >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                </Button>
                <Button 
                    onClick={() => router.push('/messages')}
                    className='!w-fit px-7 bg-primary flex items-center gap-2'
                >
                    <MessageCircle className="w-4 h-4" />
                    Contact Seller
                </Button>
            </div>

            <ReviewsModal
                isOpen={showReviews}
                onClose={() => setShowReviews(false)}
                rating={itemData.sellerRating}
                title={`Reviews for ${itemData.seller}`}
            />
        </div>
    );
};

export default ItemDetails;

