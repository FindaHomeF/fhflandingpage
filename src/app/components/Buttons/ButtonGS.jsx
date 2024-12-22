import { Button } from "@/components/ui/button"
import { GoArrowUpRight } from "react-icons/go";


export const ButtonGS = () => {
  return (
    <Button className="uppercase bg-[#0D2740] rounded-full  h-[3rem] md:h-[3.375rem] w-[10rem]">Get started</Button>
  )
}

export const FindaHome = () => {
  return (
    <Button className="uppercase bg-transparent rounded-full h-[3rem] md:h-[3.375rem] w-[10rem] border border-[#0D2740] text-[#0D2740]">Find a home</Button>
  )
}

export const SeeAll = () => {
  return (
    <Button className="capitalize text-base md:text-lg tracking-wide bg-[#0D2740] font-medium h-[3rem] md:h-[3.375rem] w-[10rem] rounded-full border border-[#0D2740] flex items-center gap-x-3">See All <span className="bg-white rounded-full text-[#0D2740] p-1"><GoArrowUpRight size={20}/></span></Button>
  )
}

export const UnlockBtn = ({text}) => {
  return (
    <Button className="Capitalize bg-white rounded-full h-[3rem] md:h-[3.375rem] w-[12rem] text-base font-medium text-[#0D2740] flex items-center">{text}<span className="bg-white rounded-full p-1 border border-[#0D2740]"><GoArrowUpRight size={15}/></span></Button>
  )
}
