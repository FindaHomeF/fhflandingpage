import { SeeAll } from "./Buttons/ButtonGS"
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdBed } from "react-icons/md";
import List1 from '../../../public/listing1.png';
import List2 from '../../../public/listing2.png';
import List3 from '../../../public/listing3.png';
import List4 from '../../../public/listing4.png';
import Image from "next/image";

const Listings = () => {
  return (
    <div className="listings-outer">
        <div className="listings-inner w-5/6 mx-auto">
            <h3 className='text-2xl md:text-[2.5rem] font-semibold leading-[2.62rem] text-center pb-3 md:pb-7'>Property listings</h3>

            <div className="listings-container flex flex-wrap md:flex-nowrap gap-y-5 items-center justify-between gap-x-5">
                {[List1, List2, List3, List4].map((e,index)=>(
                    <div className="listings-box rounded-2xl overflow-hidden border border-[#00000033]" key={index}>
                        <div className="listing-image h-[13.75rem]">
                            <Image
                                src={e}
                                alt="apartment main media"
                                width={300}
                                className="object-fit h-full w-full rounded-xl"
                            />
                        </div>
                        <div className="listing-info p-3">
                            <div className="info-top border-b border-b-[#00000033] pb-2 space-y-1">
                                <h4 className="price text-[#FDA51E] text-xl md:text-2xl font-semibold">NGN 120,000</h4>
                                <h5 className="capitalize text-black text-xl md:text-2xl font-semibold">Marble Lodge</h5>
                            </div>
 
                            <div className="info-bottom pt-2 space-y-2 font-normal text-sm text-[#00010399]">
                                <p className=" flex items-center gap-x-1 "><FaMapMarkerAlt /> 8, Deeper Life, NorthGate, Akure</p>
                                <p className=" flex items-center gap-x-1 "><MdBed /> 2 Bedrooms</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mx-auto w-full flex justify-center items-center mt-5 md:mt-12">
                <SeeAll/>
            </div>
        </div>
    </div>
  )
}

export default Listings