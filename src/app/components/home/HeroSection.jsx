import Image from "next/image"
import {ButtonGS, FindaHome} from "../global/Buttons/ButtonGS"
import Intro from '/public/hero-image.jpeg'
import PlayBtn from '/public/play.svg'
import { abhayaLibre} from '../../layout'
import { CiCircleChevDown } from "react-icons/ci";
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="hero-outer w-full space-y-10 md:bg-transparent md:h-fit h-[85vh] flex md:block justify-center items-center">
        <div className="hero-inner w-[90%] md:w-4/6 mx-auto text-center space-y-2 md:space-y-3 pt-3 md:pt-12 md:bg-none">
            <h2 className={`${abhayaLibre.className} text-5xl md:text-[5.3rem] md:leading-[5.3rem] font-bold `}>Find your dream apartment today!</h2>
            <p className="md:text-2xl text-base md:leading-[2.1rem] text-[#4C4C4C]">
                The trusted platform connecting FUTA students and professionals with verified properties, reliable service providers, and affordable student essentials."
                {/* Experience stress-free living with our apartment options, 
                designed for students and professionlas. */}
            </p>
            <div className="hero-btns flex flex-col md:flex-row gap-y-3 pt-4 md:pt-2 gap-x-3 items-center w-full !justify-center">
                <ButtonGS/>
                <FindaHome/>
            </div>
            <div className="md:hidden pt-20 flex justify-center items-center w-full">
                <Link href="#transform"><CiCircleChevDown className="animate-bounce text-5xl text-[#0d27409d]"/></Link>
            </div>
        </div>

        <div className="hero-video-outer w-5/6 mx-auto hidden md:block">
            <div className="relative hero-video w-full overflow-hidden rounded-2xl h-[40rem]">
                <Image
                    src={Intro}
                    alt={'FHF intro welcoming students to their accomodation solution landing page'}
                    width={1280}
                    height={640}
                    className='w-full h-full object-cover'
                />
                <div className="">
                    <Image
                        src={PlayBtn}
                        // height={80}
                        width={100}
                        alt='play-btn'
                        className="object-cover absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection