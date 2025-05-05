import { ButtonGS } from '@/app/components/global/Buttons/ButtonGS'
import { MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

const ImagesAndDescriptionDisplay = () => {
  return (
    <>
    <div className='md:mt-5 w-90p-mx-auto flex-itc-juc'>
        
        
        {/* IMADE DISPLAY */}
        <div className='w-full lg:max-w-[80vw] mx-auto'>
            <div className='mt-8 w-full h-[30rem] flex flex-col lg:flex-row gap-5'>
                <div className='w-full lg:basis-[55%] h-[18rem] lg:h-[30rem] rounded-2xl'>
                    <Image
                    src={`/declutter1.png`}
                    width={300}
                    height={400}
                    alt='declutter-media-representation'
                    className="object-cover w-full h-full
                    group-hover:scale-105 transition-all 
                    ease-linear duration-300 rounded-2xl"
                    />
                </div>

                <div className='h-[30rem] no-scrollbar
                max-lg:flex max-lg:overflow-x-auto
                lg:grid grid-cols-1 lg:grid-cols-2 gap-3 
                '>
                    {[...Array(4)].map((_, index) => (
                        <Image
                        key={index}
                        src={`/declutter1.png`}
                        width={300}
                        height={200}
                        alt='declutter-media-representation'
                        className=" w-[8rem] h-[8rem] 
                        md:w-[14.5rem] md:h-[14.5rem] object-cover
                        group-hover:scale-105 transition-all 
                        ease-linear duration-300 rounded-2xl"
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>

            {/* DESC DISPLAY */}
    <div className='mt-8 w-90p-mx-auto lg:max-w-[80vw] mx-auto'>
        <div className='bg-secondary w-fit py-1 text-white px-4 rounded-full'>
            Verified
        </div>

        <h2 className='mt-4 font-bold text-3xl lg:text-4xl'>
            Marble Lodge, Northgate
        </h2>

        <div className='mt-3 flex-itc gap-1'>
            <MapPin strokeWidth={1.5} size={20}/>
            <p className='md:text-lg'>
                North Gate, Akure
            </p>
        </div>

        <div className='mt-3 flex-itc gap-4'>
            <div className='flex-itc gap-1'>
                <FaStar strokeWidth={1.5} size={20} color='#FF9500'/>
                <FaStar strokeWidth={1.5} size={20} color='#FF9500'/>
                <FaStar strokeWidth={1.5} size={20} color='#FF9500'/>
                <FaStar strokeWidth={1.5} size={20} color='#FF9500'/>
                <FaRegStar strokeWidth={1.5} size={20} color='#FF9500'/>
            </div>

            <p className='md:text-lg'>
                4/5
            </p>
        </div>

        <div className='mt-5 font-bold text-2xl md:text-3xl'>
            ₦ 200,000
        </div>

        <div className='mt-5'>
            <p className='text-sm md:text-base lg:text-lg text-black/60'>
            Lorem ipsum bla blah blah. Lorem ipsum blah blah blah.
             Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
             Lorem ipsum bla blah blah. Lorem ipsum blah blah blah. 
             Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
             Lorem ipsum bla blah blah. Lorem ipsum blah blah blah. 
             Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
        </div>

        <div>
            <ButtonGS 
            uppercase={false}
            content='Add to Cart'
            className='mt-5 lg:!w-fit lg:px-32 lg:mt-10
            max-lg:w-full max-lg:rounded-2xl
            font-bold'
            />
        </div>
    </div>

    </>
  )
}

export default ImagesAndDescriptionDisplay