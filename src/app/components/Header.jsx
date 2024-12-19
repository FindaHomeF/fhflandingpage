import Image from "next/image"
import Logo from "../../../public/Logo/fhfstretched-2.png"


const Header = () => {
  return (
    <div className="header-outer w-screen">
      <div className="header-inner w-5/6 mx-auto flex justify-between items-center">
        <div className="logo-container">
          <Image src={Logo}
           alt="fhflogo"
           width={180}
           height={38}
          />
        </div>

        <div className="menu-outer w-full">
          <ul className="menu-inner uppercase text-sm flex w-full justify-between items-center">
            <li>Home</li>
            <li>Products <span>'!!'</span></li>
            <li>Testimonial</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
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