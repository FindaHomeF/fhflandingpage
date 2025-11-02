"use client"
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { FaStar, FaRegClock } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const AgentProfile = () => {
    const router = useRouter()
    const agentData = {
        name: "John Doe",
        role: "Property Agent",
        location: "South Gate",
        rating: 4.7,
        totalListings: 120,
        responseTime: "2 hours",
        phone: "+234 123 456 7890",
        verified: true
    };

    return (
        <div className='w-full bg-grayBg rounded-2xl p-4 md:p-6'>
            <h3 className='text-xl font-bold mb-6'>
                Listed By:
            </h3>

            <div className='flex flex-col items-start md:items-center justify-between gap-6'>
                {/* Agent Info */}
                <div className='flex items-center gap-4 md:gap-6'>
                    <div className='relative w-20 h-20 md:w-28 md:h-28 bg-lighterGray rounded-full flex-shrink-0'>
                        <div className='absolute bottom-1 right-5 md:right-7 w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary border-2 border-white'/>
                    </div>

                    <div>
                        <h4 className='font-bold text-lg md:text-xl'>
                            {agentData.name}
                        </h4>

                        <p className='text-sm text-tertiary mt-1'>
                            {agentData.role}
                        </p>

                        <div className='mt-3 flex flex-wrap items-center gap-3 md:gap-4'>
                            <div className="flex items-center gap-2">
                                <MapPin strokeWidth={1.5} size={18} color='var(--secondary)'/>  
                                <p className="text-black/60 text-sm md:text-base">
                                    {agentData.location}
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <FaStar className="text-secondary" size={18} />
                                <p className="text-black/60 text-sm md:text-base">
                                    {agentData.rating} <span className='font-medium'>({agentData.totalListings} Listings)</span>
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <FaRegClock size={18} color='var(--secondary)'/>
                                <p className="text-black/60 text-sm md:text-base">
                                    Responds within {agentData.responseTime}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className=' w-full'>
                                <Button className='bg-primary hover:bg-primary/90 h-12 px-6 text-base flex items-center justify-center'
                                onClick={() => router.push('/messages')}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Contact Agent
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default AgentProfile;

