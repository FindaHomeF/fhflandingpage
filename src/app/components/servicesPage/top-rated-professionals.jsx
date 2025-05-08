import React from 'react'
import ServiceCard from './service-card'
import { SeeAll } from '../global/Buttons/ButtonGS'

const TopRatedProfessionals = () => {
  return (
    <div className='mt-10 w-full bg-darkBlue py-10 md:py-12'>
        <div className='w-[90%] mx-auto'>
            <div>
                <h3 className='font-semibold text-center mt-12 md:mt-16 
                text-2xl md:text-4xl lg:text-[40px] text-white'>
                    Top-Rated Professionals</h3>
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

            <div className="mx-auto w-full flex justify-center 
            items-center mt-5 md:mt-12">
                <SeeAll
                whiteBorder
                />
            </div>

        </div>
    </div>
  )
}

export default TopRatedProfessionals