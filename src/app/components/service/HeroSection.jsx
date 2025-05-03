import Image from "next/image"
import {ButtonGS, FindaHome} from "../global/Buttons/ButtonGS"
import Intro from '../../../../public/hero-image.jpeg'
import PlayBtn from '../../../../public/play.svg'
import { abhayaLibre} from '../../layout'
import { CiCircleChevDown } from "react-icons/ci";
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="hero-outer w-full space-y-10 md:bg-transparent md:h-fit h-[85vh] flex md:block justify-center items-center">
        <div className="hero-inner w-[90%] md:w-4/6 mx-auto text-center space-y-2 md:space-y-3 pt-3 md:pt-12 md:bg-none">
            <h2 className={`${abhayaLibre.className} text-5xl md:text-[5.3rem] md:leading-[5.3rem] font-bold `}>
                Trusted Service Providers for Your Home
            </h2>
            <p className="md:text-2xl text-base md:leading-[2.1rem] text-[#4C4C4C]">
            Connect with verified professionals for all your accommodation needs
            </p>
            <div className="hero-btns flex pt-4 md:pt-2 gap-x-3 items-center w-full !justify-center">
                <ButtonGS/>
                <FindaHome/>
            </div>
            <div className="md:hidden pt-20 flex justify-center items-center w-full">
                <Link href="#feat"><CiCircleChevDown className="animate-bounce text-5xl text-[#0d27409d]"/></Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection