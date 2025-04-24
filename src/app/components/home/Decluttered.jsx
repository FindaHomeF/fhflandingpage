import Declutter from '../../../../public/declutter1.png'
import { MdSell } from "react-icons/md";
import { SeeAll } from '../global/Buttons/ButtonGS';
import Image from 'next/image';
import DeclutteredBox from '../global/DeclutteredBox';


const Decluttered = () => {
  return (
    <div className="declutter-outer">
        <div className="declutter-inner w-[90%] md:w-5/6 mx-auto">
            <h3 className='text-2xl md:text-[2.5rem] font-bold capitalize leading-[2.62rem] text-center pb-3 md:pb-7'>Decluttered Items</h3>

            <div className="declutter-container grid grid-cols-1 md:grid-cols-3 gap-y-5 items-center justify-between gap-x-7">
                {[Declutter, Declutter, Declutter].map((e, index)=>(
                    <div key={index}>
                        <DeclutteredBox image={e}/>
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

export default Decluttered