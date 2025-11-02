"use client"
import { SeeAll } from "../global/Buttons/ButtonGS"
import Image from "next/image";
import ListingBox from "../global/ListingBox";

const List1 = '/listing1.png';
const List2 = '/listing2.png';
const List3 = '/listing3.png';
const List4 = '/listing4.png';

const Listings = ({ title = "Property listings" }) => {
  return (
    <div className="listings-outer">
        <div className="listings-inner w-[90%] md:w-5/6 mx-auto">
            <h3 className='text-2xl md:text-[2.5rem] font-bold capitalize leading-[2.62rem] text-center pb-3 md:pb-7'>
                { title }
            </h3>

            <div className="overflow-x-hidden">
                <div className="w-full flex flex-nowrap md:grid-cols-4 gap-3 md:gap-x-5">
                    {[List1, List2, List3, List4].map((list, index)=>(
                        <div key={index}>
                            <ListingBox image={list} propertyId={`${index + 1}`} itemIndex={index + 500} />
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

export default Listings