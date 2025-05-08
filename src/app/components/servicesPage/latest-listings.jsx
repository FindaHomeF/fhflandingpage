import React from 'react'
import { SeeAll } from '../global/Buttons/ButtonGS'
import ServiceCard from './service-card'

const LatestListings = () => {
  return (
    <div>
        <div className='mt-12 md:mt-16 w-[90%] mx-auto'>
            <div>
                <h3 className='font-semibold text-center mt-12 md:mt-16 
                text-2xl md:text-4xl lg:text-[40px]'>
                Latest Listings</h3>
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
                <SeeAll/>
            </div>

        </div>
    </div>
  )
}

export default LatestListings