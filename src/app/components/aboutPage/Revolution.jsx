import Image from 'next/image'

const RevoImg = '/aboutrevo.png'

const Revolution = () => {
  return (
    <div className="w-full">
        <div className='mx-auto w-[90%] md:w-5/6'>
            <div className="flex flex-col md:flex-row gap-y-5 w-full justify-between items-center gap-x-14">
                <div className="text space-y-5 md:w-3/6 order-2 md:order-1">
                    <h3 className='section-head'>From Campus Challenge to Housing Revolution</h3>
                    <p className='section-para'>
                      It started with a simple frustration—finding quality student accommodation in Akure was unnecessarily difficult. 
                      Unreliable listings, unverified agents, and no centralized platform. We knew there had to be a better way.
                    </p>
                    <p className='section-para'>
                      So we built it. Find-a-Home FUTA was born from the student experience, designed by students who understand 
                      the challenges firsthand. Today, we're transforming how FUTA students find homes, connect with service providers, 
                      and access affordable essentials—all through one trusted platform.
                    </p>
                </div>

                <div className="image md:w-3/6 order-1 md:order-2">
                    <div className='md:h-[38rem] relative'>
                        <Image
                            src={RevoImg}
                            alt={''}
                            width={616}
                            height={640}
                            className='w-full h-full object-cover object-top'
                        />
                    </div>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Revolution