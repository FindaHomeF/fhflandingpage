import { Button } from '@/components/ui/button'
import React from 'react'

const FooterCta = () => {

  return (
    <div className={`py-20 z-10 pointer-events-auto mt-10 fcta !bg-cover !bg-no-repeat !bg-right relative after:absolute after:bg-black/55 after:w-full after:h-full after:top-0 after:left-0 after:z-[-1] after:pointer-events-none`}>
        <div className="mx-auto z-10 w-[90%] md:w-5/6  text-white space-y-7">
            <div className='space-y-3 w-4/6'>
                <h3 className='section-head'>Be Part of the Housing Revolution</h3>
                {/* <p className='section-para'>Join our community and find the ideal off-campus housing that suits your needs today!</p> */}
                
                <p className="text-lg font-normal">Be among one of the early pioneers to access our platform once we launch. There might just be perks in it for you</p>
            </div>
            
            <form action="" className="flex items-center gap-x-3 w-4/6">
                <input placeholder="Enter your email" 
                    type="email" name="" 
                    id="" 
                    className="h-12 w-5/6 text-black text-sm px-5 cursor-pointer outline-none border-none"
                />
                <Button className="rounded-none hover:bg-secondary bg-transparent border border-white w-1/6 text-sm font-semibold h-12">Join Now!</Button>
            </form>

            {/* <div className="cta-buttons text-base flex gap-x-3 font-semibold transition-all ease-linear duration-300">
                <Button className="rounded-none hover:bg-secondary bg-white w-fit text-black h-12">Sign Up</Button>
                <Button className="rounded-none hover:bg-white hover:text-black bg-transparent border border-white w-fit text-white h-12">Learn More</Button>
            </div> */}

        </div>
    </div>
    
  )
}

export default FooterCta