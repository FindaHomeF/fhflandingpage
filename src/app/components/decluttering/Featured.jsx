"use client"
import DeclutteredBox from "../global/DeclutteredBox"
import { SeeAll } from "../global/Buttons/ButtonGS"

const Declutter = '/declutter1.png'

const Featured = () => {
  return (
    <div className="full bg-primary py-16">
        <div className="mx-auto w-5/6 space-y-7 text-center">
            <div>
                <h3 className="section-head text-center text-white">Hot Deals This Week</h3>
                <p className="text-white/80 text-base md:text-lg mt-2">
                  Top picks from our marketplace. Quality items at unbeatable student prices.
                </p>
            </div>
            <div className="overflow-x-hidden">
                <div className="w-full flex flex-shrink-0 gap-y-5 md:grid md:grid-cols-4 gap-3 md:gap-x-5">
                    {[...Array(4)].map((_, index)=>(
                        <div key={index}>
                            <DeclutteredBox image={Declutter} itemIndex={index + 100} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto w-full flex justify-center items-center mt-5 md:mt-12">
                <SeeAll 
                    whiteBorder 
                    cta="/decluttering/all"
                    filterType="featured"
                />
            </div>
        </div>

    </div>
  )
}

export default Featured