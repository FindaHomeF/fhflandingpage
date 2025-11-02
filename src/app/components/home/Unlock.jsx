import { Button } from "@/components/ui/button"
import Image from "next/image"
import { UnlockBtn } from "../global/Buttons/ButtonGS"

const UN1 = "/unlock1.jpeg"
const UN2 = "/unlock2.png"
const UNP = "/unlockplay.svg"

const Unlock = () => {
  return (
    <div className="unlock-outer bg-primary py-10 md:py-20 pb-10 md:pb-[8.5rem]">
        <div className="unlock-inner w-[90%] md:w-5/6 mx-auto block md:flex items-center justify-between gap-x-10">
            <div className="unlock-left relative w-full md:w-3/6">
                <div className="unlock1 relative w-[90%] md:w-4/6 h-[34rem] rounded-2xl overflow-hidden">
                    <Image
                        src={UN1}
                        alt="testimonials quote"
                        height={550}
                        width={450}
                        className="object-cover h-full w-full"
                    />
                </div>
                <div className="unlock1 absolute w-[19rem] h-[27rem] top-[30%] left-[5%] md:left-[35%]">
                    <Image
                        src={UN2}
                        alt="testimonials quote"
                        height={430}
                        width={300}
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="absolute bg-primary w-[17rem] rounded-lg flex items-center justify-start gap-x-2 p-2  top-[10%] left-[28%] ">
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
                        <h6 className="text-secondaryVariant text-[0.625rem]">Watch Video</h6>
                    </div>

                </div>

            </div>

            <div className="unlock-right text-white w-full md:w-3/6 space-y-7 mt-16 ">
                <div className="space-y-2">
                    <h3 className="font-bold text-2xl md:text-4xl pb-3">Start Your Housing Journey Today</h3>
                    <p className="text-base md:text-base font-normal pb-5 text-textMuted">Explore our curated collection of student-friendly accommodations. Every listing features high-quality photos, detailed descriptions, and transparent pricing. Take virtual tours, read reviews from fellow students, and find your perfect home—all in one place.</p>
                    <UnlockBtn className="px-10" text={'Explore Properties Now'} cta='/apartments'/>
                </div>

                {/* <div className="space-y-3">
                    <div>
                        <h3 className="text-white font-semibold text-xl md:text-2xl capitalize">Don't Miss out. Join Our Waitlist today!</h3>
                        <p className="text-sm font-normal text-textMuted">Be among one of the early pioneers to access our platform once we launch. There might just be perks in it for you</p>
                    </div>
                    
                    <form action="" className="flex items-center gap-x-3">
                        <input placeholder="Enter your email" 
                            type="email" name="" 
                            id="" 
                            className="rounded-md h-10 w-5/6 text-black text-sm px-5 cursor-pointer outline-none border-none"
                        />
                        <Button className="rounded-md bg-secondary w-1/6 text-sm font-semibold h-10">Join</Button>
                    </form>
                </div> */}
                {/* <div className="space-y-2">
                    <p className="text-base md:text-xl font-normal pb-2">
                        Declutter and earn! Our platform helps you turn unwanted items 
                        into cash. Simply list your gently used furniture, appliances, and household goods, 
                        and we’ll connect you with  buyers looking for great deals.</p>
                    <UnlockBtn text={'Declutter Now'}/>
                </div> */}
                
            </div>
        </div>

    </div>
  )
}

export default Unlock