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
            head:'Trust',
            para:'Trust Through Transparency'

        },
        {
            icon:<RiUserCommunityFill />,
            head:'Community Building',
            para:'Fostering connections beyond housing.'

        },
        {
            icon:<GoVerified/>,
            head:'Verified Services',
            para:'Every listing verified, every service provider vetted'

        },
        {
            icon:<MdAddHomeWork />,
            head:'More Than Just a Home',
            para:'Creating connections beyond just housing'

        },
        {
            icon:<GiChoice/>,
            head:'Empowering Choices',
            para:'Helping you make informed decisions effortlessly.'

        },
        {
            icon:<FaChartPie/>,
            head:'Decisions Backed by Data',
            para:'Making informed decisions possible through technology'

        },

    ]


  return (
    <div className="w-full">
        <div className="mx-auto w-[90%] md:w-5/6">
            <div className="head text-center space-y-3">
                <h3 className="section-head">Our Values</h3>
                <p className="section-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="w-full flex justify-between items-center gap-x-14  mt-16">
                <div className="w-3/6">
                    <div className="w-full grid grid-cols-2 gap-5 gap-y-10">
                        {values.map((value, index)=>(
                            <div key={index} className="space-y-3 h-full">
                                <div className="text-4xl text-primary">{value.icon}</div>
                                <div className="">
                                    <h4 className="text-xl font-medium">{value.head}</h4>
                                    <p className="text-base font-normal">{value.para}</p>
                                </div>
                                
                            </div>
                        ))}

                    </div>
                </div>
                <div className="w-3/6">
                    <div className="image-container h-[33rem] w-full bg-gray relative">
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