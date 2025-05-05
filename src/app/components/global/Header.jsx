'use client'
import Image from "next/image"
import Logo from "../../../../public/Logo/Logosvg.svg"
import LogoM from "../../../../public/fhfmenu2.png"
import { Button } from "@/components/ui/button"
import {ButtonGS} from "./Buttons/ButtonGS"
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { FaWarehouse } from "react-icons/fa";
import { useState } from "react"
import { LuWarehouse } from "react-icons/lu";
import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  const [active, setActive] = useState(false)

  return (
    <div className="header-outer w-[90%] mx-auto font-medium -mb-10 md:mb-0 relative">
      <div className="header-inner w-full flex justify-between items-center md:my-5 my-4#0D2740">
        <Link href={'/'} className='w-1/6 hidden md:block'>
          <motion.div className="logo-container w-full " layoutId='logo-animate'>
            <Image src={Logo}
            alt="fhflogo"
            width={200}
            height={54}
            />
          </motion.div>
        </Link>

        <Link href={'/'}>
          <div className="w-2/6 overflow-hidden relative -left-5 md:hidden">
            <Image src={LogoM}
            alt="fhflogo"
            width={200}
            height={54}
            className="object-cover"
            />
          </div>
        </Link>

        <div className="menu-outer w-auto hidden md:block">
          <ul className="menu-inner h-10 px-5  uppercase gap-x-7 text-sm font-medium tracking-wide cursor-pointer flex w-full items-center">
            <Link href='/about'><li>About Us</li></Link>
            <li className=" relative group h-full transition-all ease-linear duration-300">
              <div className="flex items-center gap-x-2 relative min-h-full">Products <FaAngleDown /></div> 
              <ul className="absolute transition-all ease-linear duration-300 text-white bg-tetiary space-y-2 border-t-2 border-t-secondary w-fit px-3 py-2 text-nowrap group-hover:opacity-100 group-hover:pointer-events-auto opacity-0 pointer-events-none">
                <Link 
                className="cursor-pointer"
                href={'/apartments'}><li >Apartment Listings</li></Link>
                <Link 
                className="cursor-pointer"
                href={'/service'} ><li className="mt-2">Hire for a service</li></Link>
                <Link 
                className="cursor-pointer"
                href={'/decluttering'} ><li className="mt-2">decluttering</li></Link>
              </ul>
            </li>
            <li>Testimonial</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="text-base md:flex items-center gap-x-3 w-fit hidden ">
          <Button className="bg-transparent shadow-none text-black flex 
          items-center gap-x-2 hover:bg-transparent group h-[3.375rem] w-fit">
            JOIN WAITLIST <GoArrowUpRight className="group-hover:animate-bounce" /></Button>
          <ButtonGS/>
        </div>

        <div className=" md:hidden z-20 text-[#0D2740]" onClick={()=>setActive(!active)}>
          {active?<LuWarehouse size={30}/>:<FaWarehouse size={30} />}
        </div>
      </div>

      <div className={`mobile-menu fixed w-screen bg-white top-0 ${active?"left-0":"left-full"} h-screen z-10 transition-all ease-linear duration-300`}>
        <div className="mobile-menu-inner py-16 w-5/6 space-y-10 mx-auto h-full flex flex-col justify-center items-center">

          <div className="menu-outer w-full h-full text-center md:hidden">
            <ul className="menu-inner font-medium uppercase flex flex-col h-full justify-evenly items-center gap-y-7">
              <li>Home</li>
              <li className="flex items-center gap-x-2">Products <FaAngleDown /></li>
              <li>Testimonial</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="logo-container w-full flex justify-center md:hidden">
            <Image src={Logo}
              alt="fhflogo"
              width={200}
              height={54}
            />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Header