import { Button } from '@/components/ui/button'
import { CiFilter } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  


const Filter = ({placeholder}) => {

  return (
    <div className='w-full'>
        <div className="mx-auto lg:w-5/6 mt-8 lg:mt-16">
            <form action='#'>
                <div>
                    <div className='flex max-lg:flex-col max-lg:gap-2 w-full items-center gap-x-3 lg:h-10'>
                        <div className='relative h-full w-full border overflow-hidden max-lg:py-2 max-lg:rounded-lg
                        border-[#CED4DA] lg:rounded-full text-primary shadow-sm shadow-[#CED4DA]'>
                            <IoSearchOutline className='absolute top-[50%] text-base translate-y-[-50%] left-3'/>
                            <input type="text" placeholder={placeholder} 
                            className="max-w-full w-full pl-10 pr-3 h-full border-none"/>
                        </div>
                        <div className='flex gap-x-3 max-lg:w-full'>
                           
                            <Select>
                                <SelectTrigger className="w-full lg:w-[100px] border-[#CED4DA]">
                                <CiFilter className='text-base'/>
                                <SelectValue placeholder="Filter" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Carpenter</SelectItem>
                                    <SelectItem value="dark">Fashion Designer</SelectItem>
                                    <SelectItem value="system">Home decorator</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="w-full lg:w-[100px] border-[#CED4DA]">
                                    <SelectValue placeholder="Sort" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Lowest First</SelectItem>
                                    <SelectItem value="dark">Highest First</SelectItem>
                                    <SelectItem value="system">Popularity</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* <Button className="w-fit min-h-full border rounded-sm !text-tetiary border-[#CED4DA]
                            bg-transparent shadow-sm shadow-[#CED4DA] flex items-center">
                                <CiFilter className='text-base '/> Filter
                            </Button> */}

                            {/* <select name="sort" id="" className='w-fit rounded-sm block h-full outline-none text-tetiary 
                            border border-[#CED4DA] bg-transparent shadow-sm shadow-[#CED4DA]'>
                                <option value="" >Sort</option>
                                <option value="" >Lowest First</option>
                                <option value="" >Highest First</option>
                            </select> */}
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Filter