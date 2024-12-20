import Image from "next/image"
import {ButtonGS, FindaHome} from "./Buttons/ButtonGS"
import Intro from '../../../public/hero-image.jpeg'
import PlayBtn from '../../../public/play.svg'

const HeroSection = () => {
  return (
    <div className="hero-outer w-full space-y-10 ">
        <div className="hero-inner w-4/6 mx-auto text-center space-y-5 pt-12">
            <h2 className="text-[5.3rem] leading-[5.3rem] font-bold tracking-wider">Find your dream apartment today!</h2>
            <p className="text-2xl leading-[2.1rem] text-[#4C4C4C]">Experience stress-free living with our apartment options, 
                designed for students and professionlas.
            </p>
            <div className="hero-btn flex gap-x-3 items-center w-full justify-center">
                <ButtonGS/>
                <FindaHome/>
            </div>
        </div>

        <div className="hero-video-outer w-5/6 mx-auto">
            <div className="relative hero-video w-full overflow-hidden rounded-2xl h-[40rem]">
                <Image
                    src={Intro}
                    alt={'FHF intro welcoming students to their accomodation solution landing page'}
                    width={1280}
                    height={640}
                    className='w-full h-full object-cover'
                />
                <div>
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