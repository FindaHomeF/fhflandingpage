import { Button } from "@/components/ui/button"
import Filter from "../global/filter"
import { CiFilter } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

const Hero = () => {
    const placeholder = 'what';
    
  return (
    <div className="w-full">
        <div className="w-[90%] mx-auto md:w-4/6 text-center space-y-5">
            <h2 className="hero-head px-10">Find Your Perfect Home</h2>
            <p className="hero-para text-graySec">View verified apartments and properties near FUTA</p>

            <div className="hero-btns h-12 w-3/6 mx-auto flex gap-x-3">
                <Button className="hero-btn bg-primary text-white hover:bg-secondary">list an item</Button>
                <Button className="hero-btn bg-transparent border border-primary text-primary hover:bg-primary hover:text-white">browse categories</Button>
            </div>

            <div>
                <Filter placeholder={'What apartment are you looking for?'}/>
            </div>

            
        </div>
    </div>
  )
}

export default Hero