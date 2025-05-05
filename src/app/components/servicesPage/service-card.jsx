import { Star } from 'lucide-react'
import { Clock12 } from 'lucide-react'
import { MapPin } from 'lucide-react'
import React from 'react'
import { ButtonGS } from '../global/Buttons/ButtonGS'
import { IoBookmarksOutline } from 'react-icons/io5'
import { LiaShareAltSolid } from "react-icons/lia";

const ServiceCard = () => {
  return (
    <div className='w-full bg-[#F9FAFB] py-5 md:py-10 px-3 md:px-5
    border border-black/20 rounded-xl'>
        <div className='relative w-20 h-20 md:w-32 md:h-32 mx-auto
        bg-[#D9D9D9] rounded-full'>
            <div className='absolute bottom-0 md:bottom-[0.4rem] right-4 
            w-3 h-3 md:w-4 md:h-4 rounded-full bg-darkBlue'/>
        </div>

        <div>
            <h3 className='mt-3 font-medium text-xl md:text-2xl text-center'>
                John Doe
            </h3>

            <h3 className='text-sm md:text-base text-center'>
                Carpenter
            </h3>

            <div className='mt-3 w-full flex-itc-jub flex-wrap gap-2 md:gap-3'>
                <div className="flex-itc gap-1 md:gap-2">
                    {/* icon */}
                    <MapPin 
                    color="#FF9500" 
                    strokeWidth={1.5}
                    className='max-md:w-4 '
                    />
                    <p className="text-black/60 text-[10px] md:text-sm">
                        South Gate
                    </p>
                </div>

                <div className="flex-itc gap-1 md:gap-2">
                    {/* icon */}
                    <Star 
                    color="#FF9500" 
                    strokeWidth={1.5}
                    className='max-md:w-4'
                    />
                    <p className="text-black/60 text-[10px] md:text-sm">
                        4.7 <span className='max-md:hidden'>(120 Reviews)</span>
                    </p>
                </div>
            </div>

            <div className="mt-2 flex-itc gap-1 md:gap-2">
                {/* icon */}
                <Clock12 
                color="#FF9500" 
                strokeWidth={1.5}
                className='max-md:w-4'
                />
                <p className="text-black/60 text-[10px] md:text-sm max-md:font-medium">
                    Responses within 2 hours
                </p>
            </div>

            <div className='mt-2 md:mt-5'>
                <p className='text-center font-medium
                 text-sm md:text-lg'>
                    Starting at NGN 10,000
                </p>
            </div>

            <div className='mt-4 flex-itc flex-col 
            min-[350px]:flex-row gap-2 md:gap-3 max-w-full overflow-hidden'>
                <div className='w-4/6'>
                    <ButtonGS
                    content="Book Now"
                    uppercase={false}
                    className={` max-lg:py-2 max-lg:rounded-xl max-lg:h-fit
                    max-lg:w-fit md:!w-full max-lg:text-xs`}
                    />
                </div>

                <div className='w-fit flex-itc gap-1.5 md:gap-3'>
                    <IoBookmarksOutline size={22} 
                        className='max-lg:w-4 cursor-pointer' 
                    />
                    <LiaShareAltSolid size={27}
                        className='max-lg:w-5 cursor-pointer' 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard