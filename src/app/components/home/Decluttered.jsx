"use client"
import { MdSell } from "react-icons/md";
import { SeeAll } from '../global/Buttons/ButtonGS';
import Image from 'next/image';
import DeclutteredBox from '../global/DeclutteredBox';
import { CardScroll, CardWrapper } from "@/components/ui/card-grid";

const Declutter = '/declutter1.png'

const Decluttered = () => {
  return (
    <div className="declutter-outer">
        <div className="declutter-inner w-[90%] max-w-full md:w-5/6 mx-auto">
            <div className='text-center space-y-3 pb-5 md:pb-7'>
                <h3 className='text-2xl md:text-[2.5rem] font-bold capitalize leading-[2.62rem]'>Student Marketplace</h3>
                <p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto'>
                    Buy and sell quality pre-owned items. Save money, help the environment, and connect with fellow students.
                </p>
            </div>

            <CardScroll>
                {[...Array(4)].map((_, index)=>(
                    <CardWrapper key={index} minWidth="min-w-[280px] md:min-w-0">
                        <DeclutteredBox image={Declutter} border={true} itemIndex={index + 300} />
                    </CardWrapper>
                ))}
            </CardScroll>

            <div className="mx-auto w-full flex 
            justify-center items-center mt-5 md:mt-12">
                <SeeAll cta="/decluttering/all"/>
            </div>
        </div>
    </div>
  )
}

export default Decluttered