import { Button } from '@/components/ui/button'
import React from 'react'
import Filter from './Filter'

const Hero = ({placeholder, mainText, subText, btn1, btn2}) => {
  return (
    <div className="w-full">
        <div className="w-[90%] mx-auto md:w-4/6 text-center space-y-3 md:space-y-5 mt-10 md:mt-0">
            <h2 className="hero-head px-10">{mainText}</h2>
            <p className="hero-para text-graySec pb-3 md:pb-0">{subText}</p>

            <div className="hero-btns h-10 md:h-12 w-[90%] md:w-3/6 mx-auto flex gap-x-3">
                <Button className="hero-btn bg-primary text-white hover:bg-secondary ">{btn1}</Button>
                <Button className="hero-btn bg-transparent border border-primary 
                text-primary hover:bg-blue-700/10">{btn2}</Button>
            </div>

            <div>
                <Filter placeholder={placeholder}/>
            </div>

            
        </div>
    </div>
  )
}

export default Hero