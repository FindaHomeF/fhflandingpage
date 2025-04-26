import { Button } from '@/components/ui/button'
import { CiFilter } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";



const Filter = ({placeholder}) => {

  return (
    <div className='w-full'>
        <div className="mx-auto w-5/6 mt-16">
            <form action='#'>
                <div>
                    <div className='flex w-full items-center gap-x-3 h-10'>
                        <div className='relative h-full w-full border overflow-hidden border-[#CED4DA] rounded-full text-primary shadow-sm shadow-[#CED4DA]'>
                            <IoSearchOutline className='absolute top-[50%] text-base translate-y-[-50%] left-3'/>
                            <input type="text" placeholder={placeholder} className="max-w-full w-full pl-10 pr-3 h-full border-none"/>
                        </div>
                        <Button className="w-fit min-h-full border rounded-sm !text-tetiary border-[#CED4DA] bg-transparent shadow-sm shadow-[#CED4DA] flex  items-center">< CiFilter className='text-base '/> Filter</Button>
                        <select name="sort" id="" className='w-fit rounded-sm block h-full outline-none text-tetiary border border-[#CED4DA] bg-transparent shadow-sm shadow-[#CED4DA]'>
                            <option value="" >Sort</option>
                            <option value="" >Lowest First</option>
                            <option value="" >Highest First</option>
                        </select>
                    </div>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Filter