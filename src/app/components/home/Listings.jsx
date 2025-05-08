import { SeeAll } from "../global/Buttons/ButtonGS"
import List1 from '/public/listing1.png';
import List2 from '/public/listing2.png';
import List3 from '/public/listing3.png';
import List4 from '/public/listing4.png';
import Image from "next/image";
import ListingBox from "../global/ListingBox";

const Listings = ({ title = "Property listings" }) => {
  return (
    <div className="listings-outer">
        <div className="listings-inner w-[90%] md:w-5/6 mx-auto">
            <h3 className='text-2xl md:text-[2.5rem] font-bold capitalize leading-[2.62rem] text-center pb-3 md:pb-7'>
                { title }
            </h3>

            <div className="overflow-x-auto">
                <div className="w-full flex flex-nowrap md:grid-cols-4 gap-3 md:gap-x-5">
                    {[List1, List2, List3, List4].map((list, index)=>(
                        <div key={index}>
                            <ListingBox image={list}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto w-full flex justify-center items-center mt-5 md:mt-12">
                <SeeAll/>
            </div>
        </div>
    </div>
  )
}

export default Listings