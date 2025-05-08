import Declutter from '/public/declutter1.png'
import { MdSell } from "react-icons/md";
import { SeeAll } from '../global/Buttons/ButtonGS';
import Image from 'next/image';
import DeclutteredBox from '../global/DeclutteredBox';


const Decluttered = () => {
  return (
    <div className="declutter-outer">
        <div className="declutter-inner w-[90%] md:w-5/6 mx-auto">
            <h3 className='text-2xl md:text-[2.5rem] font-bold capitalize leading-[2.62rem] text-center pb-3 md:pb-7'>Decluttered Items</h3>


            <div className="overflow-x-auto">
                <div className="w-full flex flex-shrink-0 gap-y-5 md:grid md:grid-cols-4 gap-3 md:gap-x-5">
                    {[...Array(4)].map((_, index)=>(
                        <div key={index}>
                            <DeclutteredBox image={Declutter} border={true}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto w-full flex 
            justify-center items-center mt-5 md:mt-12">
                <SeeAll/>
            </div>
        </div>
    </div>
  )
}

export default Decluttered