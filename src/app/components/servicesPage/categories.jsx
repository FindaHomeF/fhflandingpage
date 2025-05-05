import React from 'react'
import { SeeAll } from '../global/Buttons/ButtonGS'
import ServiceCard from './service-card'

const Categories = () => {
  return (
    <div>
        <div className='mt-12 w-[90%] mx-auto'>
            <div>
                <h3 className='font-semibold text-center mt-12 md:mt-16 
                text-2xl md:text-4xl lg:text-[40px]'>
                Categories</h3>
            </div>

            <div className='mt-6 md:mt-10 lg:mt-14
            w-full grid grid-cols-2 md:grid-cols-4
            gap-5'>
            {[...Array(4)].map((_, index) => (
            <ServiceCard key={index} />
            ))}
            </div>

            <div className="mx-auto w-full flex justify-center items-center mt-5 md:mt-12">
                <SeeAll/>
            </div>

        </div>
    </div>
  )
}

export default Categories