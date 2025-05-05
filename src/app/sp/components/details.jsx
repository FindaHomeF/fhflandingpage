import React from 'react'
import { BsHouse, BsHouseAddFill } from 'react-icons/bs'
import { FaBath, FaRegLightbulb, FaStar, FaWalking } from 'react-icons/fa'
import { MdBed } from 'react-icons/md'

const Details = () => {
  return (
    <div className='w-93p-mx-auto mt-16 md:mt-24 w-full grid grid-cols-1 lg:grid-cols-3 gap-5'>
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
    </div>
  )
}

export default Details