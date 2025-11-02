import React from 'react'
import ServiceCard from './service-card'
import { SeeAll } from '../global/Buttons/ButtonGS'

const AvailableServices = () => {
  return (
    <div className='w-[90%] mx-auto'>
        <div className='text-center space-y-3'>
            <h3 className='font-semibold text-center mt-12 md:mt-16 
            text-2xl md:text-4xl lg:text-[40px]'>
                Trusted Service Providers</h3>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Connect with verified professionals for all your accommodation needs. Quality work, fair pricing, backed by student reviews.
            </p>
        </div>

        <div className="overflow-x-auto w-full">
          <div className='mt-6 md:mt-7
          w-full flex flex-shrink-0 md:grid md:grid-cols-4
          gap-3 md:gap-5'>
            {[...Array(4)].map((_, index) => (
            <ServiceCard key={index} />
            ))}
          </div>
        </div>
        
        <div className="mx-auto w-full flex justify-center items-center mt-5 md:mt-12">
          <SeeAll cta='/service/all'/>
        </div>

    </div>
  )
}

export default AvailableServices