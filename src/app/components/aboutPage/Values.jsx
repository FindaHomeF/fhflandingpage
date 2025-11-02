import { SiTrustpilot } from "react-icons/si";
import { GoVerified } from "react-icons/go";
import { RiUserCommunityFill } from "react-icons/ri";
import { MdAddHomeWork } from "react-icons/md";
import { GiChoice } from "react-icons/gi";
import { FaChartPie, FaPlay } from "react-icons/fa";
import Image from "next/image";

const Values = () => {

    const values = [
        {
            icon:<SiTrustpilot/>,
            head:'Trust & Transparency',
            para:'Every property verified. Every price honest. No hidden fees, no surprises—just transparent housing solutions.'

        },
        {
            icon:<RiUserCommunityFill />,
            head:'Student-First Community',
            para:'Built by students, for students. We understand your budget, your needs, and your challenges.'

        },
        {
            icon:<GoVerified/>,
            head:'Quality Assurance',
            para:'Rigorous vetting of properties and service providers ensures you only get the best options.'

        },
        {
            icon:<MdAddHomeWork />,
            head:'Comprehensive Solutions',
            para:'Beyond housing—access furniture, services, and everything you need for student life in one place.'

        },
        {
            icon:<GiChoice/>,
            head:'Empowered Decisions',
            para:'Detailed listings, honest reviews, and powerful filters help you choose with confidence.'

        },
        {
            icon:<FaChartPie/>,
            head:'Innovation-Driven',
            para:'Cutting-edge technology meets student housing, making your search faster and smarter.'

        },

    ]


  return (
    <div className="w-full">
        <div className="mx-auto w-[90%] md:w-5/6">
            <div className="head text-center space-y-3">
                <h3 className="section-head">What Drives Us Every Day</h3>
                <p className="section-para">These core values guide everything we do—from verifying properties to supporting our community.</p>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-y-10 gap-x-14 mt-7 md:mt-16">
                <div className="md:w-3/6 order-2 md:order-1">
                    <div className="w-full grid grid-cols-2 gap-5 gap-y-10">
                        {values.map((value, index)=>(
                            <div key={index} className="space-y-3 h-full">
                                <div className="text-2xl md:text-4xl text-primary">{value.icon}</div>
                                <div className="">
                                    <h4 className="text-base md:text-xl font-medium">{value.head}</h4>
                                    <p className="text-sm md:text-base font-normal">{value.para}</p>
                                </div>
                                
                            </div>
                        ))}

                    </div>
                </div>


                <div className="w-full md:w-3/6 order-1 md:order-2">
                    <div className="image-container h-[15rem] md:h-[33rem] w-full bg-gray relative">
                        {/* <Image
                            src={}
                            alt={''}
                            width={616}
                            height={640}
                            className='w-full h-full object-cover object-top'
                        /> */}

                        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                            <div className="bg-tetiary py-3 px-7 rounded-md">
                                <div className='text-gray text-xl bg-white h-10 w-10 rounded-full flex justify-center items-center'>
                                    <FaPlay/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Values