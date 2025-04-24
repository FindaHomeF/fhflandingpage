import { MdSell } from "react-icons/md";
import Image from 'next/image';


const DeclutteredBox = ({image}) => {
  return (
    <div className="declutter-box-outer bg-[#F9FAFB] rounded-2xl overflow-hidden w-full md:w-auto border border-[#CED4DA] shadow-sm shadow-[#c6cbd1]">
        <div className="w-full rounded-lg overflow-hidden h-[15rem] md:h-[31.93rem]">
            <Image
                src={image}
                width={360}
                height={511}
                alt='declutter-media-representation'
                className="object-cover w-full h-full"
            />
        </div>
        <div className='text-center space-y-2 py-2'>
            <h4 className='text-xl md:text-2xl leading-[1.875rem] font-medium'>Wooden Bed Frame</h4>
            <h5 className='font-medium text-base md:text-xl text-[#0D2740]'>NGN 10,000</h5>
            <h6 className='font-normal text-sm md:text-base text-[#00010399] flex gap-x-2 justify-center items-center'><MdSell className='text-[#FDA51E] text-xl'/>Condition: Good</h6>
        </div>
    </div>
  )
}

export default DeclutteredBox