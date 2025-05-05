import Image from 'next/image'
import React from 'react'

const ImagesAndDescriptionDisplay = () => {
  return (
    <div className='mt-5 w-90p-mx-auto'>
        {/* IMADE DISPLAY */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='w-full h-[30rem] rounded-2xl'>
                <Image
                src={`/declutter1.png`}
                width={300}
                height={220}
                alt='declutter-media-representation'
                className="object-cover w-full h-full 
                group-hover:scale-105 transition-all 
                ease-linear duration-300 rounded-2xl"
                />
            </div>

            <div className='md:hidden grid grid-cols-2'>

            </div>
        </div>
        
    </div>
  )
}

export default ImagesAndDescriptionDisplay