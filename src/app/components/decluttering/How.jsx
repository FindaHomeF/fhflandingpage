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
            head:'Browse verified listings',
            sub:'Browse a wide selection of properties that meet your needs and budget.',
        },
        {
            icon:<LuMessageSquareLock />,
            head:'Contact seller through our secure system',
            sub:'Access reliable services from professionals dedicated to students.',
        },
        {
            icon:<FaRegHandshake />,
            head:'Meet safely and complete purchase',
            sub:'Find everything you need for student life at great prices.',
        },
    ]


  return (
    <div className="full">
        <div className="mx-auto w-5/6 space-y-7 pb-10">
            <div className="">
                <div className='text-center space-y-3'>
                    <h3 className="section-head">How It Works</h3>
                    <p className='section-para mx-auto w-4/6 pb-3'>Find-a-Home FUTA revolutionizes your housing search with verified properties tailored for FUTA students. Our platform ensures a seamless experience, connecting you with trusted service providers and essential resources.</p>
                    
                    <div className="h-12 w-[30%] mt-3 mx-auto flex  
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
                        <div className="grid grid-cols-3 gap-x-10 transition-all ease-in-out duration-300">

                            {buyersHow.map((how, index)=>(
                                <div className="space-y-3 flex flex-col justify-start items-center text-black text-center" key={index}>
                                    <h6 className="text-primary text-4xl">{how.icon}</h6>
                                    <div className="space-y-2">
                                        <h5 className="text-xl font-medium">{how.head}</h5>
                                        <p className="text-sm font-normal">{how.sub}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        :
                        <div className="grid grid-cols-3 gap-x-10 flex-wrap-reverse">

                            {buyersHow.map((how, index)=>(
                                <div className="space-y-3 flex flex-col justify-start items-center text-secondary text-center" key={index}>
                                    <h6 className="text-4xl">{how.icon}</h6>
                                    <div className="space-y-2">
                                        <h5 className="text-xl font-medium">{how.head}</h5>
                                        <p className="text-sm font-normal">{how.sub}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    }
                </div>

                <div className="h-12 w-2/6 mx-auto flex justify-center gap-x-5 text-base font-semibold">
                    <Button className="bg-primary h-full text-white hover:bg-secondary 
                    rounded-full w-3/6 flex items-center gap-x-2">Learn More 
                        <span className="bg-white h-5 w-5 rounded-full 
                        flex justify-center items-center">
                        <GoArrowUpRight className="text-xs text-primary" /></span>
                    </Button>

                    <Button className="bg-transparent h-full border border-primary text-primary
                     hover:bg-darkBlue/5 rounded-full w-3/6">Log In</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default How