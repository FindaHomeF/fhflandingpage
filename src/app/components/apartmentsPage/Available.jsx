"use client"
import ListingBox from "../global/ListingBox"
import { SeeAll } from "../global/Buttons/ButtonGS"

const List1 = '/listing1.png';
const List2 = '/listing2.png';
const List3 = '/listing3.png';
const List4 = '/listing4.png';

const Available = () => {
  return (
    <div className="full">
        <div className="mx-auto w-[90%] md:w-5/6 space-y-7 text-center">
            <div>
                <h3 className="section-head text-center">Latest Listings</h3>
                <p className="text-gray-600 text-base md:text-lg mt-2">
                  Fresh properties just added. Be the first to discover newly listed accommodations.
                </p>
            </div>
            <div className="overflow-x-hidden">
                <div className="w-full flex flex-nowrap md:grid-cols-4 gap-3 md:gap-x-5">
                    {[List1, List2, List3, List4].map((list, index)=>(
                        <div key={index}>
                            <ListingBox image={list} propertyId={`${index + 10}`} itemIndex={index + 600} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto w-full flex justify-center items-center mt-5 md:mt-12">
                <SeeAll 
                    cta="/apartments/all"
                    filterType="recent"
                />
            </div>

        </div>

    </div>
  )
}

export default Available