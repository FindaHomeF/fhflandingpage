import { ButtonGS } from '@/app/components/global/Buttons/ButtonGS'
import { Clock12 } from 'lucide-react'
import { Star } from 'lucide-react'
import { MapPin } from 'lucide-react'
import React from 'react'
import { BsHouse, BsHouseAddFill } from 'react-icons/bs'
import { FaBath, FaRegLightbulb, FaStar, FaWalking } from 'react-icons/fa'
import { MdBed } from 'react-icons/md'

const Details = () => {
  return (
    <div className='w-93p-mx-auto mt-16 md:mt-24 w-full 
    grid grid-cols-1 lg:grid-cols-3 gap-9'>
        <div>
            <h3 className='text-xl md:text-2xl font-bold'>
                Property Details
            </h3>

            <div>
                <div className="mt-6 info-bottom my-3 flex-itc text-base text-lightSec">
                    <div className="border-r pr-7 flex justify-center items-start flex-col">
                        <div className="flex items-center gap-x-2 ">2<MdBed className="text-xl text-tetiary"/> </div>
                        <h6 className="text-xs">Bedrooms</h6>
                    </div>
                    <div className="border-r px-7 flex justify-center items-start flex-col">
                        <div className="flex items-center gap-x-2 ">10h<FaRegLightbulb className="text-xl text-tetiary"/> </div>
                        <h6 className="text-xs">Electricity</h6>
                    </div>
                    <div>
                        <div className="pl-7 flex justify-center items-start flex-col">
                            <div className="flex items-center gap-x-2">1<FaBath className="text-xl text-tetiary"/> </div>
                            <h6 className="text-xs">Bathroom</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 space-y-5 text-lightSec text-sm">
                <h6 className="flex gap-x-1 items-center "><BsHouse className="text-secondary text-xs"/> Single Room</h6>
                <h6 className="flex gap-x-1 items-center ">< BsHouseAddFill className="text-secondary text-xs"/>Posted 3hrs ago</h6>
                <h6 className="flex gap-x-1 items-center "><FaWalking className="text-secondary"/> 3 minutes to the gate</h6>
                <div className="flex items-center gap-x-2">
                    <h6>Posted on August 14, 2023 </h6>
                </div>
                
            </div>

        </div>

        <div>
            <h3 className='text-xl md:text-2xl font-bold'>
                Agent Profile
            </h3>

            <div className='w-full py-5 md:py-10 px-3 md:px-5l'>
                    <div className='relative w-20 h-20 md:w-32 md:h-32
                    bg-[#D9D9D9] rounded-full'>
                        <div className='absolute bottom-0 md:bottom-[0.4rem] right-4 
                        w-3 h-3 md:w-4 md:h-4 rounded-full bg-darkBlue'/>
                    </div>

                    <div>
                        <h3 className='mt-3 font-medium text-xl md:text-2xl'>
                            John Doe
                        </h3>

                        <h3 className='text-sm md:text-base w-fit pl-2'>
                            Carpenter
                        </h3>

                        <div className='mt-3 w-full flex-itc gap-2 md:gap-3'>
                            <div className="flex-itc gap-1 md:gap-2">
                                {/* icon */}
                                <MapPin 
                                color="#FF9500" 
                                strokeWidth={1.5}
                                className='max-md:w-4'
                                />
                                <p className="text-black/60 text-sm">
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
                                <p className="text-black/60 text-sm">
                                    4.7 <span className=''>(120 Reviews)</span>
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
                            <p className="text-black/60 text-sm max-md:font-medium">
                                Responses within 2 hours
                            </p>
                        </div>

                        <div className='mt-4 flex-itc flex-col 
                        min-[350px]:flex-row gap-2 md:gap-3'>
                            <div>
                                <ButtonGS
                                content="Quick Contact"
                                uppercase={false}
                                className={` max-lg:py-2 max-lg:rounded-xl max-lg:h-fit
                                max-lg:w-fit max-lg:text-xs`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

        </div>

        <div>
            <h3 className='text-xl md:text-2xl font-bold'>
                Location View 
            </h3>

            <div className='mt-5'>
                <div style={{
                    position: "relative",
                }}>
                    <div 
                    style={{
                        position: "relative",
                        paddingBottom: "75%",
                        height: "0",
                        overflow: "hidden",
                    }}
                    // style="position: relative; padding-bottom: 75%; height: 0; overflow: hidden;"
                    >
                        <iframe 
                        // style={{
                        //     "position: absolute; 
                        //     top: 0; left: 0; width: 100%; height: 100%; border:0;"
                            
                        // }} 
                        style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            border: "0",
                        }}
                        loading="lazy" allowFullScreen 
                        src="https://maps.google.com/maps?q=futa%2C+akure&output=embed">
                        </iframe>
                    </div>

                    <a href="https://embedcodesgenerator.com/" 
                    rel="noopener" 
                    target="_blank" 
                    style={{
                        position: "absolute",
                        width: "1px",
                        height: "1px",
                        border: "0",
                        padding: "0",
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0,0,0,0)",
                        whiteSpace: "nowrap",

                    }}
                    // style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;"
                    >
                        embedcodesgenerator.com
                    </a>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Details