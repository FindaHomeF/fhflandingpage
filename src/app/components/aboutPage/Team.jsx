import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Praise from '../../../../public/praise.png'
import Babs from '../../../../public/babs.png'
import DevDee from '../../../../public/demilade.png'
import Pluto from '../../../../public/pluto.png'
import Pelumi from '../../../../public/pelumi.png'
import Favour from '../../../../public/favour.png'
import Ife from '../../../../public/ife.png'
import Alex from '../../../../public/alex.png'



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
        name:'Samuel',
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
            <div className="head space-y-2 mb-12">
                <h3 className="section-head">The Minds Behind Find-a-Home FUTA</h3>
                <p className="section-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="team-info w-full">
                <div className="grid grid-cols-4 gap-x-5 gap-y-10">
                    {members.map((who, index)=>(
                        <div key={index}>
                            <div className="image bg-gray overflow-hidden h-[15rem]">
                                <Image
                                    alt="members of FHF profile"
                                    src={who.image}
                                    height={296}
                                    width={304}
                                    className='w-full h-full object-cover object-top'
                                />
                            </div>

                            <div className="mt-3 space-y-2">
                                <div>
                                    <h4 className="uppercase font-bold text-lg">{who.name}</h4>
                                    <h6 className="capitalize text-sm font-semibold">{who.role}</h6>
                                </div>

                                <p className="font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                            
                                <div className="socials pt-2 flex items-center gap-x-2 text-2xl cursor-pointer">
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