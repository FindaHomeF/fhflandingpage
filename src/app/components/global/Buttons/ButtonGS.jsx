import { Button } from "@/components/ui/button"
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";


export const ButtonGS = ({ 
  content="Start Your Search", 
  uppercase = true,
  className='',
 }) => {
  return (
    <Link href={'/auth'}>
      <Button className={` 
        ${className}  
        ${uppercase && "uppercase"} bg-[#0D2740] 
        rounded-full h-12 lg:w-[12rem]`}>{ content }
      </Button>
    </Link>
  )
}

export const FindaHome = ({ content = "List Your Property", uppercase = true }) => {
  return (
    <Button className={` ${uppercase && "uppercase"} bg-transparent rounded-full h-12 
    w-[12rem] border border-[#0D2740] text-[#0D2740] 
    hover:bg-black/0 lg:hover-bg-[#0D2740]/20 `}>{ content }</Button>
  )
}

export const SeeAll = ({ whiteBorder = false }) => {
  return (
    <Button className={`
    ${whiteBorder ? "border-[#fff]/70 hover:bg-white/5" : "border-[#0D2740]" }  
    capitalize text-sm md:text-base tracking-wide bg-[#0D2740] 
    font-medium h-10 md:h-12 w-fit md:w-[10rem] rounded-full border 
    flex items-center gap-x-3`}>See All 
    <span className={`bg-white rounded-full text-[#0D2740] p-1`}>
    <GoArrowUpRight size={20}/></span></Button>
  )
}

export const UnlockBtn = ({text, className=''}) => {
  return (
    <Button className={`${className} Capitalize bg-white rounded-full h-12 w-fit text-base font-medium text-[#0D2740] flex items-center"`}>{text}<span className="bg-white rounded-full p-1 border border-[#0D2740]"><GoArrowUpRight size={15}/></span></Button>
  )
}
