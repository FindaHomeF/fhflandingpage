import Image from "next/image"
import UN1 from "../../../public/unlock1.jpeg"
import UN2 from "../../../public/unlock2.png"
import UNP from "../../../public/unlockplay.svg"
import { UnlockBtn } from "./Buttons/ButtonGS"

const Unlock = () => {
  return (
    <div className="unlock-outer bg-[#0D2740] py-20 pb-[9rem]">
        <div className="unlock-inner w-5/6 mx-auto flex items-start justify-between gap-x-10">
            <div className="unlock-left relative w-3/6">
                <div className="unlock1 relative w-4/6 h-[34rem] rounded-2xl overflow-hidden">
                    <Image
                        src={UN1}
                        alt="testimonials quote"
                        height={550}
                        width={450}
                        className="object-cover h-full w-full"
                    />
                </div>
                <div className="unlock1 absolute w-[19rem] h-[27rem] top-[30%] left-[35%]">
                    <Image
                        src={UN2}
                        alt="testimonials quote"
                        height={430}
                        width={300}
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="absolute bg-[#0D2740] w-[17rem] rounded-lg flex items-center justify-start gap-x-2 p-2  top-[10%] left-[28%] ">
                    <div className="unlock1 w-[2.5rem] h-[2.5rem]  rounded-full overflow-hidden">
                        <Image
                            src={UNP}
                            alt="testimonials quote"
                            height={40}
                            width={40}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="font-medium">
                        <h4 className="text-white text-sm ">Take House Tour</h4>
                        <h6 className="text-[#FDA51E] text-[0.625rem]">Watch Video</h6>
                    </div>

                </div>

            </div>

            <div className="unlock-right text-white w-3/6 space-y-7">
                <div className="space-y-2">
                    <h3 className="font-bold text-4xl pb-3">Unlock Your Dream Home. Browse Our Curated Property Listings and Decluttering Solutions.</h3>
                    <p className="text-xl font-normal pb-1">Browse our curated property listings, featuring high-quality photos and detailed descriptions. From cozy apartments to spacious houses, find your dream house or list your property with us today!</p>
                    <UnlockBtn/>
                </div>
                <div className="space-y-2">
                    <p className="text-xl font-normal pb-2">
                        Declutter and earn! Our platform helps you turn unwanted items 
                        into cash. Simply list your gently used furniture, appliances, and household goods, 
                        and we’ll connect you with  buyers looking for great deals.</p>
                    <UnlockBtn/>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Unlock