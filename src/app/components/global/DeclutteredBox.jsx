import { MdSell } from "react-icons/md";
import { CiHeart,CiShare2  } from "react-icons/ci";
import Image from 'next/image';
import { Button } from "@/components/ui/button";


const DeclutteredBox = ({image, border}) => {
  return (
    <div className={`declutter-box-outer group bg-[#F9FAFB] rounded-2xl overflow-hidden w-full md:w-auto ${border && 'border border-[#CED4DA]'} shadow-sm shadow-[#c6cbd17e]`}>
        <div className="w-full rounded-lg overflow-hidden h-[14rem] relative">
            <Image
                src={image}
                width={300}
                height={220}
                alt='declutter-media-representation'
                className="object-cover w-full h-full group-hover:scale-105 transition-all ease-linear duration-300"
            />
            <Button className="h-8 w-8 p-1 flex justify-center items-center absolute top-2 text-xl text-white right-2 rounded-full bg-primary">
                <CiHeart />
            </Button>
        </div>
        <div className='text-center space-y-2 py-5 font-medium px-3'>
            <h4 className='text-lg md:text-xl '>Wooden Bed Frame</h4>
            <h5 className=' text-base md:text-lg text-primary'>NGN 10,000</h5>
            <h6 className=' text-sm md:text-sm text-[#00010399] flex gap-x-1 justify-center items-center'><MdSell className='text-[#FDA51E] text-lg rotate-90'/>Condition: Good</h6>
            
            <div className="flex justify-between w-full gap-x-3 text-sm font-medium pt-3 pb-2">
                <Button className="w-3/6 rounded-full text-white bg-primary">Quick Contact</Button>
                <Button className="w-3/6 rounded-full text-primary border border-[#CED4DA] bg-transparent flex items-center gap-x-2 justify-center"><CiShare2 className="font-bold"/>Share</Button>
            </div>
        </div>
    </div>
  )
}

export default DeclutteredBox