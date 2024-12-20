import Image from "next/image"
import Logo from "../../../public/Logo/Logosvg.svg"
import { Button } from "@/components/ui/button"
import {ButtonGS} from "./Buttons/ButtonGS"


const Header = () => {
  return (
    <div className="header-outer w-5/6 mx-auto ">
      <div className="header-inner w-full flex justify-between items-center my-5">
        <div className="logo-container w-1/6">
          <Image src={Logo}
           alt="fhflogo"
           width={200}
           height={54}
          />
        </div>

        <div className="menu-outer w-auto">
          <ul className="menu-inner uppercase gap-x-10 text-sm flex w-full justify-between items-center">
            <li>Home</li>
            <li>Products <span>'!!'</span></li>
            <li>Testimonial</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="text-base flex items-center gap-x-3 w-1/6">
          <Button className="bg-transparent shadow-none text-black">Login <span>!</span></Button>
          <ButtonGS/>
        </div>

        <div className="started-outer ">
          <div className="btn-started">
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header