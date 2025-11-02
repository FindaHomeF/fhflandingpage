import { CiUser } from "react-icons/ci";
import { GoVerified } from "react-icons/go";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { LuWarehouse } from "react-icons/lu";
import Image from "next/image";

const stepsI = '/stepsimage.png'

const Steps = () => {
  return (
    <div className="w-full">
        <div className="w-[90%] md:w-5/6 mx-auto">
            <div className="intro space-y-2 md:space-y-5 text-center pb-5 md:pb-10">
                <h3 className="section-head font-bold tracking-wide">Find Your Perfect Home in 4 Simple Steps</h3>
                <p className="md:w-5/6 text-center section-para mx-auto text-gray">We've made finding student accommodation incredibly simple. Create your profile, explore verified listings, connect with trusted agents, and move in—all in one seamless experience. Your dream home is just minutes away.</p>
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
                                <p className="text-sm md:text-base font-normal md:px-10">Quick registration with your FUTA details—get started in under 2 minutes</p>
                            </div>
                        </div>


                        <div>
                            <div className="space-y-2 text-center flex flex-col justify-center items-center">
                                <GoVerified className="text-2xl md:text-4xl text-primary"/>
                                <h3 className="text-base md:text-2xl font-semibold">Browse Verified Listings</h3>
                                <p className="text-sm md:text-base font-normal md:px-10">Explore quality properties with detailed photos, virtual tours, and honest reviews</p>
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
                                <p className="text-sm md:text-base font-normal md:px-10">Schedule instant viewings with verified landlords and agents—fast responses guaranteed</p>
                            </div>
                        </div>


                        <div>
                            <div className="space-y-2 text-center flex flex-col justify-center items-center">
                                <LuWarehouse className="text-2xl md:text-4xl text-primary"/>
                                <h3 className="text-base md:text-2xl font-semibold">Move In Seamlessly</h3>
                                <p className="text-sm md:text-base font-normal md:px-10">Access trusted movers, furniture suppliers, and service providers for a stress-free move</p>
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