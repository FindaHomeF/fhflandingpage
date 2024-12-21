import Declutter from '../../../public/declutter1.png'
import { MdSell } from "react-icons/md";
import { SeeAll } from './Buttons/ButtonGS';
import Image from 'next/image';


const Decluttered = () => {
  return (
    <div className="declutter-outer">
        <div className="declutter-inner w-5/6 mx-auto">
            <h3 className='text-[2.5rem] font-semibold leading-[2.62rem] text-center pb-7'>Decluttered Items</h3>

            <div className="declutter-container flex flex-wrap md:flex-nowrap gap-y-5 items-center justify-between gap-x-7">
                {[Declutter, Declutter, Declutter].map((e, index)=>(
                    <div className="declutter-box-outer bg-[#F9FAFB] rounded-2xl overflow-hidden w-full md:w-auto" key={index}>
                        <div className="w-full rounded-lg overflow-hidden h-[31.93rem]">
                            <Image
                                src={e}
                                width={360}
                                height={511}
                                alt='declutter-media-representation'
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className='text-center space-y-2 py-2'>
                            <h4 className='text-2xl leading-[1.875rem] font-medium'>Wooden Bed Frame</h4>
                            <h5 className='font-medium text-xl text-[#0D2740]'>NGN 10,000</h5>
                            <h6 className='font-normal text-base text-[#00010399] flex gap-x-2 justify-center items-center'><MdSell className='text-[#FDA51E] text-xl'/>Condition: Good</h6>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mx-auto w-full flex justify-center items-center mt-12">
                <SeeAll/>
            </div>
        </div>
    </div>
  )
}

export default Decluttered