"use client"
import { MdSell } from "react-icons/md";
import { SeeAll } from '../global/Buttons/ButtonGS';
import Image from 'next/image';
import DeclutteredBox from '../global/DeclutteredBox';

const Declutter = '/declutter1.png'


const Decluttered = () => {
  return (
    <div className="declutter-outer">
        <div className="declutter-inner w-[90%] md:w-5/6 mx-auto">
            <div className='text-center space-y-3 pb-5 md:pb-7'>
                <h3 className='text-2xl md:text-[2.5rem] font-bold capitalize leading-[2.62rem]'>Student Marketplace</h3>
                <p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto'>
                    Buy and sell quality pre-owned items. Save money, help the environment, and connect with fellow students.
                </p>
            </div>


            <div className="overflow-x-auto">
                <div className="w-full flex flex-shrink-0 gap-y-5 md:grid md:grid-cols-4 gap-3 md:gap-x-5">
                    {[...Array(4)].map((_, index)=>(
                        <div key={index}>
                            <DeclutteredBox image={Declutter} border={true} itemIndex={index + 300} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto w-full flex 
            justify-center items-center mt-5 md:mt-12">
                <SeeAll cta="/decluttering/all"/>
            </div>
        </div>
    </div>
  )
}

export default Decluttered