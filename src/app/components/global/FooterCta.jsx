import { Button } from '@/components/ui/button'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const FooterCta = () => {

  return (
    <div className={`py-20 md:py-28 z-10 pointer-events-auto mt-10 fcta 
    !bg-cover !bg-no-repeat !bg-right relative after:absolute 
    after:bg-black/55 after:w-full after:h-full after:top-0 
    after:left-0 after:z-[-1] after:pointer-events-none`}>
        <div className="mx-auto z-10 w-[90%] md:w-5/6  text-white space-y-7">
            <div className='space-y-3 w-full'>
                <h3 className='section-head text-center'>
                    Ready to Find Your Perfect Home?
                </h3>
                <p className="mt-3 text-lg md:text-xl font-normal text-center max-w-3xl mx-auto">
                    Join thousands of FUTA students who've already found their ideal accommodation. Start exploring verified properties, connect with trusted service providers, and discover amazing deals on student essentials.
                </p>
            </div>
            
            {/* <form action="" className="flex items-center gap-x-3 w-4/6">
                <input placeholder="Enter your email" 
                    type="email" name="" 
                    id="" 
                    className="h-12 w-5/6 text-black text-sm px-5 cursor-pointer outline-none border-none"
                />
                <Button className="rounded-none hover:bg-secondary 
                bg-transparent border border-white w-1/6 
                text-sm font-semibold h-12">
                    Join Now!
                </Button>
            </form> */}

            <div className="cta-buttons text-base flex-itc-juc
             gap-x-5 font-semibold transition-all ease-linear duration-300">
                <Button className="hover:bg-secondary 
                bg-white w-fit px-6 text-black h-12 
                rounded-3xl transition-colors duration-300">Browse Properties
                 <span className='w-5 h-5 flex-itc-juc 
                 bg-darkBlue text-white rounded-full'>
                    <GoArrowUpRight size={20}/>
                </span>
                </Button>
                <Button className="hover:bg-darkBlue/10 
                bg-transparent border border-white 
                w-fit px-6 text-white h-12 rounded-3xl">Get Started
                </Button>
            </div>

        </div>
    </div>
    
  )
}

export default FooterCta