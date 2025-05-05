"use client"
import Image from "next/image"
import Logo from "../../../../public/Logo/Logosvg.svg"
import { FaLinkedin, FaWhatsappSquare,FaInstagramSquare,FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer-outer md:pt-14 pt-10 mb-7 md:pb-10 ">
        <div className="footer-inner w-5/6 mx-auto block md:flex items-start justify-between">
            <div className="footer-left w-full md:w-[45%] space-y-5">
                <div className="logo-container w-fit md:mx-0 relative -left-8 md:-top-2">
                    <Image src={Logo}
                        alt="fhflogo"
                        width={282}
                        height={130}
                        className="object-cover"
                    />
                </div>
                <p className="text-xl font-normal w-5/6 hidden md:block text-[#4C4C4C]">
                    Experience stress-free living with 
                    our fully furnished, all-inclusive apartments, designed for students and professionals
                </p>
            </div>

            <div className="footer-right w-full md:w-3/6 mt-5 md:mt-0">
                <div className="footer-right-inner text-base md:text-xl font-normal flex flex-col md:text-left  gap-y-3 justify-start items-start md:flex-row w-full md:items-start md:justify-between">
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

                    <ul className="space-y-3 hidden md:block">
                        <li>LinkedIn</li>
                        <li>WhatsApp</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                    <ul className=" md:hidden text-2xl text-[#FDA51E] flex gap-x-3 justify-center items-center mt-5">
                        <FaLinkedin />
                        <FaWhatsappSquare/>
                        <FaInstagramSquare />
                        <FaFacebookSquare />
                        <FaTwitterSquare />
                    </ul>
                </div>
            </div>
        </div>
        <h6 className="text-xs md:text-base font-normal text-center text-black mt-10 md:mt-16">
            {new Date().getFullYear()} FindaHomeFuta. All rights reserved.</h6>
    </div>
  )
}

export default Footer