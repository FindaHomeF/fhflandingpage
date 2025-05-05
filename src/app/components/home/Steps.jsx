import { CiUser } from "react-icons/ci";
import { GoVerified } from "react-icons/go";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { LuWarehouse } from "react-icons/lu";
import stepsI from '../../../../public/stepsimage.png'
import Image from "next/image";

const Steps = () => {
  return (
    <div className="w-full">
        <div className="w-[90%] md:w-5/6 mx-auto">
            <div className="intro space-y-2 md:space-y-5 text-center pb-5 md:pb-10">
                <h3 className="section-head font-bold tracking-wide">Simple Steps to Your New Home</h3>
                <p className="md:w-5/6 text-center section-para mx-auto text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>



            <div>
                <div className="md:hidden">
                    <div className="relative  md:w-[30rem] md:h-[30rem]">
                        <Image
                            src={stepsI}
                            alt={'FHF intro welcoming students to their accomodation solution landing page'}
                            width={540}
                            height={540}
                            className='w-full h-full object-cover object-top'
                        />
                    </div>
                </div>

                <div className="flex justify-between items-stretch gap-x-5 md:gap-x-0 md:items-center ">
                    <div className="space-y-10">
                        <div>
                            <div className="space-y-2 text-center flex flex-col justify-center items-center">
                                <CiUser  className="text-2xl md:text-4xl text-primary"/>
                                <h3 className="text-base md:text-2xl font-semibold">Create Your Profile</h3>
                                <p className="text-sm md:text-base font-normal md:px-10">Sign up with your details</p>
                            </div>
                        </div>


                        <div>
                            <div className="space-y-2 text-center flex flex-col justify-center items-center">
                                <GoVerified className="text-2xl md:text-4xl text-primary"/>
                                <h3 className="text-base md:text-2xl font-semibold">Browse Verified Listings</h3>
                                <p className="text-sm md:text-base font-normal md:px-10">Explore properties that match your criteria with virtual tours</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="relative w-[30rem] h-[30rem]">
                            <Image
                                src={stepsI}
                                alt={'FHF intro welcoming students to their accomodation solution landing page'}
                                width={540}
                                height={540}
                                className='w-full h-full object-cover object-top'
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-10">
                        <div>
                            <div className="space-y-2 text-center flex flex-col justify-center items-center">
                                <RiCalendarScheduleLine className="text-2xl md:text-4xl text-primary"/>
                                <h3 className="text-base md:text-2xl font-semibold">Connect & Visit</h3>
                                <p className="text-sm md:text-base font-normal md:px-10">Schedule viewings with verified agents</p>
                            </div>
                        </div>


                        <div>
                            <div className="space-y-2 text-center flex flex-col justify-center items-center">
                                <LuWarehouse className="text-2xl md:text-4xl text-primary"/>
                                <h3 className="text-base md:text-2xl font-semibold">Move In Seamlessly</h3>
                                <p className="text-sm md:text-base font-normal md:px-10">Get connected with trusted service providers for a smooth move-in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Steps