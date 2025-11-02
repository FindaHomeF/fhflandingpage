'use client'

import { GoVerified } from "react-icons/go";
import { LuMessageSquareLock } from "react-icons/lu";
import { FaRegHandshake } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";




const How = () => {
    const [buyer, setBuyer] = useState(true)
    const buyersHow = [
        {
            icon:<GoVerified/>,
            head:'Browse Quality Items',
            sub:'Explore verified listings with detailed photos and honest descriptions from fellow students.',
        },
        {
            icon:<LuMessageSquareLock />,
            head:'Connect Securely',
            sub:'Message sellers safely through our platform. Negotiate prices and arrange meetups.',
        },
        {
            icon:<FaRegHandshake />,
            head:'Complete Your Purchase',
            sub:'Meet in safe locations, inspect items, and complete transactions with peace of mind.',
        },
    ]


  return (
    <div className="full">
        <div className="mx-auto w-[90%] md:w-5/6 space-y-7 pb-10">
            <div className="">
                <div className='text-center space-y-3'>
                    <h3 className="section-head">How Our Marketplace Works</h3>
                    <p className='section-para mx-auto lg:w-4/6 pb-3'>
                        Simple, safe, and student-friendly. Whether you're buying essentials for your new place or selling items 
                        you no longer need, our secure platform makes it easy. Connect with fellow FUTA students, negotiate fairly, 
                        and complete transactions with confidence.
                    </p>
                    
                    <div className="h-12 lg:w-[30%] mt-3 mx-auto flex  
                    justify-center gap-x-5 text-base font-semibold 
                    transition-all ease-in-out duration-300">
                        <Button className={`h-full text-primary bg-lightGray 
                        capitalize rounded-full w-3/6 hover:text-white 
                        transition-all ease-in-out duration-300 cursor-pointer
                        ${buyer && 'bg-secondary text-white'}`} onClick={()=>setBuyer(true)}>
                            For Buyers</Button>
                        <Button className={`h-full text-primary bg-lightGray 
                        capitalize rounded-full w-3/6 hover:bg-darkBlue/10 
                        transition-all ease-in-out duration-300 cursor-pointer
                        ${!buyer && 'bg-secondary'}`} onClick={()=>setBuyer(false)}>
                            For Sellers</Button>
                    </div>
                </div>

                
                <div className='w-full my-14'>
                    {buyer?
                        <div className="grid grid-cols-1 lg:grid-cols-3 max-lg:gap-7 gap-x-10 
                        transition-all ease-in-out duration-300">

                            {buyersHow.map((how, index)=>(
                                <div className="space-y-3 flex flex-col justify-start items-center text-black text-center" key={index}>
                                    <h6 className="text-primary text-2xl md:text-4xl">{how.icon}</h6>
                                    <div className="space-y-1 md:space-y-2">
                                        <h5 className="text-base md:text-xl font-medium">{how.head}</h5>
                                        <p className="text-sm font-normal">{how.sub}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        :
                        <div className="grid grid-cols-1 lg:grid-cols-3 max-lg:gap-7 gap-x-10 flex-wrap-reverse">

                            {buyersHow.map((how, index)=>(
                                <div className="space-y-3 flex flex-col justify-start items-center text-secondary text-center" key={index}>
                                    <h6 className="text-2xl md:text-4xl">{how.icon}</h6>
                                    <div className="space-y-1 md:space-y-2">
                                        <h5 className="text-base md:text-xl font-medium">{how.head}</h5>
                                        <p className="text-sm font-normal">{how.sub}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    }
                </div>

                <div className="h-12 lg:w-2/6 mx-auto flex justify-center 
                gap-x-5 text-base font-semibold">
                    <Button className="bg-primary h-full text-white hover:bg-secondary 
                    rounded-full w-3/6 flex items-center gap-x-2">Start Shopping
                        <span className="bg-white h-5 w-5 rounded-full 
                        flex justify-center items-center">
                        <GoArrowUpRight className="text-xs text-primary" /></span>
                    </Button>

                    <Button className="bg-transparent h-full border border-primary text-primary
                     hover:bg-darkBlue/5 rounded-full w-3/6">List an Item</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default How