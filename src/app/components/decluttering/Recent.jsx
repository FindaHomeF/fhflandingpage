"use client"
import DeclutteredBox from "../global/DeclutteredBox"
import { SeeAll } from "../global/Buttons/ButtonGS"

const Declutter = '/declutter1.png'

const Recent = () => {
  return (
    <div className="full">
        <div className="mx-auto w-5/6 space-y-7 text-center">
            <div>
                <h3 className="section-head text-center">Just Listed</h3>
                <p className="text-gray-600 text-base md:text-lg mt-2">
                  Fresh additions to our marketplace. Grab these deals before they're gone!
                </p>
            </div>
            
            <div className="overflow-x-hidden">
                <div className="w-full flex flex-shrink-0 gap-y-5 md:grid md:grid-cols-4 gap-3 md:gap-x-5">
                    {[...Array(4)].map((_, index)=>(
                        <div key={index}>
                            <DeclutteredBox image={Declutter} border={true} itemIndex={index + 200} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto w-full flex justify-center items-center mt-5 md:mt-12">
                <SeeAll 
                    cta="/decluttering/all"
                    filterType="recent"
                />
            </div>
        </div>

    </div>
  )
}

export default Recent