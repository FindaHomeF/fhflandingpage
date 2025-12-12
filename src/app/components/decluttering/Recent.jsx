"use client"
import DeclutteredBox from "../global/DeclutteredBox"
import { SeeAll } from "../global/Buttons/ButtonGS"
import { CardScroll, CardWrapper } from "@/components/ui/card-grid";

const Declutter = '/declutter1.png'

const Recent = () => {
  return (
    <div className="full">
        <div className="mx-auto w-[90%] max-w-full md:w-5/6 space-y-7 text-center">
            <div>
                <h3 className="section-head text-center">Just Listed</h3>
                <p className="text-gray-600 text-base md:text-lg mt-2">
                  Fresh additions to our marketplace. Grab these deals before they're gone!
                </p>
            </div>
            
            <CardScroll>
                {[...Array(4)].map((_, index)=>(
                    <CardWrapper key={index} minWidth="min-w-[280px] md:min-w-0">
                        <DeclutteredBox image={Declutter} border={true} itemIndex={index + 200} />
                    </CardWrapper>
                ))}
            </CardScroll>
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