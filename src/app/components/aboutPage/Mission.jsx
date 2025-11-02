import React from 'react'

const Mission = () => {
  return (
    <div className="w-full bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-20">
        <div className="mx-auto w-[90%] md:w-5/6">
            <div className="flex flex-col gap-y-5 md:flex-row justify-between items-center md:gap-x-14">
                <h3 className='section-head md:w-3/6 text-left'>Our Mission: Making Student Housing Stress-Free</h3>

                <div className='md:w-3/6 space-y-4'>
                    <p className='section-para font-semibold text-lg'>
                      To be the #1 trusted platform for student accommodation in Akure—where every listing is verified, 
                      every service provider is reliable, and every student finds a home they love.
                    </p>
                    <p className='text-gray-600'>
                      We're building more than just a housing platform. We're creating a community where FUTA students 
                      can confidently find accommodations, access quality services, and connect with affordable essentials—all 
                      while knowing they're supported every step of the way.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission