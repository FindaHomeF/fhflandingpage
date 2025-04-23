import PL from '../../../../public/features-apartment.png';
import Declutter from '../../../../public/features-declutter.png';
import SP from '../../../../public/features-service.png'
import Image from 'next/image';

const Features = () => {
  return (
    <div className="features-outer transition-all ease-linear duration-500" id='feat' >
        <div className="features-inner w-[90%] md:w-5/6 mx-auto">
            <h3 className='text-2xl md:text-[2.5rem] font-semibold leading-[2.62rem] text-center pb-3 md:pb-7'>Key Features</h3>

            <div className="features-container flex flex-wrap md:flex-nowrap gap-y-5 items-stretch justify-between gap-x-10">
                <div className="features-box-outer bg-[#F9FAFB] rounded-2xl p-5 md:w-2/6">
                    <div className="w-full rounded-lg overflow-hidden h-[13.75rem]">
                        <Image
                            src={PL}
                            width={330}
                            height={220}
                            alt='features-media-representation'
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div>
                        <h4 className='text-xl md:text-[2rem] leading-[1.875rem] py-2 font-medium'>Property Listings</h4>
                        <p className='text-sm md:text-base text-[#00010399]'>Browse through our extensive collection of student-friendly properties with virtual tours, detailed amenities, and transparent pricing. Filter by location, budget, and specific requirements to find your perfect match.</p>
                    </div>
                </div>


                <div className="features-box-outer bg-[#F9FAFB] rounded-2xl p-5 md:w-2/6">
                    <div className="w-full rounded-lg overflow-hidden h-[13.75rem]">
                        <Image
                            src={Declutter}
                            width={330}
                            height={220}
                            alt='features-media-representation'
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div>
                        <h4 className='text-xl md:text-[2rem] leading-[1.875rem] py-2 font-medium'>Decluttering</h4>
                        <p className='text-sm md:text-base text-[#00010399]'>
                            Buy and sell quality used furniture, appliances, and other essentials. 
                            Save money while helping fellow students declutter – all on one trusted platform."
                        </p>
                    </div>
                </div>


                <div className="features-box-outer bg-[#F9FAFB] rounded-2xl p-5 md:w-2/6">
                    <div className="w-full rounded-lg overflow-hidden h-[13.75rem]">
                        <Image
                            src={SP}
                            width={330}
                            height={220}
                            alt='features-media-representation'
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div>
                        <h4 className='text-xl md:text-[2rem] leading-[1.875rem] py-2 font-medium'>Service Provision</h4>
                        <p className='text-sm md:text-base text-[#00010399]'>
                            Connect with verified accommodation service providers for moving, maintenance, and setup. Read genuine reviews from fellow students before making your choice.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Features