import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Praise from '../../../../public/praise.PNG'
import Babs from '../../../../public/babs.PNG'
import DevDee from '../../../../public/demilade.PNG'
import Pluto from '../../../../public/pluto.PNG'
import Pelumi from '../../../../public/pelumi.PNG'
import Favour from '../../../../public/favour.PNG'
import Ife from '../../../../public/ife.PNG'
import Alex from '../../../../public/alex.PNG'



const Team = () => {
 const members =[
    {
        name:'Praise Oyeniyi',
        role:'Founder / Director',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        socials:[
            {
                linkedin:'',
                twitter:''
            }
        ],
        image:Praise,
    },
    {
        name:'Demilade Ala',
        role:'Chief technical officer (CTO)',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        socials:[
            {
                linkedin:'',
                twitter:''
            }
        ],
        image:DevDee,
    },
    {
        name:'Babalola Asulewon',
        role:'Chief Operations officer',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        socials:[
            {
                linkedin:'',
                twitter:''
            }
        ],
        image:Babs,
    },
    {
        name:'Pelumi Oladipo',
        role:'Social Media Manager',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        socials:[
            {
                linkedin:'',
                twitter:''
            }
        ],
        image:Pelumi,
    },
    {
        name:'Ife Taiwo',
        role:'product designer',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        socials:[
            {
                linkedin:'',
                twitter:''
            }
        ],
        image:Ife,
    },
    {
        name:'favour Olusayo',
        role:'Backend Engineer',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        socials:[
            {
                linkedin:'',
                twitter:''
            }
        ],
        image:Favour,
    },
    {
        name:'Akinyemi Samuel',
        role:'marketing and PR manager',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        socials:[
            {
                linkedin:'',
                twitter:''
            }
        ],
        image:Pluto,
    },
    {
        name:'Alexander akerele',
        role:'ast. product designer',
        bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        socials:[
            {
                linkedin:'',
                twitter:''
            }
        ],
        image:Alex,
    },
]



  return (
    <div className="w-full pt-10">
        <div className="mx-auto w-[90%] md:w-5/6">
            <div className="head space-y-2 mb-7 md:mb-12">
                <h3 className="section-head">The Minds Behind Find-a-Home FUTA</h3>
                <p className="section-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="team-info w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-y-10">
                    {members.map((who, index)=>(
                        <div key={index} className="relative group cursor-pointer pointer-events-auto">
                            <div className="transition-all pointer-events-auto ease-linear duration-300 image bg-gray overflow-hidden h-[10rem] md:h-[15rem] relative after:pointer-events-none  after:absolute after:w-full after:h-full  group-hover:after:bg-black/70 after:top-0 after:left-0 md:after:z-[-1]">
                                <Image
                                    alt="members of FHF profile"
                                    src={who.image}
                                    height={296}
                                    width={304}
                                    className='w-full h-full object-cover object-top'
                                />
                            </div>

                            <div className="transition-all ease-linear duration-300 hover:opacity:100 md:top-0 md:left-0 md:translate-x-0 md:translate-y-0  group-hover:opacity:100 opacity-0 md:opacity-100 mt-3 w-5/6 md:w-full z-10 overflow-auto space-y-1 md:space-y-2 md:relative absolute -translate-y-[50%] -translate-x-[50%] top-[50%] left-[50%] text-white md:text-black">
                                <div>
                                    <h4 className="uppercase font-bold text-base md:text-lg truncate">{who.name}</h4>
                                    <h6 className="capitalize text-sm font-semibold truncate">{who.role}</h6>
                                </div>

                                <p className="font-normal text-sm line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                            
                                <div className="socials pt-2 flex items-center md:justify-start justify-center gap-x-2 text-2xl cursor-pointer">
                                    <Link href={'#'}><FaLinkedin/></Link>
                                    <Link href={'#'}><FaSquareXTwitter/></Link>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    </div>
  )
}

export default Team