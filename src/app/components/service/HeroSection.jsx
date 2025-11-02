import {ButtonGS, FindaHome} from "../global/Buttons/ButtonGS"
import { abhayaLibre} from '../../layout'
import { CiCircleChevDown } from "react-icons/ci";
import Link from "next/link"

const HeroSection = ({ showScrollDownButton = true }) => {
  return (
    <div className="hero-outer w-full space-y-10 md:bg-transparent md:h-fit flex md:block justify-center items-center">
        <div className="hero-inner w-[90%] md:w-4/6 mx-auto text-center space-y-2 md:space-y-3 pt-3 md:pt-12 md:bg-none">
            <h2 className={`${abhayaLibre.className} text-5xl md:text-[5.3rem] md:leading-[5.3rem] font-bold `}>
                Verified Service Providers at Your Fingertips
            </h2>
            <p className="md:text-2xl text-base md:leading-[2.1rem] text-graySec">
                From movers to maintenance experts—access trusted professionals backed by real student reviews. Quality service, fair prices, guaranteed satisfaction.
            </p>
            <div className="hero-btns flex pt-4 md:pt-2 gap-x-3 
            items-center w-[90%] mx-auto !justify-center">
                <ButtonGS
                content="LIST A SERVICE"
                />
                <FindaHome
                content="BROWSE CATEGORIES"
                />
            </div>
            {showScrollDownButton &&
                <div className="md:hidden pt-20 flex justify-center items-center w-full">
                    <Link href="#feat">
                        <CiCircleChevDown 
                        className="animate-bounce text-5xl text-primaryOpacity"
                        />
                    </Link>
                </div>
            }
        </div>
    </div>
  )
}

export default HeroSection