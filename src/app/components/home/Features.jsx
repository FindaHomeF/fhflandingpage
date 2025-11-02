import Image from 'next/image';

const PL = '/features-apartment.png';
const Declutter = '/features-declutter.png';
const SP = '/features-service.png'

const Features = () => {
  return (
    <div className="features-outer transition-all ease-linear duration-500" id='feat' >
        <div className="features-inner w-[90%] md:w-5/6 mx-auto">
            <h3 className='section-head font-bold leading-[2.62rem] text-center pb-2'>Your Complete Student Living Solution</h3>
            <p className='text-gray section-para text-center pb-3 md:pb-7 md:w-5/6 mx-auto'>We've eliminated the stress from student housing. Our comprehensive platform offers verified properties, a thriving marketplace, and reliable service providers—all curated specifically for FUTA students.</p>

            <div className="features-container flex flex-wrap md:flex-nowrap gap-y-5 items-stretch justify-between gap-x-10">
                <div className="features-box-outer bg-grayBg rounded-2xl p-5 md:w-2/6">
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
                        <h4 className='text-xl md:text-[2rem] leading-[1.875rem] py-2 font-medium'>Verified Properties</h4>
                        <p className='text-sm md:text-base text-gray'>Discover quality student accommodations with complete transparency. Every property is verified, with detailed photos, virtual tours, and honest pricing. Advanced filters help you find exactly what you're looking for—near campus, within budget, with your preferred amenities.</p>
                    </div>
                </div>


                <div className="features-box-outer bg-grayBg rounded-2xl p-5 md:w-2/6">
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
                        <h4 className='text-xl md:text-[2rem] leading-[1.875rem] py-2 font-medium'>Student Marketplace</h4>
                        <p className='text-sm md:text-base text-gray'>
                            Your sustainable student marketplace. Buy quality pre-owned furniture, appliances, and essentials at student-friendly prices. Sell items you no longer need and earn extra cash. It's budget-smart, eco-friendly, and built for students by students.
                        </p>
                    </div>
                </div>


                <div className="features-box-outer bg-grayBg rounded-2xl p-5 md:w-2/6">
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
                        <h4 className='text-xl md:text-[2rem] leading-[1.875rem] py-2 font-medium'>Trusted Service Providers</h4>
                        <p className='text-sm md:text-base text-gray'>
                            Access a network of verified professionals for all your accommodation needs. From moving services to repairs and maintenance—connect with trusted providers backed by genuine student reviews. Quality service, fair pricing, guaranteed.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Features