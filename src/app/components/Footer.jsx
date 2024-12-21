import Image from "next/image"
import Logo from "../../../public/Logo/Logosvg.svg"


const Footer = () => {
  return (
    <div className="footer-outer pt-14 pb-10">
        <div className="footer-inner w-5/6 mx-auto block md:flex items-start justify-between">
            <div className="footer-left w-full md:w-[45%] space-y-5">
                <div className="logo-container w-fit mx-auto md:mx-0 relative md:-left-8 md:-top-2">
                    <Image src={Logo}
                        alt="fhflogo"
                        width={282}
                        height={130}
                        className="object-cover"
                    />
                </div>
                <p className="text-xl font-normal w-5/6 hidden md:block">
                    Experience stress-free living with 
                    our fully furnished, all-inclusive apartments, designed for students and professionals
                </p>
            </div>

            <div className="footer-right w-full md:w-3/6 mt-5 md:mt-0">
                <div className="footer-right-inner text-base md:text-xl font-normal flex w-full items-start justify-between">
                    <ul className="space-y-3">
                        <li>Apartments</li>
                        <li>Declutter</li>
                        <li>Testimonial</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                    <ul className="space-y-3">
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>FAQ</li>
                    </ul>

                    <ul className="space-y-3">
                        <li>LinkedIn</li>
                        <li>WhatsApp</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </div>
        <h6 className="text-xs md:text-base font-normal text-center text-black mt-16">2024 FindaHomeFuta. All rights reserved.</h6>
    </div>
  )
}

export default Footer