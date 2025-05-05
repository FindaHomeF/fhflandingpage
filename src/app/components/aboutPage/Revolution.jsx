import Image from 'next/image'
import RevoImg from '../../../../public/aboutrevo.png'

const Revolution = () => {
  return (
    <div className="w-full">
        <div className='mx-auto w-[90%] md:w-5/6'>
            <div className="flex flex-col md:flex-row gap-y-5 w-full justify-between items-center gap-x-14">
                <div className="text space-y-5 md:selection:w-3/6 order-2 md:order-1">
                    <h3 className='section-head'>From Campus Challenge To Housing Revolution</h3>
                    <p className='section-para'>At Find-a-Home FUTA, we simplify the off-campus housing journey for FUTA students. Our platform connects you with verified properties and reliable service providers, ensuring a seamless experience. Discover affordable essentials tailored for student life, all in one place.</p>
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