import { Button } from "@/components/ui/button"
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";


export const ButtonGS = ({ 
  content="Browse Apartments", 
  uppercase = true,
  className='',
  cta = '/apartments'
 }) => {
  return (
    <Link href={cta}>
      <Button className={` 
        ${className}  
        ${uppercase && "uppercase"} 
        bg-primary font-medium
        rounded-full h-12 lg:w-[12rem]`}>{ content }
      </Button>
    </Link>
  )
}

export const FindaHome = ({ content = "List Your Property", uppercase = true, cta='/auth' }) => {
  return (
    <Link href={cta}>
      <Button className={` 
        ${uppercase && "uppercase"} 
        bg-transparent rounded-full h-12 
        w-[12rem] border border-primary text-primary 
        hover:bg-black/0 lg:hover-bg-primary/20 `}>
          { content }
      </Button>
    </Link>
  )
}

export const SeeAll = ({ 
  whiteBorder = false, 
  cta = '/apartments/all',
  filterType,
  filterValue
}) => {
  // Build URL with query params for filtering
  const buildUrl = () => {
    if (!filterType) return cta;
    
    const url = new URL(cta, 'http://localhost');
    if (filterType) url.searchParams.set('filterType', filterType);
    if (filterValue) url.searchParams.set('filterValue', filterValue);
    return `${url.pathname}${url.search}`;
  };

  return (
    <Link href={buildUrl()}>
      <Button className={`
      ${whiteBorder ? "border-whiteOpacity hover:bg-white/5" : "border-primary" }  
      capitalize text-sm md:text-base tracking-wide bg-primary 
      font-medium h-10 md:h-12 w-fit md:w-[10rem] rounded-full border 
      flex items-center gap-x-3`}>See All 
      <span className={`bg-white rounded-full text-primary p-1`}>
      <GoArrowUpRight size={20}/></span></Button>
    </Link>
  )
}

export const UnlockBtn = ({text, className='', cta='/auth'}) => {
  return ( 
    <Link href={cta}>
      <Button className={`${className} Capitalize bg-white rounded-full h-12 w-fit text-base font-semibold text-primary flex items-center"`}>{text}<span className="bg-white rounded-full p-1 border border-primary"><GoArrowUpRight size={15}/></span></Button>
    </Link>
  )
}
