import Image from "next/image"
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdBed } from "react-icons/md";
import { CiHeart,CiShare2  } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { FaBath } from "react-icons/fa";



const ListingBox = ({image}) => {
  return (
    <div className="listings-box rounded-2xl overflow-hidden border border-[#00000033] group">
        <div className="listing-image h-[13.75rem] relative overflow-hidden">
            <Image
                src={image}
                alt="apartment main media"
                width={300}
                className="object-fit h-full w-full rounded-lg relative group-hover:scale-105 transition-all ease-linear duration-300"
            />
            <Button className="h-8 w-8 p-1 flex justify-center items-center absolute top-2 text-xl text-white right-2 rounded-full bg-primary">
                <CiHeart />
            </Button>
            <Button className="absolute bottom-2 left-2 bg-secondary rounded-full text-sm font-medium">Verified</Button>
        </div>

        <div className="listing-info py-3 px-2">
            <div className="info-top flex w-full justify-between gap-x-5">
                <div className="w-3/6">
                    <h5 className="text-black uppercase text-base md:text-lg font-bold truncate">Marble Lodge</h5>
                    <div className="flex w-full gap-x-1">
                        <HiOutlineMapPin className="text-base min-w-1/6"/>
                        <p className="text-xs text-tetiary truncate">8, Deeper Life, NorthGate, Akure</p>
                    </div>
                </div>
                <h4 className="price w-3/6 text-secondary text-base md:text-text-lg font-semibold">NGN 120,000</h4>
                
            </div>

            <div className="info-bottom my-3 flex justify-between items-center text-base text-lightSec">
                <div className=" border-r-2 w-3/6 flex justify-center items-center flex-col">
                    <div className="flex items-center gap-x-2 ">2<MdBed className="text-xl text-tetiary"/> </div>
                    <h6>Bedrooms</h6>
                </div>
                <div>
                    <div className=" w-3/6 flex justify-center items-center flex-col">
                        <div className="flex items-center gap-x-2">1<FaBath className="text-xl text-tetiary"/> </div>
                        <h6>Bathroom</h6>
                    </div>
                </div>
            </div>

            <div className="flex justify-between w-full gap-x-5 text-sm font-medium my-5">
                <Button className="w-3/6 rounded-full text-white bg-primary">Quick Contact</Button>
                <Button className="w-3/6 rounded-full text-primary border border-[#CED4DA] bg-transparent flex items-center gap-x-2 justify-center"><CiShare2 className="font-bold"/>Share</Button>
            </div>
        </div>
    </div>
  )
}

export default ListingBox