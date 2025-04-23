import Image from "next/image"
import Quote from '../../../../public/quote.svg'
import TestI from '../../../../public/testimony.png'
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

const Testimonials = () => {
  return (
    <div className="testi-outer">
        <div className="testi-inner w-[90%] md:w-5/6 mx-auto mb-10">
            <h3 className='text-2xl md:text-[2.5rem] font-semibold leading-[2.62rem] text-center pb-7'>Testimonials</h3>

            <div className="testi-outer w-full">
                <div className="testi-inner w-full md:w-3/6 mx-auto flex flex-col justify-center items-center">
                    <div className="qoute-img ">
                        <Image
                            src={Quote}
                            alt="testimonials quote"
                            height={31}
                            width={58}
                            className="object-cover"
                        />
                    </div>


                    <div className="main-testi-outer flex items-center justify-between w-full ">
                        <FiArrowLeftCircle className="text-[#00000066] text-2xl"/>
                        <div className="test-textandimage ">
                            <p className="text-center font-normal text-black text-base md:text-xl my-5 md:my-7 italic"> 
                                Provides a comprehensive and detailed overview of your rental property, 
                                showcasing its best features, and amenities. 
                                Selling unwanted items is a great way to free up space, 
                                reduce stress, and earn some extra money. An avenue where service 
                                providers can create and manage their own profiles, list, and describe 
                                their services.
                            </p>

                            <div className="qoute-img rotate-180 mx-auto w-full flex justify-center items-center">
                                <Image
                                    src={Quote}
                                    alt="testimonials quote"
                                    height={31}
                                    width={58}
                                    className="object-cover"
                                />
                            </div>

                            <div className="w-3/6 mx-auto text-center space-y-3 mt-7">
                                <div className="test-image rounded-full h-[3.125rem] w-[3.125rem] mx-auto">
                                    <Image
                                        src={TestI}
                                        alt="testimonials bio media"
                                        height={50}
                                        width={48}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h5 className="text-[#00010399] text-base font-normal">Taiwo Omotola</h5>
                            </div>
                        </div>
                        <FiArrowRightCircle className="text-[#00000066] text-2xl"/>
                    </div>

                   
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials