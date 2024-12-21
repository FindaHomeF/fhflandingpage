import PL from '../../../public/features-apartment.png';
import Declutter from '../../../public/features-declutter.png';
import SP from '../../../public/features-service.png'
import Image from 'next/image';

const Features = () => {
  return (
    <div className="features-outer">
        <div className="features-inner w-5/6 mx-auto">
            <h3 className='text-[2.5rem] font-semibold leading-[2.62rem] text-center pb-7'>Key Features</h3>

            <div className="features-container flex flex-wrap md:flex-nowrap gap-y-5 items-center justify-between gap-x-10">
                <div className="features-box-outer bg-[#F9FAFB] rounded-2xl p-5">
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
                        <h4 className='text-[2rem] leading-[1.875rem] py-2 font-medium'>Property Listings</h4>
                        <p className='text-base text-[#00010399]'>Provides a comprehensive and detailed overview of your rental property, showcasing its best features, and amenities.</p>
                    </div>
                </div>


                <div className="features-box-outer bg-[#F9FAFB] rounded-2xl p-5">
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
                        <h4 className='text-[2rem] leading-[1.875rem] py-2 font-medium'>Decluttering</h4>
                        <p className='text-base text-[#00010399]'>
                            Selling unwanted items is a great way to free up space, reduce stress, and earn some extra money. 
                        </p>
                    </div>
                </div>


                <div className="features-box-outer bg-[#F9FAFB] rounded-2xl p-5">
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
                        <h4 className='text-[2rem] leading-[1.875rem] py-2 font-medium'>Service Provision</h4>
                        <p className='text-base text-[#00010399]'>
                        An avenue where service providers can create and manage 
                        their own profiles, list, and describe their services.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Features