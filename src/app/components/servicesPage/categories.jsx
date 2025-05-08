import React from 'react'
import { SeeAll } from '../global/Buttons/ButtonGS'
import ServiceCard from './service-card'
import { Button } from '@/components/ui/button'

const Categories = () => {
  return (
    <div>
        <div className='mt-12 w-[90%] mx-auto'>
          <div>
            <h3 className='font-semibold text-center mt-12 md:mt-16 
            text-2xl md:text-4xl lg:text-[40px]'>
            Categories
            </h3>

            <div className="overflow-x-auto">
              <div className="mt-8 flex flex-nowrap justify-center items-center gap-3">
                <Button className="cat-btn text-white !bg-secondary">Cleaning Services</Button>
                <Button className="cat-btn">Moving & Transportation</Button>
                <Button className="cat-btn">Electrical Work</Button>
                <Button className="cat-btn">Plumbing Services</Button>
                <Button className="cat-btn">Carpentry & Furniture</Button>
                <Button className="cat-btn">Interior Decoration</Button>
                <Button className="cat-btn">Others</Button>
              </div>
            </div>
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

export default Categories