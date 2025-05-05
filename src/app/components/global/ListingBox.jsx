import Image from "next/image"
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdBed } from "react-icons/md";
import { CiHeart,CiShare2  } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { FaBath } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BsHouseAddFill } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";
import { FaWalking } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";
import Link from "next/link";

const ListingBox = ({image}) => {
  return (
    <div className="listings-box shadow shadow-[#00000010] rounded-xl bg-white overflow-hidden border border-[#00000033] group">
        <div className="listing-image h-[13.75rem] relative overflow-hidden ">
            <Link
            href={`/sp/1`}
            >
                <Image
                    src={image}
                    alt="apartment main media"
                    width={300}
                    className="object-fit h-full w-full rounded-lg relative group-hover:scale-105 transition-all ease-linear duration-300"
                />
            </Link>
            <Button className="h-8 w-8 p-1 flex justify-center items-center absolute top-2 text-xl text-white right-2 rounded-full bg-primary">
                <CiHeart />
            </Button>
            <Button className="absolute h-6 px-2 bottom-2 left-2 bg-secondary rounded-full text-xs font-medium">Verified</Button>
        </div>

        <div className="listing-info p-3">
            <div className="info-top w-full">
                <div className="w-5/6 mx-auto text-center">
                <Link
                href={`/sp/1`}
                >
                    <h5 className="text-black uppercase line-clamp-2 text-base md:text-lg font-bold truncate">
                    Marble Lodge
                    </h5>
                </Link>
                   
                    <div className="flex w-full gap-x-1">
                        <HiOutlineMapPin className="text-base min-w-1/6"/>
                        <p className="text-xs text-tetiary truncate">8, Deeper Life, NorthGate, Akure</p>
                    </div>
                </div>
                <h4 className="price w-5/6 mx-auto text-center text-secondary text-base md:text-text-lg font-semibold">NGN 120,000</h4>
                
            </div>

            <div className="info-bottom my-3 grid grid-cols-3 text-base text-lightSec">
                <div className=" border-r-2  flex justify-center items-center flex-col">
                    <div className="flex items-center gap-x-2 ">2<MdBed className="text-xl text-tetiary"/> </div>
                    <h6 className="text-xs">Bedrooms</h6>
                </div>
                <div className=" border-r-2 flex justify-center items-center flex-col">
                    <div className="flex items-center gap-x-2 ">10h<FaRegLightbulb  className="text-xl text-tetiary"/> </div>
                    <h6 className="text-xs">Electricity</h6>
                </div>
                <div>
                    <div className=" flex justify-center items-center flex-col">
                        <div className="flex items-center gap-x-2">1<FaBath className="text-xl text-tetiary"/> </div>
                        <h6 className="text-xs">Bathroom</h6>
                    </div>
                </div>
            </div>

            <div className="space-y-2 text-lightSec text-sm">
                <div className="flex justify-between">
                    <h6 className="flex gap-x-1 items-center "><BsHouse className="text-secondary text-xs"/> Single Room</h6>
                    <h6 className="flex gap-x-1 items-center ">< BsHouseAddFill className="text-secondary text-xs"/>Posted 3hrs ago</h6>
                </div>
                <h6 className="flex gap-x-1 items-center "><FaWalking className="text-secondary"/> 3 minutes to the gate</h6>
                <div className="flex items-center gap-x-2">
                    <h6>Agent's Rating </h6>
                    <div className="flex gap-x-2">
                        {[...Array(5)].map((_, index)=>(
                            <FaStar className={`text-secondary text-base`} key={index}/>
                        ))}
                    </div>
                        
                </div>
                
            </div>

            <div className="flex justify-between w-full gap-x-3 text-sm font-medium my-5">
                <Button className="w-3/6 rounded-full text-white bg-primary">Quick Contact</Button>
                <Button className="w-3/6 rounded-full text-primary border border-[#CED4DA] 
                    bg-transparent flex items-center gap-x-2 justify-center 
                    hover:bg-transparent lg:hover:bg-darkBlue/5">
                    <CiShare2 className="font-bold"/>
                    Share
                </Button>
            </div>
        </div>
    </div>
  )
}

export default ListingBox